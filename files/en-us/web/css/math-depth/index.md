---
title: math-depth
slug: Web/CSS/math-depth
tags:
  - CSS
  - MathML
  - Property
  - Reference
  - math-depth
  - Experimental
browser-compat: css.properties.math-depth
---
{{CSSRef}}{{SeeCompatTable}}

The **`math-depth`** property describes a notion of _depth_ for each element of a mathematical formula, with respect to the top-level container of that formula. Concretely, this is used to determine the computed value of the [font-size](/en-US/docs/Web/CSS/font-size) property when its specified value is `math`.

## Syntax

```css
/* Keyword values */
math-depth: auto-add;

/* Relative values */
math-depth: add(2);
math-depth: add(-2);

/* Absolute value */
math-depth: 4;

/* Global values */
math-depth: inherit;
math-depth: initial;
math-depth: revert;
math-depth: revert-layer;
math-depth: unset;
```

## Values

- `auto-add`
  - : Set to the inherited `math-depth` plus 1 when inherited [math-style](/en-US/docs/Web/CSS/math-style) is `compact`.
- `add({{cssxref("&lt;integer&gt;")}})`
  - : Set to the inherited `math-depth` plus the specified integer.
- {{cssxref("&lt;integer&gt;")}}
  - : Set to the specified integer.

## Formal definition

{{cssinfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### CSS

```css
math {
  math-depth: auto-add;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-size")}}
- {{cssxref("math-style")}}
