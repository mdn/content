---
title: font-weight
slug: Web/CSS/@font-face/font-weight
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.font-weight
---

{{CSSRef}}

The **`font-weight`** CSS {{cssxref("@font-face")}} descriptor enables authors to specify a single font weight, or a range of font weights, for the font specified in a {{cssxref("@font-face")}} at-rule. This is then used by the browser to select the appropriate font when a CSS rule sets a desired {{cssxref("font-weight", "font weight")}}.

Unless it contains a [variable font](/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), a single font file contains characters from a font family in a specific weight and style: for example, "Helvetica bold italic". To declare the font to be used for a range of font weights, declare a space-separated pair of font-weight values as the value for the `font-weight` descriptor.

Typically, a developer will want to use fonts from a single font family in a range of different weights. To accomplish this, you can define multiple {{cssxref("@font-face")}} at-rules for the same family (all with the same {{cssxref("@font-face/font-family", "font-family")}} descriptor value), one for each weight, and set the `font-weight` descriptor to define the weight range for which that particular font file will be used.

When CSS rules set a font weight by setting the {{cssxref("font-weight")}} property or the {{cssxref("font")}} shorthand property, the appropriate font will then be used. For example, if the descriptor is `font-weight: 400 600;`, when the property is `font-weight: 450` or `font-weight: 550`, that font will be use for that font-family. The same font is used in both cases, but uf its a variable font, the latter will be bolder.

## Syntax

```css
/* Single values */
font-weight: normal;
font-weight: bold;
font-weight: 400;

/* Defining a range */
font-weight: normal bold;
font-weight: 300 500;
```

### Values

The syntax of the `font-weight` descriptor takes one of the following forms:

- The keyword `auto`.
- A single `<font-weight-absolute>` value.
- A pair of `<font-weight-absolute>` values, separated by a space.

Each `<font-weight-absolute>` may be any one of the following:

- `normal`
  - : Normal font weight. Same as `400`.
- `bold`
  - : Bold font weight. Same as `700`.
- `<number>`
  - : A {{cssxref("&lt;number&gt;")}} value between 1 and 1000, inclusive. Higher numbers represent weights that are bolder than (or as bold as) lower numbers. Certain commonly used values correspond to common weight names, as described in the [Common weight name mapping](#common_weight_name_mapping) section below.

### Common weight name mapping

The numerical values `100` to `900` roughly correspond to the following common weight names:

| Value | Common weight name        |
| ----- | ------------------------- |
| 100   | Thin (Hairline)           |
| 200   | Extra Light (Ultra Light) |
| 300   | Light                     |
| 400   | Normal                    |
| 500   | Medium                    |
| 600   | Semi Bold (Demi Bold)     |
| 700   | Bold                      |
| 800   | Extra Bold (Ultra Bold)   |
| 900   | Black (Heavy)             |

### Variable fonts

Most fonts have a particular weight which corresponds to one of the numbers in [Common weight name mapping](#common_weight_name_mapping). However some fonts, called variable fonts, can support a range of weights with more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight.

For TrueType or OpenType variable fonts, the "wght" variation is used to implement varying weights.

## Accessibility

People experiencing low vision conditions may have difficulty reading text set with a `font-weight` value of `100` (Thin/Hairline) or `200` (Extra Light), especially if the font has a [low contrast color ratio](/en-US/docs/Web/CSS/color#accessibility).

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Selecting normal and bold fonts

In this example we include two fonts, one normal weight, one bold weight, from the ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) font family using two `@font-face` at rules. We set `font-weight` descriptors to match the weight of the fonts.

After this, CSS rules can select the normal or the bold font for the "Fira Sans" family just by setting the {{cssxref("font-weight")}} property. Note that the {{htmlelement("strong")}} HTML element also selects the bold font, because by default `<strong>` elements have a CSS `font-weight` property value of `bold`.

#### HTML

```html
<p class="one">Fira Sans, `normal` weight paragraph</p>
<p class="two">Fira Sans, `bold` weight paragraph</p>
<p><strong>Fira Sans, &lt;strong&gt; element (`bold`)</strong></p>
```

#### CSS

```css
@font-face {
  font-family: "Fira Sans";
  font-weight: normal;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: bold;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2");
}

body {
  font-family: "Fira Sans", serif;
  font-size: 2rem;
}

p.one {
  font-weight: normal;
}

p.two {
  font-weight: bold;
}
```

#### Result

{{embedlivesample("Selecting normal and bold fonts", "", 300)}}

### Setting font-weight ranges

In this example, we include the same two fonts as in the example above, but we set the `font-weight` descriptors to a different ranges.

#### HTML

```html
<p class="one">This has a font weight of 100</p>
<p class="three">This has a font weight of 300</p>
<p class="five">This has a font weight of 500</p>
```

#### CSS

We include two `@font-face` declarations for two different fonts, with the second font's font-weight range matching a subset of the first font's range.
The `@font-face` declarations must be written in this order due to the CSS [cascade](/en-US/docs/Web/CSS/Cascade); otherwise the larger range would override the smaller substet declaration.

```css
@font-face {
  font-family: "Fira Sans";
  font-weight: 1 1000;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 200 400;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2");
}

body {
  font-family: "Fira Sans", serif;
  font-size: 2rem;
}

p.one {
  font-weight: 100;
}

p.three {
  font-weight: 300;
}

p.five {
  font-weight: 500;
}
```

#### Result

{{embedlivesample("Setting font-weight ranges", "", 300)}}

While `font-weight: 500` is generally bolder than `font-weight: 300`, only the `300` value is within the range of the `@font-face` declaration that uses the bold `FiraSans-Bold.woff2` font, so the `500` is rendered using the `FiraSans-Regular.woff2` font.

### Setting a range for a variable font

In this example we include a variable font, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), using a single `@font-face` at-rule. We've used a `font-weight: 300 700` value to effectively limit the range of weights that are available. If a CSS rule uses our "League Mono" font, then if it specifies a weight outside this range the weight it gets is clamped to the range.

To show the effect of this we've included another font using "League Mono" that does not set the `font-weight` descriptor, and we've called this "League Mono-complete".

#### HTML

```html
<p class="one">Fire Sans Regular, font-weight 200</p>
<p class="two">League Mono, font-weight 400</p>
<p class="three">League Mono, font-weight 600</p>
<p class="four">Fire Sans Regular, font-weight 800</p>
```

#### CSS

```css
@font-face {
  font-family: "NamedFont";
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

@font-face {
  font-family: "NamedFont";
  src: url("https://mdn.github.io/shared-assets/fonts/LeagueMono-VF.ttf");
  font-weight: 300 700;
}

p {
  font-family: "NamedFont", serif;
  font-size: 1.5rem;
}

p.one {
  font-weight: 200;
}

p.two {
  font-weight: 400;
}

p.three {
  font-weight: 600;
}

p.four {
  font-weight: 800;
}
```

#### Result

The result of this is:

- Setting the `font-weight` property to `200` gets a `normal` version of FireSans.
- Setting the `font-weight` property to `400` gets "League Mono" at a weight of 400.
- Setting the `font-weight` property to `600` gets "League Mono" at a weight of 600.
- Setting the `font-weight` property to `800` gets a boldened version of "FireSans".

{{embedlivesample("Setting a range for a variable font", "", "400")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} descriptor
