---
title: WebGLRenderingContext.sampleCoverage()
slug: Web/API/WebGLRenderingContext/sampleCoverage
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.sampleCoverage
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.sampleCoverage()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) specifies multi-sample coverage
parameters for anti-aliasing effects.

## Syntax

```js
sampleCoverage(value, invert)
```

### Parameters

- `value`
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} which sets a single floating-point coverage value clamped
    to the range \[0,1]. The default value is 1.0.
- `invert`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} which sets whether or not the coverage masks should be
    inverted. The default value is `false`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Multi-sampling is disabled by default. To enable or disable multi-sampling, use the
{{domxref("WebGLRenderingContext.enable", "enable()")}} and
{{domxref("WebGLRenderingContext.disable", "disable()")}} methods with the argument
`gl.SAMPLE_COVERAGE` and `gl.SAMPLE_ALPHA_TO_COVERAGE`.

```js
gl.enable(gl.SAMPLE_COVERAGE);
gl.sampleCoverage(0.5, false);
```

To check the sample coverage values, query the `SAMPLE_COVERAGE_VALUE` and
`SAMPLE_COVERAGE_INVERT` constants.

```js
gl.getParameter(gl.SAMPLE_COVERAGE_VALUE);  // 0.5
gl.getParameter(gl.SAMPLE_COVERAGE_INVERT); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.getContext()")}} – `antialias` parameter for
  the context.
