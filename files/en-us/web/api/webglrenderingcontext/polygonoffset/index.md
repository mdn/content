---
title: WebGLRenderingContext.polygonOffset()
slug: Web/API/WebGLRenderingContext/polygonOffset
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.polygonOffset
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.polygonOffset()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) specifies the scale factors and
units to calculate depth values.

The offset is added before the depth test is performed and before the value is written
into the depth buffer.

## Syntax

```js
polygonOffset(factor, units)
```

### Parameters

- `factor`
  - : A {{domxref("WebGL_API/Types", "GLfloat")}} which sets the scale factor for the variable depth offset
    for each polygon. The default value is 0.
- `units`
  - : A {{domxref("WebGL_API/Types", "GLfloat")}} which sets the multiplier by which an
    implementation-specific value is multiplied with to create a constant depth offset.
    The default value is 0.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The polygon offset fill is disabled by default. To enable or disable polygon offset
fill, use the {{domxref("WebGLRenderingContext.enable", "enable()")}} and
{{domxref("WebGLRenderingContext.disable", "disable()")}} methods with the argument
`gl.POLYGON_OFFSET_FILL`.

```js
gl.enable(gl.POLYGON_OFFSET_FILL);
gl.polygonOffset(2, 3);
```

To check the current polygon offset factor or units, query the
`POLYGON_OFFSET_FACTOR` and `POLYGON_OFFSET_UNITS` constants.

```js
gl.getParameter(gl.POLYGON_OFFSET_FACTOR); // 2
gl.getParameter(gl.POLYGON_OFFSET_UNITS);  // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.depthFunc()")}}
