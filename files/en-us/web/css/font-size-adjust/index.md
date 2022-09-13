---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.font-size-adjust
---

{{CSSRef}}

The **`font-size-adjust`** [CSS](/en-US/docs/Web/CSS) property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).

```css
/* Use the specified font size */
font-size-adjust: none;

/* Use a font size that makes lowercase
   letters half the specified font size */
font-size-adjust: 0.5;

/* Two values - added in the Level 5 spec */
font-size-adjust: ex-height 0.5;

/* Global values */
font-size-adjust: inherit;
font-size-adjust: initial;
font-size-adjust: revert;
font-size-adjust: revert-layer;
font-size-adjust: unset;
```

The property is useful since the legibility of fonts, especially at small sizes, is determined more by the size of lowercase letters than by the size of capital letters. Legibility can become an issue when the first-choice {{ Cssxref("font-family") }} is unavailable and its replacement has a significantly different aspect ratio (the ratio of the size of lowercase letters to the size of the font).

To use this property in a way that is compatible with browsers that do not support `font-size-adjust`, it is specified as a number that the {{ Cssxref("font-size") }} property is multiplied by. This means the value specified for the property should generally be the aspect ratio of the first choice font. For example, consider this style sheet:

```css
font-size: 14px;
font-size-adjust: 0.5;
```

It is really specifying that the lowercase letters of the font should be `7px` high (0.5 × 14px). This will still produce reasonable results in browsers that do not support `font-size-adjust`, where a `14px` font will be used.

## Syntax

### Values

- `none`
  - : Choose the size of the font based only on the {{ Cssxref("font-size") }} property.
- ex-height | cap-height | ch-width | ic-width | ic-height

  - : Specifies the font metric to normalize on. Defaults to `ex-height`. One of:

    - `ex-height`
      - : Normalize the aspect value of the fonts, using the x-height divided by the font size.
    - `cap-height`
      - : Normalize the cap-height of the fonts, using the cap-height by the font size.
    - `ch-width`
      - : Normalize the horizontal narrow pitch of the fonts, using the advance width of "0" (ZERO, U+0030) divided by the font size.
    - `ic-width`
      - : Normalize the horizontal wide pitch of the font, using the advance width of "水" (CJK water ideograph, U+6C34) divided by the font size.
    - `ic-height`
      - : Normalize the vertical wide pitch of the font, using the advance height of "水" (CJK water ideograph, U+6C34) divided by the font size.

- {{cssxref("&lt;number&gt;")}}

  - : Choose the size of the font so that its lowercase letters (as determined by the x-height of the font) are the specified number times the {{ Cssxref("font-size") }}.

    The number specified should generally be the aspect ratio (ratio of x-height to font size) of the first choice {{ Cssxref("font-family") }}. This means that the first-choice font, when available, will appear the same size in browsers, whether or not they support `font-size-adjust`.

    `0` yields text of zero height (hidden text).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Adjusting lower-case letter sizes

#### HTML

```html
<p class="times">This text uses the Times font (10px), which is hard to read in small sizes.</p>
<p class="verdana">This text uses the Verdana font (10px), which has relatively large lowercase letters.</p>
<p class="adjtimes">This is the 10px Times, but now adjusted to the same aspect ratio as the Verdana.</p>
```

#### CSS

```css
.times {
  font-family: Times, serif;
  font-size: 10px;
}

.verdana {
  font-family: Verdana, sans-serif;
  font-size: 10px;
}

.adjtimes {
  font-family: Times, serif;
  font-size-adjust: ex-height 0.58;
  font-size: 10px;
}
```

#### Results

{{ EmbedLiveSample('Adjusting_lower-case_letter_sizes', 500, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- [Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
- {{cssxref("@font-face/size-adjust", "size-adjust")}} descriptor
