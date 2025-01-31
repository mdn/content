---
title: <image>
slug: Web/SVG/Element/image
page-type: svg-element
browser-compat: svg.elements.image
---

{{SVGRef}}

The **`<image>`** [SVG](/en-US/docs/Web/SVG) element includes images inside SVG documents. It can display {{glossary("raster image")}} files or other SVG files.

The only image formats SVG software must support are {{glossary("JPEG")}}, {{glossary("PNG")}}, and other SVG files. Animated {{glossary("GIF")}} behavior is undefined.

SVG files displayed with `<image>` are [treated as an image](/en-US/docs/Web/SVG/SVG_as_an_Image): external resources aren't loaded, {{cssxref(":visited")}} styles [aren't applied](/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector), and they cannot be interactive. To include dynamic SVG elements, try {{SVGElement("use")}} with an external URL. To include SVG files and run scripts inside them, try {{HTMLElement("object")}} inside of {{SVGElement("foreignObject")}}.

> [!NOTE]
> The HTML spec defines `<image>` as a synonym for {{HTMLElement("img")}} while parsing HTML. This specific element and its behavior only apply inside SVG documents or inline SVGs.

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr("x")}}
  - : Positions the image horizontally from the origin.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : Positions the image vertically from the origin.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : The width the image renders at. Unlike HTML's `<img>`, this attribute is required.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("height")}}
  - : The height the image renders at. Unlike HTML's `<img>`, this attribute is required.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("href")}}
  - : Points at a URL for the image file.
    _Value type_: **[\<URL>](/en-US/docs/Web/SVG/Content_type#url)** ; _Default value_: _none_; _Animatable_: **no**
- {{SVGAttr("preserveAspectRatio")}}
  - : Controls how the image is scaled.
    _Value type_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Default value_: `xMidYMid meet`; _Animatable_: **yes**
- {{SVGAttr("crossorigin")}}
  - : Defines the value of the credentials flag for CORS requests.
    _Value type_: [ anonymous | use-credentials ]? ; _Default value_: None; _Animatable_: **yes**
- {{SVGAttr("decoding")}}
  - : Provides a hint to the browser as to whether it should perform image decoding synchronously or asynchronously.
    _Value type_: `async | sync | auto` ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("xlink:href")}}{{deprecated_inline}}
  - : Points at a URL for the image file.
    _Value type_: **[\<URL>](/en-US/docs/Web/SVG/Content_type#url)** ; _Default value_: _none_; _Animatable_: **no**

## DOM Interface

This element implements the {{domxref("SVGImageElement")}} interface.

## Example

Basic rendering of a PNG image in SVG:

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image href="mdn_logo_only_color.png" height="200" width="200" />
</svg>
```

### Result

{{EmbedLiveSample("Example", 250, 260)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
