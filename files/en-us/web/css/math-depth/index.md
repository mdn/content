---
title: math-depth
slug: Web/CSS/math-depth
page-type: css-property
browser-compat: css.properties.math-depth
---

{{CSSRef}}

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

### Values

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

### Specifying a math depth

#### HTML

```html
<p>
  Example formulas:
  <math>
    <munder displaystyle="true">
      <mo>∑</mo>
      <mi>A</mi>
    </munder>
  </math>
  <math class="depth-1">
    <munder displaystyle="true">
      <mo>∑</mo>
      <mi>A</mi>
    </munder>
  </math>
  <math class="depth-negative-1">
    <munder displaystyle="true">
      <mo>∑</mo>
      <mi>A</mi>
    </munder>
  </math>
</p>
```

#### CSS

```css
p {
  font-size: 2rem;
}

math {
  font-size: math;
  math-depth: auto-add;
}

.depth-1 {
  math-depth: add(1);
}

.depth-negative-1 {
  math-depth: add(-1);
}
```

#### Result

{{embedlivesample('Specifying_a_math_depth', 600, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-size")}}
- {{cssxref("math-style")}}
