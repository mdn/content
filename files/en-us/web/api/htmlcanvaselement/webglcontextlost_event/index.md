---
title: 'HTMLCanvasElement: webglcontextlost event'
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - WebGL
browser-compat: api.HTMLCanvasElement.webglcontextlost_event
---
{{APIRef}}

The **`webglcontextlost`** event of the [WebGL API](/en-US/docs/Web/API/WebGL_API) is fired if the user agent detects that the drawing buffer associated with a {{domxref("WebGLRenderingContext")}} object has been lost.

This event does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('webglcontextlost', (event) => {});

onwebglcontextlost = (event) => { };
```

## Event type

A {{domxref("WebGLContextEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Event properties

_This interface inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : A read-only property containing additional information about the event.

## Example

With the help of the {{domxref("WEBGL_lose_context")}} extension, you can simulate the `webglcontextlost` event:

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextlost', (event) => {
  console.log(event);
});

gl.getExtension('WEBGL_lose_context').loseContext();

// "webglcontextlost" event is logged.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
