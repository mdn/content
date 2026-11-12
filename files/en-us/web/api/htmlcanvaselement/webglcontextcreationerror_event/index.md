---
title: "HTMLCanvasElement: webglcontextcreationerror event"
short-title: webglcontextcreationerror
slug: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
page-type: web-api-event
browser-compat: api.HTMLCanvasElement.webglcontextcreationerror_event
---

{{APIRef("WebGL API")}}

The **`webglcontextcreationerror`** event of the [WebGL API](/en-US/docs/Web/API/WebGL_API) is fired if the user agent is unable to create a {{domxref("WebGLRenderingContext")}} context.

This event has a {{domxref("WebGLContextEvent.statusMessage")}} property, which can contain a platform dependent string with more information about the failure.

This event does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("webglcontextcreationerror", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onwebglcontextcreationerror = (event) => { }
```

## Event type

A {{domxref("WebGLContextEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Example

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("webglcontextcreationerror", (e) => {
  console.log(e.statusMessage || "Unknown error");
});

const gl = canvas.getContext("webgl");
// logs statusMessage or "Unknown error" if unable to create WebGL context
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
