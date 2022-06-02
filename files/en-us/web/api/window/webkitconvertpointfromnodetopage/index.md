---
title: Window.convertPointFromNodeToPage()
slug: Web/API/Window/webkitConvertPointFromNodeToPage
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - Method
  - Non-standard
  - Point
  - Reference
  - Safari
  - WebKit
  - Window
browser-compat: api.Window.convertPointFromNodeToPage
---
{{APIRef}}

{{Non-standard_header}}

Given a {{domxref("WebKitPoint")}} specified in a particular DOM {{domxref("Node")}}'s
coordinate system, the {{domxref("Window")}} method
**`convertPointFromNodeToPage()`** returns a `Point`
which specifies the same position in the page's coordinate system. This method is
non-standard and _should not be used_.

> **Warning:** Please review the [Browser compatibility](#browser_compatibility) section before using this method,
> as it's not widely supported (nor is the {{domxref("WebKitPoint")}} object it uses).

## Syntax

```js
convertPointFromNodeToPage(node, nodePoint)
```

### Parameters

- `node`
  - : The {{domxref("Node")}} in whose coordinate system the `Point` specified
    by `nodePoint` is described.
- `nodePoint`
  - : A {{domxref("WebKitPoint")}} object describing a point in `node`'s coordinate
    system; this point will be converted to the page's coordinate system.

### Return value

A {{domxref("WebKitPoint")}} object specifying a point in the page's coordinate system.

## Specifications

This method was specified in [the defunct 20 March 2009 Working Draft of CSS 2D Transforms Module Level 3](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/). It is not present in the
current CSS Transforms Module Level 1 Working Draft.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.webkitConvertPointFromPageToNode")}}
- Mozilla implementation bug: {{bug(850806)}}
