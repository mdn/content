---
title: <marker>
slug: Web/SVG/Element/marker
tags:
  - Element
  - SVG
  - SVG Container
browser-compat: svg.elements.marker
---
{{SVGRef}}

The **`<marker>`** element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given {{SVGElement("path")}}, {{SVGElement("line")}}, {{SVGElement("polyline")}} or {{SVGElement("polygon")}} element.

Markers are attached to shapes using the {{SVGAttr("marker-start")}}, {{SVGAttr("marker-mid")}}, and {{SVGAttr("marker-end")}} properties.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- arrowhead marker definition -->
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>

    <!-- simple dot marker definition -->
    <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="5" markerHeight="5">
      <circle cx="5" cy="5" r="5" fill="red" />
    </marker>
  </defs>

  <!-- Coordinate axes with a arrowhead in both direction -->
  <polyline points="10,10 10,90 90,90" fill="none" stroke="black"
   marker-start="url(#arrow)" marker-end="url(#arrow)" />

  <!-- Data line with polymarkers -->
  <polyline points="15,80 29,50 43,60 57,30 71,40 85,15" fill="none" stroke="grey"
   marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)" />
</svg>
```

{{EmbedLiveSample('Example', 200, 200)}}

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
  - : This attribute defines how the svg fragment must be deformed if it is embedded in a container with a different aspect ratio.
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

### Global attributes

- [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/en-US/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related marker properties: {{SVGAttr("marker-start")}}, {{SVGAttr("marker-mid")}}, and {{SVGAttr("marker-end")}}
