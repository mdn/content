---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
tags:
  - Class
  - JavaScript
  - Shared Memory
  - SharedArrayBuffer
  - TypedArrays
browser-compat: javascript.builtins.SharedArrayBuffer
---
{{JSRef}}

The **`SharedArrayBuffer`** object is used to represent a generic, fixed-length raw binary data buffer, similar to the {{jsxref("ArrayBuffer")}} object, but in a way that they can be used to create views on shared memory. A `SharedArrayBuffer` is not a {{Glossary("Transferable Objects", "Transferable Object")}}, unlike an `ArrayBuffer` which is transferable.

## Description

### Allocating and sharing memory

To share memory using {{jsxref("SharedArrayBuffer")}} objects from one agent in the cluster to another (an agent is either the web page's main program or one of its web workers), [`postMessage`](/en-US/docs/Web/API/Worker/postMessage) and [structured cloning](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) is used.

The structured clone algorithm accepts `SharedArrayBuffer` objects and typed arrays mapped onto `SharedArrayBuffer` objects. In both cases, the `SharedArrayBuffer` object is transmitted to the receiver resulting in a new, private `SharedArrayBuffer` object in the receiving agent (just as for {{jsxref("ArrayBuffer")}}). However, the shared data block referenced by the two `SharedArrayBuffer` objects is the same data block, and a side effect to the block in one agent will eventually become visible in the other agent.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

### Updating and synchronizing shared memory with atomic operations

Shared memory can be created and updated simultaneously in workers or the main thread. Depending on the system (the CPU, the OS, the Browser) it can take a while until the change is propagated to all contexts. To synchronize, {{jsxref("Atomics", "atomic", "", 1)}} operations are needed.

### APIs which use SharedArrayBuffer objects

- [`WebGLRenderingContext.bufferData()`](/en-US/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/en-US/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/en-US/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Security requirements

Shared memory and high-resolution timers were effectively [disabled at the start of 2018](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) in light of [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>). In 2020, a new, secure approach has been standardized to re-enable shared memory. With a few security measures, [`postMessage()`](/en-US/docs/Web/API/Window/postMessage) will no longer throw for `SharedArrayBuffer` objects and shared memory across threads will be available:

As a baseline requirement, your document needs to be in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

For top-level documents, two headers will need to be set to cross-origin isolate your site:

- [`Cross-Origin-Opener-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) with `same-origin` as value (protects your origin from attackers)
- [`Cross-Origin-Embedder-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) with `require-corp` as value (protects victims from your origin)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

To check if cross origin isolation has been successful, you can test against the [`crossOriginIsolated`](/en-US/docs/Web/API/crossOriginIsolated) property available to window and worker contexts:

```js
if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
```

See also [Planned changes to shared memory](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes) which is starting to roll out to browsers (Firefox 79, for example.)

### Always use the new operator to create a SharedArrayBuffer

`SharedArrayBuffer` objects must be constructed with the {{jsxref("Operators/new", "new")}} operator. Calling `SharedArrayBuffer()` as a function without using `new` will throw a {{jsxref("TypeError")}}.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

## Constructor

- [`SharedArrayBuffer()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer)
  - : Creates a new `SharedArrayBuffer` object.

## Instance properties

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : The size, in bytes, of the array. This is established when the array is constructed and cannot be changed. **Read only.**

## Instance methods

- {{jsxref("SharedArrayBuffer.slice", "SharedArrayBuffer.prototype.slice(begin, end)")}}
  - : Returns a new `SharedArrayBuffer` whose contents are a copy of this `SharedArrayBuffer`'s bytes from `begin`, inclusive, up to `end`, exclusive. If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.

## Examples

### Creating a new SharedArrayBuffer

```js
const sab = new SharedArrayBuffer(1024);
```

### Slicing the SharedArrayBuffer

```js
sab.slice();    // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2);   // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2);  // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

### Using it in a WebGL buffer

```js
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, sab, gl.STATIC_DRAW);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
- [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – a simple library providing synchronization and work distribution abstractions.
- [Shared Memory – a brief tutorial](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md)
- [A Taste of JavaScript's New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)
