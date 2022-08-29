---
title: unicode-range
slug: Web/CSS/@font-face/unicode-range
tags:
  - At-rule descriptor
  - CSS
  - CSS Fonts
  - CSS Property
  - Layout
  - Reference
  - Web
browser-compat: css.at-rules.font-face.unicode-range
---
{{CSSRef}}

The **`unicode-range`** CSS descriptor sets the specific range of characters to be used from a font defined by {{cssxref("@font-face")}} and made available for use on the current page. If the page doesn't use any character in this range, the font is not downloaded; if it uses at least one, the whole font is downloaded.

## Syntax

```css
/* <unicode-range> values */
unicode-range: U+26;               /* single codepoint */
unicode-range: U+0-7F;
unicode-range: U+0025-00FF;        /* codepoint range */
unicode-range: U+4??;              /* wildcard range */
unicode-range: U+0025-00FF, U+4??; /* multiple values */
```

### Values

- **_single codepoint_**
  - : A single Unicode character code point, for example `U+26`.
- **_codepoint range_**
  - : A range of Unicode code points. So for example, `U+0025-00FF` means _include all characters in the range `U+0025` to `U+00FF`_.
- **_wildcard range_**
  - : A range of Unicode code points containing wildcard characters, that is using the `'?'` character, so for example `U+4??` means _include all characters in the range `U+400` to `U+4FF`_.

## Description

The purpose of this descriptor is to allow the font resources to be segmented so that a browser only needs to download the font resource needed for the text content of a particular page. For example, a site with many localizations could provide separate font resources for English, Greek and Japanese. For users viewing the English version of a page, the font resources for Greek and Japanese fonts wouldn't need to be downloaded, saving bandwidth.

## Formal definition

{{cssinfo}}

## Formal syntax

```
<unicode-range>#
```

## Examples

### Using a different font for a single character

In this example we create a simple HTML containing a single {{HTMLElement("div")}} element, including an ampersand, that we want to style with a different font. To make it obvious, we will use a sans-serif font, _Helvetica_, for the text, and a serif font, _Times New Roman_, for the ampersand.

In the CSS we are in effect defining a completely separate {{cssxref("@font-face")}} that only includes a single character in it, meaning that only this character will be styled with this font. We could also have done this by wrapping the ampersand in a {{HTMLElement("span")}} and applying a different font just to that, but that is an extra element and rule set.

#### HTML

```html
<div>Me & You = Us</div>
```

#### CSS

```css
@font-face {
  font-family: 'Ampersand';
  src: local('Times New Roman');
  unicode-range: U+26;
}

div {
  font-size: 4em;
  font-family: Ampersand, Helvetica, sans-serif;
}
```

#### Result

{{EmbedLiveSample("Using_a_different_font_for_a_single_character", 500,104)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
