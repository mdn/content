---
title: WebGLContextEvent
slug: Web/API/WebGLContextEvent
page-type: web-api-interface
browser-compat: api.WebGLContextEvent
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **WebGLContextEvent** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and is an interface for an event that is generated in response to a status change to the WebGL rendering context.

{{InheritanceDiagram}}

## Constructor

- {{domxref("WebGLContextEvent.WebGLContextEvent", "WebGLContextEvent()")}}
  - : Creates a new `WebGLContextEvent` object.

## Instance properties

_This interface inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : A read-only property containing additional information about the event.

## Instance methods

_This interface doesn't define any own methods, but inherits methods from its parent interface, {{domxref("Event")}}._

## Examples

With the help of the {{domxref("WEBGL_lose_context")}} extension, you can simulate the {{domxref("HTMLCanvasElement/webglcontextlost_event", "webglcontextlost")}} and {{domxref("HTMLCanvasElement/webglcontextrestored_event", "webglcontextrestored")}} events:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener(
  "webglcontextlost",
  (e) => {
    console.log(e);
  },
  false,
);

gl.getExtension("WEBGL_lose_context").loseContext();

// WebGLContextEvent event with type "webglcontextlost" is logged.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
- Events: [webglcontextlost](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event), [webglcontextrestored](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event), [webglcontextcreationerror](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
