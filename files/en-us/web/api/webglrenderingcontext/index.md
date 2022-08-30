---
title: WebGLRenderingContext
slug: Web/API/WebGLRenderingContext
page-type: web-api-interface
tags:
  - 2D
  - 3D
  - API
  - Canvas
  - Context
  - Drawing
  - GL
  - Graphics
  - Interface
  - Reference
  - WebGL
  - WebGLRenderingContext
  - rendering
browser-compat: api.WebGLRenderingContext
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML {{HTMLElement("canvas")}} element.

To get an access to a WebGL context for 2D and/or 3D graphics rendering, call {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} on a `<canvas>` element, supplying "webgl" as the argument:

```js
const canvas = document.getElementById('myCanvas');
const gl = canvas.getContext('webgl');
```

Once you have the WebGL rendering context for a canvas, you can render within it. The [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial) has more information, examples, and resources on how to get started with WebGL.

If you require a WebGL 2.0 context, see {{domxref("WebGL2RenderingContext")}}; this supplies access to an implementation of OpenGL ES 3.0 graphics.

## Constants

See the [WebGL constants](/en-US/docs/Web/API/WebGL_API/Constants) page.

## The WebGL context

The following properties and methods provide general information and functionality to deal with the WebGL context:

- {{domxref("WebGLRenderingContext.canvas")}}
  - : A read-only back-reference to the {{domxref("HTMLCanvasElement")}}. Might be [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if it is not associated with a {{HTMLElement("canvas")}} element.
- {{domxref("WebGLRenderingContext.commit()")}} {{Experimental_Inline}}
  - : Pushes frames back to the original {{domxref("HTMLCanvasElement")}}, if the context is not directly fixed to a specific canvas.
- {{domxref("WebGLRenderingContext.drawingBufferWidth")}}
  - : The read-only width of the current drawing buffer. Should match the width of the canvas element associated with this context.
- {{domxref("WebGLRenderingContext.drawingBufferHeight")}}
  - : The read-only height of the current drawing buffer. Should match the height of the canvas element associated with this context.
- {{domxref("WebGLRenderingContext.getContextAttributes()")}}
  - : Returns a `WebGLContextAttributes` object that contains the actual context parameters. Might return [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), if the context is lost.
- {{domxref("WebGLRenderingContext.isContextLost()")}}
  - : Returns `true` if the context is lost, otherwise returns `false`.
- {{domxref("WebGLRenderingContext.makeXRCompatible()")}}
  - : Ensures the context is compatible with the user's XR hardware, re-creating the context if necessary with a new configuration to do so. This can be used to start an application using standard 2D presentation, then transition to using a VR or AR mode later.

## Viewing and clipping

- {{domxref("WebGLRenderingContext.scissor()")}}
  - : Defines the scissor box.
- {{domxref("WebGLRenderingContext.viewport()")}}
  - : Sets the viewport.

## State information

- {{domxref("WebGLRenderingContext.activeTexture()")}}
  - : Selects the active texture unit.
- {{domxref("WebGLRenderingContext.blendColor()")}}
  - : Sets the source and destination blending factors.
- {{domxref("WebGLRenderingContext.blendEquation()")}}
  - : Sets both the RGB blend equation and alpha blend equation to a single equation.
- {{domxref("WebGLRenderingContext.blendEquationSeparate()")}}
  - : Sets the RGB blend equation and alpha blend equation separately.
- {{domxref("WebGLRenderingContext.blendFunc()")}}
  - : Defines which function is used for blending pixel arithmetic.
- {{domxref("WebGLRenderingContext.blendFuncSeparate()")}}
  - : Defines which function is used for blending pixel arithmetic for RGB and alpha components separately.
- {{domxref("WebGLRenderingContext.clearColor()")}}
  - : Specifies the color values used when clearing color buffers.
- {{domxref("WebGLRenderingContext.clearDepth()")}}
  - : Specifies the depth value used when clearing the depth buffer.
- {{domxref("WebGLRenderingContext.clearStencil()")}}
  - : Specifies the stencil value used when clearing the stencil buffer.
- {{domxref("WebGLRenderingContext.colorMask()")}}
  - : Sets which color components to enable or to disable when drawing or rendering to a {{domxref("WebGLFramebuffer")}}.
- {{domxref("WebGLRenderingContext.cullFace()")}}
  - : Specifies whether or not front- and/or back-facing polygons can be culled.
- {{domxref("WebGLRenderingContext.depthFunc()")}}
  - : Specifies a function that compares incoming pixel depth to the current depth buffer value.
- {{domxref("WebGLRenderingContext.depthMask()")}}
  - : Sets whether writing into the depth buffer is enabled or disabled.
- {{domxref("WebGLRenderingContext.depthRange()")}}
  - : Specifies the depth range mapping from normalized device coordinates to window or viewport coordinates.
- {{domxref("WebGLRenderingContext.disable()")}}
  - : Disables specific WebGL capabilities for this context.
- {{domxref("WebGLRenderingContext.enable()")}}
  - : Enables specific WebGL capabilities for this context.
- {{domxref("WebGLRenderingContext.frontFace()")}}
  - : Specifies whether polygons are front- or back-facing by setting a winding orientation.
- {{domxref("WebGLRenderingContext.getParameter()")}}
  - : Returns a value for the passed parameter name.
- {{domxref("WebGLRenderingContext.getError()")}}
  - : Returns error information.
- {{domxref("WebGLRenderingContext.hint()")}}
  - : Specifies hints for certain behaviors. The interpretation of these hints depend on the implementation.
- {{domxref("WebGLRenderingContext.isEnabled()")}}
  - : Tests whether a specific WebGL capability is enabled or not for this context.
- {{domxref("WebGLRenderingContext.lineWidth()")}}
  - : Sets the line width of rasterized lines.
- {{domxref("WebGLRenderingContext.pixelStorei()")}}
  - : Specifies the pixel storage modes
- {{domxref("WebGLRenderingContext.polygonOffset()")}}
  - : Specifies the scale factors and units to calculate depth values.
- {{domxref("WebGLRenderingContext.sampleCoverage()")}}
  - : Specifies multi-sample coverage parameters for anti-aliasing effects.
- {{domxref("WebGLRenderingContext.stencilFunc()")}}
  - : Sets the both front and back function and reference value for stencil testing.
- {{domxref("WebGLRenderingContext.stencilFuncSeparate()")}}
  - : Sets the front and/or back function and reference value for stencil testing.
- {{domxref("WebGLRenderingContext.stencilMask()")}}
  - : Controls enabling and disabling of both the front and back writing of individual bits in the stencil planes.
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
  - : Controls enabling and disabling of front and/or back writing of individual bits in the stencil planes.
- {{domxref("WebGLRenderingContext.stencilOp()")}}
  - : Sets both the front and back-facing stencil test actions.
- {{domxref("WebGLRenderingContext.stencilOpSeparate()")}}
  - : Sets the front and/or back-facing stencil test actions.

## Buffers

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
  - : Binds a `WebGLBuffer` object to a given target.
- {{domxref("WebGLRenderingContext.bufferData()")}}
  - : Updates buffer data.
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
  - : Updates buffer data starting at a passed offset.
- {{domxref("WebGLRenderingContext.createBuffer()")}}
  - : Creates a `WebGLBuffer` object.
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
  - : Deletes a `WebGLBuffer` object.
- {{domxref("WebGLRenderingContext.getBufferParameter()")}}
  - : Returns information about the buffer.
- {{domxref("WebGLRenderingContext.isBuffer()")}}
  - : Returns a Boolean indicating if the passed buffer is valid.

## Framebuffers

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
  - : Binds a `WebGLFrameBuffer` object to a given target.
- {{domxref("WebGLRenderingContext.checkFramebufferStatus()")}}
  - : Returns the status of the framebuffer.
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
  - : Creates a `WebGLFrameBuffer` object.
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
  - : Deletes a `WebGLFrameBuffer` object.
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
  - : Attaches a `WebGLRenderingBuffer` object to a `WebGLFrameBuffer` object.
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
  - : Attaches a textures image to a `WebGLFrameBuffer` object.
- {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}}
  - : Returns information about the framebuffer.
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
  - : Returns a Boolean indicating if the passed `WebGLFrameBuffer` object is valid.
- {{domxref("WebGLRenderingContext.readPixels()")}}
  - : Reads a block of pixels from the `WebGLFrameBuffer`.

## Renderbuffers

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
  - : Binds a `WebGLRenderBuffer` object to a given target.
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
  - : Creates a `WebGLRenderBuffer` object.
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
  - : Deletes a `WebGLRenderBuffer` object.
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
  - : Returns information about the renderbuffer.
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
  - : Returns a Boolean indicating if the passed `WebGLRenderingBuffer` is valid.
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
  - : Creates a renderbuffer data store.

## Textures

- {{domxref("WebGLRenderingContext.bindTexture()")}}
  - : Binds a `WebGLTexture` object to a given target.
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
  - : Specifies a 2D texture image in a compressed format.
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
  - : Specifies a 2D texture sub-image in a compressed format.
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
  - : Copies a 2D texture image.
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
  - : Copies a 2D texture sub-image.
- {{domxref("WebGLRenderingContext.createTexture()")}}
  - : Creates a `WebGLTexture` object.
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
  - : Deletes a `WebGLTexture` object.
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
  - : Generates a set of mipmaps for a `WebGLTexture` object.
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
  - : Returns information about the texture.
- {{domxref("WebGLRenderingContext.isTexture()")}}
  - : Returns a Boolean indicating if the passed `WebGLTexture` is valid.
- {{domxref("WebGLRenderingContext.texImage2D()")}}
  - : Specifies a 2D texture image.
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
  - : Updates a sub-rectangle of the current `WebGLTexture`.
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}
  - : Sets texture parameters.
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}
  - : Sets texture parameters.

## Programs and shaders

- {{domxref("WebGLRenderingContext.attachShader()")}}
  - : Attaches a `WebGLShader` to a `WebGLProgram`.
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
  - : Binds a generic vertex index to a named attribute variable.
- {{domxref("WebGLRenderingContext.compileShader()")}}
  - : Compiles a `WebGLShader`.
- {{domxref("WebGLRenderingContext.createProgram()")}}
  - : Creates a `WebGLProgram`.
- {{domxref("WebGLRenderingContext.createShader()")}}
  - : Creates a `WebGLShader`.
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
  - : Deletes a `WebGLProgram`.
- {{domxref("WebGLRenderingContext.deleteShader()")}}
  - : Deletes a `WebGLShader`.
- {{domxref("WebGLRenderingContext.detachShader()")}}
  - : Detaches a `WebGLShader`.
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
  - : Returns a list of `WebGLShader` objects attached to a `WebGLProgram`.
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
  - : Returns information about the program.
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
  - : Returns the information log for a `WebGLProgram` object.
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
  - : Returns information about the shader.
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
  - : Returns a `WebGLShaderPrecisionFormat` object describing the precision for the numeric format of the shader.
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
  - : Returns the information log for a `WebGLShader` object.
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
  - : Returns the source code of a `WebGLShader` as a string.
- {{domxref("WebGLRenderingContext.isProgram()")}}
  - : Returns a Boolean indicating if the passed `WebGLProgram` is valid.
- {{domxref("WebGLRenderingContext.isShader()")}}
  - : Returns a Boolean indicating if the passed `WebGLShader` is valid.
- {{domxref("WebGLRenderingContext.linkProgram()")}}
  - : Links the passed `WebGLProgram` object.
- {{domxref("WebGLRenderingContext.shaderSource()")}}
  - : Sets the source code in a `WebGLShader`.
- {{domxref("WebGLRenderingContext.useProgram()")}}
  - : Uses the specified `WebGLProgram` as part the current rendering state.
- {{domxref("WebGLRenderingContext.validateProgram()")}}
  - : Validates a `WebGLProgram`.

## Uniforms and attributes

- {{domxref("WebGLRenderingContext.disableVertexAttribArray()")}}
  - : Disables a vertex attribute array at a given position.
- {{domxref("WebGLRenderingContext.enableVertexAttribArray()")}}
  - : Enables a vertex attribute array at a given position.
- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
  - : Returns information about an active attribute variable.
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
  - : Returns information about an active uniform variable.
- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
  - : Returns the location of an attribute variable.
- {{domxref("WebGLRenderingContext.getUniform()")}}
  - : Returns the value of a uniform variable at a given location.
- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
  - : Returns the location of a uniform variable.
- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
  - : Returns information about a vertex attribute at a given position.
- {{domxref("WebGLRenderingContext.getVertexAttribOffset()")}}
  - : Returns the address of a given vertex attribute.
- {{domxref("WebGLRenderingContext.uniform()", "WebGLRenderingContext.uniform[1234][fi][v]()")}}
  - : Specifies a value for a uniform variable.
- {{domxref("WebGLRenderingContext.uniformMatrix()", "WebGLRenderingContext.uniformMatrix[234]fv()")}}
  - : Specifies a matrix value for a uniform variable.
- {{domxref("WebGLRenderingContext.vertexAttrib()", "WebGLRenderingContext.vertexAttrib[1234]f[v]()")}}
  - : Specifies a value for a generic vertex attribute.
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
  - : Specifies the data formats and locations of vertex attributes in a vertex attributes array.

## Drawing buffers

- {{domxref("WebGLRenderingContext.clear()")}}
  - : Clears specified buffers to preset values.
- {{domxref("WebGLRenderingContext.drawArrays()")}}
  - : Renders primitives from array data.
- {{domxref("WebGLRenderingContext.drawElements()")}}
  - : Renders primitives from element array data.
- {{domxref("WebGLRenderingContext.finish()")}}
  - : Blocks execution until all previously called commands are finished.
- {{domxref("WebGLRenderingContext.flush()")}}
  - : Empties different buffer commands, causing all commands to be executed as quickly as possible.

## Working with extensions

These methods manage WebGL extensions:

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
  - : Returns an {{jsxref("Array")}} of strings containing all the supported WebGL extensions.
- {{domxref("WebGLRenderingContext.getExtension()")}}
  - : Returns an extension object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement")}}
