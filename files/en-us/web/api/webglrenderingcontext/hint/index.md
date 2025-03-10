---
title: "WebGLRenderingContext: hint() method"
short-title: hint()
slug: Web/API/WebGLRenderingContext/hint
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.hint
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.hint()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies hints for certain
behaviors. The interpretation of these hints depend on the implementation.

## Syntax

```js-nolint
hint(target, mode)
```

### Parameters

- `target`

  - : Sets which behavior to be controlled. Possible values:

    - `gl.GENERATE_MIPMAP_HINT`

      - : Quality of filtering when generating
        mipmap images with {{domxref("WebGLRenderingContext.generateMipmap()")}}.

    When using the {{domxref("OES_standard_derivatives")}} extension:

    - `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`
      - : Accuracy of the
        derivative calculation for the GLSL built-in functions: `dFdx`,
        `dFdy`, and `fwidth`.

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
    the following values are available additionally:

    - `gl.FRAGMENT_SHADER_DERIVATIVE_HINT`
      - : Same as `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`

- `mode`

  - : Sets the behavior. The default value is `gl.DONT_CARE`. The possible
    values are:

    - `gl.FASTEST`: The most efficient behavior should be used.
    - `gl.NICEST`: The most correct or the highest quality option should be
      used.
    - `gl.DONT_CARE`: There is no preference for this behavior.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example hints that the quality of filtering when generating mipmap images
should be most efficient instead of the best quality.

```js
gl.hint(gl.GENERATE_MIPMAP_HINT, gl.FASTEST);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.generateMipmap()")}}
- {{domxref("OES_standard_derivatives")}}
