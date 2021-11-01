---
title: kernelMatrix
slug: Web/SVG/Attribute/kernelMatrix
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feConvolveMatrix.kernelMatrix
---
{{SVGRef}}

The **`kernelMatrix`** attribute defines the list of numbers that make up the kernel matrix for the {{SVGElement("feConvolveMatrix")}} element.

Values are separated by space characters and/or a comma. The number of entries in the list must equal to `<orderX>` by `<orderY>` as defined in the {{SVGAttr("order")}} attribute.

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
    <feConvolveMatrix kernelMatrix="1 1 0 0 0 0 0 0 -1"/>
  </filter>
  <filter id="convolveMatrix2" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="-1 0 0 0 0 0 0 0 1"/>
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
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#List-of-Ts"
            >&#x3C;list of numbers></a
          ></code
        >
      </td>
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

*   `<list of numbers>`
    *   : The list of {{cssxref("number")}}s that make up the kernel matrix for the convolution. Values are separated by space characters and/or a comma. The number of entries in the list must equal `<orderX>` times `<orderY>`.

        If the result of `orderX` \* `orderY` is not equal to the number of entries in the value list, the filter primitive acts as a pass through filter.

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
        {{SpecName("Filters 1.0", "#element-attrdef-feconvolvematrix-kernelmatrix", "kernelMatrix")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feConvolveMatrixElementKernelMatrixAttribute", "kernelMatrix")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
