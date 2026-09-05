---
title: async
slug: Web/SVG/Reference/Attribute/async
page-type: svg-attribute
browser-compat: svg.elements.script.async
sidebar: svgref
---

The **`async`** attribute accepts a boolean value that controls how the script is parsed and executed. If present it will execute differently depending on the script type:

- For classic script, the script will be fetched in parallel to parsing and evaluated as soon as it is available.
- For [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules), the script will be fetched with all its dependencies in parallel to parsing and evaluated as soon as they are available.

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>Boolean</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Example

```html
<svg viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
  <script href="example.js" async></script>
</svg>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("script")}}
- {{domxref("SVGScriptElement.async")}}
