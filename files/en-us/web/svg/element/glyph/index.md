---
title: <glyph>
slug: Web/SVG/Element/glyph
page-type: svg-element
status:
  - deprecated
browser-compat: svg.elements.glyph
---

{{SVGRef}}{{deprecated_header}}

A **`<glyph>`** defines a single glyph in an SVG font.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
- [Presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Specific attributes

- {{SVGAttr("d")}} {{Deprecated_Inline}}
- {{SVGAttr("horiz-adv-x")}} {{Deprecated_Inline}}
- {{SVGAttr("vert-origin-x")}} {{Deprecated_Inline}}
- {{SVGAttr("vert-origin-y")}} {{Deprecated_Inline}}
- {{SVGAttr("vert-adv-y")}} {{Deprecated_Inline}}
- {{SVGAttr("unicode")}} {{Deprecated_Inline}}
- {{SVGAttr("glyph-name")}} {{Deprecated_Inline}}
- {{SVGAttr("orientation")}} {{Deprecated_Inline}}
- {{SVGAttr("arabic-form")}} {{Deprecated_Inline}}
- {{SVGAttr("lang")}} {{Deprecated_Inline}}

## DOM Interface

This element implements the {{domxref("SVGGlyphElement")}} interface.

## Example

### SVG

```html
<svg
  width="400px"
  height="300px"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Example copied from https://www.w3.org/TR/SVG/fonts.html#GlyphElement -->
  <defs>
    <font id="Font1" horiz-adv-x="1000">
      <font-face
        font-family="Super Sans"
        font-weight="bold"
        font-style="normal"
        units-per-em="1000"
        cap-height="600"
        x-height="400"
        ascent="700"
        descent="300"
        alphabetic="0"
        mathematical="350"
        ideographic="400"
        hanging="500">
        <font-face-src>
          <font-face-name name="Super Sans Bold" />
        </font-face-src>
      </font-face>

      <missing-glyph><path d="M0,0h200v200h-200z" /></missing-glyph>
      <glyph unicode="!" horiz-adv-x="80" d="M0,0h200v200h-200z"></glyph>
      <glyph unicode="@" d="M0,50l100,300l400,100z"></glyph>
    </font>
  </defs>
  <text
    x="100"
    y="100"
    style="font-family: 'Super Sans', Helvetica, sans-serif;
             font-weight: bold; font-style: normal">
    Text using embedded font!
  </text>
</svg>
```

### Result

{{EmbedLiveSample("Example", 400, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("font")}}
- {{SVGElement("missing-glyph")}}
- [SVG tutorial: SVG fonts](/en-US/docs/Web/SVG/Tutorial/SVG_fonts)
