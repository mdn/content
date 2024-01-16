---
title: math-depth
slug: Web/CSS/math-depth
page-type: css-property
browser-compat: css.properties.math-depth
---

{{CSSRef}}

The **`math-depth`** property describes a notion of _depth_ for each element of a mathematical formula, with respect to the top-level container of that formula. This is used to scale the computed value of the [font-size](/en-US/docs/Web/CSS/font-size) of elements when `font-size: math` is applied.

> **Note:** `font-size: math` is the default for `<math>` elements in the MathML Core [User Agent stylesheet](https://w3c.github.io/mathml-core/#user-agent-stylesheet), so it's not necessary to specify it explicitly.

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

The following example shows the effect of changing the `math-depth` property on the font size of subformulas.
The numbers in each subformula indicate the `math-depth` and scale factor applied.

The first `<mtext>` element is used as a reference to other subformulas and has no specific styles applied.
The second and third subformulas have `math-depth` set to `auto-add` and show the effect of scaling depending on the `math-style`.

The last two subformulas show the effect of setting `math-depth` to a specific value.

#### HTML

```html
<p style="font-size: 3rem; margin: 1rem 0">
  <math>
    <mtext>0</mtext>

    <!-- auto-add value has no effect when math-style is normal -->
    <mrow style="math-style: normal">
      <mrow style="math-depth: auto-add">
        <mtext>0</mtext>
      </mrow>
    </mrow>

    <!-- the inherited math-style is compact, so math-depth is set to 1 -->
    <mrow style="math-depth: auto-add">
      <mtext>1</mtext>
    </mrow>

    <mrow style="math-depth: add(2)">
      <mtext>2</mtext>
      <mrow style="math-depth: add(-1)">
        <mtext>1</mtext>
      </mrow>
      <mrow style="math-depth: 0">
        <mtext>0</mtext>
      </mrow>
    </mrow>
  </math>
</p>
```

#### Result

{{embedlivesample('Specifying_a_math_depth', 600, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-size")}}
- {{cssxref("math-style")}}
