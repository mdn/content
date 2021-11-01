---
title: WebGLContextEvent.statusMessage
slug: Web/API/WebGLContextEvent/statusMessage
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

The `statusMessage` property can contain a platform dependent string with details of an event. This can occur, for example, if the {{Event("webglcontextcreationerror")}} event is fired.

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextcreationerror', function(e) {
  console.log('WebGL context creation failed:' +
              e.statusMessage || 'Unknown error');
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [webglcontextcreationerror](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
