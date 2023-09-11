---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
page-type: css-property
browser-compat: css.properties.font-size-adjust
---

{{CSSRef}}

The **`font-size-adjust`** [CSS](/en-US/docs/Web/CSS) property provides a way to control the size of lowercase letters relative to the size of uppercase letters, which define the overall font size. This property is useful for situations where font fallback can occur.

Legibility can become an issue when the first-choice {{ Cssxref("font-family") }} is unavailable and its replacement fallback font has a significantly different aspect value (height of lowercase letters divided by font size). Legibility of fonts, especially at small font sizes, is determined more by the size of lowercase letters than by the size of uppercase letters. The `font-size-adjust` is useful for adjusting the font size of fallback fonts to keep the aspect value across fonts consistent, ensuring that the text appears similar regardless of the font used.

## Syntax

```css
/* Keyword */
font-size-adjust: none;

/* One value: <number> or from-font */
font-size-adjust: 0.5;
font-size-adjust: from-font;

/* Two values */
font-size-adjust: ex-height 0.5;
font-size-adjust: ch-width from-font;

/* Global values */
font-size-adjust: inherit;
font-size-adjust: initial;
font-size-adjust: revert;
font-size-adjust: revert-layer;
font-size-adjust: unset;
```

### Values

The `font-size-adjust` property takes as its value the keyword `none` or one (`<number>` or `from-font`) or two (`<font-metric>` and either `<number>` or `from-font`) values.

- `none`
  - : No adjustment is applied to the `font-size` value for the fallback font.
- `<font-metric>`

  - : Specifies the first-choice font metric to use for adjusting the font size of the fallback font. This parameter accepts one of the keywords listed below. It is an optional parameter, and `ex-height` is used if no `<font-metric>` is specified.

    - `ex-height`
      - : Uses the ratio of x-height (height of lowercase "x" in a font) to font size (aspect value) to adjust the fallback font size. This keyword value is used to normalize lowercase letters across fonts.
    - `cap-height`
      - : Uses the ratio of cap-height (height of uppercase letters) to font size to adjust fallback font size. This keyword value is used to normalize uppercase letters across fonts.
    - `ch-width`
      - : Uses the ratio of the advance width (horizontal space taken up by a character in a font) of the character "0" (ZERO, U+0030) to font size. This keyword value is used to normalize horizontal narrow pitch of fonts.
    - `ic-width`
      - : Uses the ratio of the advance width of the character "水" (CJK water ideograph, U+6C34) to font size. This keyword value is used to normalize horizontal wide pitch of fonts, particularly those that include CJK (Chinese, Japanese, Korean) characters.
    - `ic-height`
      - : Uses the ratio of the advance height (vertical space taken up by a character in a font) of the character "水" (CJK water ideograph, U+6C34) to font size. This keyword value is used to normalize vertical wide pitch of fonts, particularly those that include CJK characters.

- {{cssxref("&lt;number&gt;")}}

  - : When specified without a `<font-metric>` (in which case `ex-height` is used), the `<number>` value adjusts the font size so that the x-height is a specific multiple of the font size. This number should generally match the aspect ratio (ratio of x-height to font size) of the first-choice font. This means that the first-choice font, when available, will display consistently across browsers, regardless of their support for `font-size-adjust`.

    When specified along with a `<font-metric>`, the `<number>` value adjusts the font size as per the chosen `<font-metric>` to maintain a consistent appearance for the specified font metric across different fonts. The adjusted font size is calculated using the formula `u  =  ( m / m′ ) s`, where:

    `m` is the ratio of the specified `<font-metric>` to the first-choice font size.

    `m′` is the ratio of the corresponding `<font-metric>` to the fallback font size.

    `s` is the value of the `font-size` property.

    `u` is the new, adjusted font size for the fallback font.

    The `<number>` value accepts any number between `0` to infinity. `0` yields text of zero height (that is, the text is hidden). Negative values are invalid.

    Consider the following scenario:

    - A first-choice font with `font-size: 12px` (`s`) and the ratio of `cap-height` to font size of `0.20` (`m`) is unavailable.
    - The `font-size-adjust` value has been specified as `cap-height 0.20`.
    - The `cap-height` to font size ratio in the fallback font is `0.15` (`m′`).

    In this case, the adjusted font size of the fallback font will be calculated to be `16px` ((0.20 / 0.15) \* 12). This will ensure that the `cap-height` of the fallback font is similar to that of the first-choice font when displayed.

- `from-font`
  - : Uses the `<number>` value for the specified `<font-metric>` from the first available font that is able to provide the desired metric. This keyword is helpful in cases when the desired font metric is not registered in a font or the necessary glyphs are missing.

## Description

To ensure compatibility with browsers that don't support `font-size-adjust`, this property is specified as a numeric multiplier of the {{ Cssxref("font-size") }} property. This number should generally match the aspect value of the first-choice font.

Consider the following style sheet, which specifies that the size of lowercase letters should be `0.5` times the font size. If the first-choice font is unavailable, a fallback font will be used. Let's say the lowercase letters in the fallback font have a size of `6px`. With `font-size-adjust`, the font size of the fallback font will be adjusted to maintain an aspect value of `0.5` between lowercase and uppercase letters. The new font size for the fallback font will be calculated to be `3px` (`0.5` \* `6px`). The fallback font will then be displayed at this new adjusted font size (`3px`) to preserve the aspect value and thereby readability of the text.

```css
font-size: 14px;
font-size-adjust: 0.5;
```

> **Note:** If the specified `<font-metric>` has been overridden in [`@font-face`](/en-US/docs/Web/CSS/@font-face), e.g. by using the [`size-adjust`](/en-US/docs/Web/CSS/@font-face/size-adjust) descriptor, then the overridden metric will be used in the `font-size-adjust` calculation. This means that when `font-size-adjust` and `size-adjust` are applied together, `size-adjust` does not have any effect.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Determining the aspect value of a font

For a given font, same content in two [`<span>`](/en-US/docs/Web/HTML/Element/span) elements can be used to determine the font's aspect value. If the same font size is used for content in both spans, the spans will match when the `font-size-adjust` value is accurate for the given font.

In the example below, the `font-size-adjust` property is specified only for the right span. Starting with a value of `0.6`, the `font-size-adjust` value can be adjusted until the borders around the two letters line up. This `font-size-adjust` value can be considered as the aspect value for the font.

```html hidden
<div>
  <p><span>b</span><span class="adjust1">b</span></p>
  0.6
</div>

<div>
  <p><span>b</span><span class="adjust2">b</span></p>
  0.5
</div>

<div>
  <p><span>b</span><span class="adjust3">b</span></p>
  0.482
</div>
```

```css hidden
body {
  display: flex;
}

div {
  text-align: center;
}

p {
  margin: 0 30px 10px 30px;
}
```

```css
body {
  display: flex;
}

div {
  text-align: center;
}

p {
  font-family: Futura;
  font-size: 50px;
}

span {
  border: solid 1px red;
}

.adjust1 {
  font-size-adjust: 0.6;
}

.adjust2 {
  font-size-adjust: 0.5;
}

.adjust3 {
  font-size-adjust: 0.482;
}
```

{{ EmbedLiveSample('Determining the aspect value of a font', 500, 200) }}

### Normalizing font size by lowercase letters

As shown in this example, the Verdana font has a relatively high aspect ratio of `0.545`, which means that the lowercase letters are relatively tall compared to uppercase letters. This makes the text in small font sizes appear legible. However, the Times font has a lower aspect ratio of `0.447`, so the text is less legible at small sizes. If Verdana is the first-choice font and Times is the fallback font, specifying the `font-size-adjust` property can help to retain the same aspect ratio in Times to make the text more legible in small font size.

#### HTML

```html
<p class="times">
  This text uses the Times font (14px), which is hard to read in small sizes.
</p>
<p class="verdana">
  This text uses the Verdana font (14px), which has relatively large lowercase
  letters.
</p>
<p class="adjtimes">
  This is the 14px Times font, now adjusted to the same aspect ratio as the
  Verdana font.
</p>
```

#### CSS

```css
.times {
  font-family: Times, serif;
  font-size: 14px;
}

.verdana {
  font-family: Verdana, sans-serif;
  font-size: 14px;
}

.adjtimes {
  font-family: Times, serif;
  font-size-adjust: ex-height 0.545;
  font-size: 14px;
}
```

#### Results

{{ EmbedLiveSample('Normalizing font size by lowercase letters', 500, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` descriptor
- [Learn: Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
