---
title: WEBGL_multi_draw.multiDrawArraysWEBGL()
slug: Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL
tags:
- Method
- Reference
- WebGL
- WebGL extension
browser-compat: api.WEBGL_multi_draw.multiDrawArraysWEBGL
---
<div>{{APIRef("WebGL")}}</div>

<p>The <code><strong>WEBGL_multi_draw.multiDrawArraysWEBGL()</strong></code> method of the
   <a href="/en-US/docs/Web/API/WebGL_API">WebGL API</a> renders multiple primitives from
   array data. It is
   identical to multiple calls to the
   <a
      href="/en-US/docs/Web/API/WebGLRenderingContext/drawArrays"><code>gl.drawArrays()</code></a>
   method.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">void <var>ext</var>.multiDrawArraysWEBGL(<var>mode</var>,
    <var>firstsList</var>, <var>firstsOffset</var>,
    <var>countsList</var>, <var>countsOffset</var>,
    <var>drawCount</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
   <dt><code>mode</code></dt>
   <dd>A <a href="/en-US/docs/Web/API/WebGL_API/Types"><code>GLenum</code></a>
      specifying the type primitive to render. Possible values are:
      <ul>
         <li><code>gl.POINTS</code>: Draws a single dot.</li>
         <li><code>gl.LINE_STRIP</code>: Draws a straight line to the next vertex.</li>
         <li><code>gl.LINE_LOOP</code>: Draws a straight line to the next vertex, and
            connects the
            last vertex back to the first.</li>
         <li><code>gl.LINES</code>: Draws a line between a pair of vertices.</li>
         <li>
            <code><a href="https://en.wikipedia.org/wiki/Triangle_strip">gl.TRIANGLE_STRIP</a></code>
         </li>
         <li>
            <code><a href="https://en.wikipedia.org/wiki/Triangle_fan">gl.TRIANGLE_FAN</a></code>
         </li>
         <li><code>gl.TRIANGLES</code>: Draws a triangle for a group of three vertices.
         </li>
      </ul>
   </dd>
   <dt><code>firstsList</code></dt>
   <dd>An <a
         href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array"><code>Int32Array</code></a>
      or <a
         href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a>
      (of <a href="/en-US/docs/Web/API/WebGL_API/Types"><code>GLint</code></a>)
      specifying a list of starting indices for the arrays of vector points.</dd>
   <dt><code>firstsOffset</code></dt>
   <dd>A <a href="/en-US/docs/Web/API/WebGL_API/Types"><code>GLuint</code></a>
      defining the starting point into the <code>firstsLists</code> array.</dd>
   <dt><code>countsList</code></dt>
   <dd>An <a
         href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array"><code>Int32Array</code></a>
      or <a
         href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a>
      (of <a href="/en-US/docs/Web/API/WebGL_API/Types"><code>GLsizei</code></a>)
      specifying a list of numbers of indices to be rendered.</dd>
   <dt><code>countsOffset</code></dt>
   <dd>A <a href="/en-US/docs/Web/API/WebGL_API/Types"><code>GLuint</code></a>
      defining the starting point into the <code>countsList</code> array.</dd>
   <dt><code>drawCount</code></dt>
   <dd>A <a href="/en-US/docs/Web/API/WebGL_API/Types"><code>GLsizei</code></a>
      specifying the number of instances of the range of elements to execute.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
   <li>If <code>mode</code> is not one of the accepted values, a
      <code>gl.INVALID_ENUM</code> error is thrown.</li>
   <li>If <code>drawCount</code> or items in <code>firstsList</code> and
      <code>countsList</code> are negative,
      a <code>gl.INVALID_VALUE</code> error is thrown.</li>
   <li>if <code>gl.CURRENT_PROGRAM</code> is
      <a
         href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a>,
      a <code>gl.INVALID_OPERATION</code> error is thrown.
   </li>
</ul>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">
// let firsts = new Int32Array(...);
// let counts = new Int32Array(...);
ext.multiDrawArraysWEBGL(gl.TRIANGLES, firsts, 0, counts, 0, firsts.length);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
   <li><a
         href="/en-US/docs/Web/API/WebGLRenderingContext/drawArrays"><code>WebGLRenderingContext.drawArrays()</code></a>
   </li>
   <li><a
         href="/en-US/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced"><code>WebGL2RenderingContext.drawArraysInstanced()</code></a>
   </li>
</ul>
