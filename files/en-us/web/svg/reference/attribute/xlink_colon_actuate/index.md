---
title: xlink:actuate
slug: Web/SVG/Reference/Attribute/xlink:actuate
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.elements.a.xlink_actuate
sidebar: svgref
---

The **`xlink:actuate`** attribute defines the timing of traversal from the source resource to the destination resource.

> [!NOTE]
> SVG 2 removed the need for the `xlink` namespace. The `xlink:actuate` attribute is obsolete and should not be used in modern SVG content.

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>onLoad</code> | <code>onRequest</code> | <code>other</code> | <code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>onRequest</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `onLoad`
  - : Will traverse to the destination resource immediately on the source resource load.
- `onRequest`
  - : Will traverse from the source resource to the destination resource when the user triggers an event after the source resource has loaded.
- `other`
  - : Behavior other than `onLoad` or `onRequest`.
- `none`
  - : Does not traverse to the destination resource.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("href")}}
- {{SVGElement("a")}}
