---
title: WebAssembly.Memory.prototype.buffer
slug: WebAssembly/JavaScript_interface/Memory/buffer
browser-compat: javascript.builtins.WebAssembly.Memory.buffer
---

{{WebAssemblySidebar}}

The read-only **`buffer`** prototype property of the [`WebAssembly.Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) object returns the buffer contained in the memory. Depending on whether or not the memory was constructed with `shared: true`, the buffer is either an {{jsxref("ArrayBuffer")}} or a {{jsxref("SharedArrayBuffer")}}.

## Examples

### Using buffer

The following example (see [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) on GitHub, and [view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) fetches and instantiates the loaded memory.wasm bytecode using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming) function, while importing the memory created in the line above. It then stores some values in that memory, exports a function, and uses the exported function to sum those values.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  const summands = new Uint32Array(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands[i] = i;
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
