---
title: WebGLContextEvent
slug: Web/API/WebGLContextEvent
tags:
  - API
  - Interface
  - Reference
  - WebGL
  - WebGLContextEvent
browser-compat: api.WebGLContextEvent
---
{{APIRef("WebGL")}}

The **WebContextEvent** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and is an interface for an event that is generated in response to a status change to the WebGL rendering context.

{{InheritanceDiagram}}

## Properties

_This interface inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : A read-only property containing additional information about the event.

## Methods

_This interface doesn't define any own methods, but inherits methods from its parent interface, {{domxref("Event")}}._

## Examples

With the help of the {{domxref("WEBGL_lose_context")}} extension, you can simulate the {{Event("webglcontextlost")}} and {{Event("webglcontextrestored")}} events:

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextlost', function(e) {
  console.log(e);
}, false);

gl.getExtension('WEBGL_lose_context').loseContext();

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
