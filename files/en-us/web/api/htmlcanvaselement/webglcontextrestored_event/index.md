---
title: 'HTMLCanvasElement: webglcontextrestored event'
slug: Web/API/HTMLCanvasElement/webglcontextrestored_event
tags:
  - WebGL
browser-compat: api.HTMLCanvasElement.webglcontextrestored_event
---
{{APIRef}}

The **`webglcontextrestored`** event of the [WebGL API](/en-US/docs/Web/API/WebGL_API) is fired if the user agent restores the drawing buffer for a {{domxref("WebGLRenderingContext")}} object.

Once the context is restored, WebGL resources such as textures and buffers that were created before the context was lost are no longer valid. You need to reinitialize the state of your WebGL application and recreate resources.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
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

With the help of the {{domxref("WEBGL_lose_context")}} extension, you can simulate the `webglcontextrestored` event:

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextrestored', function(e) {
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
