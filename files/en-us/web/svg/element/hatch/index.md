---
title: <hatch>
slug: Web/SVG/Element/hatch
tags:
  - Element
  - Experimental
  - Filters
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Reference
  - SVG
browser-compat: svg.elements.hatch
---
{{SVGRef}}{{SeeCompatTable}}

The **`<hatch>`** [SVG](/en-US/docs/Web/SVG) element is used to fill or stroke an object using one or more pre-defined paths that are repeated at fixed intervals in a specified direction to cover the areas to be painted.

Hatches defined by the `<hatch>` element can then referenced by the {{SVGAttr("fill")}} and {{SVGAttr("stroke")}} {{Glossary("CSS")}} properties on a given [graphics element](/en-US/docs/Web/SVG/Element#graphics_elements) to indicate that the given element shall be filled or stroked with the hatch. Paths are defined by {{SVGElement("hatchpath")}} elements.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

*   [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
*   [Global event attributes](/en-US/docs/Web/SVG/Attribute#global_event_attributes)
*   [Presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes)
*   [Style attributes](/en-US/docs/Web/SVG/Attribute#style_attributes)

### Specific attributes

*   {{SVGAttr("x")}}
*   {{SVGAttr("y")}}
*   {{SVGAttr("pitch")}}
*   {{SVGAttr("rotate")}}
*   {{SVGAttr("hatchUnits")}}
*   {{SVGAttr("hatchContentUnits")}}
*   {{SVGAttr("transform")}}
*   {{SVGAttr("href")}}

## DOM Interface

This element implements the {{domxref("SVGHatchElement")}} interface.

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

*   {{SVGElement("hatchpath")}}
