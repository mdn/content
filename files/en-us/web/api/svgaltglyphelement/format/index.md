---
title: SVGAltGlyphElement.format
slug: Web/API/SVGAltGlyphElement/format
page-type: web-api-instance-property
browser-compat: api.SVGAltGlyphElement.format
---
{{APIRef("SVGAltGlyphElement")}}

{{Deprecated_header}}

The **`SVGAltGlyphElement.format`** property is a
string that defines the format of the given font. It has the same
meaning as the 'format' property of {{domxref("SVGGlyphRefElement")}} property. If the
font is in one of the formats listed in [CSS2(\[CSS2\],
section15.3.5)](https://www.w3.org/TR/2008/REC-CSS2-20080411/fonts.html#referencing), then its value is the corresponding \<string> parameter
of the font.

## Syntax

```js
string = myGlyph.format;
 myGlyph.format = string;
```

### Value

The format values listed below are taken from [CSS2(\[CSS2\],
section15.3.5)](https://www.w3.org/TR/2008/REC-CSS2-20080411/fonts.html#referencing).

| String            | Font Format                       | Examples of common extensions |
| ----------------- | --------------------------------- | ----------------------------- |
| truedoc-pfr       | TrueDoc™ Portable Font Resource   | .pfr                          |
| embedded-opentype | Embedded OpenType                 | .eot                          |
| type-1            | PostScript™ Type 1                | .pfb, .pfa                    |
| truetype          | TrueType                          | .ttf                          |
| opentype          | OpenType, including TrueType Open | .ttf                          |
| truetype-gx       | TrueType with GX extensions       | -                             |
| speedo            | Speedo                            | -                             |
| intellifont       | Intellifont                       | -                             |

## Example

```js
myGlyph.format = "truedoc-pfr";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAltGlyphElement")}}
- {{domxref("SVGGlyphRefElement")}}
