---
title: "Window: webkitConvertPointFromPageToNode() method"
short-title: webkitConvertPointFromPageToNode()
slug: Web/API/Window/webkitConvertPointFromPageToNode
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.Window.webkitConvertPointFromPageToNode
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

Given a {{domxref("WebKitPoint")}} specified in the page's coordinate system, the
{{domxref("Window")}} method **`webkitConvertPointFromPageToNode()`**
returns a `Point` object specifying the same location in the coordinate
system of the specified DOM {{domxref("Node")}}.

> [!WARNING]
> Please review the [Browser compatibility](#browser_compatibility) section before using this method,
> as it's not widely supported (nor is the {{domxref("WebKitPoint")}} object it uses).

## Syntax

```js-nolint
webkitConvertPointFromPageToNode(node, pagePoint)
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
- Mozilla implementation bug: [Firefox bug 850808](https://bugzil.la/850808)
