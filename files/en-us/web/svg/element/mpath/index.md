---
title: <mpath>
slug: Web/SVG/Element/mpath
page-type: svg-element
browser-compat: svg.elements.mpath
---

{{SVGRef}}

The **`<mpath>`** sub-element for the {{SVGElement("animateMotion")}} element provides the ability to reference an external {{SVGElement("path")}} element as the definition of a motion path.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
- [Xlink attributes](/en-US/docs/Web/SVG/Attribute#xlink_attributes)

### Specific attributes

- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM Interface

This element implements the {{domxref("SVGMPathElement")}} interface.

## Example

### SVG

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 500 300"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect
    x="1"
    y="1"
    width="498"
    height="298"
    fill="none"
    stroke="blue"
    stroke-width="2" />

  <!-- Draw the outline of the motion path in blue, along
          with three small circles at the start, middle and end. -->
  <path
    id="path1"
    d="M100,250 C 100,50 400,50 400,250"
    fill="none"
    stroke="blue"
    stroke-width="7.06" />
  <circle cx="100" cy="250" r="17.64" fill="blue" />
  <circle cx="250" cy="100" r="17.64" fill="blue" />
  <circle cx="400" cy="250" r="17.64" fill="blue" />

  <!-- Here is a triangle which will be moved about the motion path.
       It is defined with an upright orientation with the base of
       the triangle centered horizontally just above the origin. -->
  <path
    d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
    fill="yellow"
    stroke="red"
    stroke-width="7.06">
    <!-- Define the motion path animation -->
    <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
      <mpath href="#path1" />
    </animateMotion>
  </path>
</svg>
```

### Result

{{EmbedLiveSample("Example", 250, 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("animateMotion")}}
