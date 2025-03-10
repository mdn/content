---
title: "WebGLRenderingContext: texParameter[fi]() method"
short-title: texParameter[fi]()
slug: Web/API/WebGLRenderingContext/texParameter
page-type: web-api-instance-method
browser-compat:
  - api.WebGLRenderingContext.texParameterf
  - api.WebGLRenderingContext.texParameteri
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.texParameter[fi]()`** methods of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) set texture parameters.

## Syntax

```js-nolint
texParameterf(target, pname, param)
texParameteri(target, pname, param)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.TEXTURE_2D`: A two-dimensional texture.
    - `gl.TEXTURE_CUBE_MAP`: A cube-mapped texture.

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the following values are available additionally:

    - `gl.TEXTURE_3D`: A three-dimensional texture.
    - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.

- `param`

  - : The `param` parameter is a {{domxref("WebGL_API/Types", "GLfloat")}} or
    {{domxref("WebGL_API/Types", "GLint")}} specifying the value for the specified parameter

- `pname`
  - : The `pname` parameter is a {{domxref("WebGL_API/Types", "GLenum")}} specifying the texture
    parameter to set.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><code>pname</code></th>
      <th scope="col">Description</th>
      <th scope="col"><code>param</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="3">Available in WebGL 1</th>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAG_FILTER</code></td>
      <td>Texture magnification filter</td>
      <td><code>gl.LINEAR</code> (default value), <code>gl.NEAREST</code>.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_FILTER</code></td>
      <td>Texture minification filter</td>
      <td>
        <code>gl.LINEAR</code>, <code>gl.NEAREST</code>,
        <code>gl.NEAREST_MIPMAP_NEAREST</code>,
        <code>gl.LINEAR_MIPMAP_NEAREST</code>,
        <code>gl.NEAREST_MIPMAP_LINEAR</code> (default value),
        <code>gl.LINEAR_MIPMAP_LINEAR</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_S</code></td>
      <td>Wrapping function for texture coordinate <code>s</code></td>
      <td>
        <code>gl.REPEAT</code> (default value), <code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_T</code></td>
      <td>Wrapping function for texture coordinate <code>t</code></td>
      <td>
        <code>gl.REPEAT</code> (default value), <code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
    <tr>
      <th colspan="3">
        Additionally available when using the
        {{domxref("EXT_texture_filter_anisotropic")}} extension
      </th>
    </tr>
    <tr>
      <td><code>ext.TEXTURE_MAX_ANISOTROPY_EXT</code></td>
      <td>Maximum anisotropy for a texture</td>
      <td>A {{domxref("WebGL_API/Types", "GLfloat")}} value.</td>
    </tr>
    <tr>
      <th colspan="3">Additionally available when using a WebGL 2 context</th>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BASE_LEVEL</code></td>
      <td>Texture mipmap level</td>
      <td>Any int values.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_FUNC</code></td>
      <td>Texture Comparison function</td>
      <td>
        <code>gl.LEQUAL</code> (default value), <code>gl.GEQUAL</code>,
        <code>gl.LESS</code>, <code>gl.GREATER</code>, <code>gl.EQUAL</code>,
        <code>gl.NOTEQUAL</code>, <code>gl.ALWAYS</code>, <code>gl.NEVER</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_MODE</code></td>
      <td>Texture comparison mode</td>
      <td>
        <code>gl.NONE</code> (default value),
        <code>gl.COMPARE_REF_TO_TEXTURE</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LEVEL</code></td>
      <td>Maximum texture mipmap array level</td>
      <td>Any int values.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LOD</code></td>
      <td>Texture maximum level-of-detail value</td>
      <td>Any float values.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_LOD</code></td>
      <td>Texture minimum level-of-detail value</td>
      <td>Any float values.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_R</code></td>
      <td>Wrapping function for texture coordinate <code>r</code></td>
      <td>
        <code>gl.REPEAT</code> (default value), <code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
  </tbody>
</table>

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(
  gl.TEXTURE_2D,
  gl.TEXTURE_MIN_FILTER,
  gl.LINEAR_MIPMAP_NEAREST,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
