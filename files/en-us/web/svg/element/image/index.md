---
title: <image>
slug: Web/SVG/Element/image
tags:
  - Element
  - Reference
  - SVG
  - SVG Graphics
browser-compat: svg.elements.image
---
{{SVGRef}}

The **`<image>`** SVG element includes images inside SVG documents. It can display {{glossary("raster image")}} files or other SVG files.

The only image formats SVG software must support are {{glossary("JPEG")}}, {{glossary("PNG")}}, and other SVG files. Animated {{glossary("GIF")}} behavior is undefined.

SVG files displayed with `<image>` are [treated as an image](/en-US/docs/Web/SVG/SVG_as_an_Image): external resources aren't loaded, {{cssxref(":visited")}} styles [aren't applied](/en-US/docs/Web/CSS/Privacy_and_the\_:visited_selector), and they cannot be interactive. To include dynamic SVG elements, try {{SVGElement("use")}} with an external URL. To include SVG files and run scripts inside them, try {{HTMLElement("object")}} inside of {{SVGElement("foreignObject")}}.

> **Note:** The HTML spec defines `<image>` as a synonym for {{HTMLElement("img")}} while parsing HTML. This specific element and its behavior only apply inside SVG documents or inline SVGs.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Conditional processing attributes](/en-US/docs/Web/SVG/Attribute#conditional_processing_attributes)
- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
- [Graphical event attributes](/en-US/docs/Web/SVG/Attribute#graphical_event_attributes)
- [Presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes)
- [Xlink attributes](/en-US/docs/Web/SVG/Attribute#xlink_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Specific attributes

- {{SVGAttr("x")}}: Positions the image horizontally from the origin.
- {{SVGAttr("y")}}: Positions the image vertically from the origin.
- {{SVGAttr("width")}}: The width the image renders at. Unlike HTML's `<img>`, this attribute is required.
- {{SVGAttr("height")}}: The height the image renders at. Unlike HTML's `<img>`, this attribute is required.
- {{SVGAttr("href")}} and {{SVGAttr("xlink:href")}}: Points at a URL for the image file.
- {{SVGAttr("preserveAspectRatio")}}: Controls how the image is scaled.
- {{SVGAttr("crossorigin")}}: Defines the value of the credentials flag for CORS requests.

## DOM Interface

`<image>` implements the {{domxref("SVGImageElement")}} interface.

## Example

Basic rendering of a PNG image in SVG:

### SVG

```html
<svg width="200" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <image href="mdn_logo_only_color.png" height="200" width="200"/>
</svg>
```

### Result

{{EmbedLiveSample("Example", 250, 260)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
