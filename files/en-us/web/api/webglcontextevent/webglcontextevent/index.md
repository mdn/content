---
title: "WebGLContextEvent: WebGLContextEvent() constructor"
short-title: WebGLContextEvent()
slug: Web/API/WebGLContextEvent/WebGLContextEvent
page-type: web-api-constructor
browser-compat: api.WebGLContextEvent.WebGLContextEvent
---

{{APIRef("WebGL")}}

The **`WebGLContextEvent()`** constructor creates a new {{domxref("WebGLContextEvent")}} object.

> **Note:** You typically don't need to call this constructor; the browser creates these objects automatically when WebGL context events get fired. To manually trigger a `webglcontextlost` event, use {{domxref("WEBGL_lose_context.loseContext()")}}.

## Syntax

```js-nolint
new WebGLContextEvent(type, options)
```

### Parameters

- `type`
  - : A string indicating the type of the event.
    It is case-sensitive and should be one of `webglcontextcreationerror`, `webglcontextlost`, or `webglcontextrestored`.
- `options` {{Optional_inline}}
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `statusMessage` {{Optional_inline}}
      - : A string with additional status information. It defaults to the empty string (`""`).

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
