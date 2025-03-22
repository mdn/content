---
title: The Web Open Font Format (WOFF)
slug: Web/CSS/CSS_fonts/WOFF
page-type: guide
browser-compat:
  - css.at-rules.font-face.WOFF
  - css.at-rules.font-face.WOFF_2
---

{{CSSRef}}

**WOFF** (the **Web Open Font Format**) is a web font format developed by Mozilla in concert with Type Supply, LettError, and other organizations. It uses a compressed version of the same table-based `sfnt` structure used by TrueType, OpenType, and Open Font Format, but adds metadata and private-use data structures, including predefined fields allowing foundries and vendors to provide license information if desired.

There are three main benefits to using WOFF:

1. The font data is compressed, so sites using WOFF will use less bandwidth and will load faster than if they used equivalent uncompressed TrueType or OpenType files.
2. Many font vendors that are unwilling to license their TrueType or OpenType format fonts for use on the web will license WOFF format fonts. This improves availability of fonts to site designers.
3. Both proprietary and free software browser vendors like the WOFF format, so it has the potential of becoming a truly universal, interoperable font format for the web, unlike other current font formats.

There are two versions of WOFF: WOFF and WOFF2. They mostly differ in regard to the compression algorithm used. In {{cssxref("@font-face")}} they are identified by the `'woff'` and `'woff2'` format descriptor respectively.

## Using WOFF

You can use the {{cssxref("@font-face")}} CSS property to use WOFF fonts for text in web content. It works exactly like OpenType and TrueType format fonts do, except it will likely let your content download more efficiently due to the addition of compression.

## Tools for working with WOFF fonts

- [Tools for working with WOFF](https://github.com/odemiral/woff2sfnt-sfnt2woff) fonts are available. `sfnt2woff` and `woff2sfnt` convert between WOFF and OpenType.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face")}}
