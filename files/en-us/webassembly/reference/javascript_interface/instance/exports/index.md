---
title: WebAssembly.Instance.prototype.exports
slug: WebAssembly/Reference/JavaScript_interface/Instance/exports
page-type: webassembly-instance-property
browser-compat: webassembly.api.Instance.exports
sidebar: webassemblysidebar
---

The **`exports`** read-only property of the
[`WebAssembly.Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance) object prototype returns an object containing as its
members all the functions exported from the WebAssembly module instance, to allow them
to be accessed and used by JavaScript.

## Examples

### Using exports

After fetching some WebAssembly bytecode using fetch, we compile and instantiate the
module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) function, importing a
JavaScript function into the WebAssembly Module in the process. We then call an [Exported WebAssembly function](/en-US/docs/WebAssembly/Guides/Exported_functions)
that is exported by the `Instance`.

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

> [!NOTE]
> You can also find this example as [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)
> on GitHub ([view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
