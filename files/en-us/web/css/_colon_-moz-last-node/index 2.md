---
title: ':-moz-last-node'
slug: Web/CSS/:-moz-last-node
tags:
  - CSS
  - CSS:Mozilla Extensions
  - NeedsCompatTable
  - Non-standard
  - Pseudo-class
  - Selector
---
{{Non-standard_header}}{{CSSRef}}

The **`:-moz-last-node`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that represents any element that is the last child node of some other element. It differs from {{cssxref(":last-child")}} because it does not match a last-child element with (non-whitespace) text after it.

> **Note:** Any whitespace at the end of an element is ignored for the determination of `:-moz-last-node`.

## Syntax

```css
:-moz-last-node
```

## Examples

### CSS

```css
span:-moz-last-node {
  background-color: lime;
}
```

### HTML

```html
<p>
  <span>This does not match.</span>
  <span>This matches!</span>
</p>

<p>
  <span>This doesn't match because it's followed by text.</span>
  Blahblah.
</p>
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

Not part of any standard.

## See also

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
