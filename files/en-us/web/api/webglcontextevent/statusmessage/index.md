---
title: WebGLContextEvent.statusMessage
slug: Web/API/WebGLContextEvent/statusMessage
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WebGL
  - WebGLContextEvent
browser-compat: api.WebGLContextEvent.statusMessage
---
{{APIRef("WebGL")}}

The read-only **`WebGLContextEvent.statusMessage`** property contains additional event status information, or is an empty string if no additional information is available.

## Examples

The `statusMessage` property can contain a platform dependent string with details of an event. This can occur, for example, if the {{domxref("HTMLCanvasElement/webglcontextcreationerror_event", "webglcontextcreationerror")}} event is fired.

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextcreationerror', (e) => {
  console.log(`WebGL context creation failed: ${e.statusMessage || 'Unknown error'}`);
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [webglcontextcreationerror](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
