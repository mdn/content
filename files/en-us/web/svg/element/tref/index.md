---
title: <tref>
slug: Web/SVG/Element/tref
page-type: svg-element
status:
  - deprecated
browser-compat: svg.elements.tref
---

{{SVGRef}}{{deprecated_header}}

The textual content for a {{SVGElement("text")}} [SVG](/en-US/docs/Web/SVG) element can be either character data directly embedded within the {{SVGElement("text")}} element or the character data content of a referenced element, where the referencing is specified with a **`<tref>`** element.

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

### Specific attributes

- {{SVGAttr("xlink:href")}}

## DOM Interface

This element implements the {{domxref("SVGTRefElement")}} interface.

## Example

```xml
<svg width="100%" height="100%" viewBox="0 0 1000 300"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <text id="ReferencedText">
      Referenced character data
    </text>
  </defs>

  <text x="100" y="100" font-size="45" >
    Inline character data
  </text>

  <text x="100" y="200" font-size="45" fill="red" >
    <tref xlink:href="#ReferencedText"/>
  </text>

  <!-- Show outline of canvas using 'rect' element -->
  <rect x="1" y="1" width="998" height="298"
        fill="none" stroke-width="2" />
</svg>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("text")}}
