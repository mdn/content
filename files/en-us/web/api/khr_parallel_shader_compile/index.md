---
title: KHR_parallel_shader_compile
slug: Web/API/KHR_parallel_shader_compile
tags:
  - API
  - Reference
  - Shader
  - WebGL
  - WebGL extension
  - parallel shader compile
browser-compat: api.KHR_parallel_shader_compile
---
<div>{{draft}}{{APIRef("WebGL")}}</div>

<p>The <code><strong>KHR_parallel_shader_compile</strong></code> extension is part of the <a href="/en-US/docs/Web/API/WebGL_API">WebGL API</a> and enables a non-blocking poll operation, so that compile/link status availability (<code>COMPLETION_STATUS_KHR</code>) can be queried without potentially incurring stalls. In other words you can check the status of your shaders compiling without blocking the runtime.</p>

<p>WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also <a href="/en-US/docs/Web/API/WebGL_API/Using_Extensions">Using Extensions</a> in the <a href="/en-US/docs/Web/API/WebGL_API/Tutorial">WebGL tutorial</a>.</p>

<h2 id="Constants">Constants</h2>

<dl>
 <dt><code>ext.COMPLETION_STATUS_KHR</code></dt>
 <dd>A GLenum.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>Enable the extension:</p>

<pre class="brush: js">var ext = gl.getExtension('KHR_parallel_shader_compile');</pre>

<p>In general, best practice with or without the extension is:</p>

<pre class="brush: js">// Assuming lists of `shaders` and `programs`:
for (const x of shaders)
    gl.compileShader(x); // Never check compile status unless subsequent linking fails.
for (const x of programs)
    gl.linkProgram(x);
</pre>

<p>With the extension, apps would be able to poll whether programs have linked without janking, but these are likely to take the same total wall time to link:</p>

<pre class="brush: js">// Generator yielding a progress ratio [0.0, 1.0].
// Without the extension, this will jank and only check one program per generation.
function* linkingProgress(programs) {
    const ext = gl.getExtension('KHR_parallel_shader_compile');
    let todo = programs.slice();
    while (todo.length) {
        if (ext) {
            todo = todo.filter(x =&gt; !gl.getProgramParameter(x, ext.COMPLETION_STATUS_KHR));
        } else {
            const x = todo.pop();
            gl.getProgramParameter(x, gl.LINK_STATUS);
        }
        if (!todo.length)
            return;
        yield 1.0 - (todo.length / programs.length);
    }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.getExtension()")}}</li>
</ul>
