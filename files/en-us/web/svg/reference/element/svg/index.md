---
title: <svg>
slug: Web/SVG/Reference/Element/svg
page-type: svg-element
browser-compat: svg.elements.svg
sidebar: svgref
---

The **`<svg>`** [SVG](/en-US/docs/Web/SVG) element is a container that defines a new coordinate system and [viewport](/en-US/docs/Web/SVG/Reference/Attribute/viewBox). It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.

> [!NOTE]
> The `xmlns` attribute is only required on the outermost `svg` element of _SVG documents_, or inside HTML documents with XML serialization. It is unnecessary for inner `svg` elements or inside HTML documents with HTML serialization.

## Examples

### Nested `svg` element

This example shows that nested `svg` elements do not need the `xmlns` attribute.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 300 100"
  xmlns="http://www.w3.org/2000/svg"
  stroke="red"
  fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>
```

{{EmbedLiveSample('nested_svg-elements', 300, 100)}}

### Using dynamic viewport units

In this example, the `height` and `width` attributes on the `svg` element are set using the dynamic viewport value `60vmin`, equivalent to 60% of the viewport's width or height, whichever is smaller.

```html hidden
<div class="resizer">
  <iframe
    class="resized"
    srcdoc='
```

```html
<svg
  viewBox="0 0 400 400"
  xmlns="http://www.w3.org/2000/svg"
  height="60vmin"
  width="60vmin">
  <rect x="0" y="0" width="50%" height="50%" fill="tomato" opacity="0.75" />
  <rect
    x="25%"
    y="25%"
    width="50%"
    height="50%"
    fill="slategrey"
    opacity="0.75" />
  <rect x="50%" y="50%" width="50%" height="50%" fill="olive" opacity="0.75" />
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    stroke="cadetblue"
    stroke-width="0.5%"
    fill="none" />
</svg>
```

```html hidden
  '></iframe>
</div>
```

```css hidden
.resizer {
  display: flex;
  margin: 1rem;
  padding: 0;
  resize: both;
  overflow: hidden;
  border: 5px dotted red;
  height: 400px;
}
.resizer > .resized {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  border: 0;
}
```

{{EmbedLiveSample('using_dynamic_viewport_lengths', '100%', 500)}}

To change the iframe's dimensions try resizing the dotted red border from bottom right corner.

## Attributes

- {{SVGAttr("baseProfile")}} {{deprecated_inline}}
  - : The minimum SVG language profile that the document requires.
    _Value type_: **\<string>**; _Default value_: none; _Animatable_: **no**
- {{SVGAttr("height")}}
  - : The displayed height of the rectangular viewport. (Not the height of its coordinate system.)
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/en-US/docs/Web/SVG/Guides/Content_type#percentage); _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("preserveAspectRatio")}}
  - : How the `svg` fragment must be deformed if it is displayed with a different {{glossary("aspect ratio")}}.
    _Value type_: (`none` | `xMinYMin` | `xMidYMin` | `xMaxYMin` | `xMinYMid` | `xMidYMid` | `xMaxYMid` | `xMinYMax` | `xMidYMax` | `xMaxYMax`) (`meet` | `slice`)?; _Default value_: `xMidYMid meet`; _Animatable_: **yes**
- {{SVGAttr("version")}} {{deprecated_inline}}
  - : Which version of SVG is used for the inner content of the element.
    _Value type_: **[\<number>](/en-US/docs/Web/SVG/Guides/Content_type#number)**; _Default value_: none; _Animatable_: **no**
- {{SVGAttr("viewBox")}}
  - : The SVG viewport coordinates for the current SVG fragment.
    _Value type_: **[\<list-of-numbers>](/en-US/docs/Web/SVG/Guides/Content_type#list-of-ts)**; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : The displayed width of the rectangular viewport. (Not the width of its coordinate system.)
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/en-US/docs/Web/SVG/Guides/Content_type#percentage); _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : The displayed x coordinate of the svg container. No effect on outermost `svg` elements.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/en-US/docs/Web/SVG/Guides/Content_type#percentage); _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : The displayed y coordinate of the svg container. No effect on outermost `svg` elements.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/en-US/docs/Web/SVG/Guides/Content_type#percentage); _Default value_: `0`; _Animatable_: **yes**

> [!NOTE]
> Starting with SVG2, `x`, `y`, `width`, and `height` are _Geometry Properties_, meaning these attributes can also be used as CSS properties.

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
