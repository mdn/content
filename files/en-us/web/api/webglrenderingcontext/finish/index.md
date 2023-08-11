---
title: "WebGLRenderingContext: finish() method"
short-title: finish()
slug: Web/API/WebGLRenderingContext/finish
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.finish
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.finish()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) blocks execution until all
previously called commands are finished.

## Syntax

```js-nolint
finish()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.flush()")}}
- [WebGL best practices](/en-US/docs/Web/API/WebGL_API/WebGL_best_practices) (which recommends avoiding `finish()` as it may slow down
  your main rendering loop)
