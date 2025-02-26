---
title: "SVGRect: y property"
short-title: y
slug: Web/API/SVGRect/y
page-type: web-api-instance-property
browser-compat: api.SVGRect.y
---

{{APIRef("SVG")}}

The **`y`** property of the {{domxref("SVGRect")}} interface is an alias for the {{DOMXref("DOMRect.y")}} property. It describes the vertical coordinate of the position of the element. It reflects the SVG element's {{SVGattr("y")}} attribute and the CSS {{cssxref("y")}} property.

A `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the relevant axis (the y-axis for Y coordinates, the x-axis for X coordinates). Its syntax is the same as that for [`<length>`](/en-US/docs/Web/SVG/Content_type#length).

## Usage context

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>y</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Value</td>
      <td>
        <code>
        <a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a
        > | <a href="/en-US/docs/Web/SVG/Content_type#percentage"
          >&#x3C;percentage></a
        >
        </code>
      </td>
    </tr>
    <tr>
      <td>Initial</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Applies to</td>
      <td>
        {{ SVGElement("mask") }},
        {{ SVGElement("svg") }},
        {{ SVGElement("rect") }},
        {{ SVGElement("image") }},
        {{ SVGElement("foreignObject") }}
      </td>
    </tr>
    <tr>
      <td>Inherited</td>
      <td>no</td>
    </tr>
    <tr>
      <td>Percentages</td>
      <td>
        refer to the size of the SVG viewport
      </td>
    </tr>
    <tr>
      <td>Media</td>
      <td>visual</td>
    </tr>
    <tr>
      <td>Computed value</td>
      <td>absolute length or percentage</td>
    </tr>
    <tr>
      <td>Animatable</td>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("DOMRect.y")}}
- {{domxref("SVGRect.x")}}
