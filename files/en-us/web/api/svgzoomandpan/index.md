---
title: SVGZoomAndPan
slug: Web/API/SVGZoomAndPan
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGZoomAndPan
---
{{deprecated_header}}

The **`SVGZoomAndPan`** interface is used to reflect the {{SVGAttr("zoomAndPan")}} attribute, and is mixed in to other interfaces for elements that support this attribute.

{{InheritanceDiagram}}

## Constants

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>SVG_ZOOMANDPAN_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_ZOOMANDPAN_DISABLE</code></td>
      <td>1</td>
      <td>Corresponds to the value <code>disable</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_ZOOMANDPAN_MAGNIFY</code></td>
      <td>2</td>
      <td>Corresponds to the value <code>magnify</code>.</td>
    </tr>
  </tbody>
</table>

## Properties

- {{domxref("SVGZoomAndPan.zoomAndPan")}}
  - : An unsigned short representing the value of the {{SVGAttr("zoomAndPan")}} attribute.

## Methods

_This interface doesn't implement any specific methods._

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("zoomAndPan")}}
