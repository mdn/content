---
title: DOMPointReadOnly.toJSON()
slug: Web/API/DOMPointReadOnly/toJSON
tags:
  - API
  - Coordinates
  - DOM
  - DOMPointReadOnly
  - Geometry
  - Geometry Interfaces
  - JSON
  - Method
  - Point
  - Reference
  - toJSON
browser-compat: api.DOMPointReadOnly.toJSON
---
{{APIRef("DOM")}}

The {{domxref("DOMPointReadOnly")}} method
`toJSON()` returns an object giving the
{{Glossary("JSON")}} form of the point object.

## Syntax

```js
pointJSON = DOMPointReadOnly.toJSON();
```

### Parameters

None.

### Return value

A new object whose properties are set to the values in the
`DOMPoint` or `DOMPointReadOnly` on which the method was called.

## Example

This example creates a {{domxref("DOMPoint")}} object representing the top-left corner
of the current window, in screen coordinates, then converts that to JSON.

```js
var topLeft = new DOMPoint(window.screenX, window.screenY);

var pointJSON = topLeft.toJSON();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
