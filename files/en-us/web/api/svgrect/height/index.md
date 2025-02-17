---
title: "SVGRect: height property"
short-title: height
slug: Web/API/SVGRect/height
page-type: web-api-instance-property
browser-compat: api.SVGRect.height
---

{{APIRef("SVG")}}

The **`height`** property of the {{domxref("SVGRect")}} interface is an alias for the {{DOMXref("DOMRect.height")}} property. It describes the vertical size of the element. It reflects the SVG element's {{SVGattr("height")}} attribute and the CSS {{cssxref("height")}} property.

The height is a length; it is the distance from the top of element to the bottom of the element in the user coordinate system. Its syntax is the same as that for [`<length>`](/en-US/docs/Web/SVG/Content_type#length).

## Usage context

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>height</th>
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

- {{DOMXref("DOMRect.height")}}
- {{domxref("SVGRect.width")}}
