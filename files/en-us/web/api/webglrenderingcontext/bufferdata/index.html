---
title: WebGLRenderingContext.bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
tags:
- API
- Buffer
- Graphics
- Method
- Reference
- WebGL
- WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.bufferData
---
<div>{{APIRef("WebGL")}}</div>

<p>The <strong><code>WebGLRenderingContext.bufferData()</code></strong> method of the <a
		href="/en-US/docs/Web/API/WebGL_API">WebGL API</a> initializes and creates the
	buffer object's data store.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">// WebGL1:
void gl.bufferData(target, size, usage);
void gl.bufferData(target, ArrayBuffer? srcData, usage);
void gl.bufferData(target, ArrayBufferView srcData, usage);

// WebGL2:
void gl.bufferData(target, ArrayBufferView srcData, usage, srcOffset, length);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
	<dt><code>target</code></dt>
	<dd>A {{domxref("GLenum")}} specifying the binding point (target). Possible values:
		<ul>
			<li><code>gl.ARRAY_BUFFER</code>: Buffer containing vertex attributes, such as
				vertex coordinates, texture coordinate data, or vertex color data.</li>
			<li><code>gl.ELEMENT_ARRAY_BUFFER</code>: Buffer used for element indices.
			</li>
			<li>When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "",
				1)}}, the following values are available additionally:
				<ul>
					<li><code>gl.COPY_READ_BUFFER</code>: Buffer for copying from one
						buffer object to another.</li>
					<li><code>gl.COPY_WRITE_BUFFER</code>: Buffer for copying from one
						buffer object to another.</li>
					<li><code>gl.TRANSFORM_FEEDBACK_BUFFER</code>: Buffer for transform
						feedback operations.</li>
					<li><code>gl.UNIFORM_BUFFER</code>: Buffer used for storing uniform
						blocks.</li>
					<li><code>gl.PIXEL_PACK_BUFFER</code>: Buffer used for pixel transfer
						operations.</li>
					<li><code>gl.PIXEL_UNPACK_BUFFER</code>: Buffer used for pixel
						transfer operations.</li>
				</ul>
			</li>
		</ul>
	</dd>
	<dt><code>size</code></dt>
	<dd>A {{domxref("GLsizeiptr")}} setting the size in bytes of the buffer object's data
		store.</dd>
	<dt><code>srcData</code> {{optional_inline}}</dt>
	<dd>An {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}} or one of the
		{{domxref("ArrayBufferView")}} typed array types that will be copied into the data
		store. If <code>null</code>, a data store is still created, but the content is
		uninitialized and undefined.</dd>
	<dt><code>usage</code></dt>
	<dd>A {{domxref("GLenum")}} specifying the intended usage pattern of the data store
		for optimization purposes. Possible values:
		<ul>
			<li><code>gl.STATIC_DRAW</code>: The contents are intended to be specified
				once by the application, and used many times as the source for WebGL
				drawing and image specification commands.</li>
			<li><code>gl.DYNAMIC_DRAW</code>: The contents are intended to be respecified
				repeatedly by the application, and used many times as the source for WebGL
				drawing and image specification commands.</li>
			<li><code>gl.STREAM_DRAW</code>: The contents are intended to be specified
				once by the application, and used at most a few times as the source for
				WebGL drawing and image specification commands.</li>
			<li>When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "",
				1)}}, the following values are available additionally:
				<ul>
					<li><code>gl.STATIC_READ</code>: The contents are intended to be
						specified once by reading data from WebGL, and queried many times
						by the application.</li>
					<li><code>gl.DYNAMIC_READ</code>: The contents are intended to be
						respecified repeatedly by reading data from WebGL, and queried
						many times by the application.</li>
					<li><code>gl.STREAM_READ</code>: The contents are intended to be
						specified once by reading data from WebGL, and queried at most a
						few times by the application</li>
					<li><code>gl.STATIC_COPY</code>: The contents are intended to be
						specified once by reading data from WebGL, and used many times as
						the source for WebGL drawing and image specification commands.
					</li>
					<li><code>gl.DYNAMIC_COPY</code>: The contents are intended to be
						respecified repeatedly by reading data from WebGL, and used many
						times as the source for WebGL drawing and image specification
						commands.</li>
					<li><code>gl.STREAM_COPY</code>: The contents are intended to be
						specified once by reading data from WebGL, and used at most a few
						times as the source for WebGL drawing and image specification
						commands.</li>
				</ul>
			</li>
		</ul>
	</dd>
	<dt><code>srcOffset</code></dt>
	<dd>A {{domxref("GLuint")}} specifying the element index offset where to start reading
		the buffer.</dd>
	<dt><code>length</code> {{optional_inline}}</dt>
	<dd>A {{domxref("GLuint")}} defaulting to 0.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
	<li>A <code>gl.OUT_OF_MEMORY</code> error is thrown if the context is unable to create
		a data store with the given <code>size</code>.</li>
	<li>A <code>gl.INVALID_VALUE</code> error is thrown if <code>size</code> is negative.
	</li>
	<li>A <code>gl.INVALID_ENUM</code> error is thrown if <code>target</code> or
		<code>usage</code> are not one of the allowed enums.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_bufferData">Using bufferData</h3>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
</pre>

<h3 id="Getting_buffer_information">Getting buffer information</h3>

<p>To check the current buffer usage and buffer size, use the
	{{domxref("WebGLRenderingContext.getBufferParameter()")}} method.</p>

<pre class="brush: js">gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
</pre>

<h3 id="Getting_size_of_a_typed_array">Getting size of a typed array</h3>

<p>To calculate size parameter for a typed array.</p>

<pre class="brush: js">var dataArray = new Float32Array([1, 2, 3, 4]);
var sizeInBytes = dataArray.length * dataArray.BYTES_PER_ELEMENT;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{domxref("WebGLRenderingContext.createBuffer()")}}</li>
	<li>{{domxref("WebGLRenderingContext.bufferSubData()")}}</li>
	<li>Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
	</li>
</ul>
