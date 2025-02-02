---
title: "SVGRect: width property"
short-title: width
slug: Web/API/SVGRect/width
page-type: web-api-instance-property
browser-compat: api.SVGRect.width
---

{{APIRef("SVG")}}

The **`width`** property of the {{domxref("SVGRect")}} interface is an alias for the {{DOMXref("DOMRect.width")}} property. It describes the horizontal size of the element. It reflects the SVG element's {{SVGattr("width")}} attribute and the CSS {{cssxref("width")}} property.

The width is a length; it is the distance from the left of element to the right of the element in the the user coordinate system. Its syntax is the same as that for [`<length>`](/en-US/docs/Web/SVG/Content_type#length).

## Usage context

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>width</th>
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

- {{DOMXref("DOMRect.width")}}
- {{domxref("SVGRect.height")}}
