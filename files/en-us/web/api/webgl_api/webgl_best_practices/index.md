---
title: WebGL best practices
slug: Web/API/WebGL_API/WebGL_best_practices
page-type: guide
tags:
  - 2D
  - 3D
  - Advanced
  - Best practices
  - Drawing
  - GL
  - Graphics
  - Guide
  - OpenGL
  - WebGL
---
{{WebGLSidebar}}

WebGL is a complicated API, and it's often not obvious what the recommended ways to use it are. This page tackles recommendations across the spectrum of expertise, and not only highlights dos and don'ts, but also details _why_. You can rely on this document to guide your choice of approach, and ensure you're on the right track no matter what browser or hardware your users run.

## Address and eliminate WebGL errors

Your application should run without generating any WebGL errors (as returned by `getError`). Every WebGL error is reported in the Web Console as a JavaScript warning with a descriptive message. After too many errors (32 in Firefox), WebGL stops generating descriptive messages, which really hinders debugging.

The _only_ errors a well-formed page generates are `OUT_OF_MEMORY` and `CONTEXT_LOST`.

## Understand extension availability

The availability of most WebGL extensions depends on the client system. When using WebGL extensions, if possible, try to make them optional by gracefully adapting to the case there they are not supported.

These WebGL 1 extensions are universally supported, and can be relied upon to be present:

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(see also: [WebGL feature levels and % support](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

Consider polyfilling these into WebGLRenderingContext, like: <https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js>

## Understand system limits

Similarly to extensions, the limits of your system will be different than your clients' systems! Don't assume you can use thirty texture samplers per shader just because it works on your machine!

The minimum requirements for WebGL are quite low. In practice, effectively all systems support at least the following:

```
MAX_CUBE_MAP_TEXTURE_SIZE: 4096
MAX_RENDERBUFFER_SIZE: 4096
MAX_TEXTURE_SIZE: 4096
MAX_VIEWPORT_DIMS: [4096,4096]
MAX_VERTEX_TEXTURE_IMAGE_UNITS: 4
MAX_TEXTURE_IMAGE_UNITS: 8
MAX_COMBINED_TEXTURE_IMAGE_UNITS: 8
MAX_VERTEX_ATTRIBS: 16
MAX_VARYING_VECTORS: 8
MAX_VERTEX_UNIFORM_VECTORS: 128
MAX_FRAGMENT_UNIFORM_VECTORS: 64
ALIASED_POINT_SIZE_RANGE: [1,100]
```

Your desktop may support 16k textures, or maybe 16 texture units in the vertex shader, but most other systems don't, and content that works for you will not work for them!

## Avoid invalidating FBO attachment bindings

Almost any change to an FBO's attachment bindings will invalidate its framebuffer completeness. Set up your hot framebuffers ahead of time.

In Firefox, setting the pref `webgl.perf.max-warnings` to `-1` in about:config will enable performance warnings that include warnings about FB completeness invalidations.

### Avoid changing VAO attachments (vertexAttribPointer, disable/enableVertexAttribArray)

Drawing from static, unchanging VAOs is faster than mutating the same VAO for every draw call. For unchanged VAOs, browsers can cache the fetch limits, whereas when VAOs change, browsers must revalidate and recalculate limits. The overhead for this is relatively low, but re-using VAOs means fewer `vertexAttribPointer` calls too, so it's worth doing wherever it's easy.

## Delete objects eagerly

Don't wait for the garbage collector/cycle collector to realize objects are orphaned and destroy them. Implementations track the liveness of objects, so 'deleting' them at the API level only releases the handle that refers to the actual object. (conceptually releasing the handle's ref-pointer to the object) Only once the object is unused in the implementation is it actually freed. For example, if you never want to access your shader objects directly again, just delete their handles after attaching them to a program object.

## Lose contexts eagerly

Consider also eagerly losing WebGL contexts via the `WEBGL_lose_context` extension when you're definitely done with them and no longer need the target canvas's rendering results. Note that this is not necessary to do when navigating away from a page - don't add an unload event handler just for this purpose.

## Flush when expecting results

Call `flush()` when expecting results such as queries, or at completion of a rendering frame.

Flush tells the implementation to push all pending commands out for execution, flushing them out of the queue, instead of waiting for more commands to enqueue before sending for execution.

For example, it is possible for the following to never complete without context loss:

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL doesn't have a SwapBuffers call by default, so a flush can help fill the gap, as well.

### Use `webgl.flush()` when not using requestAnimationFrame

When not using RAF, (such as when using RPAF; see below) use `webgl.flush()` to encourage eager execution of enqueued commands.

Because RAF is directly followed by the frame boundary, an explicit `webgl.flush()` isn't really needed with RAF.

## Avoid blocking API calls in production

Certain WebGL entry points - including `getError` and `getParameter` - cause synchronous stalls on the calling thread. Even basic requests can take as long as 1ms, but they can take even longer if they need to wait for all graphics work to be completed (with an effect similar to `glFinish()` in native OpenGL).

In production code, avoid such entry points, especially on the browser main thread where they can cause the entire page to jank (often including scrolling or even the whole browser).

- `getError()`: causes a flush + round-trip to fetch errors from the GPU process).

  For example, within Firefox, the only time glGetError is checked is after allocations (`bufferData`, `*texImage*`, `texStorage*`) to pick up any GL_OUT_OF_MEMORY errors.

- `getShader/ProgramParameter()`, `getShader/ProgramInfoLog()`, other `get`s on shaders/programs: flush + shader compile + round-trip, if not done after shader compilation is complete. (See also [parallel shader compilation](#compile_shaders_and_link_programs_in_parallel) below.)
- `get*Parameter()` in general: possible flush + round-trip. In some cases, these will be cached to avoid the round-trip, but try to avoid relying on this.
- `checkFramebufferStatus()`: possible flush + round-trip.
- `getBufferSubData()`: usual finish + round-trip. (This is okay for READ buffers in conjunction with fences - see [async data readback](#non-blocking_async_data_downloadreadback) below.)
- `readPixels()` to the CPU (i.e. without an UNPACK buffer bound): finish + round-trip. Instead, use GPU-GPU `readPixels` in conjunction with async data readback.

## Always enable vertex attrib 0 as an array

If you draw without vertex attrib 0 enabled as an array, you will force the browser to do complicated emulation when running on desktop OpenGL (such as on macOS). This is because in desktop OpenGL, nothing gets drawn if vertex attrib 0 is not array-enabled. You can use `bindAttribLocation` to force a vertex attribute to use location 0, and use `enableVertexAttribArray(0)` to make it array-enabled.

## Estimate a per-pixel VRAM Budget

WebGL doesn't offer APIs to query the maximum amount of video memory on the system because such queries are not portable. Still, applications must be conscious of VRAM usage and not just allocate as much as possible.

One technique pioneered by the Google Maps team is the notion of a _per-pixel VRAM budget_:

1\) For one system (e.g. a particular desktop / laptop), decide the maximum amount of VRAM your application should use. 2) Compute the number of pixels covered by a maximized browser window. E.g. `(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) The per-pixel VRAM budget is (1) divided by (2), and is a constant.

This constant should _generally_ be portable among systems. Mobile devices typically have smaller screens than powerful desktop machines with large monitors. Re-compute this constant on a few target systems to get a reliable estimate.

Now adjust all internal caching in the application (WebGLBuffers, WebGLTextures, etc.) to obey a maximum size, computed by this constant multiplied by the number of pixels covered by the _current_ browser window. This requires estimating the number of bytes consumed by each texture, for example. The cap also must typically be updated as the browser window resizes, and older resources above the limit must be purged.

Keeping the application's VRAM usage under this cap will help to avoid out-of-memory errors and associated instability.

## Consider rendering to a smaller back buffer

A common (and easy) way to trade off quality for speed is rendering into a smaller back buffer, and upscaling the result. Consider reducing canvas.width and height and keeping canvas.style.width and height at a constant size.

## Batch draw calls

"Batching" draw calls into fewer, larger draw calls will generally improve performance. If you have 1000 sprites to paint, try to do it as a single drawArrays() or drawElements() call.

It's common to use "degenerate triangles" if you need to draw discontinuous objects as a single drawArrays(TRIANGLE_STRIP) call. Degenerate triangles are triangles with no area, therefore any triangle where more than one point is in the same exact location. These triangles are effectively skipped, which lets you start a new triangle strip unattached to your previous one, without having to split into multiple draw calls.

Another important method for batching is texture atlasing, where multiple images are placed into a single texture, often like a checkerboard. Since you need to split draw call batches to change textures, texture atlasing lets you combine more draw calls into fewer, bigger batches. See [this example](https://webglsamples.org/sprites/readme.html) demonstrating how to combine even sprites referencing multiple texture atlases into a single draw call.

## Avoid "#ifdef GL_ES"

You should never use `#ifdef GL_ES` in your WebGL shaders; this condition is always true in WebGL. Although some early examples used this, it's not necessary.

## Prefer doing work in the vertex shader

Do as much work as you can in the vertex shader, rather than in the fragment shader. This is because per draw call, fragment shaders generally run many more times than vertex shaders. Any calculation that can be done on the vertices and then just interpolated among fragments (via `varying`s) is a performance boon. (The interpolation of varyings is very cheap, and is done automatically for you through the fixed functionality rasterization phase of the graphics pipeline.)

For example, a simple animation of a textured surface can be achieved through a time-dependent transformation of texture coordinates. (The simplest case being adding a uniform vector to the texture coordinates attribute vector) If visually acceptable, one can transform the texture coordinates in the vertex shader rather than in the fragment shader, to get better performance.

One common trade-off is to some lighting calculations per-vertex instead of per-fragment (pixel). In some cases, especially with simple models or dense vertices, this looks good enough.

The inversion of this is if a model has more vertices than pixels in the rendered output. However, LOD meshes is usually the answer to this problem, rarely moving work from the vertex _to_ the fragment shader.

## Compile Shaders and Link Programs in parallel

It's tempting to compile shaders and link programs serially, but many browsers can compile and link in parallel on background threads.

Instead of:

```js
function compileOnce(gl, shader) {
  if (shader.compiled) return;
  gl.compileShader(shader);
  shader.compiled = true;
}
for (const [vs, fs, prog] of programs) {
  compileOnce(gl, vs);
  compileOnce(gl, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
    console.error(`vs info-log: ${gl.getShaderInfoLog(vs)}`);
    console.error(`fs info-log: ${gl.getShaderInfoLog(fs)}`);
  }
}
```

Consider:

```js
function compileOnce(gl, shader) {
  if (shader.compiled) return;
  gl.compileShader(shader);
  shader.compiled = true;
}
for (const [vs, fs, prog] of programs) {
  compileOnce(gl, vs);
  compileOnce(gl, fs);
}
for (const [vs, fs, prog] of programs) {
  gl.linkProgram(prog);
}
for (const [vs, fs, prog] of programs) {
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
    console.error(`vs info-log: ${gl.getShaderInfoLog(vs)}`);
    console.error(`fs info-log: ${gl.getShaderInfoLog(fs)}`);
  }
}
```

## Prefer KHR_parallel_shader_compile

While we've described a pattern to allow browsers to compile and link in parallel, normally checking `COMPILE_STATUS` or `LINK_STATUS` blocks until the compile or link completes. In browsers where it's available, the [KHR_parallel_shader_compile](https://www.khronos.org/registry/webgl/extensions/KHR_parallel_shader_compile/) extension provides a _non-blocking_ `COMPLETION_STATUS` query. Prefer to enable and use this extension.

Example usage:

```js
ext = gl.getExtension('KHR_parallel_shader_compile');
gl.compileProgram(vs);
gl.compileProgram(fs);
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);

// Store program in your data structure.
// Later, for example the next frame:

if (ext) {
  if (gl.getProgramParameter(prog, ext.COMPLETION_STATUS_KHR)) {
    // Check program link status; if OK, use and draw with it.
  }
} else {
  // Program linking is synchronous.
  // Check program link status; if OK, use and draw with it.
}
```

This technique may not work in all applications, for example those which require programs to be immediately available for rendering. Still, consider how variations may work.

## Don't check shader compile status unless linking fails

There are very few errors that are guaranteed to cause shader compilation failure, but cannot be deferred to link time. The [ESSL3 spec](https://www.khronos.org/registry/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf) says this under "Error Handling":

> The implementation should report errors as early a possible but in any case must satisfy the following:
>
> - All lexical, grammatical and semantic errors must have been detected following a call to glLinkProgram
> - Errors due to mismatch between the vertex and fragment shader (link errors) must have been detected following a call to glLinkProgram
> - Errors due to exceeding resource limits must have been detected following any draw call or a call to glValidateProgram
> - A call to glValidateProgram must report all errors associated with a program object given the current GL state.
>
> The allocation of tasks between the compiler and linker is implementation dependent. Consequently there are many errors which may be detected either at compile or link time, depending on the implementation.

Additionally, querying compile status is a synchronous call, which breaks pipelining.

Instead of:

```js
gl.compileShader(vs);
if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
  console.error(`vs compile failed: ${gl.getShaderInfoLog(vs)}`);
}

gl.compileShader(fs);
if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
  console.error(`fs compile failed: ${gl.getShaderInfoLog(fs)}`);
}

gl.linkProgram(prog);
if (!gl.getProgramParameter(vs, gl.LINK_STATUS)) {
  console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
}
```

Consider:

```js
gl.compileShader(vs);
gl.compileShader(fs);
gl.linkProgram(prog);
if (!gl.getProgramParameter(vs, gl.LINK_STATUS)) {
  console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
  console.error(`vs info-log: ${gl.getShaderInfoLog(vs)}`);
  console.error(`fs info-log: ${gl.getShaderInfoLog(fs)}`);
}
```

## Be precise with GLSL precision annotations

If you expect to pass an essl300 `int` between shaders, and you need it to have 32-bits, you _must_ use `highp` or you will have portability problems. (Works on Desktop, not on Android)

If you have a float texture, iOS requires that you use `highp sampler2D foo;`, or it will very painfully give you `lowp` texture samples! (+/-2.0 max is probably not good enough for you)

### Implicit defaults

The vertex language has the following predeclared globally scoped default precision statements:

```
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

The fragment language has the following predeclared globally scoped default precision statements:

```
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### In WebGL 1, "highp float" support is optional in fragment shaders

Using `highp` precision unconditionally in fragment shaders will prevent your content from working on some older mobile hardware.

While you can use `mediump float` instead, but be aware that this often results in corrupted rendering due to lack of precision (particularly mobile systems) though the corruption is not going to be visible on a typical desktop computer.

If you know your precision requirements, `getShaderPrecisionFormat()` will tell you what the system supports.

If `highp float` is available, `GL_FRAGMENT_PRECISION_HIGH` will be defined as `1`.

A good pattern for "always give me the highest precision":

```
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

### ESSL100 minimum requirements (WebGL 1)

| `float`   | think               | range         | min above zero | precision      |
| --------- | ------------------- | ------------- | -------------- | -------------- |
| `highp`   | float24\*           | (-2^62, 2^62) | 2^-62          | 2^-16 relative |
| `mediump` | IEEE float16        | (-2^14, 2^14) | 2^-14          | 2^-10 relative |
| `lowp`    | 10-bit signed fixed | (-2, 2)       | 2^-8           | 2^-8 absolute  |

| `int`     | think | range         |
| --------- | ----- | ------------- |
| `highp`   | int17 | (-2^16, 2^16) |
| `mediump` | int11 | (-2^10, 2^10) |
| `lowp`    | int9  | (-2^8, 2^8)   |

_\*float24: sign bit, 7-bit for exponent, 16-bit for mantissa_

### ESSL300 minimum requirements (WebGL 2)

| `float`   | think               | range           | min above zero | precision      |
| --------- | ------------------- | --------------- | -------------- | -------------- |
| `highp`   | IEEE float32        | (-2^126, 2^127) | 2^-126         | 2^-24 relative |
| `mediump` | IEEE float16        | (-2^14, 2^14)   | 2^-14          | 2^-10 relative |
| `lowp`    | 10-bit signed fixed | (-2, 2)         | 2^-8           | 2^-8 absolute  |

| `(u)int`  | think    | `int` range   | `unsigned int` range |
| --------- | -------- | ------------- | -------------------- |
| `highp`   | (u)int32 | [-2^31, 2^31] | [0, 2^32]            |
| `mediump` | (u)int16 | [-2^15, 2^15] | [0, 2^16]            |
| `lowp`    | (u)int9  | [-2^8, 2^8]   | [0, 2^9]             |

## Prefer builtins instead of building your own

Prefer builtins like `dot`, `mix`, and `normalize`. At best, custom implementations might run as fast as the builtins they replace, but don't expect them to. Hardware often has hyper-optimized or even specialized instructions for builtins, and the compiler can't reliably replace your custom builtin-replacements with the special builtin codepaths.

## Use mipmaps for any texture you'll see in 3d

When in doubt, call `generateMipmaps()` after texture uploads. Mipmaps are cheap on memory (only 30% overhead) while providing often-large performance advantages when textures are "zoomed out" or generally downscaled in the distance in 3d, or even for cube-maps!

It's quicker to sample from smaller texture images due to better inherent texture fetch cache locality: Zooming out on a non-mipmapped texture ruins texture fetch cache locality, because neighboring pixels no longer sample from neighboring texels!

However, for 2d resources that are never "zoomed out", don't pay the 30% memory surcharge for mipmaps:

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

(In WebGL 2, you should just use `texStorage` with `levels=1`)

One caveat: `generateMipmaps` only works if you would be able to render into the texture if you attached it to a framebuffer. (The spec calls this "color-renderable formats") For example, if a system supports float-textures but not render-to-float, `generateMipmaps` will fail for float formats.

## Don't assume you can render into float textures

There are many, many systems that support RGBA32F textures, but if you attach one to a framebuffer you'll get `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` from `checkFramebufferStatus()`. It may work on your system, but _most_ mobile systems will not support it!

On WebGL 1, use the `EXT_color_buffer_half_float` and `WEBGL_color_buffer_float` extensions to check for render-to-float-texture support for float16 and float32 respectively.

On WebGL 2, `EXT_color_buffer_float` checks for render-to-float-texture support for both float32 and float16. `EXT_color_buffer_half_float` is present on systems which only support rendering to float16 textures.

### Render-to-float32 doesn't imply float32-blending!

It may work on your system, but on many others it won't. Avoid it if you can. Check for the `EXT_float_blend` extension to check for support.

Float16-blending is always supported.

## Some formats (e.g. RGB) may be emulated

A number of formats (particularly three-channel formats) are emulated. For example, RGB32F is often actually RGBA32F, and Luminance8 may actually be RGBA8. RGB8 in particular is often surprisingly slow, as masking out the alpha channel and/or patching blend functions has fairly high overhead. Prefer to use RGBA8 and ignore the alpha yourself for better performance.

## Avoid alpha:false, which can be expensive

Specifying `alpha:false` during context creation causes the browser to composite the WebGL-rendered canvas as though it were opaque, ignoring any alpha values the application writes in its fragment shader. On some platforms, this capability unfortunately comes at a significant performance cost. The RGB back buffer may have to be emulated on top of an RGBA surface, and there are relatively few techniques available in the OpenGL API for making it appear to the application that an RGBA surface has no alpha channel. [It has been found](https://bugs.chromium.org/p/chromium/issues/detail?id=1045643) that all of these techniques have approximately equal performance impact on affected platforms.

Most applications, even those requiring alpha blending, can be structured to produce `1.0` for the alpha channel. The primary exception is any application requiring destination alpha in the blending function. If feasible, it is recommended to do this rather than using `alpha:false`.

## Consider compressed texture formats

While JPG and PNG are generally smaller over-the-wire, GPU compressed texture formats are smaller on in GPU memory, and are faster to sample from. (This reduces texture memory bandwidth, which is precious on mobile) However, compressed texture formats have worse quality than JPG, and are generally only acceptable for colors (not e.g. normals or coordinates).

Unfortunately, there's no single universally supported format. Every system has at least one of the following though:

- WEBGL_compressed_texture_s3tc (desktop)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 has universal support by combining:

- WEBGL_compressed_texture_s3tc (desktop)
- WEBGL_compressed_texture_etc (mobile)

WEBGL_compressed_texture_astc has both higher quality and/or higher compression, but is only supported on newer hardware.

### Basis Universal texture compression format/library

Basis Universal solves several of the issues mentioned above. It offers a way to support all common compressed texture formats with a single compressed texture file, through a JavaScript library that efficiently converts formats at load time. It also adds additional compression that makes Basis Universal compressed texture files much smaller than regular compressed textures over-the-wire, more comparable to JPEG.

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## Memory usage of depth and stencil formats

Depth and stencil attachments and formats are actually inseparable on many devices. You may ask for DEPTH_COMPONENT24 or STENCIL_INDEX8, but you're often getting D24X8 and X24S8 32bpp formats behind the scenes. Assume that the memory usage of depth and stencil formats is rounded up to the nearest four bytes.

## texImage/texSubImage uploads (esp. videos) can cause pipeline flushes

Most texture uploads from DOM elements will incur a processing pass that will temporarily switch GL Programs internally, causing a pipeline flush. (Pipelines are formalized explicitly in Vulkan\[[1](https://www.khronos.org/registry/vulkan/specs/1.2/html/chap9.html#VkGraphicsPipelineCreateInfo)] et al, but are implicit behind-the-scenes in OpenGL and WebGL. Pipelines are more or less the tuple of shader program, depth/stencil/multisample/blend/rasterization state)

In WebGL:

```
    …
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    texImage2D(HTMLVideoElement)
    drawArrays()
    …
```

Behind the scenes in the browser:

```
    …
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    -texImage2D(HTMLVideoElement):
        +useProgram(_internal_tex_tranform_prog)
<pipeline flush>
        +bindFramebuffer(webgl_texture._internal_framebuffer)
        +bindTexture(HTMLVideoElement._internal_video_tex)
        +drawArrays() // y-flip/colorspace-transform/alpha-(un)premultiply
        +bindTexture(webgl_texture)
        +bindFramebuffer(target)
        +useProgram(prog1)
<pipeline flush>
    drawArrays()
    …
```

Prefer doing uploads before starting drawing, or at least between pipelines:

In WebGL:

```
    …
    bindTexture(webgl_texture)
    texImage2D(HTMLVideoElement)
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    drawArrays()
    …
```

Behind the scenes in the browser:

```
    …
    bindTexture(webgl_texture)
    -texImage2D(HTMLVideoElement):
        +useProgram(_internal_tex_tranform_prog)
<pipeline flush>
        +bindFramebuffer(webgl_texture._internal_framebuffer)
        +bindTexture(HTMLVideoElement._internal_video_tex)
        +drawArrays() // y-flip/colorspace-transform/alpha-(un)premultiply
        +bindTexture(webgl_texture)
        +bindFramebuffer(target)
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    drawArrays()
    …
```

## Use texStorage to create textures

The WebGL 2.0 `texImage*` API lets you define each mip level independently and at any size, even the mis-matching mips sizes are not an error until draw time which means there is no way the driver can actually prepare the texture in GPU memory until the first time the texture is drawn.

Further, some drivers might unconditionally allocate the whole mip-chain (+30% memory!) even if you only want a single level.

So, prefer `texStorage`+`texSubImage` for textures in WebGL 2

## Use invalidateFramebuffer

Storing data that you won't use again can have high cost, particularly on tiled-rendering GPUs common on mobile. When you're done with the contents of a framebuffer attachment, use WebGL 2.0's `invalidateFramebuffer` to discard the data, instead of leaving the driver to waste time storing the data for later use. DEPTH/STENCIL and/or multisampled attachments in particular are great candidates for `invalidateFramebuffer`.

## Use non-blocking async data readback

Operations like `readPixels` and `getBufferSubData` are typically synchronous, but using the same APIs, non-blocking, asynchronous data readback can be achieved. The approach in WebGL 2 is analogous to the approach in OpenGL: [Async downloads in blocking APIs](https://kdashg.github.io/misc/async-gpu-downloads.html)

```js
function clientWaitAsync(gl, sync, flags, interval_ms) {
  return new Promise((resolve, reject) => {
    function test() {
      const res = gl.clientWaitSync(sync, flags, 0);
      if (res === gl.WAIT_FAILED) {
        reject();
        return;
      }
      if (res === gl.TIMEOUT_EXPIRED) {
        setTimeout(test, interval_ms);
        return;
      }
      resolve();
    }
    test();
  });
}

async function getBufferSubDataAsync(
    gl, target, buffer, srcByteOffset, dstBuffer,
    /* optional */ dstOffset, /* optional */ length) {
  const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
  gl.flush();

  await clientWaitAsync(gl, sync, 0, 10);
  gl.deleteSync(sync);

  gl.bindBuffer(target, buffer);
  gl.getBufferSubData(target, srcByteOffset, dstBuffer, dstOffset, length);
  gl.bindBuffer(target, null);

  return dest;
}

async function readPixelsAsync(gl, x, y, w, h, format, type, dest) {
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.PIXEL_PACK_BUFFER, buf);
  gl.bufferData(gl.PIXEL_PACK_BUFFER, dest.byteLength, gl.STREAM_READ);
  gl.readPixels(x, y, w, h, format, type, 0);
  gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);

  await getBufferSubDataAsync(gl, gl.PIXEL_PACK_BUFFER, buf, 0, dest);

  gl.deleteBuffer(buf);
  return dest;
}
```

### `devicePixelRatio` and high-dpi rendering

Handling `devicePixelRatio !== 1.0` is tricky. While the common approach is to set `canvas.width = width * devicePixelRatio`, this will cause moire artifacts with non-integer values of `devicePixelRatio`, as is common with UI scaling on Windows, as well as zooming on all platforms.

Instead, we can use non-integer values for CSS's `top`/`bottom`/`left`/`right` to fairly reliably 'pre-snap' our canvas to whole integer device coordinates.

Demo: [Device pixel presnap](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

### ResizeObserver and 'device-pixel-content-box'

On supporting browsers (Chromium?), `ResizeObserver` can be used with `'device-pixel-content-box'` to request a callback that includes the true device pixel size of an element. This can be used to build an async-but-accurate function:

```js
window.getDevicePixelSize = window.getDevicePixelSize || (async (elem) => {
   await new Promise((fn_resolve) => {
      const observer = new ResizeObserver((entries) => {
         for (const cur of entries) {
            const dev_size = cur.devicePixelContentBoxSize;
            const ret = {
               width: dev_size[0].inlineSize,
               height: dev_size[0].blockSize,
            };
            fn_resolve(ret);
            observer.disconnect();
            return;
         }
         throw `device-pixel-content-box not observed for elem ${elem}`;
      });
      observer.observe(elem, {box: 'device-pixel-content-box'});
   });
});
```

Please refer to [the specification](https://www.w3.org/TR/resize-observer/#resize-observer-interface) for more details.

## ImageBitmap creation

Using the [ImageBitmapOptions dictionary](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions) is essential for properly preparing textures for upload to WebGL, but unfortunately there's no obvious way to query exactly which dictionary members are supported by a given browser.

[This JSFiddle](https://jsfiddle.net/ptkyewhx/) illustrates how to determine which dictionary members a given browser supports.
