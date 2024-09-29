---
title: "WebGL: 2D and 3D graphics for the web"
slug: Web/API/WebGL_API
page-type: web-api-overview
browser-compat:
  - api.WebGLRenderingContext
  - api.WebGL2RenderingContext
---

{{DefaultAPISidebar("WebGL")}}{{AvailableInWorkers}}

**WebGL** (Web Graphics Library) is a JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins. WebGL does so by introducing an API that closely conforms to OpenGL ES 2.0 that can be used in HTML {{HTMLElement("canvas")}} elements. This conformance makes it possible for the API to take advantage of hardware graphics acceleration provided by the user's device.

Support for WebGL is present in all modern browsers (see the [compatibility tables](#browser_compatibility) below); however, the user's device must also have hardware that supports these features.

The [WebGL 2](#webgl_2) API introduces support for much of the OpenGL ES 3.0 feature set; it's provided through the {{domxref("WebGL2RenderingContext")}} interface.

The {{HTMLElement("canvas")}} element is also used by the [Canvas API](/en-US/docs/Web/API/Canvas_API) to do 2D graphics on web pages.

## Reference

### Standard interfaces

- {{domxref("WebGLRenderingContext")}}
- {{domxref("WebGL2RenderingContext")}}
- {{domxref("WebGLActiveInfo")}}
- {{domxref("WebGLBuffer")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLFramebuffer")}}
- {{domxref("WebGLProgram")}}
- {{domxref("WebGLQuery")}}
- {{domxref("WebGLRenderbuffer")}}
- {{domxref("WebGLSampler")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLShaderPrecisionFormat")}}
- {{domxref("WebGLSync")}}
- {{domxref("WebGLTexture")}}
- {{domxref("WebGLTransformFeedback")}}
- {{domxref("WebGLUniformLocation")}}
- {{domxref("WebGLVertexArrayObject")}}

### Extensions

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

### Events

- {{domxref("HTMLCanvasElement/webglcontextlost_event", "webglcontextlost")}}
- {{domxref("HTMLCanvasElement/webglcontextrestored_event", "webglcontextrestored")}}
- {{domxref("HTMLCanvasElement/webglcontextcreationerror_event", "webglcontextcreationerror")}}

### Constants and types

- [WebGL constants](/en-US/docs/Web/API/WebGL_API/Constants)
- [WebGL types](/en-US/docs/Web/API/WebGL_API/Types)

### WebGL 2

WebGL 2 is a major update to WebGL which is provided through the {{domxref("WebGL2RenderingContext")}} interface. It is based on OpenGL ES 3.0 and new features include:

- [3D textures](/en-US/docs/Web/API/WebGL2RenderingContext/texImage3D),
- [Sampler objects](/en-US/docs/Web/API/WebGLSampler),
- [Uniform Buffer objects](/en-US/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
- [Sync objects](/en-US/docs/Web/API/WebGLSync),
- [Query objects](/en-US/docs/Web/API/WebGLQuery),
- [Transform Feedback objects](/en-US/docs/Web/API/WebGLTransformFeedback),
- Promoted extensions that are now core to WebGL 2: [Vertex Array objects](/en-US/docs/Web/API/WebGLVertexArrayObject), [instancing](/en-US/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [multiple render targets](/en-US/docs/Web/API/WebGL2RenderingContext/drawBuffers), [fragment depth](/en-US/docs/Web/API/EXT_frag_depth).

See also the blog post ["WebGL 2 lands in Firefox"](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) and [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) for a few demos.

## Guides and tutorials

Below, you'll find an assortment of guides to help you learn WebGL concepts and tutorials that offer step-by-step lessons and examples.

### Guides

- [Data in WebGL](/en-US/docs/Web/API/WebGL_API/Data)
  - : A guide to variables, buffers, and other types of data used when writing WebGL code.
- [WebGL best practices](/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)
  - : Tips and suggestions to help you improve the quality, performance, and reliability of your WebGL content.
- [Using extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions)
  - : A guide to using WebGL extensions.

### Tutorials

- [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial)
  - : A beginner's guide to WebGL core concepts. A good place to start if you don't have previous WebGL experience.

### Examples

- [A basic 2D WebGL animation example](/en-US/docs/Web/API/WebGL_API/Basic_2D_animation_example)
  - : This example demonstrates the simple animation of a one-color shape. Topics examined are adapting to {{glossary("aspect ratio")}} differences, a function to build shader programs from sets of multiple shaders, and the basics of drawing in WebGL.
- [WebGL by example](/en-US/docs/Web/API/WebGL_API/By_example)
  - : A series of live samples with short explanations that showcase WebGL concepts and capabilities. The examples are sorted according to topic and level of difficulty, covering the WebGL rendering context, shader programming, textures, geometry, user interaction, and more.

### Advanced tutorials

- [WebGL model view projection](/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : A detailed explanation of the three core matrices that are typically used to represent a 3D object view: the model, view and projection matrices.
- [Matrix math for the web](/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : A useful guide to how 3D transform matrices work, and can be used on the web — both for WebGL calculations and in CSS transforms.

## Resources

- [Khronos WebGL site](https://www.khronos.org/webgl/) The main website for WebGL at the Khronos Group.
- [WebGL Fundamentals](https://web.dev/articles/webgl-fundamentals) A basic tutorial with fundamentals of WebGL.
- [Raw WebGL: An introduction to WebGL](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage) A talk by Nick Desaulniers that introduces the basics of WebGL.
- [WebGL Academy](http://www.webglacademy.com/) An HTML/JavaScript editor with tutorials to learn basics of webgl programming.
- [WebGL Stats](https://webglreport.com/) A site with statistics about WebGL capabilities in browsers on different platforms.

### Libraries

- [three.js](https://threejs.org/) is an open-source, fully featured 3D WebGL library.
- [Babylon.js](https://www.babylonjs.com/) is a powerful, simple, and open game and 3D rendering engine packed into a friendly JavaScript framework.
- [Pixi.js](https://pixijs.com/) is a fast, open-source 2D WebGL renderer.
- [Phaser](https://phaser.io/) is a fast, free and fun open source framework for Canvas and WebGL powered browser games.
- [PlayCanvas](https://playcanvas.com/) is an open-source game engine.
- [glMatrix](https://github.com/toji/gl-matrix) is a JavaScript matrix and vector library for high-performance WebGL apps.
- [twgl](https://twgljs.org/) is a library for making webgl less verbose.
- [RedGL](https://github.com/redcamel/RedGL2) is an open-source 3D WebGL library.
- [vtk.js](https://kitware.github.io/vtk-js/) is a JavaScript library for scientific visualization in your browser.
- [webgl-lint](https://greggman.github.io/webgl-lint/) will help find errors in your WebGL code and provide useful info

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

In addition to the browser, the GPU itself also needs to support the feature. So, for example, S3 Texture Compression (S3TC) is only available on Tegra-based tablets. Most browsers make the WebGL context available through the `webgl` context name, but older ones need `experimental-webgl` as well. In addition, the upcoming [WebGL 2](/en-US/docs/Web/API/WebGL2RenderingContext) is fully backwards-compatible and will have the context name `webgl2`.

### Gecko notes

#### WebGL debugging and testing

Firefox provides two preferences available which let you control the capabilities of WebGL for testing purposes:

- `webgl.min_capability_mode`
  - : A Boolean property that, when `true`, enables a minimum capability mode. When in this mode, WebGL is configured to only support the bare minimum feature set and capabilities required by the WebGL specification. This lets you ensure that your WebGL code will work on any device or browser, regardless of their capabilities. This is `false` by default.
- `webgl.disable_extensions`
  - : A Boolean property that, when `true`, disables all WebGL extensions. This is `false` by default.

## See also

- [Canvas API](/en-US/docs/Web/API/Canvas_API)
- [Compatibility info about WebGL extensions](/en-US/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#browser_compatibility)
