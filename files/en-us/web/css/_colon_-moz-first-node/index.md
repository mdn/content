---
title: ":-moz-first-node"
slug: Web/CSS/:-moz-first-node
page-type: css-pseudo-class
status:
  - non-standard
---

{{Non-standard_header}}{{CSSRef}}

The **`:-moz-first-node`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that represents any element that is the first child node of some other element. It differs from {{Cssxref(":first-child")}} because it does not match a first-child element with (non-whitespace) text before it.

> **Note:** Any whitespace at the start of an element is ignored for the determination of `:-moz-first-node`.

## Syntax

```css
:-moz-first-node {
  /* ... */
}
```

## Examples

### CSS

```css
span:-moz-first-node {
  background-color: lime;
}
```

### HTML

```html
<p>
  <span>This matches!</span>
  <span>This doesn't match.</span>
</p>

<p>
  Blahblah.
  <span>This doesn't match because it's preceded by text.</span>
</p>
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

Not part of any standard.

## See also

- {{cssxref(":-moz-last-node")}}
- {{cssxref(":first-child")}}
