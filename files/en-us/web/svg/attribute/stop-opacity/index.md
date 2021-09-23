---
title: stop-opacity
slug: Web/SVG/Attribute/stop-opacity
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.elements.stop.stop-opacity
---
{{SVGRef}}

The **`stop-opacity`** attribute defines the opacity of a given color gradient stop.

The opacity value used for the gradient calculation is the product of the value of `stop-opacity` and the opacity of the value of the {{SVGAttr("stop-color")}} attribute. For `stop-color` values that don't include explicit opacity information, the opacity is treated as `1`.

> **Note:** As a presentation attribute, `stop-opacity` can be used as a CSS property.

You can use this attribute with the following SVG elements:

*   {{SVGElement("stop")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#opacity_value"
            >&#x3C;opacity-value></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `<opacity-value>`
    *   : This value is either a {{cssxref("number")}} between `0` and `1` or a {{cssxref("percentage")}} value specifying the opacity of the color gradient stop.

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("SVG2", "pservers.html#StopOpacityProperty", "stop-opacity")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Refers to the definition in CSS Colors 3, but allows percentage values.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "pservers.html#StopOpacityProperty", "stop-opacity")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{SVGAttr("stop-color")}}
