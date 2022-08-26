---
title: WebAssembly.Instance() constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance
tags:
  - Constructor
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Instance.Instance
---
{{JSRef}}

The **`WebAssembly.Instance()`** constructor creates a new
`Instance` object which is a stateful, executable instance of a
{{jsxref("WebAssembly.Module")}}.

## Syntax

> **Warning:** Since instantiation for large modules can be expensive,
> developers should only use the `Instance()` constructor when synchronous
> instantiation is absolutely required; the asynchronous
> {{jsxref("WebAssembly.instantiateStreaming()")}} method should be used at all other
> times.

```js
new WebAssembly.Instance(module, importObject)
```

### Parameters

- `module`
  - : The {{jsxref("WebAssembly.Module")}} object to be instantiated.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or {{jsxref("WebAssembly.Memory")}} objects.
    There must be one matching property for each declared import of `module` or
    else a {{jsxref("WebAssembly.LinkError")}} is thrown.

#### Exceptions

- If either of the parameters are not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If the operation fails, one of
  {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}}, or
  {{jsxref("WebAssembly.RuntimeError")}} are thrown, depending on the cause of the failure.
- Some browsers may throw a {{jsxref("RangeError")}}, as they prohibit compilation and instantiation of Wasm with large buffers on the UI thread.

## Examples

### Synchronously instantiating a WebAssembly module

The `WebAssembly.Instance()` constructor function can be called to
synchronously instantiate a given {{jsxref("WebAssembly.Module")}} object, for example:

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    }
  }
};

fetch('simple.wasm').then((response) =>
  response.arrayBuffer()
).then((bytes) => {
  const mod = new WebAssembly.Module(bytes);
  const instance = new WebAssembly.Instance(mod, importObject);
  instance.exports.exported_func();
})
```

However, the preferred way to get an `Instance` is through the asynchronous
{{jsxref("WebAssembly.instantiateStreaming()")}} function, for example like this:

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    }
  }
};

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then((obj) => obj.instance.exports.exported_func());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
