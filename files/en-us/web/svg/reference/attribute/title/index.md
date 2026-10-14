---
title: title
slug: Web/SVG/Reference/Attribute/title
page-type: svg-attribute
browser-compat: svg.elements.style.title
sidebar: svgref
---

The **`title`** attribute specifies a consultative title for an SVG element. When used on a {{SVGElement("style")}} element, it acts as an identifier used to expose and select between alternate style sheets. You can use this attribute with the following SVG elements:

- {{SVGElement("style")}}

## Example

```html
<svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
  <style title="Default Style">
    circle {
      fill: gold;
    }
  </style>
  <circle cx="10" cy="10" r="5" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>None</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("style")}}
