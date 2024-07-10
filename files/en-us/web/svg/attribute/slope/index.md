---
title: slope
slug: Web/SVG/Attribute/slope
page-type: svg-attribute
browser-compat: svg.elements.feFuncR.slope
---

{{SVGRef}}

The **`slope`** attribute defines the values for linear filters, such as brightness. The `slope` attribute is suppported by children of the {{SVGElement("feComponentTransfer")}} filter primitive, including the `<feFuncR>`, `<feFuncB>`, `<feFuncG>`, and `<feFuncA>` transfer function. When the `type` of transfer function is `linear`, the `slope` defines the slope of the linear function.

You can use this attribute with the following SVG filter primitive transfer function elements when `type="linear"` is set:

- {{SVGElement("feFuncR")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncA")}}

> ![NOTE]
> Originally, the `slope` attribute was used within {{SVGElement("font-face")}} to indicate the vertical stroke angle of a font. This use case has been deprecated.

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
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

- `<number>`
  - : This value indicates the linear slope of the transfer function.

## Examples

In this example, a gradient box has text with a linear filter applied.

```html
<svg width="8cm" height="4cm" viewBox="0 0 800 400"
  xmlns="http://www.w3.org/2000/svg" version="1.1">
  <title>Examples of feComponentTransfer operations</title>
  <desc>A text strings showing the effects of feComponentTransfer
    using the feComponentTransfer linear option.</desc>
  <defs>
    <linearGradient id="MyGradient" gradientUnits="userSpaceOnUse"
      x1="100" y1="0" x2="600" y2="0">
      <stop offset="0" stop-color="#ff0000" />
      <stop offset="1" stop-color="#0000ff" />
    </linearGradient>
    <filter id="Linear" filterUnits="objectBoundingBox"
       x="0%" y="0%" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="2"/>
        <feFuncG type="linear" slope="25"/>
        <feFuncB type="linear" slope="5"/>
      </feComponentTransfer>
    </filter>
  </defs>
  <rect fill="none" stroke="blue"
    x="1" y="1" width="798" height="398"/>
  <g font-family="Verdana" font-size="200"
    font-weight="bold" fill="url(#MyGradient)">
    <text x="100" y="290" filter="url(#Linear)">Slope</text>
  </g>
</svg>
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
