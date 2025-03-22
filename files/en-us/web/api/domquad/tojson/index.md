---
title: "DOMQuad: toJSON() method"
short-title: toJSON()
slug: Web/API/DOMQuad/toJSON
page-type: web-api-instance-method
browser-compat: api.DOMQuad.toJSON
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The {{domxref("DOMQuad")}} method
`toJSON()` returns a
{{Glossary("JSON")}} representation of the `DOMQuad` object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A new object whose properties are set to the values in the
`DOMQuad` on which the method was called.

## Examples

This example creates a {{domxref("DOMQuad")}} with four {{domxref("DOMPoint")}} objects representing the corners of the current window, in screen coordinates, then converts that to JSON.

```js
const topLeft = new DOMPoint(window.screenX, window.screenY);
const topRight = new DOMPoint(
  window.screenX + window.innerWidth,
  window.screenY,
);
const bottomLeft = new DOMPoint(
  window.screenX,
  window.screenY + window.innerHeight,
);
const bottomRight = new DOMPoint(
  window.screenX + window.innerWidth,
  window.screenY + window.innerHeight,
);

const quad = new DOMQuad(topLeft, topRight, bottomRight, bottomLeft);

const quadJSON = quad.toJSON();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
