---
title: stdDeviation
slug: Web/SVG/Attribute/stdDeviation
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feGaussianBlur.stdDeviation
---
{{SVGRef}}

The **`stdDeviation`** attribute defines the standard deviation for the blur operation.

You can use this attribute with the following SVG elements:

- {{SVGElement("feGaussianBlur")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="gaussianBlur1">
    <feGaussianBlur stdDeviation="1" />
  </filter>
  <filter id="gaussianBlur2">
    <feGaussianBlur stdDeviation="5" />
  </filter>
  <filter id="gaussianBlur3" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="10" />
  </filter>

  <circle cx="100" cy="100" r="50" style="filter: url(#gaussianBlur1);" />
  <circle cx="100" cy="100" r="50" style="filter: url(#gaussianBlur2); transform: translateX(140px);" />
  <circle cx="100" cy="100" r="50" style="filter: url(#gaussianBlur3); transform: translateX(280px);" />
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
          ><a href="/en-US/docs/Web/SVG/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`
  - : If two numbers are provided, the first number represents a standard deviation value along the x-axis. The second value represents a standard deviation along the y-axis. If one number is provided, then that value is used for both X and Y.

    A negative value is forbidden. A value of zero disables the effect of the given filter primitive (i.e., the result is the filter input image). If `stdDeviation` is 0 in only one of X or Y, then the effect is that the blur is only applied in the direction that has a non-zero value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
