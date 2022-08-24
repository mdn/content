---
title: XRWebGLBinding()
slug: Web/API/XRWebGLBinding/XRWebGLBinding
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - WebXR
  - XR
  - Experimental
browser-compat: api.XRWebGLBinding.XRWebGLBinding
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`XRWebGLBinding()`** constructor creates and
returns a new {{domxref("XRWebGLBinding")}} object.

## Syntax

```js
new XRWebGLBinding(session, context)
```

### Parameters

- `session`
  - : An {{domxref("XRSession")}} object specifying the WebXR session which will be
    rendered using the WebGL context.
- `context`
  - : A {{domxref("WebGLRenderingContext")}} or {{domxref("WebGL2RenderingContext")}}
    identifying the WebGL drawing context to use for rendering the scene for the specified
    WebXR session.

### Return value

A newly-created {{domxref("XRWebGLBinding")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the new `XRWebGLBinding` could not be created due to one of the following situations:
    - The {{domxref("XRSession")}} specified by `session` has already been
      stopped.
    - The specified WebGL context, `context`, [has been lost](/en-US/docs/Web/API/WebGLRenderingContext/isContextLost#usage_notes) for any reason, such as a GPU switch or reset.
    - The specified `session` is immersive but the `context` is
      not WebXR compatible.

## Examples

```js
const canvasElement = document.querySelector(".output-canvas");
const gl = canvasElement.getContext("webgl");
const xrSession = await navigator.xr.requestSession("immersive-vr");
await gl.makeXRCompatible();

const glBinding = new XRWebGLBinding(xrSession, gl);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.makeXRCompatible()")}}
