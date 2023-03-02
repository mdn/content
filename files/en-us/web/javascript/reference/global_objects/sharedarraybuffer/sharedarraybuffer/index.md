---
title: SharedArrayBuffer() constructor
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
page-type: javascript-constructor
browser-compat: javascript.builtins.SharedArrayBuffer.SharedArrayBuffer
---

{{JSRef}}

> **Note:** `SharedArrayBuffer` was disabled by default in all major
> browsers on 5 January, 2018 in response to [Spectre](https://meltdownattack.com/).
> Chrome [re-enabled it in v67](https://crbug.com/821270)
> on platforms where its site-isolation feature is enabled to protect against
> Spectre-style vulnerabilities.

The **`SharedArrayBuffer()` constructor** is used to create a
{{jsxref("SharedArrayBuffer")}} object representing a generic raw binary
data buffer, similar to the {{jsxref("ArrayBuffer")}} object.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-constructor.html","shorter")}}

## Syntax

```js-nolint
new SharedArrayBuffer()
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

> **Note:** `SharedArrayBuffer()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `length` {{optional_inline}}
  - : The size, in bytes, of the array buffer to create.
- `options` {{optional_inline}} {{experimental_inline}}
  - : An object, which can contain the following properties:
    - `maxByteLength` {{optional_inline}} {{experimental_inline}}
      - : The maximum size, in bytes, that the shared array buffer can be resized to.

### Return value

A new `SharedArrayBuffer` object of the specified size, with its {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} property set to the specified `maxByteLength` if one was specified. Its contents are
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

### Growing a growable SharedArrayBuffer

In this example, we create an 8-byte buffer that is growable to a max length of 16 bytes, then {{jsxref("SharedArrayBuffer/grow", "grow()")}} it to 12 bytes:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> **Note:** It is recommended that `maxByteLength` is set to the smallest value possible for your use case. It should never exceed `1073741824` (1GB), to reduce the risk of out-of-memory errors.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
