---
title: ':nth-last-of-type()'
slug: Web/CSS/:nth-last-of-type
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.nth-last-of-type
---
{{CSSRef}}

The **`:nth-last-of-type()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements of a given type, based on their position among a group of siblings, counting from the end.

```css
/* Selects every fourth <p> element
   among any group of siblings,
   counting backwards from the last one */
p:nth-last-of-type(4n) {
  color: lime;
}
```

> **Note:** This pseudo-class is essentially the same as {{Cssxref(":nth-of-type")}}, except it counts items backwards from the _end_, not forwards from the beginning.

## Syntax

The `nth-last-of-type` pseudo-class is specified with a single argument, which represents the pattern for matching elements, counting from the end.

See {{Cssxref(":nth-last-child")}} for a more detailed explanation of its syntax.

### Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<div>
  <span>This is a span.</span>
  <span>This is another span.</span>
  <em>This is emphasized.</em>
  <span>Wow, this span gets limed!!!</span>
  <strike>This is struck through.</strike>
  <span>Here is one last span.</span>
</div>
```

### CSS

```css
span:nth-last-of-type(2) {
  background-color: lime;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":nth-last-child")}}, {{Cssxref(":nth-of-type")}}
