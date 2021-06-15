---
title: WebGL best practices
slug: Web/API/WebGL_API/WebGL_best_practices
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
<p>{{WebGLSidebar}}</p>

<p>WebGL is a complicated API, and it's often not obvious what the recommended ways to use it are. This page tackles recommendations across the spectrum of expertise, and not only highlights dos and don'ts, but also details <em>why</em>. You can rely on this document to guide your choice of approach, and ensure you're on the right track no matter what browser or hardware your users run.</p>

<h2 id="Address_and_eliminate_WebGL_errors">Address and eliminate WebGL errors</h2>

<p>Your application should run without generating any WebGL errors (as returned by <code>getError</code>). Every WebGL error is reported in the Web Console as a JavaScript warning with a descriptive message. After too many errors (32 in Firefox), WebGL stops generating descriptive messages, which really hinders debugging.</p>

<p>The <em>only</em> errors a well-formed page generates are <code>OUT_OF_MEMORY</code> and <code>CONTEXT_LOST</code>.</p>

<h2 id="Understand_extension_availability">Understand extension availability</h2>

<p>The availability of most WebGL extensions depends on the client system. When using WebGL extensions, if possible, try to make them optional by gracefully adapting to the case there they are not supported.</p>

<p>These WebGL 1 extensions are universally supported, and can be relied upon to be present:</p>

<ul>
 <li>ANGLE_instanced_arrays</li>
 <li>EXT_blend_minmax</li>
 <li>OES_element_index_uint</li>
 <li>OES_standard_derivatives</li>
 <li>OES_vertex_array_object</li>
 <li>WEBGL_debug_renderer_info</li>
 <li>WEBGL_lose_context</li>
</ul>

<p><em>(see also: <a href="https://jdashg.github.io/misc/webgl/webgl-feature-levels.html">https://jdashg.github.io/misc/webgl/webgl-feature-levels.html</a>)</em></p>

<p>Consider polyfilling these into WebGLRenderingContext, like: <a href="https://github.com/jdashg/misc/blob/master/webgl/webgl-v1.1.js">https://github.com/jdashg/misc/blob/master/webgl/webgl-v1.1.js</a></p>

<h2 id="Understand_system_limits">Understand system limits</h2>

<p>Similarly to extensions, the limits of your system will be different than your clients' systems! Don't assume you can use thirty texture samplers per shader just because it works on your machine!</p>

<p>The minimum requirements for WebGL are quite low. In practice, effectively all systems support at least the following:</p>

<pre><code>    MAX_CUBE_MAP_TEXTURE_SIZE: 4096
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
</code></pre>

<p>Your desktop may support 16k textures, or maybe 16 texture units in the vertex shader, but most other systems don't, and content that works for you will not work for them!</p>

<h2 id="Avoid_invalidating_FBO_attachment_bindings">Avoid invalidating FBO attachment bindings</h2>

<p>Almost any change to an FBO's attachment bindings will invalidate its framebuffer completeness. Set up your hot framebuffers ahead of time.</p>

<p>In Firefox, setting the pref <code>webgl.perf.max-warnings</code> to <code>-1</code> in about:config will enable performance warnings that include warnings about FB completeness invalidations.</p>

<h3 id="Avoid_changing_VAO_attachments">Avoid changing VAO attachments (vertexAttribPointer, disable/enableVertexAttribArray)</h3>

<p>Drawing from static, unchanging VAOs is faster than mutating the same VAO for every draw call. For unchanged VAOs, browsers can cache the fetch limits, whereas when VAOs change, browsers must revalidate and recalculate limits. The overhead for this is relatively low, but re-using VAOs means fewer <code>vertexAttribPointer</code> calls too, so it's worth doing wherever it's easy.</p>

<h2 id="Delete_objects_eagerly">Delete objects eagerly</h2>

<p>Don't wait for the garbage collector/cycle collector to realize objects are orphaned and destroy them. Implementations track the liveness of objects, so 'deleting' them at the API level only releases the handle that refers to the actual object. (conceptually releasing the handle's ref-pointer to the object) Only once the object is unused in the implementation is it actually freed. For example, if you never want to access your shader objects directly again, just delete their handles after attaching them to a program object.</p>

<h2 id="Eagerly_lose_contexts">Lose contexts eagerly</h2>

<p>Consider also eagerly losing WebGL contexts via the <code>WEBGL_lose_context</code> extension when you're definitely done with them and no longer need the target canvas's rendering results. Note that this is not necessary to do when navigating away from a page - don't add an unload event handler just for this purpose.</p>

<h2 id="Flush_when_expecting_results">Flush when expecting results</h2>

<p>Call <code>flush()</code> when expecting results such as queries, or at completion of a rendering frame.</p>

<p>Flush tells the implementation to push all pending commands out for execution, flushing them out of the queue, instead of waiting for more commands to enqueue before sending for execution.</p>

<p>For example, it is possible for the following to never complete without context loss:</p>

<pre><code>sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
</code></pre>

<p>WebGL doesn't have a SwapBuffers call by default, so a flush can help fill the gap, as well.</p>

<h3 id="Use_webgl.flush_when_not_using_requestAnimationFrame">Use <code>webgl.flush()</code> when not using requestAnimationFrame</h3>

<p>When not using RAF, (such as when using RPAF; see below) use <code>webgl.flush()</code> to encourage eager execution of enqueued commands.</p>

<p>Because RAF is directly followed by the frame boundary, an explicit <code>webgl.flush()</code> isn't really needed with RAF.</p>

<h2 id="Avoid_blocking_API_calls_in_production">Avoid blocking API calls in production</h2>

<p>Certain WebGL entry points - including <code>getError</code> and <code>getParameter</code> - cause synchronous stalls on the calling thread. Even basic requests can take as long as 1ms, but they can take even longer if they need to wait for all graphics work to be completed (with an effect similar to <code>glFinish()</code> in native OpenGL).</p>

<p>In production code, avoid such entry points, especially on the browser main thread where they can cause the entire page to jank (often including scrolling or even the whole browser).</p>

<ul>
 <li>
  <p><code>getError()</code>: causes a flush + round-trip to fetch errors from the GPU process).</p>

  <p>For example, within Firefox, the only time glGetError is checked is after allocations (<code>bufferData</code>, <code>*texImage*</code>, <code>texStorage*</code>) to pick up any GL_OUT_OF_MEMORY errors.</p>
 </li>
 <li>
  <p><code>getShader/ProgramParameter()</code>, <code>getShader/ProgramInfoLog()</code>, other <code>get</code>s on shaders/programs: flush + shader compile + round-trip, if not done after shader compilation is complete. (See also <a href="#compile_shaders_and_link_programs_in_parallel">parallel shader compilation</a> below.)</p>
 </li>
 <li>
  <p><code>get*Parameter()</code> in general: possible flush + round-trip. In some cases, these will be cached to avoid the round-trip, but try to avoid relying on this.</p>
 </li>
 <li>
  <p><code>checkFramebufferStatus()</code>: possible flush + round-trip.</p>
 </li>
 <li>
  <p><code>getBufferSubData()</code>: usual finish + round-trip. (This is okay for READ buffers in conjunction with fences - see <a href="#non-blocking_async_data_downloadreadback">async data readback</a> below.)</p>
 </li>
 <li>
  <p><code>readPixels()</code> to the CPU (i.e. without an UNPACK buffer bound): finish + round-trip. Instead, use GPU-GPU <code>readPixels</code> in conjunction with async data readback.</p>
 </li>
</ul>

<h2 id="Always_enable_vertex_attrib_0_as_an_array">Always enable vertex attrib 0 as an array</h2>

<p>If you draw without vertex attrib 0 enabled as an array, you will force the browser to do complicated emulation when running on desktop OpenGL (such as on macOS). This is because in desktop OpenGL, nothing gets drawn if vertex attrib 0 is not array-enabled. You can use <code>bindAttribLocation</code> to force a vertex attribute to use location 0, and use <code>enableVertexAttribArray(0)</code> to make it array-enabled.</p>

<h2 id="Estimate_a_per-pixel_VRAM_Budget">Estimate a per-pixel VRAM Budget</h2>

<p>WebGL doesn't offer APIs to query the maximum amount of video memory on the system because such queries are not portable. Still, applications must be conscious of VRAM usage and not just allocate as much as possible.</p>

<p>One technique pioneered by the Google Maps team is the notion of a <em>per-pixel VRAM budget</em>:</p>

<p>1) For one system (e.g. a particular desktop / laptop), decide the maximum amount of VRAM your application should use. 2) Compute the number of pixels covered by a maximized browser window. E.g. <code>(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)</code> 3) The per-pixel VRAM budget is (1) divided by (2), and is a constant.</p>

<p>This constant should <em>generally</em> be portable among systems. Mobile devices typically have smaller screens than powerful desktop machines with large monitors. Re-compute this constant on a few target systems to get a reliable estimate.</p>

<p>Now adjust all internal caching in the application (WebGLBuffers, WebGLTextures, etc.) to obey a maximum size, computed by this constant multiplied by the number of pixels covered by the <em>current</em> browser window. This requires estimating the number of bytes consumed by each texture, for example. The cap also must typically be updated as the browser window resizes, and older resources above the limit must be purged.</p>

<p>Keeping the application's VRAM usage under this cap will help to avoid out-of-memory errors and associated instability.</p>

<h2 id="Consider_rendering_to_a_smaller_back_buffer">Consider rendering to a smaller back buffer</h2>

<p>A common (and easy) way to trade off quality for speed is rendering into a smaller back buffer, and upscaling the result. Consider reducing canvas.width and height and keeping canvas.style.width and height at a constant size.</p>

<h2 id="Batch_draw_calls">Batch draw calls</h2>

<p>"Batching" draw calls into fewer, larger draw calls will generally improve performance. If you have 1000 sprites to paint, try to do it as a single drawArrays() or drawElements() call.</p>

<p>It's common to use "degenerate triangles" if you need to draw discontinuous objects as a single drawArrays(TRIANGLE_STRIP) call. Degenerate triangles are triangles with no area, therefore any triangle where more than one point is in the same exact location. These triangles are effectively skipped, which lets you start a new triangle strip unattached to your previous one, without having to split into multiple draw calls.</p>

<p>Another important method for batching is texture atlasing, where multiple images are placed into a single texture, often like a checkerboard. Since you need to split draw call batches to change textures, texture atlasing lets you combine more draw calls into fewer, bigger batches. See <a href="https://webglsamples.org/sprites/readme.html">this example</a> demonstrating how to combine even sprites referencing multiple texture atlases into a single draw call.</p>

<h2 id="Avoid_ifdef_GL_ES">Avoid "#ifdef GL_ES"</h2>

<p>You should never use <code>#ifdef GL_ES</code> in your WebGL shaders; this condition is always true in WebGL. Although some early examples used this, it's not necessary.</p>

<h2 id="Prefer_doing_work_in_the_vertex_shader">Prefer doing work in the vertex shader</h2>

<p>Do as much work as you can in the vertex shader, rather than in the fragment shader. This is because per draw call, fragment shaders generally run many more times than vertex shaders. Any calculation that can be done on the vertices and then just interpolated among fragments (via <code>varying</code>s) is a performance boon. (The interpolation of varyings is very cheap, and is done automatically for you through the fixed functionality rasterization phase of the graphics pipeline.)</p>

<p>For example, a simple animation of a textured surface can be achieved through a time-dependent transformation of texture coordinates. (The simplest case being adding a uniform vector to the texture coordinates attribute vector) If visually acceptable, one can transform the texture coordinates in the vertex shader rather than in the fragment shader, to get better performance.</p>

<p>One common trade-off is to some lighting calculations per-vertex instead of per-fragment (pixel). In some cases, especially with simple models or dense vertices, this looks good enough.</p>

<p>The inversion of this is if a model has more vertices than pixels in the rendered output. However, LOD meshes is usually the answer to this problem, rarely moving work from the vertex <em>to</em> the fragment shader.</p>

<h2 id="Compile_Shaders_and_Link_Programs_in_parallel">Compile Shaders and Link Programs in parallel</h2>

<p>It's tempting to compile shaders and link programs serially, but many browsers can compile and link in parallel on background threads.</p>

<p>Instead of:</p>

<pre class="brush: js">function compileOnce(gl, shader) {
  if (shader.compiled) return;
  gl.compileShader(shader);
  shader.compiled = true;
}
for (const [vs, fs, prog] of programs) {
  compileOnce(gl, vs);
  compileOnce(gl, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error('Link failed: ' + gl.getProgramInfoLog(prog));
    console.error('vs info-log: ' + gl.getShaderInfoLog(vs));
    console.error('fs info-log: ' + gl.getShaderInfoLog(fs));
  }
}
</pre>

<p>Consider:</p>

<pre class="brush: js">function compileOnce(gl, shader) {
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
    console.error('Link failed: ' + gl.getProgramInfoLog(prog));
    console.error('vs info-log: ' + gl.getShaderInfoLog(vs));
    console.error('fs info-log: ' + gl.getShaderInfoLog(fs));
  }
}
</pre>

<h2 id="Prefer_KHR_parallel_shader_compile">Prefer KHR_parallel_shader_compile</h2>

<p>While we've described a pattern to allow browsers to compile and link in parallel, normally checking <code>COMPILE_STATUS</code> or <code>LINK_STATUS</code> blocks until the compile or link completes. In browsers where it's available, the <a href="https://www.khronos.org/registry/webgl/extensions/KHR_parallel_shader_compile/">KHR_parallel_shader_compile</a> extension provides a <em>non-blocking</em> <code>COMPLETION_STATUS</code> query. Prefer to enable and use this extension.</p>

<p>Example usage:</p>

<pre class="brush: js">ext = gl.getExtension('KHR_parallel_shader_compile');
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
</pre>

<p>This technique may not work in all applications, for example those which require programs to be immediately available for rendering. Still, consider how variations may work.</p>

<h2 id="Dont_check_shader_compile_status_unless_linking_fails">Don't check shader compile status unless linking fails</h2>

<p>There are very few errors that are guaranteed to cause shader compilation failure, but cannot be deferred to link time. The <a href="https://www.khronos.org/registry/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf">ESSL3 spec</a> says this under "Error Handling":</p>

<blockquote>
<p>The implementation should report errors as early a possible but in any case must satisfy the following:</p>

<ul>
 <li>All lexical, grammatical and semantic errors must have been detected following a call to glLinkProgram</li>
 <li>Errors due to mismatch between the vertex and fragment shader (link errors) must have been detected following a call to glLinkProgram</li>
 <li>Errors due to exceeding resource limits must have been detected following any draw call or a call to glValidateProgram</li>
 <li>A call to glValidateProgram must report all errors associated with a program object given the current GL state.</li>
</ul>

<p>The allocation of tasks between the compiler and linker is implementation dependent. Consequently there are many errors which may be detected either at compile or link time, depending on the implementation.</p>
</blockquote>

<p>Additionally, querying compile status is a synchronous call, which breaks pipelining.</p>

<p>Instead of:</p>

<pre class="brush: js">gl.compileShader(vs);
if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
  console.error('vs compile failed: ' + gl.getShaderInfoLog(vs));
}

gl.compileShader(fs);
if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
  console.error('fs compile failed: ' + gl.getShaderInfoLog(fs));
}

gl.linkProgram(prog);
if (!gl.getProgramParameter(vs, gl.LINK_STATUS)) {
  console.error('Link failed: ' + gl.getProgramInfoLog(prog));
}
</pre>

<p>Consider:</p>

<pre class="brush: js">gl.compileShader(vs);
gl.compileShader(fs);
gl.linkProgram(prog);
if (!gl.getProgramParameter(vs, gl.LINK_STATUS)) {
  console.error('Link failed: ' + gl.getProgramInfoLog(prog));
  console.error('vs info-log: ' + gl.getShaderInfoLog(vs));
  console.error('fs info-log: ' + gl.getShaderInfoLog(fs));
}
</pre>

<h2 id="Be_precise_with_GLSL_precision_annotations">Be precise with GLSL precision annotations</h2>

<p>If you expect to pass an essl300 <code>int</code> between shaders, and you need it to have 32-bits, you <em>must</em> use <code>highp</code> or you will have portability problems. (Works on Desktop, not on Android)</p>

<p>If you have a float texture, iOS requires that you use <code>highp sampler2D foo;</code>, or it will very painfully give you <code>lowp</code> texture samples! (+/-2.0 max is probably not good enough for you)</p>

<h3 id="Implicit_defaults">Implicit defaults</h3>

<p>The vertex language has the following predeclared globally scoped default precision statements:</p>

<pre><code>precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
</code></pre>

<p>The fragment language has the following predeclared globally scoped default precision statements:</p>

<pre><code>precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
</code></pre>

<h3 id="In_WebGL_1_highp_float_support_is_optional_in_fragment_shaders">In WebGL 1, "highp float" support is optional in fragment shaders</h3>

<p>Using <code>highp</code> precision unconditionally in fragment shaders will prevent your content from working on some older mobile hardware.</p>

<p>While you can use <code>mediump float</code> instead, but be aware that this often results in corrupted rendering due to lack of precision (particularly mobile systems) though the corruption is not going to be visible on a typical desktop computer.</p>

<p>If you know your precision requirements, <code>getShaderPrecisionFormat()</code> will tell you what the system supports.</p>

<p>If <code>highp float</code> is available, <code>GL_FRAGMENT_PRECISION_HIGH</code> will be defined as <code>1</code>.</p>

<p>A good pattern for "always give me the highest precision":</p>

<pre><code>#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
</code></pre>

<h3 id="ESSL100_minimum_requirements_WebGL_1">ESSL100 minimum requirements (WebGL 1)</h3>

<table>
 <thead>
  <tr>
   <th><code>float</code></th>
   <th>think</th>
   <th>range</th>
   <th>min above zero</th>
   <th>precision</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>highp</code></td>
   <td>float24*</td>
   <td>(-2^62, 2^62)</td>
   <td>2^-62</td>
   <td>2^-16 relative</td>
  </tr>
  <tr>
   <td><code>mediump</code></td>
   <td>IEEE float16</td>
   <td>(-2^14, 2^14)</td>
   <td>2^-14</td>
   <td>2^-10 relative</td>
  </tr>
  <tr>
   <td><code>lowp</code></td>
   <td>10-bit signed fixed</td>
   <td>(-2, 2)</td>
   <td>2^-8</td>
   <td>2^-8 absolute</td>
  </tr>
 </tbody>
</table>

<table>
 <thead>
  <tr>
   <th><code>int</code></th>
   <th>think</th>
   <th>range</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>highp</code></td>
   <td>int17</td>
   <td>(-2^16, 2^16)</td>
  </tr>
  <tr>
   <td><code>mediump</code></td>
   <td>int11</td>
   <td>(-2^10, 2^10)</td>
  </tr>
  <tr>
   <td><code>lowp</code></td>
   <td>int9</td>
   <td>(-2^8, 2^8)</td>
  </tr>
 </tbody>
</table>

<p><em>*float24: sign bit, 7-bit for exponent, 16-bit for mantissa</em></p>

<h3 id="ESSL300_minimum_requirements_WebGL_2">ESSL300 minimum requirements (WebGL 2)</h3>

<table>
 <thead>
  <tr>
   <th><code>float</code></th>
   <th>think</th>
   <th>range</th>
   <th>min above zero</th>
   <th>precision</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>highp</code></td>
   <td>IEEE float32</td>
   <td>(-2^126, 2^127)</td>
   <td>2^-126</td>
   <td>2^-24 relative</td>
  </tr>
  <tr>
   <td><code>mediump</code></td>
   <td>IEEE float16</td>
   <td>(-2^14, 2^14)</td>
   <td>2^-14</td>
   <td>2^-10 relative</td>
  </tr>
  <tr>
   <td><code>lowp</code></td>
   <td>10-bit signed fixed</td>
   <td>(-2, 2)</td>
   <td>2^-8</td>
   <td>2^-8 absolute</td>
  </tr>
 </tbody>
</table>

<table>
 <thead>
  <tr>
   <th><code>(u)int</code></th>
   <th>think</th>
   <th><code>int</code> range</th>
   <th><code>unsigned int</code> range</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>highp</code></td>
   <td>(u)int32</td>
   <td>[-2^31, 2^31]</td>
   <td>[0, 2^32]</td>
  </tr>
  <tr>
   <td><code>mediump</code></td>
   <td>(u)int16</td>
   <td>[-2^15, 2^15]</td>
   <td>[0, 2^16]</td>
  </tr>
  <tr>
   <td><code>lowp</code></td>
   <td>(u)int9</td>
   <td>[-2^8, 2^8]</td>
   <td>[0, 2^9]</td>
  </tr>
 </tbody>
</table>

<h2 id="Prefer_builtins_instead_of_building_your_own">Prefer builtins instead of building your own</h2>

<p>Prefer builtins like <code>dot</code>, <code>mix</code>, and <code>normalize</code>. At best, custom implementations might run as fast as the builtins they replace, but don't expect them to. Hardware often has hyper-optimized or even specialized instructions for builtins, and the compiler can't reliably replace your custom builtin-replacements with the special builtin codepaths.</p>

<h2 id="Use_mipmaps_for_any_texture_youll_see_in_3d">Use mipmaps for any texture you'll see in 3d</h2>

<p>When in doubt, call <code>generateMipmaps()</code> after texture uploads. Mipmaps are cheap on memory (only 30% overhead) while providing often-large performance advantages when textures are "zoomed out" or generally downscaled in the distance in 3d, or even for cube-maps!</p>

<p>It's quicker to sample from smaller texture images due to better inherent texture fetch cache locality: Zooming out on a non-mipmapped texture ruins texture fetch cache locality, because neighboring pixels no longer sample from neighboring texels!</p>

<p>However, for 2d resources that are never "zoomed out", don't pay the 30% memory surcharge for mipmaps:</p>

<pre class="brush: js">const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
</pre>

<p>(In WebGL 2, you should just use <code>texStorage</code> with <code>levels=1</code>)</p>

<p>One caveat: <code>generateMipmaps</code> only works if you would be able to render into the texture if you attached it to a framebuffer. (The spec calls this "color-renderable formats") For example, if a system supports float-textures but not render-to-float, <code>generateMipmaps</code> will fail for float formats.</p>

<h2 id="Dont_assume_you_can_render_into_float_textures">Don't assume you can render into float textures</h2>

<p>There are many, many systems that support RGBA32F textures, but if you attach one to a framebuffer you'll get <code>FRAMEBUFFER_INCOMPLETE_ATTACHMENT</code> from <code>checkFramebufferStatus()</code>. It may work on your system, but <em>most</em> mobile systems will not support it!</p>

<p>On WebGL 1, use the <code>EXT_color_buffer_half_float</code> and <code>WEBGL_color_buffer_float</code> extensions to check for render-to-float-texture support for float16 and float32 respectively.</p>

<p>On WebGL 2, <code>EXT_color_buffer_float</code> checks for render-to-float-texture support for both float32 and float16. <code>EXT_color_buffer_half_float</code> is present on systems which only support rendering to float16 textures.</p>

<h3 id="Render-to-float32_doesnt_imply_float32-blending">Render-to-float32 doesn't imply float32-blending!</h3>

<p>It may work on your system, but on many others it won't. Avoid it if you can. Check for the <code>EXT_float_blend</code> extension to check for support.</p>

<p>Float16-blending is always supported.</p>

<h2 id="Some_formats_e.g._RGB_may_be_emulated">Some formats (e.g. RGB) may be emulated</h2>

<p>A number of formats (particularly three-channel formats) are emulated. For example, RGB32F is often actually RGBA32F, and Luminance8 may actually be RGBA8. RGB8 in particular is often surprisingly slow, as masking out the alpha channel and/or patching blend functions has fairly high overhead. Prefer to use RGBA8 and ignore the alpha yourself for better performance.</p>

<h2 id="Alpha_false_can_be_expensive">Avoid alpha:false, which can be expensive</h2>

<p>Specifying <code>alpha:false</code> during context creation causes the browser to composite the WebGL-rendered canvas as though it were opaque, ignoring any alpha values the application writes in its fragment shader. On some platforms, this capability unfortunately comes at a significant performance cost. The RGB back buffer may have to be emulated on top of an RGBA surface, and there are relatively few techniques available in the OpenGL API for making it appear to the application that an RGBA surface has no alpha channel. <a href="https://crbug.com/1045643">It has been found</a> that all of these techniques have approximately equal performance impact on affected platforms.</p>

<p>Most applications, even those requiring alpha blending, can be structured to produce <code>1.0</code> for the alpha channel. The primary exception is any application requiring destination alpha in the blending function. If feasible, it is recommended to do this rather than using <code>alpha:false</code>.</p>

<h2 id="Consider_compressed_texture_formats">Consider compressed texture formats</h2>

<p>While JPG and PNG are generally smaller over-the-wire, GPU compressed texture formats are smaller on in GPU memory, and are faster to sample from. (This reduces texture memory bandwidth, which is precious on mobile) However, compressed texture formats have worse quality than JPG, and are generally only acceptable for colors (not e.g. normals or coordinates).</p>

<p>Unfortunately, there's no single universally supported format. Every system has at least one of the following though:</p>

<ul>
 <li>WEBGL_compressed_texture_s3tc (desktop)</li>
 <li>WEBGL_compressed_texture_etc1 (Android)</li>
 <li>WEBGL_compressed_texture_pvrtc (iOS)</li>
</ul>

<p>WebGL 2 has universal support by combining:</p>

<ul>
 <li>WEBGL_compressed_texture_s3tc (desktop)</li>
 <li>WEBGL_compressed_texture_etc (mobile)</li>
</ul>

<p>WEBGL_compressed_texture_astc has both higher quality and/or higher compression, but is only supported on newer hardware.</p>

<h3 id="Basis_Universal_texture_compression_formatlibrary">Basis Universal texture compression format/library</h3>

<p>Basis Universal solves several of the issues mentioned above. It offers a way to support all common compressed texture formats with a single compressed texture file, through a JavaScript library that efficiently converts formats at load time. It also adds additional compression that makes Basis Universal compressed texture files much smaller than regular compressed textures over-the-wire, more comparable to JPEG.</p>

<p><a href="https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md">https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md</a></p>

<h2 id="Memory_usage_of_depth_and_stencil_formats">Memory usage of depth and stencil formats</h2>

<p>Depth and stencil attachments and formats are actually inseparable on many devices. You may ask for DEPTH_COMPONENT24 or STENCIL_INDEX8, but you're often getting D24X8 and X24S8 32bpp formats behind the scenes. Assume that the memory usage of depth and stencil formats is rounded up to the nearest four bytes.</p>

<h2 id="texImagetexSubImage_uploads_esp_videos_can_cause_pipeline_flushes">texImage/texSubImage uploads (esp. videos) can cause pipeline flushes</h2>

<p>Most texture uploads from DOM elements will incur a processing pass that will temporarily switch GL Progams internally, causing a pipeline flush. (Pipelines are formalized explicitly in Vulkan[<a href="https://www.khronos.org/registry/vulkan/specs/1.2/html/chap9.html#VkGraphicsPipelineCreateInfo">1</a>] et al, but are implicit behind-the-scenes in OpenGL and WebGL. Pipelines are more or less the tuple of shader program, depth/stencil/multisample/blend/rasterization state)</p>

<p>In WebGL:</p>

<pre><code>    ...
    useProgram(prog1)
&lt;pipeline flush&gt;
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    texImage2D(HTMLVideoElement)
    drawArrays()
    ...
</code></pre>

<p>Behind the scenes in the browser:</p>

<pre><code>    ...
    useProgram(prog1)
&lt;pipeline flush&gt;
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    -texImage2D(HTMLVideoElement):
        +useProgram(_internal_tex_tranform_prog)
&lt;pipeline flush&gt;
        +bindFramebuffer(webgl_texture._internal_framebuffer)
        +bindTexture(HTMLVideoElement._internal_video_tex)
        +drawArrays() // y-flip/colorspace-transform/alpha-(un)premultiply
        +bindTexture(webgl_texture)
        +bindFramebuffer(target)
        +useProgram(prog1)
&lt;pipeline flush&gt;
    drawArrays()
    ...
</code></pre>

<p>Prefer doing uploads before starting drawing, or at least between pipelines:</p>

<p>In WebGL:</p>

<pre><code>    ...
    bindTexture(webgl_texture)
    texImage2D(HTMLVideoElement)
    useProgram(prog1)
&lt;pipeline flush&gt;
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    drawArrays()
    ...
</code></pre>

<p>Behind the scenes in the browser:</p>

<pre><code>    ...
    bindTexture(webgl_texture)
    -texImage2D(HTMLVideoElement):
        +useProgram(_internal_tex_tranform_prog)
&lt;pipeline flush&gt;
        +bindFramebuffer(webgl_texture._internal_framebuffer)
        +bindTexture(HTMLVideoElement._internal_video_tex)
        +drawArrays() // y-flip/colorspace-transform/alpha-(un)premultiply
        +bindTexture(webgl_texture)
        +bindFramebuffer(target)
    useProgram(prog1)
&lt;pipeline flush&gt;
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    drawArrays()
    ...
</code></pre>

<h2 id="Use_texStorage_to_create_textures">Use texStorage to create textures</h2>

<p>The WebGL 2.0 <code>texImage*</code> API lets you define each mip level independently and at any size, even the mis-matching mips sizes are not an error until draw time which means there is no way the driver can actually prepare the texture in GPU memory until the first time the texture is drawn.</p>

<p>Further, some drivers might unconditionally allocate the whole mip-chain (+30% memory!) even if you only want a single level.</p>

<p>So, prefer <code>texStorage</code>+<code>texSubImage</code> for textures in WebGL 2</p>

<h2 id="Use_invalidateFramebuffer">Use invalidateFramebuffer</h2>

<p>Storing data that you won't use again can have high cost, particularly on tiled-rendering GPUs common on mobile. When you're done with the contents of a framebuffer attachment, use WebGL 2.0's <code>invalidateFramebuffer</code> to discard the data, instead of leaving the driver to waste time storing the data for later use. DEPTH/STENCIL and/or multisampled attachments in particular are great candidates for <code>invalidateFramebuffer</code>.</p>

<h2 id="Use_non_blocking_async_data_readback">Use non-blocking async data readback</h2>

<p>Operations like <code>readPixels</code> and <code>getBufferSubData</code> are typically synchronous, but using the same APIs, non-blocking, asynchronous data readback can be achieved. The approach in WebGL 2 is analogous to the approach in OpenGL: <a href="https://jdashg.github.io/misc/async-gpu-downloads.html">https://jdashg.github.io/misc/async-gpu-downloads.html</a></p>

<pre class="brush: js">function clientWaitAsync(gl, sync, flags, interval_ms) {
  return new Promise((resolve, reject) =&gt; {
    function test() {
      const res = gl.clientWaitSync(sync, flags, 0);
      if (res == gl.WAIT_FAILED) {
        reject();
        return;
      }
      if (res == gl.TIMEOUT_EXPIRED) {
        setTimeout(test, interval_ms);
        return;
      }
      resolve();
    }
    test());
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
</pre>

<h3 id="Consider_requestPostAnimationFrame_not_requestAnimationFrame">Consider <code>requestPostAnimationFrame</code> not <code>requestAnimationFrame</code></h3>

<p>While it's well-known that apps should use <code>requestAnimationFrame</code> ("RAF") instead of <code>setTimeout</code> (et al) to redraw on-demand, what's less well-known is that non-trivial WebGL apps should often <em>not</em> render within a RAF callback.</p>

<p>RAF callbacks (and their microtasks/promises) are the last JS run at the end of each Browser content frame.</p>

<p>For robust non-trivial (particularly WebGL) content, <code>requestPostAnimationFrame</code> ("RPAF") is the <em>first</em> JS run at the beginning of each Browser content frame. That is, it's the first JS run after RAF callbacks and the Browser content (transaction) presentation step. (<a href="https://github.com/WICG/requestPostAnimationFrame/blob/master/explainer.md">RPAF explainer</a>)</p>

<p>This allows as much time as possible for rendering each frame.</p>

<p><em>Note</em> that <code>requestPostAnimationFrame</code> is still under development as of this writing. Polyfills of this API are recommended in Firefox, but not in Chrome, due to <a href="https://crbug.com/1199005">undesirable performance characteristics</a>. Here is one possible polyfill:

<pre>
if (!window.requestPostAnimationFrame) {
   window.requestPostAnimationFrame = function(task) {
      requestAnimationFrame(() => {
         setTimeout(task, 0);
      });
   }
}
</pre>
</p>

<h3 id="devicePixelRatio_and_high-dpi_rendering"><code>devicePixelRatio</code> and high-dpi rendering</h3>

<p>Handling <code>devicePixelRatio != 1.0</code> is tricky. While the common approach is to set <code>canvas.width = width * devicePixelRatio</code>, this will cause moire artifacts with non-integer values of <code>devicePixelRatio</code>, as is common with UI scaling on Windows, as well as zooming on all platforms.</p>

<p>Instead, we can use non-integer values for CSS's <code>top</code>/<code>bottom</code>/<code>left</code>/<code>right</code> to fairly reliably 'pre-snap' our canvas to whole integer device coordinates.</p>

<p>Demo: <a href="https://jdashg.github.io/misc/webgl/device-pixel-presnap.html">https://jdashg.github.io/misc/webgl/device-pixel-presnap.html</a></p>

<h3 id="ResizeObserver_and_device-pixel-content-box">ResizeObserver and 'device-pixel-content-box'</h3>

<p>On supporting browsers (Chromium?), <code>ResizeObserver</code> can be used with <code>'device-pixel-content-box'</code> to request a callback that includes the true device pixel size of an element. This can be used to build an async-but-accurate function:</p>

<pre class="brush: js">window.getDevicePixelSize = window.getDevicePixelSize || async function(elem) {
   await new Promise(fn_resolve =&gt; {
      const observer = new ResizeObserver(entries =&gt; {
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
         throw 'device-pixel-content-box not observed for elem ' + elem;
      });
      observer.observe(elem, {box: 'device-pixel-content-box'});
   });
};
</pre>

<p>Please refer to <a href="https://www.w3.org/TR/resize-observer/#resize-observer-interface">the specification</a> for more details.</p>

<h2 id="ImageBitmap_creation">ImageBitmap creation</h2>

<p>Using the <a href="https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions">ImageBitmapOptions dictionary</a> is essential for properly preparing textures for upload to WebGL, but unfortunately there's no obvious way to query exactly which dictionary members are supported by a given browser.</p>

<p><a href="https://jsfiddle.net/ptkyewhx/">This JSFiddle</a> illustrates how to determine which dictionary members a given browser supports.</p>
