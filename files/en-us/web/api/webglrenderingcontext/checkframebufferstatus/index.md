---
title: "WebGLRenderingContext: checkFramebufferStatus() method"
short-title: checkFramebufferStatus()
slug: Web/API/WebGLRenderingContext/checkFramebufferStatus
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.checkFramebufferStatus
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.checkFramebufferStatus()`** method
of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns the completeness
status of the {{domxref("WebGLFramebuffer")}} object.

## Syntax

```js-nolint
checkFramebufferStatus(target)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.FRAMEBUFFER`

      - : Collection buffer data storage of color, alpha,
        depth and stencil buffers used to render an image.

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
    the following values are available additionally:

    - `gl.DRAW_FRAMEBUFFER`
      - : Equivalent to `gl.FRAMEBUFFER`.
        Used as a destination for drawing, rendering, clearing, and writing operations.
    - `gl.READ_FRAMEBUFFER`
      - : Used as a source for reading operations.

### Return value

A {{domxref("WebGL_API/Types", "GLenum")}} indicating the completeness status of the framebuffer or
`0` if an error occurs. Possible enum return values:

- `gl.FRAMEBUFFER_COMPLETE`: The framebuffer is ready to display.
- `gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT`: The attachment types are
  mismatched or not all framebuffer attachment points are framebuffer attachment
  complete.
- `gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`: There is no attachment.
- `gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS`: Height and width of the
  attachment are not the same.
- `gl.FRAMEBUFFER_UNSUPPORTED`: The format of the attachment is not
  supported or if depth and stencil attachments are not the same renderbuffer.
- When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the
  following values can be returned additionally:

  - `gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE`: The values of
    `gl.RENDERBUFFER_SAMPLES` are different among attached renderbuffers,
    or are non-zero if the attached images are a mix of renderbuffers and textures.

- When using the {{domxref("OVR_multiview2")}} extension, the following value can be
  returned additionally:

  - `ext.FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR`: If
    `baseViewIndex` is not the same for all framebuffer attachment points
    where the value of `FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE` is not
    `NONE`, the framebuffer is considered incomplete.

## Examples

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();

// …

gl.checkFramebufferStatus(gl.FRAMEBUFFER);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
