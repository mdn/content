---
title: math-shift
slug: Web/CSS/math-shift
tags:
  - CSS
  - MathML
  - Property
  - Reference
  - math-shift
  - Experimental
browser-compat: css.properties.math-shift
---

{{CSSRef}}{{SeeCompatTable}}

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

### CSS

```css
math {
  math-shift: compact;
}
```

### MathML

The following MathML displays two versions of "x squared" using the Latin Modern Math font. Browser implementing the `math-shift` property should raise the superscripts using slightly different shifts.

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css"
/>
```

```html
<math style="font-size: 64pt;">
  <msup style="math-shift: normal">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <msup style="math-shift: compact">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
</math>
```

{{EmbedLiveSample("math-shift-example", 700, 200, "", "")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
