---
title: "WebGLRenderingContext: isContextLost() method"
short-title: isContextLost()
slug: Web/API/WebGLRenderingContext/isContextLost
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.isContextLost
---

{{APIRef("WebGL")}}

The
**`WebGLRenderingContext.isContextLost()`** method returns a
boolean value indicating whether or not the WebGL context has been lost and
must be re-established before rendering can resume.

## Syntax

```js-nolint
isContextLost()
```

### Parameters

None.

### Return value

A boolean value which is `true` if the context is lost, or
`false` if not.

## Usage notes

There are several reasons why a WebGL context may be lost, making it necessary to
re-establish the context before resuming rendering. Examples include:

- Two or more pages are using the GPU, but together place too high a demand on the
  GPU, so the browser tells the two contexts that they've lost the connection, then
  selects one of the two to restore access for.
- The user's computer has multiple graphics processors (such as a laptop with both
  mobile and desktop class GPUs, the former used primarily when on battery power), and
  the user or system decides to switch GPUs. In this case, all contexts are lost, then
  restored after switching GPUs.
- Another page running in the user's browser performs an operation using the GPU that
  takes too long, causing the browser to decide to reset the GPU in order to break the
  stall. This would cause every WebGL context to be lost throughout the entire browser.
- The user updates their graphics driver on an operating system that allows graphics
  drivers to be updated without restarting the system.

## Examples

For example, when checking for program linking success, you could also check if the
context is not lost:

```js
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS) && !gl.isContextLost()) {
  const info = gl.getProgramInfoLog(program);
  console.log(`Error linking program:\n${info}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WebGLContextEvent")}} signals changes in the context state.
- [Handling lost context in WebGL](https://www.khronos.org/webgl/wiki/HandlingContextLost): Khronos WebGL wiki
