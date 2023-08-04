---
title: Using WebGL extensions
slug: Web/API/WebGL_API/Using_Extensions
page-type: guide
---

{{DefaultAPISidebar("WebGL")}}

WebGL, like its sister APIs (OpenGL and OpenGL ES), supports extensions. A complete list of extensions is available in the [khronos webgl extension registry](https://www.khronos.org/registry/webgl/extensions/).

> **Note:** In WebGL, unlike in other GL APIs, extensions are only available if explicitly requested.

## Canonical extension names, vendor prefixes and preferences

Extensions may be supported by browser vendors before being officially ratified (but only when they are in draft stage). In that case, their name can be prefixed by the vendor prefix (`MOZ_`, `WEBKIT_`, etc.) or the extension is only available once a browser preference has been toggled.

If you wish to work with the bleeding edge of extensions, and want to keep working on upon ratification (assuming, of course, that the extension doesn't change in incompatible ways), that you query the canonical extension name as well as the vendor extension name. For instance:

```js
const ext =
  gl.getExtension("OES_vertex_array_object") ||
  gl.getExtension("MOZ_OES_vertex_array_object") ||
  gl.getExtension("WEBKIT_OES_vertex_array_object");
```

Note that, vendor prefix have been discouraged thus most browser implement experimental extensions behind a feature flag rather than vendor prefix.

The feature flags are:

- `webgl.enable-draft-extensions` in Firefox
- `chrome://flags/#enable-webgl-draft-extensions` in Chromium based browsers (Chrome, Opera).

## Naming conventions

WebGL extensions are prefixed with "ANGLE", "OES", "EXT" or "WEBGL". These prefixes reflect origin and intent:

- `ANGLE_`: Extensions that are written by the [ANGLE library](https://en.wikipedia.org/wiki/ANGLE_%28software%29) authors.
- `OES_` and `KHR_`: Extensions that mirror functionality from OpenGL ES (OES) or OpenGL API extensions approved by the respective architecture review boards (Khronos).
- `OVR_`: Extensions that optimize for virtual reality.
- `EXT_`: Extensions that mirror other OpenGL ES or OpenGL API extensions.
- `WEBGL_`: Extensions that are WebGL-specific and intended to be compatible with multiple web browsers. It should also be used for extensions which originated with the OpenGL ES or OpenGL APIs, but whose behavior has been significantly altered.

## Querying available extensions

The WebGL context supports querying what extensions are available.

```js
const available_extensions = gl.getSupportedExtensions();
```

The {{domxref("WebGLRenderingContext.getSupportedExtensions()")}} method returns an array of strings, one for each supported extension.

## Extension list

The current extensions are:

- {{domxref("ANGLE_instanced_arrays")}}
- {{domxref("EXT_blend_minmax")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("EXT_color_buffer_half_float")}}
- {{domxref("EXT_disjoint_timer_query")}}
- {{domxref("EXT_float_blend")}} {{experimental_inline}}
- {{domxref("EXT_frag_depth")}}
- {{domxref("EXT_shader_texture_lod")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("EXT_texture_norm16")}}
- {{domxref("KHR_parallel_shader_compile")}}
- {{domxref("OES_draw_buffers_indexed")}}
- {{domxref("OES_element_index_uint")}}
- {{domxref("OES_fbo_render_mipmap")}}
- {{domxref("OES_standard_derivatives")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("OES_texture_half_float_linear")}}
- {{domxref("OES_vertex_array_object")}}
- {{domxref("OVR_multiview2")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_debug_renderer_info")}}
- {{domxref("WEBGL_debug_shaders")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("WEBGL_lose_context")}}
- {{domxref("WEBGL_multi_draw")}}

## Enabling an extension

Before an extension can be used it has to be enabled using {{domxref("WebGLRenderingContext.getExtension()")}}. For example:

```js
const float_texture_ext = gl.getExtension("OES_texture_float");
```

The return value is `null` if the extension is not supported, or an extension object otherwise.

## Extension objects

If an extension defines specific symbols or functions that are not available in the core specification of WebGL, they will be available on the extension object returned by the call to `gl.getExtension()`.

## See also

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](https://webglreport.com/)
