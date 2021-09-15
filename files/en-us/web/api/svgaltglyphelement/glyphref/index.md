---
title: SVGAltGlyphElement.glyphRef
slug: Web/API/SVGAltGlyphElement/glyphRef
tags:
  - API
  - Deprecated
  - Property
  - Reference
  - SVG
  - SVGAltGlyphElement
  - SVGAltGlyphRefElement
browser-compat: api.SVGAltGlyphElement.glyphRef
---
{{APIRef("SVGAltGlyphElement")}}

{{Deprecated_header}}

The **`SVGAltGlyphElement.glyphRef`** property is a
{{domxref("DOMString")}} representing a glyph identifier. It has the same meaning as the
‘glyphRef’ property on the {{domxref("SVGGlyphRefElement")}} interface of the
{{SVGElement("glyphRef")}} element.

## Syntax

```js
string = myGlyph.glyphRef;
myGlyph.glyphRef = string;
```

### Value

The return value is a Glyph Identifier, the value of which depends on the
format of the given font.

## Example

```js
myGlyph.glypRef = "#glyphID";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAltGlyphElement")}}
