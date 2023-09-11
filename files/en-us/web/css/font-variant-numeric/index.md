---
title: font-variant-numeric
slug: Web/CSS/font-variant-numeric
page-type: css-property
browser-compat: css.properties.font-variant-numeric
---

{{CSSRef}}

The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.

{{EmbedInteractiveExample("pages/css/font-variant-numeric.html")}}

## Syntax

```css
font-variant-numeric: normal;
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums; /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums; /* <numeric-figure-values> */
font-variant-numeric: proportional-nums; /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums; /* <numeric-spacing-values> */
font-variant-numeric: diagonal-fractions; /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions; /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions;

/* Global values */
font-variant-numeric: inherit;
font-variant-numeric: initial;
font-variant-numeric: revert;
font-variant-numeric: revert-layer;
font-variant-numeric: unset;
```

This property can take one of two forms:

- either the keyword value `normal`
- or one or more of the other values listed below, space-separated, in any order.

### Values

- `normal`

  - : This keyword leads to the deactivation of the use of such alternate glyphs.

- `ordinal`

  - : This keyword forces the use of special glyphs for the ordinal markers, like 1st, 2nd, 3rd, 4th in English or a 1a in Italian. It corresponds to the OpenType values `ordn`.

- `slashed-zero`

  - : This keyword forces the use of a 0 with a slash; this is useful when a clear distinction between O and 0 is needed. It corresponds to the OpenType values `zero`.

- _`<numeric-figure-values`>_

  - : These values control the figures used for numbers. Two values are possible:

    - `lining-nums` activating the set of figures where numbers are all lying on the baseline. It corresponds to the OpenType values `lnum`.
    - `oldstyle-nums` activating the set of figures where some numbers, like 3, 4, 7, 9 have descenders. It corresponds to the OpenType values `onum`.

- _`<numeric-spacing-values>`_

  - : These values controls the sizing of figures used for numbers. Two values are possible:

    - `proportional-nums` activating the set of figures where numbers are not all of the same size. It corresponds to the OpenType values `pnum`.
    - `tabular-nums` activating the set of figures where numbers are all of the same size, allowing them to be easily aligned like in tables. It corresponds to the OpenType values `tnum`.

- _`<numeric-fraction-values>`_

  - : These values controls the glyphs used to display fractions. Two values are possible:

    - `diagonal-fractions` activating the set of figures where the numerator and denominator are made smaller and separated by a slash. It corresponds to the OpenType values `frac`.
    - `stacked-fractions` activating the set of figures where the numerator and denominator are made smaller, stacked and separated by a horizontal line. It corresponds to the OpenType values `afrc`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting ordinal numeric forms

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-example.html", '100%', 600)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`font-variant`](/en-US/docs/Web/CSS/font-variant)
- [`font-variant-alternates`](/en-US/docs/Web/CSS/font-variant-alternates)
- [`font-variant-caps`](/en-US/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/en-US/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/en-US/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/en-US/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-position`](/en-US/docs/Web/CSS/font-variant-position)
