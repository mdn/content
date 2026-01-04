---
title: math-shift
slug: Web/CSS/Reference/Properties/math-shift
page-type: css-property
browser-compat: css.properties.math-shift
sidebar: cssref
---

The `math-shift` property indicates whether superscripts inside MathML formulas should be raised by a normal or compact shift.

## Syntax

```css
/* Keyword values */
math-shift: normal;
math-shift: compact;

/* Global values */
math-shift: inherit;
math-shift: initial;
math-shift: revert;
math-shift: revert-layer;
math-shift: unset;
```

### Values

- `normal`
  - : The initial value, indicates normal rendering. Superscripts in MathML formulas use the [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup) parameter from the OpenType MATH table.
- `compact`
  - : Indicates compact rendering. Superscripts in MathML formulas use the [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped) parameter from the OpenType MATH table, which is generally smaller.

## Formal definition

{{cssinfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Normal and compact shift

The following MathML displays two versions of "x squared" using a font with an OpenType MATH table.
The `math-shift` property is used to raise the superscripts using the `normal` and `compact` shift.

#### CSS

```css
math {
  font-size: 64pt;
  math-shift: normal;
}

.compact-shift {
  math-shift: compact;
}
```

#### MathML

```html
<math>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <msup class="compact-shift">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
</math>
```

#### Results

Note that the second "2" has a more compact (lower) shift.

{{EmbedLiveSample("math-shift-example", "100%", "150px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
