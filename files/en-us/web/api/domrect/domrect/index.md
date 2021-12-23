---
title: DOMRect()
slug: Web/API/DOMRect/DOMRect
tags:
  - API
  - Constructor
  - DOM Reference
  - DOMRect
  - Experimental
  - Geometry
  - Reference
browser-compat: api.DOMRect.DOMRect
---
{{APIRef("DOM")}}{{ SeeCompatTable() }}

The **`DOMRect()`** constructor creates a new {{domxref("DOMRect")}} object.

## Syntax

```js
var myDOMRect = new DOMRect(x, y, width, height);
```

### Parameters

- x
  - : The `x` coordinate of the `DOMRect`'s origin.
- y
  - : The `y` coordinate of the `DOMRect`'s origin.
- width
  - : The width of the `DOMRect`.
- height
  - : The height of the `DOMRect`.

## Examples

To create a new `DOMRect`, you could run a line of code like so:

```js
myDOMRect = new DOMRect(0,0,100,100);
// running 'myDOMRect' in the console would then return
// DOMRect { x: 0, y: 0, width: 100, height: 100, top: 0, right: 100, bottom: 100, left: 0 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
