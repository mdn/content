---
title: WebGLRenderingContext.pixelStorei()
slug: Web/API/WebGLRenderingContext/pixelStorei
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.pixelStorei
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.pixelStorei()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies the pixel storage modes.

## Syntax

```js
pixelStorei(pname, param)
```

### Parameters

- `pname`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which parameter to set. See below for possible
    values.
- `param`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying a value to set the `pname`
    parameter to. See below for possible values.

### Return value

None ({{jsxref("undefined")}}).

## Pixel storage parameters

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Parameter name (for <code>pname</code>)</th>
      <th scope="col">Description</th>
      <th scope="col">Type</th>
      <th scope="col">Default value</th>
      <th scope="col">Allowed values (for <code>param</code>)</th>
      <th scope="col">Specified in</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.PACK_ALIGNMENT</code></td>
      <td>Packing of pixel data into memory</td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>4</td>
      <td>1, 2, 4, 8</td>
      <td>OpenGL ES 2.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ALIGNMENT</code></td>
      <td>Unpacking of pixel data from memory.</td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>4</td>
      <td>1, 2, 4, 8</td>
      <td>OpenGL ES 2.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_FLIP_Y_WEBGL</code></td>
      <td>Flips the source data along its vertical axis if true.</td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td>false</td>
      <td>true, false</td>
      <td>WebGL</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL</code></td>
      <td>Multiplies the alpha channel into the other color channels</td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td>false</td>
      <td>true, false</td>
      <td>WebGL</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_COLORSPACE_CONVERSION_WEBGL</code></td>
      <td>Default color space conversion or no color space conversion.</td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td><code>gl.BROWSER_DEFAULT_WEBGL</code></td>
      <td><code>gl.BROWSER_DEFAULT_WEBGL</code>, <code>gl.NONE</code></td>
      <td>WebGL</td>
    </tr>
  </tbody>
</table>

When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the
following values are available additionally:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Description</th>
      <th scope="col">Type</th>
      <th scope="col">Default value</th>
      <th scope="col">Allowed values (for <code>param</code>)</th>
      <th scope="col">Specified in</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.PACK_ROW_LENGTH</code></td>
      <td>Number of pixels in a row.</td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 to <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_PIXELS</code></td>
      <td>
        Number of pixel locations skipped before the first pixel is written into
        memory.
      </td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 to <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_ROWS</code></td>
      <td>
        Number of rows of pixel locations skipped before the first pixel is
        written into memory
      </td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 to <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ROW_LENGTH</code></td>
      <td>Number of pixels in a row.</td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 to <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_IMAGE_HEIGHT</code></td>
      <td>Image height used for reading pixel data from memory</td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 to <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_PIXELS</code></td>
      <td>
        Number of pixel images skipped before the first pixel is read from
        memory
      </td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 to <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_ROWS</code></td>
      <td>
        Number of rows of pixel locations skipped before the first pixel is read
        from memory
      </td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 to <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_IMAGES</code></td>
      <td>
        Number of pixel images skipped before the first pixel is read from
        memory
      </td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 to <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
  </tbody>
</table>

## Examples

Setting the pixel storage mode affects the
{{domxref("WebGLRenderingContext.readPixels()")}} operations, as well as unpacking of
textures with the {{domxref("WebGLRenderingContext.texImage2D()")}} and
{{domxref("WebGLRenderingContext.texSubImage2D()")}} methods.

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.pixelStorei(gl.PACK_ALIGNMENT, 4);
```

To check the values for packing and unpacking of pixel data, you can query the same
pixel storage parameters with {{domxref("WebGLRenderingContext.getParameter()")}}.

```js
gl.getParameter(gl.PACK_ALIGNMENT);
gl.getParameter(gl.UNPACK_ALIGNMENT);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.readPixels()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
