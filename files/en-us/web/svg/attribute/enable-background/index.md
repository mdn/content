---
title: enable-background
slug: Web/SVG/Attribute/enable-background
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.attributes.presentation.enable-background
---

{{SVGRef}}{{Deprecated_Header}}

The **`enable-background`** attribute specifies how the accumulation of the background image is managed.

> **Note:** As a presentation attribute, `enable-background` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}
- {{SVGElement("defs")}}
- {{SVGElement("glyph")}}
- {{SVGElement("g")}}
- {{SVGElement("marker")}}
- {{SVGElement("mask")}}
- {{SVGElement("missing-glyph")}}
- {{SVGElement("pattern")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("symbol")}}

## Context notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>accumulate</code> | <code>new</code> [ <code>&#x3C;x></code>
        <code>&#x3C;y></code> <code>&#x3C;width></code>
        <code>&#x3C;height></code> ]?
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>accumulate</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `accumulate`

  - : If an ancestor container element has a property value of `enable-background: new`, then all graphics elements within the current container element are rendered both onto the parent container element's background image canvas and onto the target device.

    Otherwise, there is no current background image canvas, so graphics elements are only rendered onto the target device.

- `new [ <x> <y> <width> <height> ]?`

  - : This value enables the ability of children of the current container element to access the background image.

    It also indicates that a new (i.e., initially transparent black) background image canvas is established and that in effect all children of the current container element shall be rendered into the new background image canvas in addition to being rendered onto the target device.

    The optional `<x>`, `<y>`, `<width>`, and `<height>` parameters are [`<number>`](/en-US/docs/Web/SVG/Content_type#number) values that indicate the subregion of the container element's user space where access to the background image is allowed to happen. Those values act as a clipping rectangle on the background image canvas.
    Negative values for `<width>` or `<height>` are forbidden. If one, two, or three values are specified or if neither `<width>` nor `<height>` are specified, the `BackgroundImage` and `BackgroundAlpha` of a filter primitive are processed as if background image processing were not enabled.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
