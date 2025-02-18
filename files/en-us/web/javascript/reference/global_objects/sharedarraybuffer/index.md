---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
page-type: javascript-class
browser-compat: javascript.builtins.SharedArrayBuffer
---

{{JSRef}}

The **`SharedArrayBuffer`** object is used to represent a generic raw binary data buffer, similar to the {{jsxref("ArrayBuffer")}} object, but in a way that they can be used to create views on shared memory. A `SharedArrayBuffer` is not a [Transferable Object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects), unlike an `ArrayBuffer` which is transferable.

## Description

To share memory using `SharedArrayBuffer` objects from one agent in the cluster to another (an agent is either the web page's main program or one of its web workers), [`postMessage`](/en-US/docs/Web/API/Worker/postMessage) and [structured cloning](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) is used.

The structured clone algorithm accepts `SharedArrayBuffer` objects and typed arrays mapped onto `SharedArrayBuffer` objects. In both cases, the `SharedArrayBuffer` object is transmitted to the receiver resulting in a new, private `SharedArrayBuffer` object in the receiving agent (just as for {{jsxref("ArrayBuffer")}}). However, the shared data block referenced by the two `SharedArrayBuffer` objects is the same data block, and a side effect to the block in one agent will eventually become visible in the other agent.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

Shared memory can be created and updated simultaneously in workers or the main thread. Depending on the system (the CPU, the OS, the Browser) it can take a while until the change is propagated to all contexts. To synchronize, {{jsxref("Atomics", "atomic", "", 1)}} operations are needed.

`SharedArrayBuffer` objects are used by some web APIs, such as:

- [`WebGLRenderingContext.bufferData()`](/en-US/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/en-US/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/en-US/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Security requirements

Shared memory and high-resolution timers were effectively [disabled at the start of 2018](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) in light of [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>).
In 2020, a new, secure approach has been standardized to re-enable shared memory.

To use shared memory your document must be in a [secure context](/en-US/docs/Web/Security/Secure_Contexts) and {{domxref("Window.crossOriginIsolated","cross-origin isolated","","nocode")}}.
You can use the {{domxref("Window.crossOriginIsolated")}} and {{domxref("WorkerGlobalScope.crossOriginIsolated")}} properties to check if the document is cross-origin isolated:

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

When cross-origin isolated, `postMessage()` no longer throws for `SharedArrayBuffer` objects, and shared memory across threads is therefore available.

### API availability

Depending on whether the above security measures are taken, the various memory-sharing APIs have different availabilities:

- The `Atomics` object is always available.
- `SharedArrayBuffer` objects are in principle always available, but unfortunately the constructor on the global object is hidden, unless the two headers mentioned above are set, for compatibility with web content. There is hope that this restriction can be removed in the future. [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) can still be used to get an instance.
- Unless the two headers mentioned above are set, the various `postMessage()` APIs will throw for `SharedArrayBuffer` objects. If they are set, `postMessage()` on `Window` objects and dedicated workers will function and allow for memory sharing.

### WebAssembly shared memory

[`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) objects can be created with the [`shared`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory#shared) constructor flag. When this flag is set to `true`, the constructed `Memory` object can be shared between workers via `postMessage()`, just like `SharedArrayBuffer`, and the backing [`buffer`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) of the `Memory` object is a `SharedArrayBuffer`. Therefore, the requirements listed above for sharing a `SharedArrayBuffer` between workers also apply to sharing a `WebAssembly.Memory`.

The WebAssembly Threads proposal also defines a new set of [atomic](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses) instructions. Just as `SharedArrayBuffer` and its methods are unconditionally enabled (and only sharing between threads is gated on the new headers), the WebAssembly atomic instructions are also unconditionally allowed.

### Growing SharedArrayBuffers

`SharedArrayBuffer` objects can be made growable by including the `maxByteLength` option when calling the {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} constructor. You can query whether a `SharedArrayBuffer` is growable and what its maximum size is by accessing its {{jsxref("SharedArrayBuffer/growable", "growable")}} and {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} properties, respectively. You can assign a new size to a growable `SharedArrayBuffer` with a {{jsxref("SharedArrayBuffer/grow", "grow()")}} call. New bytes are initialized to 0.

These features make growing `SharedArrayBuffer`s more efficient — otherwise, you have to make a copy of the buffer with a new size. It also gives JavaScript parity with WebAssembly in this regard (Wasm linear memory can be resized with [`WebAssembly.Memory.prototype.grow()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)).

For security reasons, `SharedArrayBuffer`s cannot be reduced in size, only grown.

## Constructor

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : Creates a new `SharedArrayBuffer` object.

## Static properties

- [`SharedArrayBuffer[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : Returns the constructor used to construct return values from `SharedArrayBuffer` methods.

## Instance properties

These properties are defined on `SharedArrayBuffer.prototype` and shared by all `SharedArrayBuffer` instances.

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : The size, in bytes, of the array. This is established when the array is constructed and can only be changed using the {{jsxref("SharedArrayBuffer.prototype.grow()")}} method if the `SharedArrayBuffer` is growable.
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : The constructor function that created the instance object. For `SharedArrayBuffer` instances, the initial value is the {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}} constructor.
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : Read-only. Returns `true` if the `SharedArrayBuffer` can be grown, or `false` if not.
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : The read-only maximum length, in bytes, that the `SharedArrayBuffer` can be grown to. This is established when the array is constructed and cannot be changed.
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"SharedArrayBuffer"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : Grows the `SharedArrayBuffer` to the specified size, in bytes.
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : Returns a new `SharedArrayBuffer` whose contents are a copy of this `SharedArrayBuffer`'s bytes from `begin`, inclusive, up to `end`, exclusive. If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.

## Examples

### Creating a new SharedArrayBuffer

```js
const sab = new SharedArrayBuffer(1024);
```

### Slicing the SharedArrayBuffer

```js
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

### Using it in a WebGL buffer

```js
const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl");
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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
- [Shared Memory – a brief tutorial](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) in the TC39 ecmascript-sharedmem proposal
- [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) on hacks.mozilla.org (2016)
- [COOP and COEP explained](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) by the Chrome team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- {{domxref("Window.crossOriginIsolated")}} and {{domxref("WorkerGlobalScope.crossOriginIsolated")}}
- [SharedArrayBuffer updates in Android Chrome 88 and Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) on developer.chrome.com (2021)
