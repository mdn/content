---
title: "HTMLCanvasElement: webglcontextcreationerror event"
short-title: webglcontextcreationerror
slug: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
page-type: web-api-event
browser-compat: api.HTMLCanvasElement.webglcontextcreationerror_event
---

{{APIRef}}

The **`webglcontextcreationerror`** event of the [WebGL API](/en-US/docs/Web/API/WebGL_API) is fired if the user agent is unable to create a {{domxref("WebGLRenderingContext")}} context.

This event has a {{domxref("WebGLContextEvent.statusMessage")}} property, which can contain a platform dependent string with more information about the failure.

This event does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("webglcontextcreationerror", (event) => {});

onwebglcontextcreationerror = (event) => {};
```

## Event type

A {{domxref("WebGLContextEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Event properties

_This interface inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : A read-only property containing additional information about the event.

## Example

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener(
  "webglcontextcreationerror",
  (e) => {
    console.log(e.statusMessage || "Unknown error");
  },
  false,
);

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
