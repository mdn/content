---
title: <animateColor>
slug: Web/SVG/Element/animateColor
tags:
  - Deprecated
  - Element
  - SVG
  - SVG Animation
browser-compat: svg.elements.animateColor
---
{{SVGRef}}{{deprecated_header}}

> **Warning:** This element has been deprecated in SVG 1.1 Second Edition and may be removed in a future version of SVG. It provides no features not already available by using the {{SVGElement("animate")}} element. So, authors should use the `<animate>` element instead.

The **`<animateColor>`** [SVG](/en-US/docs/Web/SVG) element specifies a color transformation over time.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

*   [Conditional processing attributes](/en-US/docs/Web/SVG/Attribute#conditional_processing_attributes)
*   [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
*   [Animation event attributes](/en-US/docs/Web/SVG/Attribute#animation_event_attributes)
*   [Xlink attributes](/en-US/docs/Web/SVG/Attribute#xlink_attributes)
*   [Animation attribute target attributes](/en-US/docs/Web/SVG/Attribute#animation_attribute_target_attributes)
*   [Animation timing attributes](/en-US/docs/Web/SVG/Attribute#animation_timing_attributes)
*   [Animation value attributes](/en-US/docs/Web/SVG/Attribute#animation_value_attributes)
*   [Animation addition attributes](/en-US/docs/Web/SVG/Attribute#animation_addition_attributes)

### Specific attributes

*   {{SVGAttr("by")}}
*   {{SVGAttr("from")}}
*   {{SVGAttr("to")}}

## DOM Interface

This element implements the {{domxref("SVGAnimateColorElement")}} interface.

## Example

### SVG

```html
<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50">
    <animateColor attributeName="fill" attributeType="XML"
        from="black" to="red" dur="6s" repeatCount="indefinite"/>
  </circle>
</svg>
```

### Result

{{EmbedLiveSample("Example", 120, 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

*   {{SVGElement("animate")}}
