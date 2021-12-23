---
title: 'HTMLCanvasElement: webglcontextcreationerror event'
slug: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
tags:
  - WebGL
browser-compat: api.HTMLCanvasElement.webglcontextcreationerror_event
---
{{APIRef}}

The **`webglcontextcreationerror`** event of the [WebGL API](/en-US/docs/Web/API/WebGL_API) is fired if the user agent is unable to create a {{domxref("WebGLRenderingContext")}} context.

This event has a {{domxref("WebGLContextEvent.statusMessage")}} property, which can contain a platform dependent string with more information about the failure.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("WebGLContextEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>none</td>
    </tr>
  </tbody>
</table>

## Example

```js
var canvas = document.getElementById('canvas');

canvas.addEventListener('webglcontextcreationerror', function(e) {
  console.log(e.statusMessage || 'Unknown error');
}, false);

var gl = canvas.getContext('webgl');
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
