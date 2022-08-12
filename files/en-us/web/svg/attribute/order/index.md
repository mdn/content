---
title: order
slug: Web/SVG/Attribute/order
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feConvolveMatrix.order
---
{{SVGRef}}

The **`order`** attribute indicates the size of the matrix to be used by a {{SVGElement("feConvolveMatrix")}} element.

You can use this attribute with the following SVG elements:

- {{SVGElement("feConvolveMatrix")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="emboss1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="0" />
    <feConvolveMatrix kernelMatrix="3 0 0 -4" order="2"/>
  </filter>
  <filter id="emboss2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="0" />
    <feConvolveMatrix kernelMatrix="3 0 0 0 0 0 0 0 -4" order="3"/>
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter:url(#emboss1);" />
  <rect x="0" y="0" width="200" height="200" style="filter:url(#emboss2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>3</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`
  - : This value indicates the number of cells in each dimension for the kernel matrix. The values provided must be {{cssxref("integer")}}s greater than zero. Values that are not integers will be truncated, i.e. rounded to the closest integer value towards zero. The first number, indicates the number of columns in the matrix. The second number, indicates the number of rows in the matrix. If no second number is not provided, it defaults to the first number.

      It is recommended that only small values (e.g., 3) be used; higher values may result in very high CPU overhead and usually do not produce results that justify the impact on performance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
