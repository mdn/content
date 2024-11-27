---
title: <animateTransform>
slug: Web/SVG/Element/animateTransform
page-type: svg-element
browser-compat: svg.elements.animateTransform
---

{{SVGRef}}

The **`<animateTransform>`** [SVG](/en-US/docs/Web/SVG) element animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.

## Usage context

{{svginfo}}

## Example

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <polygon points="60,30 90,90 30,90">
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      from="0 60 70"
      to="360 60 70"
      dur="10s"
      repeatCount="indefinite" />
  </polygon>
</svg>
```

{{ EmbedLiveSample('Example','120','120') }}

## Attributes

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## DOM Interface

This element implements the [`SVGAnimateTransformElement`](/en-US/docs/Web/API/SVGAnimateTransformElement) interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
