---
title: DOMPointReadOnly.toJSON()
slug: Web/API/DOMPointReadOnly/toJSON
page-type: web-api-instance-method
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
toJSON()
```

### Parameters

None.

### Return value

A new object whose properties are set to the values in the
`DOMPoint` or `DOMPointReadOnly` on which the method was called.

## Examples

This example creates a {{domxref("DOMPoint")}} object representing the top-left corner
of the current window, in screen coordinates, then converts that to JSON.

```js
const topLeft = new DOMPoint(window.screenX, window.screenY);

const pointJSON = topLeft.toJSON();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
