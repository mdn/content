---
title: SVGAltGlyphElement
slug: Web/API/SVGAltGlyphElement
page-type: web-api-interface
tags:
  - API
  - Deprecated
  - NeedsExample
  - Reference
  - SVG
  - SVGAltGlyphElement
browser-compat: api.SVGAltGlyphElement
---
{{APIRef("SVG")}}{{Deprecated_Header}}

The **`SVGAltGlyphElement`** interface represents an {{ SVGElement("altglyph") }} element. This interface makes it possible to implement more sophisticated and particular glyph characters. For some textual representations as: ligatures (e.g. æ, ß, etc.), special-purpose fonts (e.g. musical symbols) or even alternate glyphs such as Asian text strings it is required that a different set of glyphs be used than the normal given character data.

## Properties

_This interface also inherits properties from its parent interface, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGAltGlyphElement.glyphRef")}} {{deprecated_inline}}
  - : It corresponds to the attribute {{ SVGAttr("glyphRef") }} on the given element. It's data type is 'String'. It defines the glyph identifier, whose format is dependent on the 'format' of the given font.
- {{domxref("SVGAltGlyphElement.format")}} {{deprecated_inline}}
  - : It corresponds to the attribute {{ SVGAttr("format") }} on the given element. It's data type is 'String'. This property specifies the format of the given font.

## Methods

_This interface has no methods but inherits methods from its parent, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("altglyph")}} Element
