---
title: "HTMLCanvasElement: webglcontextlost event"
short-title: webglcontextlost
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
page-type: web-api-event
browser-compat: api.HTMLCanvasElement.webglcontextlost_event
---

{{APIRef("WebGL API")}}

The **`webglcontextlost`** event of the [WebGL API](/en-US/docs/Web/API/WebGL_API) is fired if the user agent detects that the drawing buffer associated with a {{domxref("WebGLRenderingContext")}} object has been lost.

This event does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("webglcontextlost", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onwebglcontextlost = (event) => { }
```

## Event type

A {{domxref("WebGLContextEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Example

With the help of the {{domxref("WEBGL_lose_context")}} extension, you can simulate the `webglcontextlost` event:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (event) => {
  console.log(event);
});

gl.getExtension("WEBGL_lose_context").loseContext();

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
