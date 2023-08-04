---
title: WebGL constants
slug: Web/API/WebGL_API/Constants
page-type: guide
spec-urls:
  - https://www.khronos.org/registry/webgl/specs/latest/1.0/#5.14
  - https://www.khronos.org/registry/webgl/specs/latest/2.0/#3.7
---

{{DefaultAPISidebar("WebGL")}}

The [WebGL API](/en-US/docs/Web/API/WebGL_API) provides several constants that are passed into or returned by functions. All constants are of type {{domxref("WebGL_API/Types", "GLenum")}}.

Standard WebGL constants are installed on the {{domxref("WebGLRenderingContext")}} and {{domxref("WebGL2RenderingContext")}} objects, so that you use them as `gl.CONSTANT_NAME`:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");

gl.getParameter(gl.LINE_WIDTH);
```

Some constants are also provided by [WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions). A [list](#constants_defined_in_webgl_extensions) is provided below.

```js
const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
```

The [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial) has more information, examples, and resources on how to get started with WebGL.

## Table of contents

- [Standard WebGL 1 constants](#standard_webgl_1_constants)
- [Standard WebGL 2 constants](#additional_constants_defined_webgl_2)
- [WebGL extension constants](#constants_defined_in_webgl_extensions)

## Standard WebGL 1 constants

These constants are defined on the {{domxref("WebGLRenderingContext")}} interface.

### Clearing buffers

Constants passed to {{domxref("WebGLRenderingContext.clear()")}} to clear buffer masks.

| Constant name        | Value      | Description                                            |
| -------------------- | ---------- | ------------------------------------------------------ |
| `DEPTH_BUFFER_BIT`   | 0x00000100 | Passed to `clear` to clear the current depth buffer.   |
| `STENCIL_BUFFER_BIT` | 0x00000400 | Passed to `clear` to clear the current stencil buffer. |
| `COLOR_BUFFER_BIT`   | 0x00004000 | Passed to `clear` to clear the current color buffer.   |

### Rendering primitives

Constants passed to {{domxref("WebGLRenderingContext.drawElements()")}} or {{domxref("WebGLRenderingContext.drawArrays()")}} to specify what kind of primitive to render.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>POINTS</code></td>
      <td>0x0000</td>
      <td>
        Passed to <code>drawElements</code> or <code>drawArrays</code> to draw
        single points.
      </td>
    </tr>
    <tr>
      <td><code>LINES</code></td>
      <td>0x0001</td>
      <td>
        Passed to <code>drawElements</code> or <code>drawArrays</code> to draw
        lines. Each vertex connects to the one after it.
      </td>
    </tr>
    <tr>
      <td><code>LINE_LOOP</code></td>
      <td>0x0002</td>
      <td>
        Passed to <code>drawElements</code> or <code>drawArrays</code> to draw
        lines. Each set of two vertices is treated as a separate line segment.
      </td>
    </tr>
    <tr>
      <td><code>LINE_STRIP</code></td>
      <td>0x0003</td>
      <td>
        Passed to <code>drawElements</code> or <code>drawArrays</code> to draw a
        connected group of line segments from the first vertex to the last.
      </td>
    </tr>
    <tr>
      <td><code>TRIANGLES</code></td>
      <td>0x0004</td>
      <td>
        Passed to <code>drawElements</code> or <code>drawArrays</code> to draw
        triangles. Each set of three vertices creates a separate triangle.
      </td>
    </tr>
    <tr>
      <td><code>TRIANGLE_STRIP</code></td>
      <td>0x0005</td>
      <td>
        Passed to <code>drawElements</code> or <code>drawArrays</code> to draw a
        connected group of triangles.
      </td>
    </tr>
    <tr>
      <td><code>TRIANGLE_FAN</code></td>
      <td>0x0006</td>
      <td>
        Passed to <code>drawElements</code> or <code>drawArrays</code> to draw a
        connected group of triangles. Each vertex connects to the previous and
        the first vertex in the fan.
      </td>
    </tr>
  </tbody>
</table>

### Blending modes

Constants passed to {{domxref("WebGLRenderingContext.blendFunc()")}} or {{domxref("WebGLRenderingContext.blendFuncSeparate()")}} to specify the blending mode (for both, RGB and alpha, or separately).

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ZERO</code></td>
      <td>0</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        turn off a component.
      </td>
    </tr>
    <tr>
      <td><code>ONE</code></td>
      <td>1</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        turn on a component.
      </td>
    </tr>
    <tr>
      <td><code>SRC_COLOR</code></td>
      <td>0x0300</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        multiply a component by the source elements color.
      </td>
    </tr>
    <tr>
      <td><code>ONE_MINUS_SRC_COLOR</code></td>
      <td>0x0301</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        multiply a component by one minus the source elements color.
      </td>
    </tr>
    <tr>
      <td><code>SRC_ALPHA</code></td>
      <td>0x0302</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        multiply a component by the source's alpha.
      </td>
    </tr>
    <tr>
      <td><code>ONE_MINUS_SRC_ALPHA</code></td>
      <td>0x0303</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        multiply a component by one minus the source's alpha.
      </td>
    </tr>
    <tr>
      <td><code>DST_ALPHA</code></td>
      <td>0x0304</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        multiply a component by the destination's alpha.
      </td>
    </tr>
    <tr>
      <td><code>ONE_MINUS_DST_ALPHA</code></td>
      <td>0x0305</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        multiply a component by one minus the destination's alpha.
      </td>
    </tr>
    <tr>
      <td><code>DST_COLOR</code></td>
      <td>0x0306</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        multiply a component by the destination's color.
      </td>
    </tr>
    <tr>
      <td><code>ONE_MINUS_DST_COLOR</code></td>
      <td>0x0307</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        multiply a component by one minus the destination's color.
      </td>
    </tr>
    <tr>
      <td><code>SRC_ALPHA_SATURATE</code></td>
      <td>0x0308</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        multiply a component by the minimum of source's alpha or one minus the
        destination's alpha.
      </td>
    </tr>
    <tr>
      <td><code>CONSTANT_COLOR</code></td>
      <td>0x8001</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        specify a constant color blend function.
      </td>
    </tr>
    <tr>
      <td><code>ONE_MINUS_CONSTANT_COLOR</code></td>
      <td>0x8002</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        specify one minus a constant color blend function.
      </td>
    </tr>
    <tr>
      <td><code>CONSTANT_ALPHA</code></td>
      <td>0x8003</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        specify a constant alpha blend function.
      </td>
    </tr>
    <tr>
      <td><code>ONE_MINUS_CONSTANT_ALPHA</code></td>
      <td>0x8004</td>
      <td>
        Passed to <code>blendFunc</code> or <code>blendFuncSeparate</code> to
        specify one minus a constant alpha blend function.
      </td>
    </tr>
  </tbody>
</table>

### Blending equations

Constants passed to {{domxref("WebGLRenderingContext.blendEquation()")}} or {{domxref("WebGLRenderingContext.blendEquationSeparate()")}} to control how the blending is calculated (for both, RGB and alpha, or separately).

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>FUNC_ADD</code></td>
      <td>0x8006</td>
      <td>
        Passed to <code>blendEquation</code> or
        <code>blendEquationSeparate</code> to set an addition blend function.
      </td>
    </tr>
    <tr>
      <td><code>FUNC_SUBTRACT</code></td>
      <td>0x800A</td>
      <td>
        Passed to <code>blendEquation</code> or
        <code>blendEquationSeparate</code> to specify a subtraction blend
        function (source - destination).
      </td>
    </tr>
    <tr>
      <td><code>FUNC_REVERSE_SUBTRACT</code></td>
      <td>0x800B</td>
      <td>
        Passed to <code>blendEquation</code> or
        <code>blendEquationSeparate</code> to specify a reverse subtraction
        blend function (destination - source).
      </td>
    </tr>
  </tbody>
</table>

### Getting GL parameter information

Constants passed to {{domxref("WebGLRenderingContext.getParameter()")}} to specify what information to return.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>BLEND_EQUATION</code></td>
      <td>0x8009</td>
      <td>
        Passed to <code>getParameter</code> to get the current RGB blend
        function.
      </td>
    </tr>
    <tr>
      <td><code>BLEND_EQUATION_RGB</code></td>
      <td>0x8009</td>
      <td>
        Passed to <code>getParameter</code> to get the current RGB blend
        function. Same as BLEND_EQUATION
      </td>
    </tr>
    <tr>
      <td><code>BLEND_EQUATION_ALPHA</code></td>
      <td>0x883D</td>
      <td>
        Passed to <code>getParameter</code> to get the current alpha blend
        function. Same as BLEND_EQUATION
      </td>
    </tr>
    <tr>
      <td><code>BLEND_DST_RGB</code></td>
      <td>0x80C8</td>
      <td>
        Passed to <code>getParameter</code> to get the current destination RGB
        blend function.
      </td>
    </tr>
    <tr>
      <td><code>BLEND_SRC_RGB</code></td>
      <td>0x80C9</td>
      <td>
        Passed to <code>getParameter</code> to get the current destination RGB
        blend function.
      </td>
    </tr>
    <tr>
      <td><code>BLEND_DST_ALPHA</code></td>
      <td>0x80CA</td>
      <td>
        Passed to <code>getParameter</code> to get the current destination alpha
        blend function.
      </td>
    </tr>
    <tr>
      <td><code>BLEND_SRC_ALPHA</code></td>
      <td>0x80CB</td>
      <td>
        Passed to <code>getParameter</code> to get the current source alpha
        blend function.
      </td>
    </tr>
    <tr>
      <td><code>BLEND_COLOR</code></td>
      <td>0x8005</td>
      <td>
        Passed to <code>getParameter</code> to return a the current blend color.
      </td>
    </tr>
    <tr>
      <td><code>ARRAY_BUFFER_BINDING</code></td>
      <td>0x8894</td>
      <td>
        Passed to <code>getParameter</code> to get the array buffer binding.
      </td>
    </tr>
    <tr>
      <td><code>ELEMENT_ARRAY_BUFFER_BINDING</code></td>
      <td>0x8895</td>
      <td>
        Passed to <code>getParameter</code> to get the current element array
        buffer.
      </td>
    </tr>
    <tr>
      <td><code>LINE_WIDTH</code></td>
      <td>0x0B21</td>
      <td>
        Passed to <code>getParameter</code> to get the current
        <code>lineWidth</code> (set by the <code>lineWidth</code> method).
      </td>
    </tr>
    <tr>
      <td><code>ALIASED_POINT_SIZE_RANGE</code></td>
      <td>0x846D</td>
      <td>
        Passed to <code>getParameter</code> to get the current size of a point
        drawn with <code>gl.POINTS</code>
      </td>
    </tr>
    <tr>
      <td><code>ALIASED_LINE_WIDTH_RANGE</code></td>
      <td>0x846E</td>
      <td>
        Passed to <code>getParameter</code> to get the range of available widths
        for a line. Returns a length-2 array with the lo value at 0, and hight
        at 1.
      </td>
    </tr>
    <tr>
      <td><code>CULL_FACE_MODE</code></td>
      <td>0x0B45</td>
      <td>
        Passed to <code>getParameter</code> to get the current value of
        <code>cullFace</code>. Should return <code>FRONT</code>,
        <code>BACK</code>, or <code>FRONT_AND_BACK</code>
      </td>
    </tr>
    <tr>
      <td><code>FRONT_FACE</code></td>
      <td>0x0B46</td>
      <td>
        Passed to <code>getParameter</code> to determine the current value of
        <code>frontFace</code>. Should return <code>CW</code> or
        <code>CCW</code>.
      </td>
    </tr>
    <tr>
      <td><code>DEPTH_RANGE</code></td>
      <td>0x0B70</td>
      <td>
        Passed to <code>getParameter</code> to return a length-2 array of floats
        giving the current depth range.
      </td>
    </tr>
    <tr>
      <td><code>DEPTH_WRITEMASK</code></td>
      <td>0x0B72</td>
      <td>
        Passed to <code>getParameter</code> to determine if the depth write mask
        is enabled.
      </td>
    </tr>
    <tr>
      <td><code>DEPTH_CLEAR_VALUE</code></td>
      <td>0x0B73</td>
      <td>
        Passed to <code>getParameter</code> to determine the current depth clear
        value.
      </td>
    </tr>
    <tr>
      <td><code>DEPTH_FUNC</code></td>
      <td>0x0B74</td>
      <td>
        Passed to <code>getParameter</code> to get the current depth function.
        Returns <code>NEVER</code>, <code>ALWAYS</code>, <code>LESS</code>,
        <code>EQUAL</code>, <code>LEQUAL</code>, <code>GREATER</code>,
        <code>GEQUAL</code>, or <code>NOTEQUAL</code>.
      </td>
    </tr>
    <tr>
      <td><code>STENCIL_CLEAR_VALUE</code></td>
      <td>0x0B91</td>
      <td>
        Passed to <code>getParameter</code> to get the value the stencil will be
        cleared to.
      </td>
    </tr>
    <tr>
      <td><code>STENCIL_FUNC</code></td>
      <td>0x0B92</td>
      <td>
        Passed to <code>getParameter</code> to get the current stencil function.
        Returns <code>NEVER</code>, <code>ALWAYS</code>, <code>LESS</code>,
        <code>EQUAL</code>, <code>LEQUAL</code>, <code>GREATER</code>,
        <code>GEQUAL</code>, or <code>NOTEQUAL</code>.
      </td>
    </tr>
    <tr>
      <td><code>STENCIL_FAIL</code></td>
      <td>0x0B94</td>
      <td>
        Passed to <code>getParameter</code> to get the current stencil fail
        function. Should return <code>KEEP</code>, <code>REPLACE</code>,
        <code>INCR</code>, <code>DECR</code>, <code>INVERT</code>,
        <code>INCR_WRAP</code>, or <code>DECR_WRAP</code>.
      </td>
    </tr>
    <tr>
      <td><code>STENCIL_PASS_DEPTH_FAIL</code></td>
      <td>0x0B95</td>
      <td>
        Passed to <code>getParameter</code> to get the current stencil fail
        function should the depth buffer test fail. Should return
        <code>KEEP</code>, <code>REPLACE</code>, <code>INCR</code>,
        <code>DECR</code>, <code>INVERT</code>, <code>INCR_WRAP</code>, or
        <code>DECR_WRAP</code>.
      </td>
    </tr>
    <tr>
      <td><code>STENCIL_PASS_DEPTH_PASS</code></td>
      <td>0x0B96</td>
      <td>
        Passed to <code>getParameter</code> to get the current stencil fail
        function should the depth buffer test pass. Should return KEEP, REPLACE,
        INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
      </td>
    </tr>
    <tr>
      <td><code>STENCIL_REF</code></td>
      <td>0x0B97</td>
      <td>
        Passed to <code>getParameter</code> to get the reference value used for
        stencil tests.
      </td>
    </tr>
    <tr>
      <td><code>STENCIL_VALUE_MASK</code></td>
      <td>0x0B93</td>
      <td></td>
    </tr>
    <tr>
      <td><code>STENCIL_WRITEMASK</code></td>
      <td>0x0B98</td>
      <td></td>
    </tr>
    <tr>
      <td><code>STENCIL_BACK_FUNC</code></td>
      <td>0x8800</td>
      <td></td>
    </tr>
    <tr>
      <td><code>STENCIL_BACK_FAIL</code></td>
      <td>0x8801</td>
      <td></td>
    </tr>
    <tr>
      <td><code>STENCIL_BACK_PASS_DEPTH_FAIL</code></td>
      <td>0x8802</td>
      <td></td>
    </tr>
    <tr>
      <td><code>STENCIL_BACK_PASS_DEPTH_PASS</code></td>
      <td>0x8803</td>
      <td></td>
    </tr>
    <tr>
      <td><code>STENCIL_BACK_REF</code></td>
      <td>0x8CA3</td>
      <td></td>
    </tr>
    <tr>
      <td><code>STENCIL_BACK_VALUE_MASK</code></td>
      <td>0x8CA4</td>
      <td></td>
    </tr>
    <tr>
      <td><code>STENCIL_BACK_WRITEMASK</code></td>
      <td>0x8CA5</td>
      <td></td>
    </tr>
    <tr>
      <td><code>VIEWPORT</code></td>
      <td>0x0BA2</td>
      <td>
        Returns an {{jsxref("Int32Array")}} with four elements for the
        current viewport dimensions.
      </td>
    </tr>
    <tr>
      <td><code>SCISSOR_BOX</code></td>
      <td>0x0C10</td>
      <td>
        Returns an {{jsxref("Int32Array")}} with four elements for the
        current scissor box dimensions.
      </td>
    </tr>
    <tr>
      <td><code>COLOR_CLEAR_VALUE</code></td>
      <td>0x0C22</td>
      <td></td>
    </tr>
    <tr>
      <td><code>COLOR_WRITEMASK</code></td>
      <td>0x0C23</td>
      <td></td>
    </tr>
    <tr>
      <td><code>UNPACK_ALIGNMENT</code></td>
      <td>0x0CF5</td>
      <td></td>
    </tr>
    <tr>
      <td><code>PACK_ALIGNMENT</code></td>
      <td>0x0D05</td>
      <td></td>
    </tr>
    <tr>
      <td><code>MAX_TEXTURE_SIZE</code></td>
      <td>0x0D33</td>
      <td></td>
    </tr>
    <tr>
      <td><code>MAX_VIEWPORT_DIMS</code></td>
      <td>0x0D3A</td>
      <td></td>
    </tr>
    <tr>
      <td><code>SUBPIXEL_BITS</code></td>
      <td>0x0D50</td>
      <td></td>
    </tr>
    <tr>
      <td><code>RED_BITS</code></td>
      <td>0x0D52</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GREEN_BITS</code></td>
      <td>0x0D53</td>
      <td></td>
    </tr>
    <tr>
      <td><code>BLUE_BITS</code></td>
      <td>0x0D54</td>
      <td></td>
    </tr>
    <tr>
      <td><code>ALPHA_BITS</code></td>
      <td>0x0D55</td>
      <td></td>
    </tr>
    <tr>
      <td><code>DEPTH_BITS</code></td>
      <td>0x0D56</td>
      <td></td>
    </tr>
    <tr>
      <td><code>STENCIL_BITS</code></td>
      <td>0x0D57</td>
      <td></td>
    </tr>
    <tr>
      <td><code>POLYGON_OFFSET_UNITS</code></td>
      <td>0x2A00</td>
      <td></td>
    </tr>
    <tr>
      <td><code>POLYGON_OFFSET_FACTOR</code></td>
      <td>0x8038</td>
      <td></td>
    </tr>
    <tr>
      <td><code>TEXTURE_BINDING_2D</code></td>
      <td>0x8069</td>
      <td></td>
    </tr>
    <tr>
      <td><code>SAMPLE_BUFFERS</code></td>
      <td>0x80A8</td>
      <td></td>
    </tr>
    <tr>
      <td><code>SAMPLES</code></td>
      <td>0x80A9</td>
      <td></td>
    </tr>
    <tr>
      <td><code>SAMPLE_COVERAGE_VALUE</code></td>
      <td>0x80AA</td>
      <td></td>
    </tr>
    <tr>
      <td><code>SAMPLE_COVERAGE_INVERT</code></td>
      <td>0x80AB</td>
      <td></td>
    </tr>
    <tr>
      <td><code>COMPRESSED_TEXTURE_FORMATS</code></td>
      <td>0x86A3</td>
      <td></td>
    </tr>
    <tr>
      <td><code>VENDOR</code></td>
      <td>0x1F00</td>
      <td></td>
    </tr>
    <tr>
      <td><code>RENDERER</code></td>
      <td>0x1F01</td>
      <td></td>
    </tr>
    <tr>
      <td><code>VERSION</code></td>
      <td>0x1F02</td>
      <td></td>
    </tr>
    <tr>
      <td><code>IMPLEMENTATION_COLOR_READ_TYPE</code></td>
      <td>0x8B9A</td>
      <td></td>
    </tr>
    <tr>
      <td><code>IMPLEMENTATION_COLOR_READ_FORMAT</code></td>
      <td>0x8B9B</td>
      <td></td>
    </tr>
    <tr>
      <td><code>BROWSER_DEFAULT_WEBGL</code></td>
      <td>0x9244</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Buffers

Constants passed to {{domxref("WebGLRenderingContext.bufferData()")}}, {{domxref("WebGLRenderingContext.bufferSubData()")}}, {{domxref("WebGLRenderingContext.bindBuffer()")}}, or {{domxref("WebGLRenderingContext.getBufferParameter()")}}.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>STATIC_DRAW</code></td>
      <td>0x88E4</td>
      <td>
        Passed to <code>bufferData</code> as a hint about whether the contents
        of the buffer are likely to be used often and not change often.
      </td>
    </tr>
    <tr>
      <td><code>STREAM_DRAW</code></td>
      <td>0x88E0</td>
      <td>
        Passed to <code>bufferData</code> as a hint about whether the contents
        of the buffer are likely to not be used often.
      </td>
    </tr>
    <tr>
      <td><code>DYNAMIC_DRAW</code></td>
      <td>0x88E8</td>
      <td>
        Passed to <code>bufferData</code> as a hint about whether the contents
        of the buffer are likely to be used often and change often.
      </td>
    </tr>
    <tr>
      <td><code>ARRAY_BUFFER</code></td>
      <td>0x8892</td>
      <td>
        Passed to <code>bindBuffer</code> or <code>bufferData</code> to specify
        the type of buffer being used.
      </td>
    </tr>
    <tr>
      <td><code>ELEMENT_ARRAY_BUFFER</code></td>
      <td>0x8893</td>
      <td>
        Passed to <code>bindBuffer</code> or <code>bufferData</code> to specify
        the type of buffer being used.
      </td>
    </tr>
    <tr>
      <td><code>BUFFER_SIZE</code></td>
      <td>0x8764</td>
      <td>Passed to <code>getBufferParameter</code> to get a buffer's size.</td>
    </tr>
    <tr>
      <td><code>BUFFER_USAGE</code></td>
      <td>0x8765</td>
      <td>
        Passed to <code>getBufferParameter</code> to get the hint for the buffer
        passed in when it was created.
      </td>
    </tr>
  </tbody>
</table>

### Vertex attributes

Constants passed to {{domxref("WebGLRenderingContext.getVertexAttrib()")}}.

| Constant name                        | Value  | Description                                                            |
| ------------------------------------ | ------ | ---------------------------------------------------------------------- |
| `CURRENT_VERTEX_ATTRIB`              | 0x8626 | Passed to `getVertexAttrib` to read back the current vertex attribute. |
| `VERTEX_ATTRIB_ARRAY_ENABLED`        | 0x8622 |                                                                        |
| `VERTEX_ATTRIB_ARRAY_SIZE`           | 0x8623 |                                                                        |
| `VERTEX_ATTRIB_ARRAY_STRIDE`         | 0x8624 |                                                                        |
| `VERTEX_ATTRIB_ARRAY_TYPE`           | 0x8625 |                                                                        |
| `VERTEX_ATTRIB_ARRAY_NORMALIZED`     | 0x886A |                                                                        |
| `VERTEX_ATTRIB_ARRAY_POINTER`        | 0x8645 |                                                                        |
| `VERTEX_ATTRIB_ARRAY_BUFFER_BINDING` | 0x889F |                                                                        |

### Culling

Constants passed to {{domxref("WebGLRenderingContext.cullFace()")}}.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>CULL_FACE</code></td>
      <td>0x0B44</td>
      <td>
        Passed to <code>enable</code>/<code>disable</code> to turn on/off
        culling. Can also be used with <code>getParameter</code> to find the
        current culling method.
      </td>
    </tr>
    <tr>
      <td><code>FRONT</code></td>
      <td>0x0404</td>
      <td>
        Passed to <code>cullFace</code> to specify that only front faces should
        be culled.
      </td>
    </tr>
    <tr>
      <td><code>BACK</code></td>
      <td>0x0405</td>
      <td>
        Passed to <code>cullFace</code> to specify that only back faces should
        be culled.
      </td>
    </tr>
    <tr>
      <td><code>FRONT_AND_BACK</code></td>
      <td>0x0408</td>
      <td>
        Passed to <code>cullFace</code> to specify that front and back faces
        should be culled.
      </td>
    </tr>
  </tbody>
</table>

### Enabling and disabling

Constants passed to {{domxref("WebGLRenderingContext.enable()")}} or {{domxref("WebGLRenderingContext.disable()")}}.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>BLEND</code></td>
      <td>0x0BE2</td>
      <td>
        Passed to <code>enable</code>/<code>disable</code> to turn on/off
        blending. Can also be used with <code>getParameter</code> to find the
        current blending method.
      </td>
    </tr>
    <tr>
      <td><code>DEPTH_TEST</code></td>
      <td>0x0B71</td>
      <td>
        Passed to <code>enable</code>/<code>disable</code> to turn on/off the
        depth test. Can also be used with <code>getParameter</code> to query the
        depth test.
      </td>
    </tr>
    <tr>
      <td><code>DITHER</code></td>
      <td>0x0BD0</td>
      <td>
        Passed to <code>enable</code>/<code>disable</code> to turn on/off
        dithering. Can also be used with <code>getParameter</code> to find the
        current dithering method.
      </td>
    </tr>
    <tr>
      <td><code>POLYGON_OFFSET_FILL</code></td>
      <td>0x8037</td>
      <td>
        Passed to <code>enable</code>/<code>disable</code> to turn on/off the
        polygon offset. Useful for rendering hidden-line images, decals, and or
        solids with highlighted edges. Can also be used with
        <code>getParameter</code> to query the scissor test.
      </td>
    </tr>
    <tr>
      <td><code>SAMPLE_ALPHA_TO_COVERAGE</code></td>
      <td>0x809E</td>
      <td>
        Passed to <code>enable</code>/<code>disable</code> to turn on/off the
        alpha to coverage. Used in multi-sampling alpha channels.
      </td>
    </tr>
    <tr>
      <td><code>SAMPLE_COVERAGE</code></td>
      <td>0x80A0</td>
      <td>
        Passed to <code>enable</code>/<code>disable</code> to turn on/off the
        sample coverage. Used in multi-sampling.
      </td>
    </tr>
    <tr>
      <td><code>SCISSOR_TEST</code></td>
      <td>0x0C11</td>
      <td>
        Passed to <code>enable</code>/<code>disable</code> to turn on/off the
        scissor test. Can also be used with <code>getParameter</code> to query
        the scissor test.
      </td>
    </tr>
    <tr>
      <td><code>STENCIL_TEST</code></td>
      <td>0x0B90</td>
      <td>
        Passed to <code>enable</code>/<code>disable</code> to turn on/off the
        stencil test. Can also be used with <code>getParameter</code> to query
        the stencil test.
      </td>
    </tr>
  </tbody>
</table>

### Errors

Constants returned from {{domxref("WebGLRenderingContext.getError()")}}.

| Constant name        | Value  | Description               |
| -------------------- | ------ | ------------------------- |
| `NO_ERROR`           | 0      | Returned from `getError`. |
| `INVALID_ENUM`       | 0x0500 | Returned from `getError`. |
| `INVALID_VALUE`      | 0x0501 | Returned from `getError`. |
| `INVALID_OPERATION`  | 0x0502 | Returned from `getError`. |
| `OUT_OF_MEMORY`      | 0x0505 | Returned from `getError`. |
| `CONTEXT_LOST_WEBGL` | 0x9242 | Returned from `getError`. |

### Front face directions

Constants passed to {{domxref("WebGLRenderingContext.frontFace()")}}.

| Constant name | Value  | Description                                                                                              |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `CW`          | 0x0900 | Passed to `frontFace` to specify the front face of a polygon is drawn in the clockwise direction         |
| `CCW`         | 0x0901 | Passed to `frontFace` to specify the front face of a polygon is drawn in the counter clockwise direction |

### Hints

Constants passed to {{domxref("WebGLRenderingContext.hint()")}}

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DONT_CARE</code></td>
      <td>0x1100</td>
      <td>There is no preference for this behavior.</td>
    </tr>
    <tr>
      <td><code>FASTEST</code></td>
      <td>0x1101</td>
      <td>The most efficient behavior should be used.</td>
    </tr>
    <tr>
      <td><code>NICEST</code></td>
      <td>0x1102</td>
      <td>The most correct or the highest quality option should be used.</td>
    </tr>
    <tr>
      <td><code>GENERATE_MIPMAP_HINT</code></td>
      <td>0x8192</td>
      <td>
        Hint for the quality of filtering when generating mipmap images with
        {{domxref("WebGLRenderingContext.generateMipmap()")}}.
      </td>
    </tr>
  </tbody>
</table>

### Data types

| Constant name    | Value  | Description |
| ---------------- | ------ | ----------- |
| `BYTE`           | 0x1400 |             |
| `UNSIGNED_BYTE`  | 0x1401 |             |
| `SHORT`          | 0x1402 |             |
| `UNSIGNED_SHORT` | 0x1403 |             |
| `INT`            | 0x1404 |             |
| `UNSIGNED_INT`   | 0x1405 |             |
| `FLOAT`          | 0x1406 |             |

### Pixel formats

| Constant name     | Value  | Description |
| ----------------- | ------ | ----------- |
| `DEPTH_COMPONENT` | 0x1902 |             |
| `ALPHA`           | 0x1906 |             |
| `RGB`             | 0x1907 |             |
| `RGBA`            | 0x1908 |             |
| `LUMINANCE`       | 0x1909 |             |
| `LUMINANCE_ALPHA` | 0x190A |             |

### Pixel types

| Constant name            | Value  | Description |
| ------------------------ | ------ | ----------- |
| `UNSIGNED_BYTE`          | 0x1401 |             |
| `UNSIGNED_SHORT_4_4_4_4` | 0x8033 |             |
| `UNSIGNED_SHORT_5_5_5_1` | 0x8034 |             |
| `UNSIGNED_SHORT_5_6_5`   | 0x8363 |             |

### Shaders

Constants passed to {{domxref("WebGLRenderingContext.createShader()")}} or {{domxref("WebGLRenderingContext.getShaderParameter()")}}

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>FRAGMENT_SHADER</code></td>
      <td>0x8B30</td>
      <td>Passed to <code>createShader</code> to define a fragment shader.</td>
    </tr>
    <tr>
      <td><code>VERTEX_SHADER</code></td>
      <td>0x8B31</td>
      <td>Passed to <code>createShader</code> to define a vertex shader</td>
    </tr>
    <tr>
      <td><code>COMPILE_STATUS</code></td>
      <td>0x8B81</td>
      <td>
        Passed to <code>getShaderParameter</code> to get the status of the
        compilation. Returns false if the shader was not compiled. You can then
        query <code>getShaderInfoLog</code> to find the exact error
      </td>
    </tr>
    <tr>
      <td><code>DELETE_STATUS</code></td>
      <td>0x8B80</td>
      <td>
        Passed to <code>getShaderParameter</code> to determine if a shader was
        deleted via <code>deleteShader</code>. Returns true if it was, false
        otherwise.
      </td>
    </tr>
    <tr>
      <td><code>LINK_STATUS</code></td>
      <td>0x8B82</td>
      <td>
        Passed to <code>getProgramParameter</code> after calling
        <code>linkProgram</code> to determine if a program was linked correctly.
        Returns false if there were errors. Use
        <code>getProgramInfoLog</code> to find the exact error.
      </td>
    </tr>
    <tr>
      <td><code>VALIDATE_STATUS</code></td>
      <td>0x8B83</td>
      <td>
        Passed to <code>getProgramParameter</code> after calling
        <code>validateProgram</code> to determine if it is valid. Returns false
        if errors were found.
      </td>
    </tr>
    <tr>
      <td><code>ATTACHED_SHADERS</code></td>
      <td>0x8B85</td>
      <td>
        Passed to <code>getProgramParameter</code> after calling
        <code>attachShader</code> to determine if the shader was attached
        correctly. Returns false if errors occurred.
      </td>
    </tr>
    <tr>
      <td><code>ACTIVE_ATTRIBUTES</code></td>
      <td>0x8B89</td>
      <td>
        Passed to <code>getProgramParameter</code> to get the number of
        attributes active in a program.
      </td>
    </tr>
    <tr>
      <td><code>ACTIVE_UNIFORMS</code></td>
      <td>0x8B86</td>
      <td>
        Passed to <code>getProgramParameter</code> to get the number of uniforms
        active in a program.
      </td>
    </tr>
    <tr>
      <td><code>MAX_VERTEX_ATTRIBS</code></td>
      <td>0x8869</td>
      <td>
        The maximum number of entries possible in the vertex attribute list.
      </td>
    </tr>
    <tr>
      <td><code>MAX_VERTEX_UNIFORM_VECTORS</code></td>
      <td>0x8DFB</td>
      <td></td>
    </tr>
    <tr>
      <td><code>MAX_VARYING_VECTORS</code></td>
      <td>0x8DFC</td>
      <td></td>
    </tr>
    <tr>
      <td><code>MAX_COMBINED_TEXTURE_IMAGE_UNITS</code></td>
      <td>0x8B4D</td>
      <td></td>
    </tr>
    <tr>
      <td><code>MAX_VERTEX_TEXTURE_IMAGE_UNITS</code></td>
      <td>0x8B4C</td>
      <td></td>
    </tr>
    <tr>
      <td><code>MAX_TEXTURE_IMAGE_UNITS</code></td>
      <td>0x8872</td>
      <td>
        Implementation dependent number of maximum texture units. At least 8.
      </td>
    </tr>
    <tr>
      <td><code>MAX_FRAGMENT_UNIFORM_VECTORS</code></td>
      <td>0x8DFD</td>
      <td></td>
    </tr>
    <tr>
      <td><code>SHADER_TYPE</code></td>
      <td>0x8B4F</td>
      <td></td>
    </tr>
    <tr>
      <td><code>SHADING_LANGUAGE_VERSION</code></td>
      <td>0x8B8C</td>
      <td></td>
    </tr>
    <tr>
      <td><code>CURRENT_PROGRAM</code></td>
      <td>0x8B8D</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Depth or stencil tests

Constants passed to {{domxref("WebGLRenderingContext.depthFunc()")}} or {{domxref("WebGLRenderingContext.stencilFunc()")}}.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>NEVER</code></td>
      <td>0x0200</td>
      <td>
        Passed to <code>depthFunction</code> or <code>stencilFunction</code> to
        specify depth or stencil tests will never pass, i.e., nothing will be
        drawn.
      </td>
    </tr>
    <tr>
      <td><code>LESS</code></td>
      <td>0x0201</td>
      <td>
        Passed to <code>depthFunction</code> or <code>stencilFunction</code> to
        specify depth or stencil tests will pass if the new depth value is less
        than the stored value.
      </td>
    </tr>
    <tr>
      <td><code>EQUAL</code></td>
      <td>0x0202</td>
      <td>
        Passed to <code>depthFunction</code> or <code>stencilFunction</code> to
        specify depth or stencil tests will pass if the new depth value is
        equals to the stored value.
      </td>
    </tr>
    <tr>
      <td><code>LEQUAL</code></td>
      <td>0x0203</td>
      <td>
        Passed to <code>depthFunction</code> or <code>stencilFunction</code> to
        specify depth or stencil tests will pass if the new depth value is less
        than or equal to the stored value.
      </td>
    </tr>
    <tr>
      <td><code>GREATER</code></td>
      <td>0x0204</td>
      <td>
        Passed to <code>depthFunction</code> or <code>stencilFunction</code> to
        specify depth or stencil tests will pass if the new depth value is
        greater than the stored value.
      </td>
    </tr>
    <tr>
      <td><code>NOTEQUAL</code></td>
      <td>0x0205</td>
      <td>
        Passed to <code>depthFunction</code> or <code>stencilFunction</code> to
        specify depth or stencil tests will pass if the new depth value is not
        equal to the stored value.
      </td>
    </tr>
    <tr>
      <td><code>GEQUAL</code></td>
      <td>0x0206</td>
      <td>
        Passed to <code>depthFunction</code> or <code>stencilFunction</code> to
        specify depth or stencil tests will pass if the new depth value is
        greater than or equal to the stored value.
      </td>
    </tr>
    <tr>
      <td><code>ALWAYS</code></td>
      <td>0x0207</td>
      <td>
        Passed to <code>depthFunction</code> or <code>stencilFunction</code> to
        specify depth or stencil tests will always pass, i.e., pixels will be
        drawn in the order they are drawn.
      </td>
    </tr>
  </tbody>
</table>

### Stencil actions

Constants passed to {{domxref("WebGLRenderingContext.stencilOp()")}}.

| Constant name | Value  | Description |
| ------------- | ------ | ----------- |
| `KEEP`        | 0x1E00 |             |
| `REPLACE`     | 0x1E01 |             |
| `INCR`        | 0x1E02 |             |
| `DECR`        | 0x1E03 |             |
| `INVERT`      | 0x150A |             |
| `INCR_WRAP`   | 0x8507 |             |
| `DECR_WRAP`   | 0x8508 |             |

### Textures

Constants passed to {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}, {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}, {{domxref("WebGLRenderingContext.bindTexture()")}}, {{domxref("WebGLRenderingContext.texImage2D()")}}, and others.

| Constant name                 | Value           | Description                      |
| ----------------------------- | --------------- | -------------------------------- |
| `NEAREST`                     | 0x2600          |                                  |
| `LINEAR`                      | 0x2601          |                                  |
| `NEAREST_MIPMAP_NEAREST`      | 0x2700          |                                  |
| `LINEAR_MIPMAP_NEAREST`       | 0x2701          |                                  |
| `NEAREST_MIPMAP_LINEAR`       | 0x2702          |                                  |
| `LINEAR_MIPMAP_LINEAR`        | 0x2703          |                                  |
| `TEXTURE_MAG_FILTER`          | 0x2800          |                                  |
| `TEXTURE_MIN_FILTER`          | 0x2801          |                                  |
| `TEXTURE_WRAP_S`              | 0x2802          |                                  |
| `TEXTURE_WRAP_T`              | 0x2803          |                                  |
| `TEXTURE_2D`                  | 0x0DE1          |                                  |
| `TEXTURE`                     | 0x1702          |                                  |
| `TEXTURE_CUBE_MAP`            | 0x8513          |                                  |
| `TEXTURE_BINDING_CUBE_MAP`    | 0x8514          |                                  |
| `TEXTURE_CUBE_MAP_POSITIVE_X` | 0x8515          |                                  |
| `TEXTURE_CUBE_MAP_NEGATIVE_X` | 0x8516          |                                  |
| `TEXTURE_CUBE_MAP_POSITIVE_Y` | 0x8517          |                                  |
| `TEXTURE_CUBE_MAP_NEGATIVE_Y` | 0x8518          |                                  |
| `TEXTURE_CUBE_MAP_POSITIVE_Z` | 0x8519          |                                  |
| `TEXTURE_CUBE_MAP_NEGATIVE_Z` | 0x851A          |                                  |
| `MAX_CUBE_MAP_TEXTURE_SIZE`   | 0x851C          |                                  |
| `TEXTURE0 - 31`               | 0x84C0 - 0x84DF | A texture unit.                  |
| `ACTIVE_TEXTURE`              | 0x84E0          | The current active texture unit. |
| `REPEAT`                      | 0x2901          |                                  |
| `CLAMP_TO_EDGE`               | 0x812F          |                                  |
| `MIRRORED_REPEAT`             | 0x8370          |                                  |

### Uniform types

| Constant name  | Value  | Description |
| -------------- | ------ | ----------- |
| `FLOAT_VEC2`   | 0x8B50 |             |
| `FLOAT_VEC3`   | 0x8B51 |             |
| `FLOAT_VEC4`   | 0x8B52 |             |
| `INT_VEC2`     | 0x8B53 |             |
| `INT_VEC3`     | 0x8B54 |             |
| `INT_VEC4`     | 0x8B55 |             |
| `BOOL`         | 0x8B56 |             |
| `BOOL_VEC2`    | 0x8B57 |             |
| `BOOL_VEC3`    | 0x8B58 |             |
| `BOOL_VEC4`    | 0x8B59 |             |
| `FLOAT_MAT2`   | 0x8B5A |             |
| `FLOAT_MAT3`   | 0x8B5B |             |
| `FLOAT_MAT4`   | 0x8B5C |             |
| `SAMPLER_2D`   | 0x8B5E |             |
| `SAMPLER_CUBE` | 0x8B60 |             |

### Shader precision-specified types

| Constant name  | Value  | Description |
| -------------- | ------ | ----------- |
| `LOW_FLOAT`    | 0x8DF0 |             |
| `MEDIUM_FLOAT` | 0x8DF1 |             |
| `HIGH_FLOAT`   | 0x8DF2 |             |
| `LOW_INT`      | 0x8DF3 |             |
| `MEDIUM_INT`   | 0x8DF4 |             |
| `HIGH_INT`     | 0x8DF5 |             |

### Framebuffers and renderbuffers

| Constant name                                  | Value  | Description |
| ---------------------------------------------- | ------ | ----------- |
| `FRAMEBUFFER`                                  | 0x8D40 |             |
| `RENDERBUFFER`                                 | 0x8D41 |             |
| `RGBA4`                                        | 0x8056 |             |
| `RGB5_A1`                                      | 0x8057 |             |
| `RGB565`                                       | 0x8D62 |             |
| `DEPTH_COMPONENT16`                            | 0x81A5 |             |
| `STENCIL_INDEX8`                               | 0x8D48 |             |
| `DEPTH_STENCIL`                                | 0x84F9 |             |
| `RENDERBUFFER_WIDTH`                           | 0x8D42 |             |
| `RENDERBUFFER_HEIGHT`                          | 0x8D43 |             |
| `RENDERBUFFER_INTERNAL_FORMAT`                 | 0x8D44 |             |
| `RENDERBUFFER_RED_SIZE`                        | 0x8D50 |             |
| `RENDERBUFFER_GREEN_SIZE`                      | 0x8D51 |             |
| `RENDERBUFFER_BLUE_SIZE`                       | 0x8D52 |             |
| `RENDERBUFFER_ALPHA_SIZE`                      | 0x8D53 |             |
| `RENDERBUFFER_DEPTH_SIZE`                      | 0x8D54 |             |
| `RENDERBUFFER_STENCIL_SIZE`                    | 0x8D55 |             |
| `FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE`           | 0x8CD0 |             |
| `FRAMEBUFFER_ATTACHMENT_OBJECT_NAME`           | 0x8CD1 |             |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL`         | 0x8CD2 |             |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE` | 0x8CD3 |             |
| `COLOR_ATTACHMENT0`                            | 0x8CE0 |             |
| `DEPTH_ATTACHMENT`                             | 0x8D00 |             |
| `STENCIL_ATTACHMENT`                           | 0x8D20 |             |
| `DEPTH_STENCIL_ATTACHMENT`                     | 0x821A |             |
| `NONE`                                         | 0      |             |
| `FRAMEBUFFER_COMPLETE`                         | 0x8CD5 |             |
| `FRAMEBUFFER_INCOMPLETE_ATTACHMENT`            | 0x8CD6 |             |
| `FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`    | 0x8CD7 |             |
| `FRAMEBUFFER_INCOMPLETE_DIMENSIONS`            | 0x8CD9 |             |
| `FRAMEBUFFER_UNSUPPORTED`                      | 0x8CDD |             |
| `FRAMEBUFFER_BINDING`                          | 0x8CA6 |             |
| `RENDERBUFFER_BINDING`                         | 0x8CA7 |             |
| `MAX_RENDERBUFFER_SIZE`                        | 0x84E8 |             |
| `INVALID_FRAMEBUFFER_OPERATION`                | 0x0506 |             |

### Pixel storage modes

Constants passed to {{domxref("WebGLRenderingContext.pixelStorei()")}}.

| Constant name                        | Value  | Description |
| ------------------------------------ | ------ | ----------- |
| `UNPACK_FLIP_Y_WEBGL`                | 0x9240 |             |
| `UNPACK_PREMULTIPLY_ALPHA_WEBGL`     | 0x9241 |             |
| `UNPACK_COLORSPACE_CONVERSION_WEBGL` | 0x9243 |             |

## Additional constants defined WebGL 2

These constants are defined on the {{domxref("WebGL2RenderingContext")}} interface. All WebGL 1 constants are also available in a WebGL 2 context.

### Getting GL parameter information

Constants passed to {{domxref("WebGLRenderingContext.getParameter()")}} to specify what information to return.

| Constant name                     | Value  | Description |
| --------------------------------- | ------ | ----------- |
| `READ_BUFFER`                     | 0x0C02 |             |
| `UNPACK_ROW_LENGTH`               | 0x0CF2 |             |
| `UNPACK_SKIP_ROWS`                | 0x0CF3 |             |
| `UNPACK_SKIP_PIXELS`              | 0x0CF4 |             |
| `PACK_ROW_LENGTH`                 | 0x0D02 |             |
| `PACK_SKIP_ROWS`                  | 0x0D03 |             |
| `PACK_SKIP_PIXELS`                | 0x0D04 |             |
| `TEXTURE_BINDING_3D`              | 0x806A |             |
| `UNPACK_SKIP_IMAGES`              | 0x806D |             |
| `UNPACK_IMAGE_HEIGHT`             | 0x806E |             |
| `MAX_3D_TEXTURE_SIZE`             | 0x8073 |             |
| `MAX_ELEMENTS_VERTICES`           | 0x80E8 |             |
| `MAX_ELEMENTS_INDICES`            | 0x80E9 |             |
| `MAX_TEXTURE_LOD_BIAS`            | 0x84FD |             |
| `MAX_FRAGMENT_UNIFORM_COMPONENTS` | 0x8B49 |             |
| `MAX_VERTEX_UNIFORM_COMPONENTS`   | 0x8B4A |             |
| `MAX_ARRAY_TEXTURE_LAYERS`        | 0x88FF |             |
| `MIN_PROGRAM_TEXEL_OFFSET`        | 0x8904 |             |
| `MAX_PROGRAM_TEXEL_OFFSET`        | 0x8905 |             |
| `MAX_VARYING_COMPONENTS`          | 0x8B4B |             |
| `FRAGMENT_SHADER_DERIVATIVE_HINT` | 0x8B8B |             |
| `RASTERIZER_DISCARD`              | 0x8C89 |             |
| `VERTEX_ARRAY_BINDING`            | 0x85B5 |             |
| `MAX_VERTEX_OUTPUT_COMPONENTS`    | 0x9122 |             |
| `MAX_FRAGMENT_INPUT_COMPONENTS`   | 0x9125 |             |
| `MAX_SERVER_WAIT_TIMEOUT`         | 0x9111 |             |
| `MAX_ELEMENT_INDEX`               | 0x8D6B |             |

### Textures

Constants passed to {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}, {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}, {{domxref("WebGLRenderingContext.bindTexture()")}}, {{domxref("WebGLRenderingContext.texImage2D()")}}, and others.

| Constant name              | Value  | Description |
| -------------------------- | ------ | ----------- |
| `RED`                      | 0x1903 |             |
| `RGB8`                     | 0x8051 |             |
| `RGBA8`                    | 0x8058 |             |
| `RGB10_A2`                 | 0x8059 |             |
| `TEXTURE_3D`               | 0x806F |             |
| `TEXTURE_WRAP_R`           | 0x8072 |             |
| `TEXTURE_MIN_LOD`          | 0x813A |             |
| `TEXTURE_MAX_LOD`          | 0x813B |             |
| `TEXTURE_BASE_LEVEL`       | 0x813C |             |
| `TEXTURE_MAX_LEVEL`        | 0x813D |             |
| `TEXTURE_COMPARE_MODE`     | 0x884C |             |
| `TEXTURE_COMPARE_FUNC`     | 0x884D |             |
| `SRGB`                     | 0x8C40 |             |
| `SRGB8`                    | 0x8C41 |             |
| `SRGB8_ALPHA8`             | 0x8C43 |             |
| `COMPARE_REF_TO_TEXTURE`   | 0x884E |             |
| `RGBA32F`                  | 0x8814 |             |
| `RGB32F`                   | 0x8815 |             |
| `RGBA16F`                  | 0x881A |             |
| `RGB16F`                   | 0x881B |             |
| `TEXTURE_2D_ARRAY`         | 0x8C1A |             |
| `TEXTURE_BINDING_2D_ARRAY` | 0x8C1D |             |
| `R11F_G11F_B10F`           | 0x8C3A |             |
| `RGB9_E5`                  | 0x8C3D |             |
| `RGBA32UI`                 | 0x8D70 |             |
| `RGB32UI`                  | 0x8D71 |             |
| `RGBA16UI`                 | 0x8D76 |             |
| `RGB16UI`                  | 0x8D77 |             |
| `RGBA8UI`                  | 0x8D7C |             |
| `RGB8UI`                   | 0x8D7D |             |
| `RGBA32I`                  | 0x8D82 |             |
| `RGB32I`                   | 0x8D83 |             |
| `RGBA16I`                  | 0x8D88 |             |
| `RGB16I`                   | 0x8D89 |             |
| `RGBA8I`                   | 0x8D8E |             |
| `RGB8I`                    | 0x8D8F |             |
| `RED_INTEGER`              | 0x8D94 |             |
| `RGB_INTEGER`              | 0x8D98 |             |
| `RGBA_INTEGER`             | 0x8D99 |             |
| `R8`                       | 0x8229 |             |
| `RG8`                      | 0x822B |             |
| R16F                       | 0x822D |             |
| R32F                       | 0x822E |             |
| RG16F                      | 0x822F |             |
| RG32F                      | 0x8230 |             |
| R8I                        | 0x8231 |             |
| R8UI                       | 0x8232 |             |
| R16I                       | 0x8233 |             |
| R16UI                      | 0x8234 |             |
| R32I                       | 0x8235 |             |
| R32UI                      | 0x8236 |             |
| RG8I                       | 0x8237 |             |
| RG8UI                      | 0x8238 |             |
| RG16I                      | 0x8239 |             |
| RG16UI                     | 0x823A |             |
| RG32I                      | 0x823B |             |
| RG32UI                     | 0x823C |             |
| R8_SNORM                   | 0x8F94 |             |
| RG8_SNORM                  | 0x8F95 |             |
| RGB8_SNORM                 | 0x8F96 |             |
| RGBA8_SNORM                | 0x8F97 |             |
| `RGB10_A2UI`               | 0x906F |             |
| `TEXTURE_IMMUTABLE_FORMAT` | 0x912F |             |
| `TEXTURE_IMMUTABLE_LEVELS` | 0x82DF |             |

### Pixel types

| Constant name                    | Value  | Description |
| -------------------------------- | ------ | ----------- |
| `UNSIGNED_INT_2_10_10_10_REV`    | 0x8368 |             |
| `UNSIGNED_INT_10F_11F_11F_REV`   | 0x8C3B |             |
| `UNSIGNED_INT_5_9_9_9_REV`       | 0x8C3E |             |
| `FLOAT_32_UNSIGNED_INT_24_8_REV` | 0x8DAD |             |
| UNSIGNED_INT_24_8                | 0x84FA |             |
| `HALF_FLOAT`                     | 0x140B |             |
| `RG`                             | 0x8227 |             |
| `RG_INTEGER`                     | 0x8228 |             |
| `INT_2_10_10_10_REV`             | 0x8D9F |             |

### Queries

| Constant name                     | Value  | Description |
| --------------------------------- | ------ | ----------- |
| `CURRENT_QUERY`                   | 0x8865 |             |
| `QUERY_RESULT`                    | 0x8866 |             |
| `QUERY_RESULT_AVAILABLE`          | 0x8867 |             |
| `ANY_SAMPLES_PASSED`              | 0x8C2F |             |
| `ANY_SAMPLES_PASSED_CONSERVATIVE` | 0x8D6A |             |

### Draw buffers

| Constant name           | Value  | Description |
| ----------------------- | ------ | ----------- |
| `MAX_DRAW_BUFFERS`      | 0x8824 |             |
| `DRAW_BUFFER0`          | 0x8825 |             |
| `DRAW_BUFFER1`          | 0x8826 |             |
| `DRAW_BUFFER2`          | 0x8827 |             |
| `DRAW_BUFFER3`          | 0x8828 |             |
| `DRAW_BUFFER4`          | 0x8829 |             |
| `DRAW_BUFFER5`          | 0x882A |             |
| `DRAW_BUFFER6`          | 0x882B |             |
| `DRAW_BUFFER7`          | 0x882C |             |
| `DRAW_BUFFER8`          | 0x882D |             |
| `DRAW_BUFFER9`          | 0x882E |             |
| `DRAW_BUFFER10`         | 0x882F |             |
| `DRAW_BUFFER11`         | 0x8830 |             |
| `DRAW_BUFFER12`         | 0x8831 |             |
| `DRAW_BUFFER13`         | 0x8832 |             |
| `DRAW_BUFFER14`         | 0x8833 |             |
| `DRAW_BUFFER15`         | 0x8834 |             |
| `MAX_COLOR_ATTACHMENTS` | 0x8CDF |             |
| `COLOR_ATTACHMENT1`     | 0x8CE1 |             |
| `COLOR_ATTACHMENT2`     | 0x8CE2 |             |
| `COLOR_ATTACHMENT3`     | 0x8CE3 |             |
| `COLOR_ATTACHMENT4`     | 0x8CE4 |             |
| `COLOR_ATTACHMENT5`     | 0x8CE5 |             |
| `COLOR_ATTACHMENT6`     | 0x8CE6 |             |
| `COLOR_ATTACHMENT7`     | 0x8CE7 |             |
| `COLOR_ATTACHMENT8`     | 0x8CE8 |             |
| `COLOR_ATTACHMENT9`     | 0x8CE9 |             |
| `COLOR_ATTACHMENT10`    | 0x8CEA |             |
| `COLOR_ATTACHMENT11`    | 0x8CEB |             |
| `COLOR_ATTACHMENT12`    | 0x8CEC |             |
| `COLOR_ATTACHMENT13`    | 0x8CED |             |
| `COLOR_ATTACHMENT14`    | 0x8CEE |             |
| `COLOR_ATTACHMENT15`    | 0x8CEF |             |

### Samplers

| Constant name                   | Value  | Description |
| ------------------------------- | ------ | ----------- |
| `SAMPLER_3D`                    | 0x8B5F |             |
| `SAMPLER_2D_SHADOW`             | 0x8B62 |             |
| `SAMPLER_2D_ARRAY`              | 0x8DC1 |             |
| `SAMPLER_2D_ARRAY_SHADOW`       | 0x8DC4 |             |
| `SAMPLER_CUBE_SHADOW`           | 0x8DC5 |             |
| `INT_SAMPLER_2D`                | 0x8DCA |             |
| `INT_SAMPLER_3D`                | 0x8DCB |             |
| `INT_SAMPLER_CUBE`              | 0x8DCC |             |
| `INT_SAMPLER_2D_ARRAY`          | 0x8DCF |             |
| `UNSIGNED_INT_SAMPLER_2D`       | 0x8DD2 |             |
| `UNSIGNED_INT_SAMPLER_3D`       | 0x8DD3 |             |
| `UNSIGNED_INT_SAMPLER_CUBE`     | 0x8DD4 |             |
| `UNSIGNED_INT_SAMPLER_2D_ARRAY` | 0x8DD7 |             |
| `MAX_SAMPLES`                   | 0x8D57 |             |
| `SAMPLER_BINDING`               | 0x8919 |             |

### Buffers

| Constant name                 | Value  | Description |
| ----------------------------- | ------ | ----------- |
| `PIXEL_PACK_BUFFER`           | 0x88EB |             |
| `PIXEL_UNPACK_BUFFER`         | 0x88EC |             |
| `PIXEL_PACK_BUFFER_BINDING`   | 0x88ED |             |
| `PIXEL_UNPACK_BUFFER_BINDING` | 0x88EF |             |
| `COPY_READ_BUFFER`            | 0x8F36 |             |
| `COPY_WRITE_BUFFER`           | 0x8F37 |             |
| `COPY_READ_BUFFER_BINDING`    | 0x8F36 |             |
| `COPY_WRITE_BUFFER_BINDING`   | 0x8F37 |             |

### Data types

| Constant name         | Value  | Description |
| --------------------- | ------ | ----------- |
| `FLOAT_MAT2x3`        | 0x8B65 |             |
| `FLOAT_MAT2x4`        | 0x8B66 |             |
| `FLOAT_MAT3x2`        | 0x8B67 |             |
| `FLOAT_MAT3x4`        | 0x8B68 |             |
| `FLOAT_MAT4x2`        | 0x8B69 |             |
| `FLOAT_MAT4x3`        | 0x8B6A |             |
| `UNSIGNED_INT_VEC2`   | 0x8DC6 |             |
| `UNSIGNED_INT_VEC3`   | 0x8DC7 |             |
| `UNSIGNED_INT_VEC4`   | 0x8DC8 |             |
| `UNSIGNED_NORMALIZED` | 0x8C17 |             |
| `SIGNED_NORMALIZED`   | 0x8F9C |             |

### Vertex attributes

| Constant name                 | Value  | Description |
| ----------------------------- | ------ | ----------- |
| `VERTEX_ATTRIB_ARRAY_INTEGER` | 0x88FD |             |
| `VERTEX_ATTRIB_ARRAY_DIVISOR` | 0x88FE |             |

### Transform feedback

| Constant name                                   | Value  | Description |
| ----------------------------------------------- | ------ | ----------- |
| `TRANSFORM_FEEDBACK_BUFFER_MODE`                | 0x8C7F |             |
| `MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS`    | 0x8C80 |             |
| `TRANSFORM_FEEDBACK_VARYINGS`                   | 0x8C83 |             |
| `TRANSFORM_FEEDBACK_BUFFER_START`               | 0x8C84 |             |
| `TRANSFORM_FEEDBACK_BUFFER_SIZE`                | 0x8C85 |             |
| `TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`         | 0x8C88 |             |
| `MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS` | 0x8C8A |             |
| `MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS`       | 0x8C8B |             |
| `INTERLEAVED_ATTRIBS`                           | 0x8C8C |             |
| `SEPARATE_ATTRIBS`                              | 0x8C8D |             |
| `TRANSFORM_FEEDBACK_BUFFER`                     | 0x8C8E |             |
| `TRANSFORM_FEEDBACK_BUFFER_BINDING`             | 0x8C8F |             |
| `TRANSFORM_FEEDBACK`                            | 0x8E22 |             |
| `TRANSFORM_FEEDBACK_PAUSED`                     | 0x8E23 |             |
| `TRANSFORM_FEEDBACK_ACTIVE`                     | 0x8E24 |             |
| `TRANSFORM_FEEDBACK_BINDING`                    | 0x8E25 |             |

### Framebuffers and renderbuffers

| Constant name                           | Value  | Description |
| --------------------------------------- | ------ | ----------- |
| `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING` | 0x8210 |             |
| `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE` | 0x8211 |             |
| `FRAMEBUFFER_ATTACHMENT_RED_SIZE`       | 0x8212 |             |
| `FRAMEBUFFER_ATTACHMENT_GREEN_SIZE`     | 0x8213 |             |
| `FRAMEBUFFER_ATTACHMENT_BLUE_SIZE`      | 0x8214 |             |
| `FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE`     | 0x8215 |             |
| `FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE`     | 0x8216 |             |
| `FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE`   | 0x8217 |             |
| `FRAMEBUFFER_DEFAULT`                   | 0x8218 |             |
| `DEPTH_STENCIL_ATTACHMENT`              | 0x821A |             |
| `DEPTH_STENCIL`                         | 0x84F9 |             |
| `DEPTH24_STENCIL8`                      | 0x88F0 |             |
| `DRAW_FRAMEBUFFER_BINDING`              | 0x8CA6 |             |
| `READ_FRAMEBUFFER`                      | 0x8CA8 |             |
| `DRAW_FRAMEBUFFER`                      | 0x8CA9 |             |
| `READ_FRAMEBUFFER_BINDING`              | 0x8CAA |             |
| `RENDERBUFFER_SAMPLES`                  | 0x8CAB |             |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER`  | 0x8CD4 |             |
| `FRAMEBUFFER_INCOMPLETE_MULTISAMPLE`    | 0x8D56 |             |

### Uniforms

| Constant name                                 | Value  | Description |
| --------------------------------------------- | ------ | ----------- |
| `UNIFORM_BUFFER`                              | 0x8A11 |             |
| `UNIFORM_BUFFER_BINDING`                      | 0x8A28 |             |
| `UNIFORM_BUFFER_START`                        | 0x8A29 |             |
| `UNIFORM_BUFFER_SIZE`                         | 0x8A2A |             |
| `MAX_VERTEX_UNIFORM_BLOCKS`                   | 0x8A2B |             |
| `MAX_FRAGMENT_UNIFORM_BLOCKS`                 | 0x8A2D |             |
| `MAX_COMBINED_UNIFORM_BLOCKS`                 | 0x8A2E |             |
| `MAX_UNIFORM_BUFFER_BINDINGS`                 | 0x8A2F |             |
| `MAX_UNIFORM_BLOCK_SIZE`                      | 0x8A30 |             |
| `MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS`      | 0x8A31 |             |
| `MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS`    | 0x8A33 |             |
| `UNIFORM_BUFFER_OFFSET_ALIGNMENT`             | 0x8A34 |             |
| `ACTIVE_UNIFORM_BLOCKS`                       | 0x8A36 |             |
| `UNIFORM_TYPE`                                | 0x8A37 |             |
| `UNIFORM_SIZE`                                | 0x8A38 |             |
| `UNIFORM_BLOCK_INDEX`                         | 0x8A3A |             |
| `UNIFORM_OFFSET`                              | 0x8A3B |             |
| `UNIFORM_ARRAY_STRIDE`                        | 0x8A3C |             |
| `UNIFORM_MATRIX_STRIDE`                       | 0x8A3D |             |
| `UNIFORM_IS_ROW_MAJOR`                        | 0x8A3E |             |
| `UNIFORM_BLOCK_BINDING`                       | 0x8A3F |             |
| `UNIFORM_BLOCK_DATA_SIZE`                     | 0x8A40 |             |
| `UNIFORM_BLOCK_ACTIVE_UNIFORMS`               | 0x8A42 |             |
| `UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`        | 0x8A43 |             |
| `UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER`   | 0x8A44 |             |
| `UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER` | 0x8A46 |             |

### Sync objects

| Constant name                | Value      | Description |
| ---------------------------- | ---------- | ----------- |
| `OBJECT_TYPE`                | 0x9112     |             |
| `SYNC_CONDITION`             | 0x9113     |             |
| `SYNC_STATUS`                | 0x9114     |             |
| `SYNC_FLAGS`                 | 0x9115     |             |
| `SYNC_FENCE`                 | 0x9116     |             |
| `SYNC_GPU_COMMANDS_COMPLETE` | 0x9117     |             |
| `UNSIGNALED`                 | 0x9118     |             |
| `SIGNALED`                   | 0x9119     |             |
| `ALREADY_SIGNALED`           | 0x911A     |             |
| `TIMEOUT_EXPIRED`            | 0x911B     |             |
| `CONDITION_SATISFIED`        | 0x911C     |             |
| `WAIT_FAILED`                | 0x911D     |             |
| `SYNC_FLUSH_COMMANDS_BIT`    | 0x00000001 |             |

### Miscellaneous constants

| Constant name                   | Value      | Description |
| ------------------------------- | ---------- | ----------- |
| `COLOR`                         | 0x1800     |             |
| DEPTH                           | 0x1801     |             |
| `STENCIL`                       | 0x1802     |             |
| `MIN`                           | 0x8007     |             |
| MAX                             | 0x8008     |             |
| `DEPTH_COMPONENT24`             | 0x81A6     |             |
| `STREAM_READ`                   | 0x88E1     |             |
| `STREAM_COPY`                   | 0x88E2     |             |
| `STATIC_READ`                   | 0x88E5     |             |
| `STATIC_COPY`                   | 0x88E6     |             |
| `DYNAMIC_READ`                  | 0x88E9     |             |
| `DYNAMIC_COPY`                  | 0x88EA     |             |
| `DEPTH_COMPONENT32F`            | 0x8CAC     |             |
| `DEPTH32F_STENCIL8`             | 0x8CAD     |             |
| `INVALID_INDEX`                 | 0xFFFFFFFF |             |
| `TIMEOUT_IGNORED`               | -1         |             |
| `MAX_CLIENT_WAIT_TIMEOUT_WEBGL` | 0x9247     |             |

## Constants defined in WebGL extensions

### ANGLE_instanced_arrays

| Constant name                       | Value  | Description                                                   |
| ----------------------------------- | ------ | ------------------------------------------------------------- |
| `VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE` | 0x88FE | Describes the frequency divisor used for instanced rendering. |

For more information, see {{domxref("ANGLE_instanced_arrays")}}.

### WEBGL_debug_renderer_info

| Constant name             | Value  | Description                                                                 |
| ------------------------- | ------ | --------------------------------------------------------------------------- |
| `UNMASKED_VENDOR_WEBGL`   | 0x9245 | Passed to `getParameter` to get the vendor string of the graphics driver.   |
| `UNMASKED_RENDERER_WEBGL` | 0x9246 | Passed to `getParameter` to get the renderer string of the graphics driver. |

For more information, see {{domxref("WEBGL_debug_renderer_info")}}.

### EXT_texture_filter_anisotropic

| Constant name                    | Value  | Description                                                                   |
| -------------------------------- | ------ | ----------------------------------------------------------------------------- |
| `MAX_TEXTURE_MAX_ANISOTROPY_EXT` | 0x84FF | Returns the maximum available anisotropy.                                     |
| `TEXTURE_MAX_ANISOTROPY_EXT`     | 0x84FE | Passed to `texParameter` to set the desired maximum anisotropy for a texture. |

For more information, see {{domxref("EXT_texture_filter_anisotropic")}}.

### WEBGL_compressed_texture_s3tc

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>COMPRESSED_RGB_S3TC_DXT1_EXT</code></td>
      <td>0x83F0</td>
      <td>A DXT1-compressed image in an RGB image format.</td>
    </tr>
    <tr>
      <td><code>COMPRESSED_RGBA_S3TC_DXT1_EXT</code></td>
      <td>0x83F1</td>
      <td>
        A DXT1-compressed image in an RGB image format with a simple on/off
        alpha value.
      </td>
    </tr>
    <tr>
      <td><code>COMPRESSED_RGBA_S3TC_DXT3_EXT</code></td>
      <td>0x83F2</td>
      <td>
        A DXT3-compressed image in an RGBA image format. Compared to a 32-bit
        RGBA texture, it offers 4:1 compression.
      </td>
    </tr>
    <tr>
      <td><code>COMPRESSED_RGBA_S3TC_DXT5_EXT</code></td>
      <td>0x83F3</td>
      <td>
        A DXT5-compressed image in an RGBA image format. It also provides a 4:1
        compression, but differs to the DXT3 compression in how the alpha
        compression is done.
      </td>
    </tr>
  </tbody>
</table>

For more information, see {{domxref("WEBGL_compressed_texture_s3tc")}}.

### WEBGL_compressed_texture_etc

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>COMPRESSED_R11_EAC</code></td>
      <td>0x9270</td>
      <td>One-channel (red) unsigned format compression.</td>
    </tr>
    <tr>
      <td><code>COMPRESSED_SIGNED_R11_EAC</code></td>
      <td>0x9271</td>
      <td>One-channel (red) signed format compression.</td>
    </tr>
    <tr>
      <td><code>COMPRESSED_RG11_EAC</code></td>
      <td>0x9272</td>
      <td>Two-channel (red and green) unsigned format compression.</td>
    </tr>
    <tr>
      <td><code>COMPRESSED_SIGNED_RG11_EAC</code></td>
      <td>0x9273</td>
      <td>Two-channel (red and green) signed format compression.</td>
    </tr>
    <tr>
      <td><code>COMPRESSED_RGB8_ETC2</code></td>
      <td>0x9274</td>
      <td>Compresses RGB8 data with no alpha channel.</td>
    </tr>
    <tr>
      <td><code>COMPRESSED_RGBA8_ETC2_EAC</code></td>
      <td>0x9275</td>
      <td>
        Compresses RGBA8 data. The RGB part is encoded the same as
        <code>RGB_ETC2</code>, but the alpha part is encoded separately.
      </td>
    </tr>
    <tr>
      <td><code>COMPRESSED_SRGB8_ETC2</code></td>
      <td>0x9276</td>
      <td>Compresses sRGB8 data with no alpha channel.</td>
    </tr>
    <tr>
      <td><code>COMPRESSED_SRGB8_ALPHA8_ETC2_EAC</code></td>
      <td>0x9277</td>
      <td>
        Compresses sRGBA8 data. The sRGB part is encoded the same as
        <code>SRGB_ETC2</code>, but the alpha part is encoded separately.
      </td>
    </tr>
    <tr>
      <td><code>COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2</code></td>
      <td>0x9278</td>
      <td>
        Similar to <code>RGB8_ETC</code>, but with ability to punch through the
        alpha channel, which means to make it completely opaque or transparent.
      </td>
    </tr>
    <tr>
      <td><code>COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2</code></td>
      <td>0x9279</td>
      <td>
        Similar to <code>SRGB8_ETC</code>, but with ability to punch through the
        alpha channel, which means to make it completely opaque or transparent.
      </td>
    </tr>
  </tbody>
</table>

For more information, see {{domxref("WEBGL_compressed_texture_etc")}}.

### WEBGL_compressed_texture_pvrtc

| Constant name                      | Value  | Description                                                    |
| ---------------------------------- | ------ | -------------------------------------------------------------- |
| `COMPRESSED_RGB_PVRTC_4BPPV1_IMG`  | 0x8C00 | RGB compression in 4-bit mode. One block for each 4×4 pixels.  |
| `COMPRESSED_RGBA_PVRTC_4BPPV1_IMG` | 0x8C02 | RGBA compression in 4-bit mode. One block for each 4×4 pixels. |
| `COMPRESSED_RGB_PVRTC_2BPPV1_IMG`  | 0x8C01 | RGB compression in 2-bit mode. One block for each 8×4 pixels.  |
| `COMPRESSED_RGBA_PVRTC_2BPPV1_IMG` | 0x8C03 | RGBA compression in 2-bit mode. One block for each 8×4 pixels. |

For more information, see {{domxref("WEBGL_compressed_texture_pvrtc")}}.

### WEBGL_compressed_texture_etc1

| Constant name               | Value  | Description                                       |
| --------------------------- | ------ | ------------------------------------------------- |
| `COMPRESSED_RGB_ETC1_WEBGL` | 0x8D64 | Compresses 24-bit RGB data with no alpha channel. |

For more information, see {{domxref("WEBGL_compressed_texture_etc1")}}.

### WEBGL_depth_texture

| Constant name             | Value  | Description                                          |
| ------------------------- | ------ | ---------------------------------------------------- |
| `UNSIGNED_INT_24_8_WEBGL` | 0x84FA | Unsigned integer type for 24-bit depth texture data. |

For more information, see {{domxref("WEBGL_depth_texture")}}.

### OES_texture_half_float

| Constant name    | Value  | Description                        |
| ---------------- | ------ | ---------------------------------- |
| `HALF_FLOAT_OES` | 0x8D61 | Half floating-point type (16-bit). |

For more information, see {{domxref("OES_texture_half_float")}}.

### WEBGL_color_buffer_float

| Constant name                               | Value  | Description                                         |
| ------------------------------------------- | ------ | --------------------------------------------------- |
| `RGBA32F_EXT`                               | 0x8814 | RGBA 32-bit floating-point color-renderable format. |
| `RGB32F_EXT`                                | 0x8815 | RGB 32-bit floating-point color-renderable format.  |
| `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT` | 0x8211 |                                                     |
| `UNSIGNED_NORMALIZED_EXT`                   | 0x8C17 |                                                     |

For more information, see {{domxref("WEBGL_color_buffer_float")}}.

### EXT_blend_minmax

| Constant name | Value  | Description                                                                 |
| ------------- | ------ | --------------------------------------------------------------------------- |
| `MIN_EXT`     | 0x8007 | Produces the minimum color components of the source and destination colors. |
| `MAX_EXT`     | 0x8008 | Produces the maximum color components of the source and destination colors. |

For more information, see {{domxref("EXT_blend_minmax")}}.

### EXT_sRGB

| Constant name                               | Value  | Description                                                     |
| ------------------------------------------- | ------ | --------------------------------------------------------------- |
| `SRGB_EXT`                                  | 0x8C40 | Unsized sRGB format that leaves the precision up to the driver. |
| `SRGB_ALPHA_EXT`                            | 0x8C42 | Unsized sRGB format with unsized alpha component.               |
| `SRGB8_ALPHA8_EXT`                          | 0x8C43 | Sized (8-bit) sRGB and alpha formats.                           |
| `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT` | 0x8210 | Returns the framebuffer color encoding.                         |

For more information, see {{domxref("EXT_sRGB")}}.

### OES_standard_derivatives

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>FRAGMENT_SHADER_DERIVATIVE_HINT_OES</code></td>
      <td>0x8B8B</td>
      <td>
        Indicates the accuracy of the derivative calculation for the GLSL
        built-in functions: <code>dFdx</code>, <code>dFdy</code>, and
        <code>fwidth</code>.
      </td>
    </tr>
  </tbody>
</table>

For more information, see {{domxref("OES_standard_derivatives")}}.

### WEBGL_draw_buffers

| Constant name                 | Value  | Description                                           |
| ----------------------------- | ------ | ----------------------------------------------------- |
| `COLOR_ATTACHMENT0_WEBGL`     | 0x8CE0 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT1_WEBGL`     | 0x8CE1 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT2_WEBGL`     | 0x8CE2 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT3_WEBGL`     | 0x8CE3 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT4_WEBGL`     | 0x8CE4 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT5_WEBGL`     | 0x8CE5 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT6_WEBGL`     | 0x8CE6 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT7_WEBGL`     | 0x8CE7 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT8_WEBGL`     | 0x8CE8 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT9_WEBGL`     | 0x8CE9 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT10_WEBGL`    | 0x8CEA | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT11_WEBGL`    | 0x8CEB | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT12_WEBGL`    | 0x8CEC | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT13_WEBGL`    | 0x8CED | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT14_WEBGL`    | 0x8CEE | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT15_WEBGL`    | 0x8CEF | Framebuffer color attachment point                    |
| `DRAW_BUFFER0_WEBGL`          | 0x8825 | Draw buffer                                           |
| `DRAW_BUFFER1_WEBGL`          | 0x8826 | Draw buffer                                           |
| `DRAW_BUFFER2_WEBGL`          | 0x8827 | Draw buffer                                           |
| `DRAW_BUFFER3_WEBGL`          | 0x8828 | Draw buffer                                           |
| `DRAW_BUFFER4_WEBGL`          | 0x8829 | Draw buffer                                           |
| `DRAW_BUFFER5_WEBGL`          | 0x882A | Draw buffer                                           |
| `DRAW_BUFFER6_WEBGL`          | 0x882B | Draw buffer                                           |
| `DRAW_BUFFER7_WEBGL`          | 0x882C | Draw buffer                                           |
| `DRAW_BUFFER8_WEBGL`          | 0x882D | Draw buffer                                           |
| `DRAW_BUFFER9_WEBGL`          | 0x882E | Draw buffer                                           |
| `DRAW_BUFFER10_WEBGL`         | 0x882F | Draw buffer                                           |
| `DRAW_BUFFER11_WEBGL`         | 0x8830 | Draw buffer                                           |
| `DRAW_BUFFER12_WEBGL`         | 0x8831 | Draw buffer                                           |
| `DRAW_BUFFER13_WEBGL`         | 0x8832 | Draw buffer                                           |
| `DRAW_BUFFER14_WEBGL`         | 0x8833 | Draw buffer                                           |
| `DRAW_BUFFER15_WEBGL`         | 0x8834 | Draw buffer                                           |
| `MAX_COLOR_ATTACHMENTS_WEBGL` | 0x8CDF | Maximum number of framebuffer color attachment points |
| `MAX_DRAW_BUFFERS_WEBGL`      | 0x8824 | Maximum number of draw buffers                        |

For more information, see {{domxref("WEBGL_draw_buffers")}}.

### OES_vertex_array_object

| Constant name              | Value  | Description                          |
| -------------------------- | ------ | ------------------------------------ |
| `VERTEX_ARRAY_BINDING_OES` | 0x85B5 | The bound vertex array object (VAO). |

For more information, see {{domxref("OES_vertex_array_object")}}.

### EXT_disjoint_timer_query

| Constant name                | Value  | Description                                                                   |
| ---------------------------- | ------ | ----------------------------------------------------------------------------- |
| `QUERY_COUNTER_BITS_EXT`     | 0x8864 | The number of bits used to hold the query result for the given target.        |
| `CURRENT_QUERY_EXT`          | 0x8865 | The currently active query.                                                   |
| `QUERY_RESULT_EXT`           | 0x8866 | The query result.                                                             |
| `QUERY_RESULT_AVAILABLE_EXT` | 0x8867 | A Boolean indicating whether or not a query result is available.              |
| `TIME_ELAPSED_EXT`           | 0x88BF | Elapsed time (in nanoseconds).                                                |
| `TIMESTAMP_EXT`              | 0x8E28 | The current time.                                                             |
| `GPU_DISJOINT_EXT`           | 0x8FBB | A Boolean indicating whether or not the GPU performed any disjoint operation. |

For more information, see {{domxref("EXT_disjoint_timer_query")}}.

## Specifications

{{Specifications}}

## See also

- {{domxref("WebGLRenderingContext")}}
