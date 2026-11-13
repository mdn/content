---
title: WebGLActiveInfo
slug: Web/API/WebGLActiveInfo
page-type: web-api-interface
browser-compat: api.WebGLActiveInfo
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLActiveInfo`** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and represents the information returned by calling the {{domxref("WebGLRenderingContext.getActiveAttrib()")}} and {{domxref("WebGLRenderingContext.getActiveUniform()")}} methods.

## Instance properties

- {{domxref("WebGLActiveInfo.name")}} {{ReadOnlyInline}}
  - : The name of the requested variable.
- {{domxref("WebGLActiveInfo.size")}} {{ReadOnlyInline}}
  - : The size of the requested variable.
- {{domxref("WebGLActiveInfo.type")}} {{ReadOnlyInline}}
  - : The type of the requested variable.

## Examples

A `WebGLActiveInfo` object is returned by:

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}} or
- {{domxref("WebGL2RenderingContext.getTransformFeedbackVarying()")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
