---
title: EXT_frag_depth extension
short-title: EXT_frag_depth
slug: Web/API/EXT_frag_depth
page-type: webgl-extension
browser-compat: api.EXT_frag_depth
---

{{APIRef("WebGL")}}

The **`EXT_frag_depth`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and enables to set a depth value of a fragment from within the fragment shader.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default. It requires GLSL `#version 300 es`.

## Examples

Enable the extension:

```js
gl.getExtension("EXT_frag_depth");
```

Now the output variable `gl_FragDepthEXT` is available to set a depth value of a fragment from within the fragment shader:

```html
<script type="x-shader/x-fragment">
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    gl_FragDepthEXT = 0.5;
  }
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
