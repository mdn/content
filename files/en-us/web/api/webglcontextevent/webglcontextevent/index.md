---
title: WebGLContextEvent()
slug: Web/API/WebGLContextEvent/WebGLContextEvent
page-type: web-api-constructor
browser-compat: api.WebGLContextEvent.WebGLContextEvent
---

{{APIRef("WebGL")}}

The **`WebGLContextEvent()`** constructor creates a new {{domxref("WebGLContextEvent")}} object.

> **Note:** A web developer doesn't typically need to call this constructor, as the browser creates these objects itself when firing events.

## Syntax

```js-nolint
new WebGLContextEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `webglcontextcreationerror`, `webglcontextlost`, or `weblcontextrestored`.
- `options` {{Optional_inline}}
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `status` {{Optional_inline}}
      - : A string with some additional status information. It defaults to the empty string (`""`).

### Return value

A new {{domxref("WebGLContextEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`webglcontextlost`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
- [`webglcontextrestored`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
- [`webglcontextcreationerror`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
