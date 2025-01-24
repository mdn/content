---
title: <textPath>
slug: Web/SVG/Element/textPath
page-type: svg-element
browser-compat: svg.elements.textPath
---

{{SVGRef}}

The **`<textPath>`** [SVG](/en-US/docs/Web/SVG) element is used to render text along the shape of a {{SVGElement("path")}} element.
The text must be enclosed in the `<textPath>` element and its {{SVGAttr("href")}} attribute is used to reference the desired `<path>`.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- to hide the path, it is usually wrapped in a <defs> element -->
  <!-- <defs> -->
  <path
    id="MyPath"
    fill="none"
    stroke="red"
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
  <!-- </defs> -->

  <text>
    <textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>
  </text>
</svg>
```

{{EmbedLiveSample('Example', 200, 200)}}

## Attributes

- {{SVGAttr("href")}}
  - : The URL to the path or basic shape on which to render the text. If the `path` attribute is set, `href` has no effect.
    _Value type_: [**\<URL>**](/en-US/docs/Web/SVG/Content_type#url) ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("lengthAdjust")}}
  - : Where length adjustment should be applied to the text: the space between glyphs, or both the space and the glyphs themselves.
    _Value type_: `spacing`|`spacingAndGlyphs`; _Default value_: `spacing`; _Animatable_: **yes**
- {{SVGAttr("method")}}
  - : Which method to render individual glyphs along the path.
    _Value type_: `align`|`stretch` ; _Default value_: `align`; _Animatable_: **yes**
- {{SVGAttr("path")}} {{Experimental_Inline}}
  - : The path on which the text should be rendered.
    _Value type_: [**\<path_data>**](/en-US/docs/Web/SVG/Attribute/path#path-data) ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("side")}} {{Experimental_Inline}}
  - : Which side of the path the text should be rendered.
    _Value type_: `left`|`right` ; _Default value_: `left`; _Animatable_: **yes**
- {{SVGAttr("spacing")}}
  - : How space between glyphs should be handled.
    _Value type_: `auto`|`exact` ; _Default value_: `exact`; _Animatable_: **yes**
- {{SVGAttr("startOffset")}}
  - : How far the beginning of the text should be offset from the beginning of the path.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("textLength")}}
  - : The width of the space into which the text will render.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: _auto_; _Animatable_: **yes**

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
