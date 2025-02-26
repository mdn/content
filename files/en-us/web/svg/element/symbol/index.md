---
title: <symbol>
slug: Web/SVG/Element/symbol
page-type: svg-element
browser-compat: svg.elements.symbol
---

{{SVGRef}}

The **`<symbol>`** [SVG](/en-US/docs/Web/SVG) element is used to define graphical template objects which can be instantiated by a {{SVGElement("use")}} element.

The use of `<symbol>` elements for graphics that are used multiple times in the same document adds structure and semantics. Documents that are rich in structure may be rendered graphically, as speech, or as Braille, and thus promote accessibility.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg">
  <!-- Our symbol in its own coordinate system -->
  <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" />
  </symbol>

  <!-- A grid to materialize our symbol positioning -->
  <path
    d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20"
    fill="none"
    stroke="pink" />

  <!-- All instances of our symbol -->
  <use href="#myDot" x="5" y="5" style="opacity:1.0" />
  <use href="#myDot" x="20" y="5" style="opacity:0.8" />
  <use href="#myDot" x="35" y="5" style="opacity:0.6" />
  <use href="#myDot" x="50" y="5" style="opacity:0.4" />
  <use href="#myDot" x="65" y="5" style="opacity:0.2" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

- {{SVGAttr("height")}}
  - : This attribute determines the height of the symbol.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("preserveAspectRatio")}}
  - : This attribute defines how the svg fragment must be deformed if it is embedded in a container with a different {{glossary("aspect ratio")}}.
    _Value type_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Default value_: `xMidYMid meet`; _Animatable_: **yes**
- {{SVGAttr("refX")}}
  - : This attribute determines the x coordinate of the reference point of the symbol.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|`left`|`center`|`right` ; _Default value_: None; _Animatable_: **yes**
- {{SVGAttr("refY")}}
  - : This attribute determines the y coordinate of the reference point of the symbol.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|`top`|`center`|`bottom` ; _Default value_: None; _Animatable_: **yes**
- {{SVGAttr("viewBox")}}
  - : This attribute defines the bound of the SVG viewport for the current symbol.
    _Value type_: **[\<list-of-numbers>](/en-US/docs/Web/SVG/Content_type#list-of-ts)** ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : This attribute determines the width of the symbol.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : This attribute determines the x coordinate of the symbol.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : This attribute determines the y coordinate of the symbol.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `0`; _Animatable_: **yes**

## Usage context

{{svginfo}}

> [!NOTE]
> A `<symbol>` element itself is not meant to be rendered. Only instances of a `<symbol>` element (i.e., a reference to a `<symbol>` by a {{SVGElement("use")}} element) are rendered. That means that some browsers could refuse to directly display a `<symbol>` element even if the CSS {{cssxref('display')}} property tells otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
