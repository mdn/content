---
title: math-style
slug: Web/CSS/math-style
page-type: css-property
browser-compat: css.properties.math-style
---

{{CSSRef}}

The `math-style` property indicates whether MathML equations should render with normal or compact height.

## Syntax

```css
/* Keyword values */
math-style: normal;
math-style: compact;

/* Global values */
math-style: inherit;
math-style: initial;
math-style: revert;
math-style: revert-layer;
math-style: unset;
```

### Values

- `normal`
  - : The initial value, indicates normal rendering.
- `compact`
  - : The math layout on descendants tries to minimize the logical height.

## Formal definition

{{cssinfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### CSS

```css
math {
  math-style: compact;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
