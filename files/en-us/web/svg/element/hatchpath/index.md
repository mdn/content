---
title: <hatchpath>
slug: Web/SVG/Element/hatchpath
tags:
  - Element
  - Experimental
  - Filters
  - Reference
  - SVG
browser-compat: svg.elements.hatchpath
---
{{SVGRef}}{{SeeCompatTable}}

The **`<hatchpath>`** [SVG](/en-US/docs/Web/SVG) element defines a hatch path used by the {{SVGElement("hatch")}} element.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

*   [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
*   [Global event attributes](/en-US/docs/Web/SVG/Attribute#global_event_attributes)
*   [Presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes)
*   [Style attributes](/en-US/docs/Web/SVG/Attribute#style_attributes)

### Specific attributes

*   {{SVGAttr("d")}}
*   {{SVGAttr("offset")}}

## DOM Interface

This element implements the {{domxref("SVGHatchpathElement")}} interface.

## Example

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <hatch id="hatch" hatchUnits="userSpaceOnUse" pitch="5"
        rotate="135">
      <hatchpath stroke="#a080ff" stroke-width="2"/>
    </hatch>
  </defs>

  <rect fill="url(#hatch)" stroke="black" stroke-width="2"
     x="10%" y="10%" width="80%" height="80%" />
</svg>
```

### Result

{{EmbedLiveSample("Example", 200, 200)}}

## Browser compatibility

{{Compat}}

## See also

*   {{SVGElement("hatch")}}
