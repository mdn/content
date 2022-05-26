---
title: scale
slug: Web/SVG/Attribute/scale
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feDisplacementMap.scale
---
{{SVGRef}}

The **`scale`** attribute defines the displacement scale factor to be used on a {{SVGElement("feDisplacementMap")}} filter primitive. The amount is expressed in the coordinate system established by the {{SVGAttr("primitiveUnits")}} attribute on the {{SVGElement("filter")}} element.

You can use this attribute with the following SVG elements:

- {{SVGElement("feDisplacementMap")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="5"/>
  </filter>
  <filter id="displacementFilter2" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50"/>
  </filter>

  <circle cx="100" cy="100" r="80" style="filter: url(#displacementFilter);""/>
  <circle cx="100" cy="100" r="80" style="filter: url(#displacementFilter2); transform: translateX(240px);""/>
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : This value defines the scale factor for the displacement.

    When the value of this attribute is `0`, this operation has no effect on the source image.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
