---
title: WebGL2RenderingContext
slug: Web/API/WebGL2RenderingContext
page-type: web-api-interface
browser-compat: api.WebGL2RenderingContext
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML {{HTMLElement("canvas")}} element.

To get an object of this interface, call {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} on a `<canvas>` element, supplying "webgl2" as the argument:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl2");
```

> [!NOTE]
> WebGL 2 is an extension to WebGL 1. The `WebGL2RenderingContext` interface implements all members of the {{domxref("WebGLRenderingContext")}} interface. Some methods of the WebGL 1 context can accept additional values when used in a WebGL 2 context. You will find this info noted on the WebGL 1 reference pages.

The [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial) has more information, examples, and resources on how to get started with WebGL.

## Constants

See the [WebGL constants](/en-US/docs/Web/API/WebGL_API/Constants) page.

## State information

- {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}
  - : Returns the indexed value for the given `target`.

## Buffers

- {{domxref("WebGL2RenderingContext.bufferData()")}}
  - : Initializes and creates the buffer object's data store.
- {{domxref("WebGL2RenderingContext.bufferSubData()")}}
  - : Updates a subset of a buffer object's data store.
- {{domxref("WebGL2RenderingContext.copyBufferSubData()")}}
  - : Copies part of the data of a buffer to another buffer.
- {{domxref("WebGL2RenderingContext.getBufferSubData()")}}
  - : Reads data from a buffer and writes them to an {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}}.

## Framebuffers

- {{domxref("WebGL2RenderingContext.blitFramebuffer()")}}
  - : Transfers a block of pixels from the read framebuffer to the draw framebuffer.
- {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}}
  - : Attaches a single layer of a texture to a framebuffer.
- {{domxref("WebGL2RenderingContext.invalidateFramebuffer()")}}
  - : Invalidates the contents of attachments in a framebuffer.
- {{domxref("WebGL2RenderingContext.invalidateSubFramebuffer()")}}
  - : Invalidates portions of the contents of attachments in a framebuffer
- {{domxref("WebGL2RenderingContext.readBuffer()")}}
  - : Selects a color buffer as the source for pixels.

## Renderbuffers

- {{domxref("WebGL2RenderingContext.getInternalformatParameter()")}}
  - : Returns information about implementation-dependent support for internal formats.
- {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}
  - : Creates and initializes a renderbuffer object's data store and allows specifying the number of samples to be used.

## Textures

- {{domxref("WebGL2RenderingContext.texStorage2D()")}}
  - : Specifies all levels of two-dimensional texture storage.
- {{domxref("WebGL2RenderingContext.texStorage3D()")}}
  - : Specifies all levels of a three-dimensional texture or two-dimensional array texture.
- {{domxref("WebGL2RenderingContext.texImage3D()")}}
  - : Specifies a three-dimensional texture image.
- {{domxref("WebGL2RenderingContext.texSubImage3D()")}}
  - : Specifies a sub-rectangle of the current 3D texture.
- {{domxref("WebGL2RenderingContext.copyTexSubImage3D()")}}
  - : Copies pixels from the current [`WebGLFramebuffer`](/en-US/docs/Web/API/WebGLFramebuffer) into an existing 3D texture sub-image.
- {{domxref("WebGL2RenderingContext.compressedTexImage3D")}}
  - : Specifies a three-dimensional texture image in a compressed format.
- {{domxref("WebGL2RenderingContext.compressedTexSubImage3D()")}}
  - : Specifies a three-dimensional sub-rectangle for a texture image in a compressed format.

## Programs and shaders

- {{domxref("WebGL2RenderingContext.getFragDataLocation()")}}
  - : Returns the binding of color numbers to user-defined varying out variables.

## Uniforms and attributes

- [`WebGL2RenderingContext.uniform[1234][uif][v]()`](/en-US/docs/Web/API/WebGL2RenderingContext/uniform)
  - : Methods specifying values of uniform variables.
- {{domxref("WebGL2RenderingContext.uniformMatrix()", "WebGL2RenderingContext.uniformMatrix[234]x[234]fv()")}}
  - : Methods specifying matrix values for uniform variables.
- {{domxref("WebGL2RenderingContext.vertexAttribI()", "WebGL2RenderingContext.vertexAttribI4[u]i[v]()")}}
  - : Methods specifying integer values for generic vertex attributes.
- {{domxref("WebGL2RenderingContext.vertexAttribIPointer()")}}
  - : Specifies integer data formats and locations of vertex attributes in a vertex attributes array.

## Color spaces

- {{domxref("WebGL2RenderingContext.drawingBufferColorSpace")}}
  - : Specifies the color space of the WebGL drawing buffer.
- {{domxref("WebGL2RenderingContext.unpackColorSpace")}}
  - : Specifies the color space to convert to when importing textures.

## Drawing buffers

- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
  - : Modifies the rate at which generic vertex attributes advance when rendering multiple instances of primitives with {{domxref("WebGL2RenderingContext.drawArraysInstanced()", "gl.drawArraysInstanced()")}} and {{domxref("WebGL2RenderingContext.drawElementsInstanced()", "gl.drawElementsInstanced()")}}.
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
  - : Renders primitives from array data. In addition, it can execute multiple instances of the range of elements.
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
  - : Renders primitives from array data. In addition, it can execute multiple instances of a set of elements.
- {{domxref("WebGL2RenderingContext.drawRangeElements()")}}
  - : Renders primitives from array data in a given range.
- {{domxref("WebGL2RenderingContext.drawBuffers()")}}
  - : Specifies a list of color buffers to be drawn into.
- {{domxref("WebGL2RenderingContext.clearBuffer()", "WebGL2RenderingContext.clearBuffer[fiuv]()")}}
  - : Clears buffers from the currently bound framebuffer.

## Query objects

Methods for working with {{domxref("WebGLQuery")}} objects.

- {{domxref("WebGL2RenderingContext.createQuery()")}}
  - : Creates a new {{domxref("WebGLQuery")}} object.
- {{domxref("WebGL2RenderingContext.deleteQuery()")}}
  - : Deletes a given {{domxref("WebGLQuery")}} object.
- {{domxref("WebGL2RenderingContext.isQuery()")}}
  - : Returns `true` if a given object is a valid {{domxref("WebGLQuery")}} object.
- {{domxref("WebGL2RenderingContext.beginQuery()")}}
  - : Begins an asynchronous query.
- {{domxref("WebGL2RenderingContext.endQuery()")}}
  - : Marks the end of an asynchronous query.
- {{domxref("WebGL2RenderingContext.getQuery()")}}
  - : Returns a {{domxref("WebGLQuery")}} object for a given target.
- {{domxref("WebGL2RenderingContext.getQueryParameter()")}}
  - : Returns information about a query.

## Sampler objects

- {{domxref("WebGL2RenderingContext.createSampler()")}}
  - : Creates a new {{domxref("WebGLSampler")}} object.
- {{domxref("WebGL2RenderingContext.deleteSampler()")}}
  - : Deletes a given {{domxref("WebGLSampler")}} object.
- {{domxref("WebGL2RenderingContext.bindSampler()")}}
  - : Binds a given {{domxref("WebGLSampler")}} to a texture unit.
- {{domxref("WebGL2RenderingContext.isSampler()")}}
  - : Returns `true` if a given object is a valid {{domxref("WebGLSampler")}} object.
- {{domxref("WebGL2RenderingContext.samplerParameter()", "WebGL2RenderingContext.samplerParameter[if]()")}}
  - : Sets sampler parameters.
- {{domxref("WebGL2RenderingContext.getSamplerParameter()")}}
  - : Returns sampler parameter information.

## Sync objects

- {{domxref("WebGL2RenderingContext.fenceSync()")}}
  - : Creates a new {{domxref("WebGLSync")}} object and inserts it into the GL command stream.
- {{domxref("WebGL2RenderingContext.isSync()")}}
  - : Returns `true` if the passed object is a valid {{domxref("WebGLSync")}} object.
- {{domxref("WebGL2RenderingContext.deleteSync()")}}
  - : Deletes a given {{domxref("WebGLSync")}} object.
- {{domxref("WebGL2RenderingContext.clientWaitSync()")}}
  - : Blocks and waits for a {{domxref("WebGLSync")}} object to become signaled or a given timeout to be passed.
- {{domxref("WebGL2RenderingContext.waitSync()")}}
  - : Returns immediately, but waits on the GL server until the given {{domxref("WebGLSync")}} object is signaled.
- {{domxref("WebGL2RenderingContext.getSyncParameter()")}}
  - : Returns parameter information of a {{domxref("WebGLSync")}} object.

## Transform feedback

- {{domxref("WebGL2RenderingContext.createTransformFeedback()")}}
  - : Creates and initializes {{domxref("WebGLTransformFeedback")}} objects.
- {{domxref("WebGL2RenderingContext.deleteTransformFeedback()")}}
  - : Deletes a given {{domxref("WebGLTransformFeedback")}} object.
- {{domxref("WebGL2RenderingContext.isTransformFeedback()")}}
  - : Returns `true` if the passed object is a valid {{domxref("WebGLTransformFeedback")}} object.
- {{domxref("WebGL2RenderingContext.bindTransformFeedback()")}}
  - : Binds a passed {{domxref("WebGLTransformFeedback")}} object to the current GL state.
- {{domxref("WebGL2RenderingContext.beginTransformFeedback()")}}
  - : Starts a transform feedback operation.
- {{domxref("WebGL2RenderingContext.endTransformFeedback()")}}
  - : Ends a transform feedback operation.
- {{domxref("WebGL2RenderingContext.transformFeedbackVaryings()")}}
  - : Specifies values to record in {{domxref("WebGLTransformFeedback")}} buffers.
- {{domxref("WebGL2RenderingContext.getTransformFeedbackVarying()")}}
  - : Returns information about varying variables from {{domxref("WebGLTransformFeedback")}} buffers.
- {{domxref("WebGL2RenderingContext.pauseTransformFeedback()")}}
  - : Pauses a transform feedback operation.
- {{domxref("WebGL2RenderingContext.resumeTransformFeedback()")}}
  - : Resumes a transform feedback operation.

## Uniform buffer objects

- {{domxref("WebGL2RenderingContext.bindBufferBase()")}}
  - : Binds a given {{domxref("WebGLBuffer")}} to a given binding point (`target`) at a given `index`.
- {{domxref("WebGL2RenderingContext.bindBufferRange()")}}
  - : Binds a range of a given {{domxref("WebGLBuffer")}} to a given binding point (`target`) at a given `index`.
- {{domxref("WebGL2RenderingContext.getUniformIndices()")}}
  - : Retrieves the indices of a number of uniforms within a {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getActiveUniforms()")}}
  - : Retrieves information about active uniforms within a {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getUniformBlockIndex()")}}
  - : Retrieves the index of a uniform block within a {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getActiveUniformBlockParameter()")}}
  - : Retrieves information about an active uniform block within a {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getActiveUniformBlockName()")}}
  - : Retrieves the name of the active uniform block at a given index within a {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.uniformBlockBinding()")}}
  - : Assigns binding points for active uniform blocks.

## Vertex array objects

Methods for working with {{domxref("WebGLVertexArrayObject")}} (VAO) objects.

- {{domxref("WebGL2RenderingContext.createVertexArray()")}}
  - : Creates a new {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
  - : Deletes a given {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("WebGL2RenderingContext.isVertexArray()")}}
  - : Returns `true` if a given object is a valid {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("WebGL2RenderingContext.bindVertexArray()")}}
  - : Binds a given {{domxref("WebGLVertexArrayObject")}} to the buffer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement")}}
- {{domxref("WebGLRenderingContext")}}
