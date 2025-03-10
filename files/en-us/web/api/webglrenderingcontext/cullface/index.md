---
title: "WebGLRenderingContext: cullFace() method"
short-title: cullFace()
slug: Web/API/WebGLRenderingContext/cullFace
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.cullFace
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.cullFace()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies whether or not front-
and/or back-facing polygons can be culled.

## Syntax

```js-nolint
cullFace(mode)
```

### Parameters

- `mode`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying whether front- or back-facing polygons are
    candidates for culling. The default value is `gl.BACK`. Possible values
    are:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

### Return value

None ({{jsxref("undefined")}}).

## Examples

Polygon culling is disabled by default. To enable or disable culling, use the
{{domxref("WebGLRenderingContext.enable", "enable()")}} and
{{domxref("WebGLRenderingContext.disable", "disable()")}} methods with the argument
`gl.CULL_FACE`.

```js
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.FRONT_AND_BACK);
```

To check the current cull face mode, query the `CULL_FACE_MODE` constant.

```js
gl.getParameter(gl.CULL_FACE_MODE) === gl.FRONT_AND_BACK;
// true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.frontFace()")}}
