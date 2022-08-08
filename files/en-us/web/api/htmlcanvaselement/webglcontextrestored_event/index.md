---
title: 'HTMLCanvasElement: webglcontextrestored event'
slug: Web/API/HTMLCanvasElement/webglcontextrestored_event
page-type: web-api-event
tags:
  - WebGL
browser-compat: api.HTMLCanvasElement.webglcontextrestored_event
---
{{APIRef}}

The **`webglcontextrestored`** event of the [WebGL API](/en-US/docs/Web/API/WebGL_API) is fired if the user agent restores the drawing buffer for a {{domxref("WebGLRenderingContext")}} object.

Once the context is restored, WebGL resources such as textures and buffers that were created before the context was lost are no longer valid. You need to reinitialize the state of your WebGL application and recreate resources.

This event does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('webglcontextrestored', (event) => {});

onwebglcontextrestored = (event) => { };
```

## Event type

A {{domxref("WebGLContextEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Event properties

_This interface inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : A read-only property containing additional information about the event.

## Example

With the help of the {{domxref("WEBGL_lose_context")}} extension, you can simulate the `webglcontextrestored` event:

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextrestored', (e) => {
  console.log(e);
}, false);

gl.getExtension('WEBGL_lose_context').restoreContext();

// "webglcontextrestored" event is logged.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
