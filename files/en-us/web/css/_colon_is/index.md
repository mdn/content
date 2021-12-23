---
title: ':is() (:matches(), :any())'
slug: Web/CSS/:is
tags:
  - ':is'
  - CSS
  - Experimental
  - Pseudo-class
  - Reference
  - Selector
  - Selectors
  - Web
browser-compat: css.selectors.is
---
{{CSSRef}}

> **Note:** `:matches()` was renamed to `:is()` in [CSSWG issue #3258](https://github.com/w3c/csswg-drafts/issues/3258).

The **`:is()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) function takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. This is useful for writing large selectors in a more compact form.

```css
/* Selects any paragraph inside a header, main
   or footer element that is being hovered */
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* The above is equivalent to the following */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
```

Pseudo-elements are not valid in the selector list for `:is()`.

Note that older browsers support this functionality as `:matches()`, or through an older, prefixed pseudo-class — `:any()`, including older versions of Chrome, Firefox, and Safari. `:any()` works in exactly the same way as `:matches()`/`:is()`, except that it requires vendor prefixes and doesn't support [complex selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors).

These legacy pseudo-classes can be used to provide backwards compatibility.

```css
/* Backwards-compatible version with :-*-any() and :matches()
   (It is not possible to group selectors into single rule,
   because presence of invalid selector would invalidate whole rule.) */
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
```

### Difference between :is() and :where()

The difference between the two is that `:is()` counts towards the specificity of the overall selector (it takes the specificity of its most specific argument), whereas [`:where()`](/en-US/docs/Web/CSS/:where) has a specificity value of 0. This is demonstrated by the [example on the `:where()` reference page](/en-US/docs/Web/CSS/:where#examples).


### Forgiving Selector Parsing

The specification defines `:is()` and `:where()` as accepting a [forgiving selector list](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS when using a selector list, if any of the selectors are invalid then the whole list is deemed invalid. When using `:is()` or `:where() `instead of the whole list of selectors being deemed invalid if one fails to parse, the incorrect or unsupported selector will be ignored and the others used.

```css
:is(:valid, :unsupported) {
  ...
}
```

Will still parse correctly and match `:valid` even in browsers which don't support `:unsupported`, whereas:

```css
:valid, :unsupported {
  ...
}
```

Will be ignored in browsers which don't support `:unsupported` even if they support `:valid`.

## Examples

### Cross-browser example

```html
<header>
  <p>This is my header paragraph</p>
</header>

<main>
  <ul>
    <li><p>This is my first</p><p>list item</p></li>
    <li><p>This is my second</p><p>list item</p></li>
  </ul>
</main>

<footer>
  <p>This is my footer paragraph</p>
</footer>
```

```css
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
```

```js
let matchedItems;

try {
  matchedItems = document.querySelectorAll(':is(header, main, footer) p');
} catch(e) {
  try {
    matchedItems = document.querySelectorAll(':matches(header, main, footer) p');
  } catch(e) {
    try {
      matchedItems = document.querySelectorAll(':-webkit-any(header, main, footer) p');
    } catch(e) {
      try {
        matchedItems = document.querySelectorAll(':-moz-any(header, main, footer) p');
      } catch(e) {
        console.log('Your browser doesn\'t support :is(), :matches(), or :any()');
      }
    }
  }
}

matchedItems.forEach(applyHandler);

function applyHandler(elem) {
  elem.addEventListener('click', function(e) {
    alert('This paragraph is inside a ' + e.target.parentNode.nodeName);
  });
}
```

{{EmbedLiveSample("Cross-browser_example", "100%", 300)}}

### Simplifying list selectors

The `:is()` pseudo-class can greatly simplify your CSS selectors. For example, the following CSS:

```css
/* 3-deep (or more) unordered lists use a square */
ol ol ul,     ol ul ul,     ol menu ul,     ol dir ul,
ol ol menu,   ol ul menu,   ol menu menu,   ol dir menu,
ol ol dir,    ol ul dir,    ol menu dir,    ol dir dir,
ul ol ul,     ul ul ul,     ul menu ul,     ul dir ul,
ul ol menu,   ul ul menu,   ul menu menu,   ul dir menu,
ul ol dir,    ul ul dir,    ul menu dir,    ul dir dir,
menu ol ul,   menu ul ul,   menu menu ul,   menu dir ul,
menu ol menu, menu ul menu, menu menu menu, menu dir menu,
menu ol dir,  menu ul dir,  menu menu dir,  menu dir dir,
dir ol ul,    dir ul ul,    dir menu ul,    dir dir ul,
dir ol menu,  dir ul menu,  dir menu menu,  dir dir menu,
dir ol dir,   dir ul dir,   dir menu dir,   dir dir dir {
  list-style-type: square;
}
```

... can be replaced with:

```css
/* 3-deep (or more) unordered lists use a square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
  list-style-type: square;
}
```

### Simplifying section selectors

The `:is()` pseudo-class is particularly useful when dealing with HTML5 [sections and headings](/en-US/docs/Web/HTML/Element/Heading_Elements). Since {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, and {{HTMLElement("nav")}} are commonly nested together, without `:is()`, styling them to match one another can be tricky.

For example, without `:is()`, styling all the {{HTMLElement("h1")}} elements at different depths could be very complicated:

```css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
section h1, article h1, aside h1, nav h1 {
  font-size: 25px;
}
/* Level 2 */
section section h1, section article h1, section aside h1, section nav h1,
article section h1, article article h1, article aside h1, article nav h1,
aside section h1, aside article h1, aside aside h1, aside nav h1,
nav section h1, nav article h1, nav aside h1, nav nav h1 {
  font-size: 20px;
}
/* Level 3 */
/* ... don't even think about it! */
```

Using `:is()`, though, it's much easier:

```css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Level 2 */
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Level 3 */
:is(section, article, aside, nav)
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 15px;
}
```

### :is() does not select pseudo-elements
The `:is()` pseudo-class does not match pseudo-elements. So rather than this:

```css example-bad
some-element:is(::before, ::after) {
  display: block;
}
```

instead do:

```css example-good
some-element::before,
some-element::after {
  display: block;
}
```

## Syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":where", ":where()")}} - Like `:is()`, but with 0 [specificity](/en-US/docs/Web/CSS/Specificity).
- [Selector list](/en-US/docs/Web/CSS/Selector_list)
- [Web components](/en-US/docs/Web/Web_Components)
