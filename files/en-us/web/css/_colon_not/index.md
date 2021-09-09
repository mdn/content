---
title: ':not()'
slug: Web/CSS/:not
tags:
  - ':not()'
  - CSS
  - Layout
  - Negation
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.not
---
{{CSSRef}}

The **`:not()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents elements that do not match a list of selectors. Since it prevents specific items from being selected, it is known as the _negation pseudo-class_.

```css
/* Selects any element that is NOT a paragraph */
:not(p) {
  color: blue;
}
```

The `:not()` pseudo-class has a number of [quirks, tricks, and unexpected results](/en-US/docs/Web/CSS/:not#description) that you should be aware of before using it.

## Syntax

The `:not()` pseudo-class requires a comma-separated list of one or more selectors as its argument. The list must not contain another negation selector or a [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements).

> **Warning:** The ability to list more than one selector is experimental and not yet widely supported.

{{csssyntax}}

## Description

There are several unusual effects and outcomes when using `:not()` that you should keep in mind when using it:

- The `:not` pseudo-class may not be nested, which means that `:not(:not(...))` is invalid.
- Useless selectors can be written using this pseudo-class. For example, `:not(*)` matches any element which is not an element, which is obviously nonsense, so the accompanying rule will never be applied.
- This pseudo-class can increase the [specificity](/en-US/docs/Web/CSS/Specificity) of a rule. For example, `#foo:not(#bar)` will match the same element as the simpler `#foo`, but has a higher specificity.
- `:not(.foo)` will match anything that isn't `.foo`, _including {{HTMLElement("html")}} and {{HTMLElement("body")}}._
- This selector only applies to one element; you cannot use it to exclude all ancestors. For instance, `body :not(table) a` will still apply to links inside of a table, since {{HTMLElement("tr")}} will match with the `:not()` part of the selector.
- Using two selectors at the same time is not yet supported in all browsers. Example: `:not(.foo, .bar)`. For wider support you could use, `:not(.foo):not(.bar)`

## Examples

### Basic set of :not() examples

#### HTML

```html
<p>I am a paragraph.</p>
<p class="fancy">I am so very fancy!</p>
<div>I am NOT a paragraph.</div>
<h2>
  <span class="foo">foo inside h2</span>
  <span class="bar">bar inside h2</span>
</h2>
```

#### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* <p> elements that are not in the class `.fancy` */
p:not(.fancy) {
  color: green;
}

/* Elements that are not <p> elements */
body :not(p) {
  text-decoration: underline;
}

/* Elements that are not <div> and not <span> elements */
body :not(div):not(span) {
  font-weight: bold;
}

/* Elements that are not <div>s or `.fancy` */
/* Note that this syntax is not well supported yet. */
body :not(div, .fancy) {
  text-decoration: overline underline;
}

/* Elements inside an <h2> that aren't a <span> with a class of foo. */
/* Complex selectors such as an element with a class are not well supported yet. */
h2 :not(span.foo) {
  color: red;
}
```

#### Result

{{EmbedLiveSample('Basic_set_of_not_examples', '100%', 320)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
- [Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- Related CSS pseudo-classes:

  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}
