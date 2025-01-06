---
title: <marker>
slug: Web/SVG/Element/marker
page-type: svg-element
browser-compat: svg.elements.marker
---

{{SVGRef}}

The **`<marker>`** [SVG](/en-US/docs/Web/SVG) element defines a graphic used for drawing arrowheads or polymarkers on a given {{SVGElement("path")}}, {{SVGElement("line")}}, {{SVGElement("polyline")}} or {{SVGElement("polygon")}} element.

Markers can be attached to shapes using the {{SVGAttr("marker-start")}}, {{SVGAttr("marker-mid")}}, and {{SVGAttr("marker-end")}} properties.

## Examples

### Drawing arrowheads

The following example shows how to draw an arrowhead on a line and on a curved path.
For the curved path, an arrowhead is drawn at each point with a {{SVGAttr("marker-mid")}} marker.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- A marker to be used as an arrowhead -->
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>

  <!-- A line with a marker -->
  <line
    x1="10"
    y1="10"
    x2="90"
    y2="90"
    stroke="black"
    marker-end="url(#arrow)" />

  <!-- A curved path with markers -->
  <path
    d="M 110 10
       C 120 20, 130 20, 140 10
       C 150 0, 160 0, 170 10
       C 180 20, 190 20, 200 10"
    stroke="black"
    fill="none"
    marker-start="url(#arrow)"
    marker-mid="url(#arrow)"
    marker-end="url(#arrow)" />
</svg>
```

{{EmbedLiveSample('Drawing_arrowheads', 200, 200)}}

### Drawing polymarkers

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Arrowhead marker definition -->
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>

    <!-- Dot marker definition -->
    <marker
      id="dot"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="5"
      markerHeight="5">
      <circle cx="5" cy="5" r="5" fill="red" />
    </marker>
  </defs>

  <!-- Coordinate axes with an arrowhead in both directions -->
  <polyline
    points="10,10 10,90 90,90"
    fill="none"
    stroke="black"
    marker-start="url(#arrow)"
    marker-end="url(#arrow)" />

  <!-- Data line with polymarkers -->
  <polyline
    points="15,80 29,50 43,60 57,30 71,40 85,15"
    fill="none"
    stroke="grey"
    marker-start="url(#dot)"
    marker-mid="url(#dot)"
    marker-end="url(#dot)" />
</svg>
```

{{EmbedLiveSample('Drawing_polymarkers', 200, 200)}}

### Using context fill and stroke

The following example shows how to use the `context-fill` and `context-stroke` values to make a marker use the same fill and stroke as the shape it is attached to.

```html
<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <marker
    id="circle"
    markerWidth="6"
    markerHeight="6"
    refX="3"
    refY="3"
    markerUnits="strokeWidth">
    <circle cx="3" cy="3" r="2" stroke="context-stroke" fill="context-fill" />
  </marker>

  <style>
    path {
      marker: url(#circle);
    }
  </style>

  <path d="M 10,10 30,10 h 10" stroke="black" />
  <path d="M 10,20 30,20 h 10" stroke="blue" fill="red" />
  <path d="M 10,30 30,30 h 10" stroke="red" fill="none" />
  <path d="M 10,40 30,40 h 10" stroke="gray" fill="blue" stroke-width="1.5" />
</svg>
```

```css hidden
html,
body,
svg {
  height: 100%;
}
```

{{EmbedLiveSample('Using_context_fill_and_stroke', 200, 200)}}

## Attributes

- {{SVGAttr("markerHeight")}}
  - : This attribute defines the height of the marker viewport.
    _Value type_: **[\<length>](/en-US/docs/Web/SVG/Content_type#length)** ; _Default value_: `3`; _Animatable_: **yes**
- {{SVGAttr("markerUnits")}}
  - : This attribute defines the coordinate system for the attributes `markerWidth`, `markerHeight` and the contents of the `<marker>`.
    _Value type_: `userSpaceOnUse`|`strokeWidth` ; _Default value_: `strokeWidth`; _Animatable_: **yes**
- {{SVGAttr("markerWidth")}}
  - : This attribute defines the width of the marker viewport.
    _Value type_: **[\<length>](/en-US/docs/Web/SVG/Content_type#length)** ; _Default value_: `3`; _Animatable_: **yes**
- {{SVGAttr("orient")}}
  - : This attribute defines the orientation of the marker relative to the shape it is attached to.
    _Value type_: `auto`|`auto-start-reverse`|**[\<angle>](/en-US/docs/Web/SVG/Content_type#angle)** ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("preserveAspectRatio")}}
  - : This attribute defines how the svg fragment must be deformed if it is embedded in a container with a different {{glossary("aspect ratio")}}.
    _Value type_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Default value_: `xMidYMid meet`; _Animatable_: **yes**
- {{SVGAttr("refX")}}
  - : This attribute defines the x coordinate for the reference point of the marker.
    _Value type_: `left`|`center`|`right`|**[\<coordinate>](/en-US/docs/Web/SVG/Content_type#coordinate)** ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("refY")}}
  - : This attribute defines the y coordinate for the reference point of the marker.
    _Value type_: `top`|`center`|`bottom`|**[\<coordinate>](/en-US/docs/Web/SVG/Content_type#coordinate)** ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("viewBox")}}
  - : This attribute defines the bound of the SVG viewport for the current SVG fragment.
    _Value type_: **[\<list-of-numbers>](/en-US/docs/Web/SVG/Content_type#list-of-ts)** ; _Default value_: none; _Animatable_: **yes**

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related marker properties: {{SVGAttr("marker-start")}}, {{SVGAttr("marker-mid")}}, and {{SVGAttr("marker-end")}}
