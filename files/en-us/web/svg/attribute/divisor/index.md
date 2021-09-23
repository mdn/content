---
title: divisor
slug: Web/SVG/Attribute/divisor
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feConvolveMatrix.divisor
---
{{SVGRef}}

The **`divisor`** attribute specifies the value by which the resulting number of applying the {{SVGAttr("kernelMatrix")}} of a {{SVGElement("feConvolveMatrix")}} element to the input image color value is divided to yield the destination color value.

A divisor that is the sum of all the matrix values tends to have an evening effect on the overall color intensity of the result.

You can use this attribute with the following SVG elements:

*   {{SVGElement("feConvolveMatrix")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="convolveMatrix1" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="1 2 0 0 0 0 0 0 -1" divisor="1"/>
  </filter>
  <filter id="convolveMatrix2" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="1 2 0 0 0 0 0 0 -1" divisor="8"/>
  </filter>

  <image xlink:href="//developer.mozilla.org/files/6457/mdn_logo_only_color.png" width="200" height="200"
      style="filter:url(#convolveMatrix1);"/>
  <image xlink:href="//developer.mozilla.org/files/6457/mdn_logo_only_color.png" width="200" height="200"
      style="filter:url(#convolveMatrix2); transform:translateX(220px);"/>
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        Sum of all values in {{SVGAttr("kernelMatrix")}} or
        <code>1</code> if sum is 0
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `<number>`
    *   : This value defines the divisor. If the specified divisor is `0` then the default value will be used instead.

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
        {{SpecName("Filters 1.0", "#element-attrdef-feconvolvematrix-divisor", "divisor")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feConvolveMatrixElementDivisorAttribute", "divisor")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
