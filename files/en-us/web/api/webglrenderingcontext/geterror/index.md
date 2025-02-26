---
title: "WebGLRenderingContext: getError() method"
short-title: getError()
slug: Web/API/WebGLRenderingContext/getError
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getError
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.getError()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns error information.

## Syntax

```js-nolint
getError()
```

### Parameters

None.

### Return value

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.NO_ERROR</code></td>
      <td>No error has been recorded. The value of this constant is 0.</td>
    </tr>
    <tr>
      <td><code>gl.INVALID_ENUM</code></td>
      <td>
        An unacceptable value has been specified for an enumerated argument. The
        command is ignored and the error flag is set.
      </td>
    </tr>
    <tr>
      <td><code>gl.INVALID_VALUE</code></td>
      <td>
        A numeric argument is out of range. The command is ignored and the error
        flag is set.
      </td>
    </tr>
    <tr>
      <td><code>gl.INVALID_OPERATION</code></td>
      <td>
        The specified command is not allowed for the current state. The command
        is ignored and the error flag is set.
      </td>
    </tr>
    <tr>
      <td><code>gl.INVALID_FRAMEBUFFER_OPERATION</code></td>
      <td>
        The currently bound framebuffer is not framebuffer complete when trying
        to render to or to read from it.
      </td>
    </tr>
    <tr>
      <td><code>gl.OUT_OF_MEMORY</code></td>
      <td>Not enough memory is left to execute the command.</td>
    </tr>
    <tr>
      <td><code>gl.CONTEXT_LOST_WEBGL</code></td>
      <td>
        If the WebGL context is lost, this error is returned on the first call
        to <code>getError</code>. Afterwards and until the context has been
        restored, it returns <code>gl.NO_ERROR</code>.
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
gl.getError(); // gl.NO_ERROR (0)

gl.enable(gl.FOOBAR);
gl.getError(); // gl.INVALID_ENUM;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext")}}
- {{domxref("WebGLContextEvent")}}
