---
title: SharedArrayBuffer() constructor
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
tags:
  - Constructor
  - JavaScript
  - Reference
  - SharedArrayBuffer
browser-compat: javascript.builtins.SharedArrayBuffer.SharedArrayBuffer
---
{{JSRef}}

> **Note:** `SharedArrayBuffer` was disabled by default in all major
> browsers on 5 January, 2018 in response to [Spectre](https://meltdownattack.com/).
> Chrome [re-enabled it in v67](https://bugs.chromium.org/p/chromium/issues/detail?id=821270)
> on platforms where its site-isolation feature is enabled to protect against
> Spectre-style vulnerabilities.

The **`SharedArrayBuffer()` constructor** is used to create a
{{jsxref("SharedArrayBuffer")}} object representing a generic, fixed-length raw binary
data buffer, similar to the {{jsxref("ArrayBuffer")}} object.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-constructor.html","shorter")}}

## Syntax

```js
new SharedArrayBuffer()
new SharedArrayBuffer(length)
```

> **Note:** `SharedArrayBuffer()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `length` {{optional_inline}}
  - : The size, in bytes, of the array buffer to create.

### Return value

A new `SharedArrayBuffer` object of the specified size. Its contents are
initialized to 0.

## Examples

### Always use the new operator to create a SharedArrayBuffer

`SharedArrayBuffer` constructors are required to be constructed with a
{{jsxref("Operators/new", "new")}} operator. Calling a `SharedArrayBuffer`
constructor as a function without `new` will throw a {{jsxref("TypeError")}}.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
