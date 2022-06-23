---
title: spacing
slug: Web/SVG/Attribute/spacing
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.elements.textPath.spacing
---
{{SVGRef}}

The **`spacing`** attribute indicates how the user agent should determine the spacing between typographic characters that are to be rendered along a path.

You can use this attribute with the following SVG elements:

- {{SVGElement("textPath")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>auto</code> | <code>exact</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>exact</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : This value indicates that the user agent should use text-on-a-path layout algorithms to adjust the spacing between typographic characters in order to achieve visually appealing results.
- `exact`
  - : This value indicates that the typographic characters should be rendered exactly according to the spacing rules as specified by the layout rules for text-on-a-path.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
