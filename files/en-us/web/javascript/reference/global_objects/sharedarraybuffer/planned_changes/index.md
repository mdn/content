---
title: Planned changes to shared memory
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes
tags:
  - Fetch
  - Guide
  - HTML
  - JavaScript
  - Security
  - SharedArrayBuffer
  - Spectre
  - postMessage
---
{{JSRef}}

There is standardization work ongoing that enables developers to create [`SharedArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) objects again, but changes are needed in order to be use these across threads (i.e., `postMessage()` for `SharedArrayBuffer` objects throws by default). These changes provide further isolation between sites and help reduce the impact of attacks with high-resolution timers, which can be created with shared memory.

> **Note:** Starting with Firefox 79, the features described in this document are enabled by default.
>
> Chrome started enforcing these restrictions starting with Chrome 92 on desktop and Chrome 88 on Android.

## New HTTP header bonanza

As a baseline requirement, documents will need to be in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

For top-level documents, two headers will need to be set:

- [`Cross-Origin-Opener-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) with `same-origin` as value (protects your origin from attackers)
- [`Cross-Origin-Embedder-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) with `require-corp` as value (protects victims from your origin)

With these two headers set, `postMessage()` will no longer throw for `SharedArrayBuffer` objects and shared memory across threads is therefore available.

Nested documents and dedicated workers will need to set the [`Cross-Origin-Embedder-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) header as well with the same value. No further changes are needed for same-origin nested documents and subresources. Same-site (but cross-origin) nested documents and subresources will need to set the [`Cross-Origin-Resource-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) header with `same-site` as value. And their cross-origin (and cross-site) counterparts need to set the same header with `cross-origin` as value. Note that setting the [`Cross-Origin-Resource-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) header to any other value than `same-origin` opens up the resource to potential attacks, such as [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>).

Note that the [`Cross-Origin-Opener-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) header limits your ability to retain a reference to popups. Direct access between two top-level window contexts will essentially only work if they are same-origin and carry the same two headers with the same two values.

## API changes

As a result of this newly required environment, there are a couple API implications:

- The `Atomics` object is always available.
- `SharedArrayBuffer` objects are in principle always available, but unfortunately the constructor on the global object is hidden, unless the two headers mentioned above are set, for compatibility with web content. There is hope that this restriction can be removed in the future. [`WebAssembly.Memory`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) can still be used to get an instance.
- Unless the two headers mentioned above are set, the various `postMessage()` APIs will throw for `SharedArrayBuffer` objects. If they are set, `postMessage()` on `Window` objects and dedicated workers will function and allow for memory sharing.
- To avoid having to check whether `postMessage()` throws, [`self.crossOriginIsolated`](/en-US/docs/Web/API/crossOriginIsolated) is being standardized (a getter that returns a boolean; `true` if the headers are set), available in window and worker contexts.

## WebAssembly Shared Memory

The WebAssembly [Threads](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md) proposal allows [`WebAssembly.Memory`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) objects to be created with a new [`shared`](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#javascript-api-changes) constructor flag. When this flag is set to `true`, the constructed `Memory` object can be shared between workers via `postMessage()`, just like `SharedArrayBuffer`, and the backing [`buffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) of the `Memory` object is a `SharedArrayBuffer`. Therefore, the requirements listed above for sharing a `SharedArrayBuffer` between workers also apply to sharing a `WebAssembly.Memory`.

The WebAssembly Threads proposal also defines a new set of [atomic](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses) instructions. Just as `SharedArrayBuffer` and its methods are unconditionally enabled (and only sharing between threads is gated on the new headers), the WebAssembly atomic instructions are also unconditionally allowed.

## Further reading

- [COOP and COEP explained](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit).
- `Cross-Origin-Opener-Policy`: [whatwg/html issue #3740](https://github.com/whatwg/html/issues/3740), [draft specification](https://gist.github.com/annevk/6f2dd8c79c77123f39797f6bdac43f3e).
- `Cross-Origin-Embedder-Policy`: [whatwg/html issue #4175](https://github.com/whatwg/html/issues/4175), [draft specification](https://mikewest.github.io/corpp/).
- `Cross-Origin-Resource-Policy`: [standardized in Fetch](https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header), new `cross-origin` value is part of the `Cross-Origin-Embedder-Policy` effort.
- `postMessage()` changes and [`self.crossOriginIsolated`](/en-US/docs/Web/API/crossOriginIsolated): [whatwg/html issue #4732](https://github.com/whatwg/html/issues/4732), [whatwg/html issue #4872](https://github.com/whatwg/html/issues/4872), [draft specification](https://github.com/whatwg/html/pull/4734).
- [SharedArrayBuffer updates in Android Chrome 88 and Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/)
