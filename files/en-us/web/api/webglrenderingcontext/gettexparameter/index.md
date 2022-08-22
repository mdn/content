---
title: WebGLRenderingContext.getTexParameter()
slug: Web/API/WebGLRenderingContext/getTexParameter
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getTexParameter
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getTexParameter()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns information about the
given texture.

## Syntax

```js
getTexParameter(target, pname)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.TEXTURE_2D`: A two-dimensional texture.
    - `gl.TEXTURE_CUBE_MAP`: A cube-mapped texture.
    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.TEXTURE_3D`: A three-dimensional texture.
      - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.

- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the information to query. Possible values:

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">pname</th>
          <th scope="col">Return type</th>
          <th scope="col">Description</th>
          <th scope="col">Possible return values</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colspan="4">Available in a WebGL 1 context</th>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAG_FILTER</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Texture magnification filter</td>
          <td><code>gl.LINEAR</code> (default value), <code>gl.NEAREST</code>.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MIN_FILTER</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Texture minification filter</td>
          <td>
            <code>gl.LINEAR</code>, <code>gl.NEAREST</code>,
            <code>gl.NEAREST_MIPMAP_NEAREST</code>,
            <code>gl.LINEAR_MIPMAP_NEAREST</code>,
            <code>gl.NEAREST</code>_MIPMAP_LINEAR (default value),
            <code>gl.LINEAR_MIPMAP_LINEAR</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_S</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Wrapping function for texture coordinate <code>s</code></td>
          <td>
            <code>gl.REPEAT</code> (default value), <code>gl.CLAMP_TO_EDGE</code>,
            <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_T</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Wrapping function for texture coordinate <code>t</code></td>
          <td>
            <code>gl.REPEAT</code> (default value), <code>gl.CLAMP_TO_EDGE</code>,
            <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
        <tr>
          <th colspan="4">
            Additionally available when using the
            {{domxref("EXT_texture_filter_anisotropic")}} extension
          </th>
        </tr>
        <tr>
          <td><code>ext.TEXTURE_MAX_ANISOTROPY_EXT</code></td>
          <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
          <td>Maximum anisotropy for a texture</td>
          <td>Any float values.</td>
        </tr>
        <tr>
          <th colspan="4">Additionally available when using a WebGL 2 context</th>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_BASE_LEVEL</code></td>
          <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
          <td>Texture mipmap level</td>
          <td>Any int values.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_COMPARE_FUNC</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Comparison function</td>
          <td>
            <code>gl.LEQUAL</code> (default value), <code>gl.GEQUAL</code>,
            <code>gl.LESS</code>, <code>gl.GREATER</code>, <code>gl.EQUAL</code>,
            <code>gl.NOTEQUAL</code>, <code>gl.ALWAYS</code>, <code>gl.NEVER</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_COMPARE_MODE</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Texture comparison mode</td>
          <td>
            <code>gl.NONE</code> (default value),
            <code>gl.COMPARE_REF_TO_TEXTURE</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_IMMUTABLE_FORMAT</code></td>
          <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
          <td>Immutability of the texture format and size</td>
          <td>true or false.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_IMMUTABLE_LEVELS</code></td>
          <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
          <td>?</td>
          <td>Any uint values.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAX_LEVEL</code></td>
          <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
          <td>Maximum texture mipmap array level</td>
          <td>Any int values.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAX_LOD</code></td>
          <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
          <td>Texture maximum level-of-detail value</td>
          <td>Any float values.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MIN_LOD</code></td>
          <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
          <td>Texture minimum level-of-detail value</td>
          <td>Any float values.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_R</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Wrapping function for texture coordinate <code>r</code></td>
          <td>
            <code>gl.REPEAT</code> (default value), <code>gl.CLAMP_TO_EDGE</code>,
            <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
      </tbody>
    </table>

### Return value

Returns the requested texture information (as specified with `pname`). If an
error occurs, [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) is returned.

## Examples

```js
gl.getTexParameter(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.texParameter",
    "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext.texParameter",
    "WebGLRenderingContext.texParameteri()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
