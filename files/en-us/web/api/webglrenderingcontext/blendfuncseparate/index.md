---
title: "WebGLRenderingContext: blendFuncSeparate() method"
short-title: blendFuncSeparate()
slug: Web/API/WebGLRenderingContext/blendFuncSeparate
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.blendFuncSeparate
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.blendFuncSeparate()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) defines which function is used
for blending pixel arithmetic for RGB and alpha components separately.

## Syntax

```js-nolint
blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha)
```

### Parameters

- `srcRGB`
  - : A {{domxref("WebGL_API.Types", "GLenum")}} specifying a multiplier for the red, green and blue (RGB)
    source blending factors. The default value is `gl.ONE`. For possible
    values, see below.
- `dstRGB`
  - : A {{domxref("WebGL_API.Types", "GLenum")}} specifying a multiplier for the red, green and blue (RGB)
    destination blending factors. The default value is `gl.ZERO`. For possible
    values, see below.
- `srcAlpha`
  - : A {{domxref("WebGL_API.Types", "GLenum")}} specifying a multiplier for the alpha source blending
    factor. The default value is `gl.ONE`. For possible values, see below.
- `dstAlpha`
  - : A {{domxref("WebGL_API.Types", "GLenum")}} specifying a multiplier for the alpha destination blending
    factor. The default value is `gl.ZERO`. For possible values, see below.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If _srcRGB_, _dstRGB_, _srcAlpha_, or _dstAlpha_ is not
  one of the listed possible values, a `gl.INVALID_ENUM` error is thrown.
- If a constant color and a constant alpha value are used together as source
  (`srcRGB`) and destination (`dstRGB`) factors, a
  `gl.INVALID_ENUM` error is thrown.

## Constants

The following constants can be used for _srcRGB_, _dstRGB_,
_srcAlpha_, and _dstAlpha_

The formulas for the blending factors can be described like this (all RGBA values are
between 0 and 1):

- color(RGB) = (sourceColor \* _srcRGB_) + (destinationColor \* _dstRGB_)
- color(A) = (sourceAlpha \* _srcAlpha_) + (destinationAlpha \*
  _dstAlpha_)

In the following table, R<sub>S</sub>, G<sub>S</sub>, B<sub>S</sub>, A<sub>S</sub> represent respectively
the _red_, _green_, _blue_ and _alpha_ component of the source, while
R<sub>D</sub>, G<sub>D</sub>, B<sub>D</sub>, A<sub>D</sub> represent respectively
the _red_, _green_, _blue_ and _alpha_ component of the destination.
Similarly, R<sub>C</sub>, G<sub>C</sub>, B<sub>C</sub>, A<sub>C</sub> represent respectively
the _red_, _green_, _blue_ and _alpha_ component of a constant color.
They are all values between 0 and 1, included.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">RGB factor</th>
      <th scope="col">Alpha factor</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.ZERO</code></td>
      <td>0,0,0</td>
      <td>0</td>
      <td>Multiplies all colors by 0.</td>
    </tr>
    <tr>
      <td><code>gl.ONE</code></td>
      <td>1,1,1,1</td>
      <td>1</td>
      <td>Multiplies all colors by 1.</td>
    </tr>
    <tr>
      <td><code>gl.SRC_COLOR</code></td>
      <td>R<sub>S</sub>, G<sub>S</sub>, B<sub>S</sub></td>
      <td>A<sub>S</sub></td>
      <td>Multiplies all colors by the source colors.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_SRC_COLOR</code></td>
      <td>1-R<sub>S</sub>, 1-G<sub>S</sub>, 1-B<sub>S</sub></td>
      <td>1-A<sub>S</sub></td>
      <td>Multiplies all colors by 1 minus each source color.</td>
    </tr>
    <tr>
      <td><code>gl.DST_COLOR</code></td>
      <td>R<sub>D</sub>, G<sub>D</sub>, B<sub>D</sub></td>
      <td>A<sub>D</sub></td>
      <td>Multiplies all colors by the destination color.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_DST_COLOR</code></td>
      <td>1-R<sub>D</sub>, 1-G<sub>D</sub>, 1-B<sub>D</sub></td>
      <td>1-A<sub>D</sub></td>
      <td>Multiplies all colors by 1 minus each destination color.</td>
    </tr>
    <tr>
      <td><code>gl.SRC_ALPHA</code></td>
      <td>A<sub>S</sub>, A<sub>S</sub>, A<sub>S</sub></td>
      <td>A<sub>S</sub></td>
      <td>Multiplies all colors by the source alpha color.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_SRC_ALPHA</code></td>
      <td>1-A<sub>S</sub>, 1-A<sub>S</sub>, 1-A<sub>S</sub></td>
      <td>1-A<sub>S</sub></td>
      <td>Multiplies all colors by 1 minus the source alpha color.</td>
    </tr>
    <tr>
      <td><code>gl.DST_ALPHA</code></td>
      <td>A<sub>D</sub>, A<sub>D</sub>, A<sub>D</sub></td>
      <td>A<sub>D</sub></td>
      <td>Multiplies all colors by the destination alpha color.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_DST_ALPHA</code></td>
      <td>1-A<sub>D</sub>, 1-A<sub>D</sub>, 1-A<sub>D</sub></td>
      <td>1-A<sub>D</sub></td>
      <td>Multiplies all colors by 1 minus the destination alpha color.</td>
    </tr>
    <tr>
      <td><code>gl.CONSTANT_COLOR</code></td>
      <td>R<sub>C</sub>, G<sub>C</sub>, B<sub>C</sub></td>
      <td>A<sub>C</sub></td>
      <td>Multiplies all colors by a constant color.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_CONSTANT_COLOR</code></td>
      <td>1-R<sub>C</sub>, 1-G<sub>C</sub>, 1-B<sub>C</sub></td>
      <td>1-A<sub>C</sub></td>
      <td>Multiplies all colors by 1 minus a constant color.</td>
    </tr>
    <tr>
      <td><code>gl.CONSTANT_ALPHA</code></td>
      <td>A<sub>C</sub>, A<sub>C</sub>, A<sub>C</sub></td>
      <td>A<sub>C</sub></td>
      <td>Multiplies all colors by a constant alpha value.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_CONSTANT_ALPHA</code></td>
      <td>1-A<sub>C</sub>, 1-A<sub>C</sub>, 1-A<sub>C</sub></td>
      <td>1-A<sub>C</sub></td>
      <td>Multiplies all colors by 1 minus a constant alpha value.</td>
    </tr>
    <tr>
      <td><code>gl.SRC_ALPHA_SATURATE</code></td>
      <td>
        min(A<sub>S</sub>, 1 - A<sub>D</sub>), min(A<sub>S</sub>, 1 -
        A<sub>D</sub>), min(A<sub>S</sub>, 1 - A<sub>D</sub>)
      </td>
      <td>1</td>
      <td>
        Multiplies the RGB colors by the smaller of either the source alpha
        color or the value of 1 minus the destination alpha color. The alpha
        value is multiplied by 1.
      </td>
    </tr>
  </tbody>
</table>

## Examples

To use the blend function, you first have to activate blending with
{{domxref("WebGLRenderingContext.enable()")}} with the argument `gl.BLEND`.

```js
gl.enable(gl.BLEND);
gl.blendFuncSeparate(gl.SRC_COLOR, gl.DST_COLOR, gl.ONE, gl.ZERO);
```

To get the current blend function, query the `BLEND_SRC_RGB`,
`BLEND_SRC_ALPHA`, `BLEND_DST_RGB`, and
`BLEND_DST_ALPHA` constants which return one of the blend function constants.

```js
gl.enable(gl.BLEND);
gl.blendFuncSeparate(gl.SRC_COLOR, gl.DST_COLOR, gl.ONE, gl.ZERO);
gl.getParameter(gl.BLEND_SRC_RGB) === gl.SRC_COLOR;
// true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.blendColor()")}}
- {{domxref("WebGLRenderingContext.blendEquation()")}}
