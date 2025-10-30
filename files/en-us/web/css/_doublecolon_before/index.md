---
title: ::before
slug: Web/CSS/::before
page-type: css-pseudo-element
browser-compat: css.selectors.before
sidebar: cssref
---

In CSS, **`::before`** creates a [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) that is the first child of the selected element. It is often used to add cosmetic content to an element with the {{cssxref("content")}} property. It is inline by default.

{{InteractiveExample("CSS Demo: ::before", "tabbed-standard")}}

```css interactive-example
a {
  color: blue;
  text-decoration: none;
}

a::before {
  content: "🔗";
}

.local-link::before {
  content: url("/shared-assets/images/examples/firefox-logo.svg");
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
```

```html interactive-example
<p>
  Learning resources for web developers can be found all over the internet. Try
  out
  <a href="https://web.dev/">web.dev</a>,
  <a href="https://www.w3schools.com/">w3schools.com</a> or our
  <a href="https://developer.mozilla.org/" class="local-link">MDN web docs</a>.
</p>
```

## Syntax

```css-nolint
::before {
  content: /* value */;
  /* properties */
}
```

## Description

The `::before` pseudo-element is an inline box generated as an immediate child of the element it is associated with, or the "originating element". It is often used to add cosmetic content to an element via the {{CSSxRef("content")}} property, such as icons, quote marks, or other decoration.

`::before` pseudo-elements can't be applied to _{{ glossary("replaced elements")}}_ such as {{htmlelement("img")}}, whose contents are determined by external resources and not affected by the current document's styles.

A `::before` pseudo-element with a {{cssxref("display")}} value of `list-item` behaves like a list item, and can therefore generate a {{cssxref("::marker")}} pseudo-element just like an {{htmlelement("li")}} element.

If the [`content`](/en-US/docs/Web/CSS/Reference/Properties/content) property is not specified, has an invalid value, or has `normal` or `none` as a value, then the `::before` pseudo-element is not rendered. It behaves as if `display: none` is set.

> [!NOTE]
> The [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) specification introduced the double-colon notation `::before` to distinguish [pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) from [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements). Browsers also accept single-colon notation `:before`, introduced in CSS2.

By default, the `::before` and `::after` pseudo-elements share the same stacking context as their parent. If no {{cssxref("z-index")}} is explicitly set, the `::after` pseudo-element's generated content will appear above the `::before` pseudo-element's generated content because `::after` is rendered later in the DOM flow.

## Accessibility

Using a `::before` pseudo-element to add content is discouraged, as it is not reliably accessible to screen readers.

## Examples

### Quotation marks

One example of using `::before` pseudo-elements is to provide quotation marks. Here we use both `::before` and {{Cssxref("::after")}} to insert quotation characters.

#### HTML

```html
<q>Some quotes</q>, he said, <q>are better than none.</q>
```

#### CSS

```css
q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}
```

#### Result

{{EmbedLiveSample('Adding_quotation_marks', '500', '50')}}

### Decorative example

We can style text or images in the {{cssxref("content")}} property almost any way we want.

#### HTML

```html
<span class="ribbon">Notice where the orange box is.</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "Look at this orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Result

{{EmbedLiveSample('Decorative_example', 450, 60)}}

### To-do list

In this example we will create a to-do list using pseudo-elements. This method can often be used to add small touches to the UI and improve user experience.

#### HTML

```html
<ul>
  <li>Buy milk</li>
  <li>Take the dog for a walk</li>
  <li>Exercise</li>
  <li>Write code</li>
  <li>Play music</li>
  <li>Relax</li>
</ul>
```

#### CSS

```css
li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #ccff99;
}

li.done::before {
  content: "";
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```

#### JavaScript

```js
const list = document.querySelector("ul");
list.addEventListener("click", (ev) => {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("done");
  }
});
```

Here is the above code example running live. Note that there are no icons used, and the check-mark is actually the `::before` that has been styled in CSS. Go ahead and get some stuff done.

#### Result

{{EmbedLiveSample('To-do_list', 400, 300)}}

### Unicode escape sequences

As generated content is CSS, not HTML, you **can't** use markup entities in content values. If you need to use a special character, and can't enter it literally into your CSS content string, use a unicode escape sequence. This consists of a backslash followed by the character's hexadecimal unicode value.

#### HTML

```html
<ol>
  <li>Crack Eggs into bowl</li>
  <li>Add Milk</li>
  <li>Add Flour</li>
  <li aria-current="step">Mix thoroughly into a smooth batter</li>
  <li>Pour a ladleful of batter onto a hot, greased, flat frying pan</li>
  <li>Fry until the top of the pancake loses its gloss</li>
  <li>Flip it over and fry for a couple more minutes</li>
  <li>serve with your favorite topping</li>
</ol>
```

#### CSS

```css
li {
  padding: 0.5em;
}

li[aria-current="step"] {
  font-weight: bold;
}

li[aria-current="step"]::before {
  content: "\21E8 "; /* Unicode escape sequence for "Rightwards White Arrow" */
  display: inline;
}
```

#### Result

{{EmbedLiveSample('Special_characters', 400, 200)}}

### `::before::marker` nested pseudo-elements

The `::before::marker` [nested pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements#nesting_pseudo-elements) selects the list {{CSSxRef("::marker")}} of a `::before` pseudo-element that is itself a list item, that is, it has its {{CSSxRef("display")}} property set to `list-item`.

In this demo, we generate extra [list items](/en-US/docs/Web/HTML/Reference/Elements/li) before and after a list navigation menu using `::before` and `::after` (setting them to `display: list-item` so they behave like list items). We then use `ul::before::marker` and `ul::after::marker` to give their list markers a different color.

#### HTML

```html
<ul>
  <li><a href="#">Introduction</a></li>
  <li><a href="#">Getting started</a></li>
  <li><a href="#">Understanding the basics</a></li>
</ul>
```

#### CSS

```css
ul {
  font-size: 1.5rem;
  font-family: "Helvetica", "Arial", sans-serif;
}

ul::before,
ul::after {
  display: list-item;
  color: orange;
}

ul::before {
  content: "Start";
}

ul::after {
  content: "End";
}

ul::before::marker,
ul::after::marker {
  color: red;
}
```

#### Result

{{EmbedLiveSample('`::before::marker` nested pseudo-elements', 450, 200)}}

While the list bullets of the three navigation items are generated because they are `<li>` elements, "Start" and "End" have been inserted via pseudo-elements and `::marker` is used to style their bullets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("::after")}}
- {{Cssxref("content")}}
