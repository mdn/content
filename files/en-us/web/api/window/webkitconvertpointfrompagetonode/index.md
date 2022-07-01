---
title: Window.convertPointFromPageToNode()
slug: Web/API/Window/webkitConvertPointFromPageToNode
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Non-standard
  - Point
  - Reference
  - Safari
  - WebKit
  - Window
  - convertPointFromPageToNode
browser-compat: api.Window.convertPointFromPageToNode
---
{{APIRef}}

{{Non-standard_header}}

Given a {{domxref("WebKitPoint")}} specified in the page's coordinate system, the
{{domxref("Window")}} method **`convertPointFromPageToNode()`**
returns a `Point` object specifying the same location in the coordinate
system of the specified DOM {{domxref("Node")}}.

> **Warning:** Please review the [Browser compatibility](#browser_compatibility) section before using this method,
> as it's not widely supported (nor is the {{domxref("WebKitPoint")}} object it uses).

## Syntax

```js
convertPointFromPageToNode(node, pagePoint)
```

### Parameters

- `node`
  - : The {{domxref("Node")}} into whose coordinate system the point is to be converted.
- `pagePoint`
  - : A {{domxref("WebKitPoint")}} object specifying a point in the coordinate system of the
    page, which is to be converted into the node's coordinate system.

### Return value

A `Point` object describing the specified location in the node's coordinate
system.

## Specifications

This method was specified in [the defunct 20 March 2009 Working Draft of CSS 2D Transforms Module Level 3](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/). It is not present in the
current CSS Transforms Module Level 1 Working Draft.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.webkitConvertPointFromNodeToPage")}}
- Mozilla implementation bug: {{bug(850808)}}
- [`webkitConvertPointFromPageToNode` documentation at IE Dev Center](<https://msdn.microsoft.com/library/ie/dn760735(v=vs.85).aspx>)
