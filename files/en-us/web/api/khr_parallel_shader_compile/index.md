---
title: KHR_parallel_shader_compile
slug: Web/API/KHR_parallel_shader_compile
page-type: webgl-extension
tags:
  - API
  - Reference
  - Shader
  - WebGL
  - WebGL extension
  - parallel shader compile
browser-compat: api.KHR_parallel_shader_compile
---
{{APIRef("WebGL")}}

The **`KHR_parallel_shader_compile`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and enables a non-blocking poll operation, so that compile/link status availability (`COMPLETION_STATUS_KHR`) can be queried without potentially incurring stalls. In other words you can check the status of your shaders compiling without blocking the runtime.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

## Constants

- `ext.COMPLETION_STATUS_KHR`
  - : A GLenum.

## Examples

Enable the extension:

```js
const ext = gl.getExtension('KHR_parallel_shader_compile');
```

In general, best practice with or without the extension is:

```js
// Assuming lists of `shaders` and `programs`:
for (const x of shaders)
    gl.compileShader(x); // Never check compile status unless subsequent linking fails.
for (const x of programs)
    gl.linkProgram(x);
```

With the extension, apps would be able to poll whether programs have linked without janking, but these are likely to take the same total wall time to link:

```js
// Generator yielding a progress ratio [0.0, 1.0].
// Without the extension, this will jank and only check one program per generation.
function* linkingProgress(programs) {
    const ext = gl.getExtension('KHR_parallel_shader_compile');
    let todo = programs.slice();
    while (todo.length) {
        if (ext) {
            todo = todo.filter((x) => !gl.getProgramParameter(x, ext.COMPLETION_STATUS_KHR));
        } else {
            const x = todo.pop();
            gl.getProgramParameter(x, gl.LINK_STATUS);
        }
        if (!todo.length)
            return;
        yield 1.0 - (todo.length / programs.length);
    }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
