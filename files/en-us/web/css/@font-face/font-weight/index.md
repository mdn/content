---
title: font-weight
slug: Web/CSS/@font-face/font-weight
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.font-weight
---

{{CSSRef}}

The **`font-weight`** CSS {{cssxref("@font-face")}} descriptor enables authors to specify a single font weight, or a range of font weights, for the font specified in a {{cssxref("@font-face")}} at-rule. This is then used by the browser to select the appropriate font when a CSS rule sets a desired {{cssxref("font-weight", "font weight")}}.

Typically, a developer will want to use fonts from a single font family in a range of different weights. With traditional, or _static_ fonts, a single font file contains characters from a font family in a specific weight and style: for example, "Helvetica bold italic". To enable displaying light, regular, bold, or extra-bold fonts when the `font-weight` property calls a specific weight, you can define multiple {{cssxref("@font-face")}} at-rules for the same family (all with the same {{cssxref("@font-face/font-family", "font-family")}} descriptor value), one for each weight or range of weights.

To declare the font to be used for a range of font weights, declare a space-separated pair of font-weight values as the value for the `font-weight` descriptor. When CSS rules set a font weight by setting the {{cssxref("font-weight")}} property or the {{cssxref("font")}} shorthand property, the appropriate font will then be used.

For example, if the descriptor is `font-weight: 400 600;`, when the property is `font-weight: 450` or `font-weight: 550`, that font will be use for that font-family.
Whether the font is a static or a [variable font](/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), the font matching the range will be used. In this case, if the font is a static font, `450` and `550` will appear the same. If the font is a variable font, the latter will be bolder.

The descriptor is the same for all fonts, but the range you'll set for a variable font will generally be greater, possibly even `1 1000` to use the same font for all font weight property values.

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

The `font-weight` descriptor takes one of the following forms:

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

This example demonstrates how authors can include multiple fonts for multiple font-weights (and font-styles), by including multiple `@font-face` declarations with the same `font-family` value. By setting the `font-weight` descriptors using ranges from 1 to 1000, in the rest of your stylesheets, you can declare a `font-weight` (or `font-style`), and know the appropriate font will be used.

#### HTML

```html
<p class="one">This has a font weight of 100</p>
<p class="three">This has a font weight of 300</p>
<p class="four">This has a font weight of 400</p>
<p class="five">This has a font weight of 500</p>
<p class="seven">This has a font weight of 700</p>
<p class="nine">This has a font weight of 900</p>
```

#### CSS

We include four `@font-face` declarations for four different fonts from the `FireSans` font family, as seen in the previous example. Each declaration is set to a different range of font-weight values, but all use the same font name.

The first declaration uses `FiraSans-Regular` and its associated `font-weight` range includes the entire possible range of font weight values.

The other three declarations use the light, bold, and extra-bold versions of the font, and their associated `font-weight` ranges define subsets of the range as follows:

- the light font is associated with the range 1-300
- the bold font is associated with the range 500-700
- the extra-bold font is associated with the range 700-1000

The CSS [cascade](/en-US/docs/Web/CSS/Cascade) ensures that the three latter declarations override parts of the the range that was set in the `FiraSans-Regular` declaration.

```css
@font-face {
  font-family: "Fira Sans";
  font-weight: 1 1000;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 1 300;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Light.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 500 700;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 700 1000;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-ExtraBold.woff2");
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

p.four {
  font-weight: 400;
}

p.five {
  font-weight: 500;
}

p.seven {
  font-weight: 700;
}

p.nine {
  font-weight: 900;
}
```

#### Result

{{embedlivesample("Setting font-weight ranges", "", 500)}}

The `seven` paragraph uses the extra bold font. While `font-weight: 700` matches both the `FiraSans-Bold` and `FiraSans-ExtraBold` declarations, as the FiraSans-ExtraBold is declared later, it overrides the `FiraSans-Bold` for that value.

Similarly, the `100` and `300` both use the light font; although `FiraSans-Regular` and `FiraSans-Light` both include `300` in their ranges, `FiraSans-Light` is declared later. Alternatively, we could have declared `FiraSans-Regular` after `FiraSans-Light`, but we would need to change the `font-weight` descriptor range if we do so.

### Setting a range for a variable font

In this example we're using the `font-weight` descriptor to restrict the range of weights that can be set when using a variable font.

We include a variable font, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), using a single `@font-face` at-rule. We use a `font-weight: 300 700` value to effectively limit the range of weights that are available. If a CSS rule uses our "League Mono" font, then if it specifies a weight outside this range the weight it gets is clamped to the range.

#### HTML

We include a paragraph with `<output>` initially set to `400`, as that is the the default font-weight for unstyled paragraph text. This paragraph is nestled between two other paragraphs, so you can compare rendered versus declared font weight values.

We include an {{htmlelement("input/range")}} of type `range`, nested in a {{htmlelement("label")}}, setting the `step` to `50`.

```html
<p>LeagueMono, font-weight: 300 (comparison)</p>
<p id="example">LeagueMono, font-weight: <output>400</output> (example)</p>
<p>LeagueMono, font-weight: 700 (comparison)</p>
<label
  >Change the font size:
  <input type="range" min="50" max="1000" step="50" value="400" />
</label>
```

#### CSS

We set the `font-weight` descriptor range to `300 700`, clamping the variable font to that range.

```css
@font-face {
  font-family: LeagueMono;
  src: url("https://mdn.github.io/shared-assets/fonts/LeagueMono-VF.ttf");
  font-weight: 300 700;
}

p {
  font-family: LeagueMono, serif;
  font-size: 1.5rem;
}

p:first-of-type {
  font-weight: 300;
}

p:last-of-type {
  font-weight: 700;
}
```

#### JavaScript

We include an event handler that updates the paragraph's `font-weight` property value, and updates the text to reflect the change:

```js
const text = document.querySelector("#example");
const log = document.querySelector("output");
const range = document.querySelector("input");

range.addEventListener("change", () => {
  text.style.fontWeight = range.value;
  log.innerText = range.value;
});
```

#### Result

{{embedlivesample("Setting a range for a variable font", "", "400")}}

Change the font weight of the paragraph via the range.
Note that the example paragraph does not get lighter than the `300` paragraph above it or bolder than the `700` paragraph below it; the font weight is clamped to the range defined by the `font-weight` descriptor.

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
