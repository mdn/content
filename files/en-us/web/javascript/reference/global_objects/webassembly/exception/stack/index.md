---
title: WebAssembly.Exception.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack
tags:
  - API
  - JavaScript
  - Property
  - Reference
  - WebAssembly
  - stack
  - Exception
  - Non-standard
browser-compat: javascript.builtins.WebAssembly.Exception.stack
---
{{JSRef}} {{non-standard_header}}

The read-only **`stack`** property of an object instance of type [`WebAssembly.Exception`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception) _may_ contain a stack trace.

Exceptions from WebAssembly code do not include a stack trace by default.

If WebAssembly code needs to provide a stack trace, it must call a JavaScript function to create the exception, passing `options.traceStack=true` parameter in the [constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/Exception).
The virtual machine can then attach a stack trace to the exception object returned by the constructor.

> **Note:** Stack traces are not normally sent from WebAssembly code to improve performance.
> The ability to add stack traces to these exceptions is provided for developer tooling, and is not generally recommended for broader use.

## Value

A string containing the stack trace, or {{jsxref("undefined")}} if no trace has been assigned.

The stack trace string lists the locations of each operation on the stack in WebAssembly format.
This is a human readable string indicating the URL, name of the function type called, the function index, and its offset in the module binary.
It has approximately this format (see [stack trace conventions](https://webassembly.github.io/spec/web-api/index.html#conventions) in the specification for more information):

```
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## Examples

This example demonstrate how to throw an exception from WebAssembly that includes a stack trace.

Consider the following WebAssembly code, which is assumed to be compiled to a file named **example.wasm**.
This imports a tag, which it refers to as `$tagname` internally, and imports a function that it refers to as `$throwExnWithStack`.
It exports the method `run` that can be called by external code to call `$throwExnWithStack` (and hence the JavaScript function).

```wasm
(module
  ;; import tag that will be referred to here as $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; import function that will be referred to here as $throwExnWithStack
  (import "extmod" "throwExnWithStack" (func $throwExnWithStack (param i32)))

  ;; call $throwExnWithStack passing 42 as parameter
  (func (export "run")
    i32.const 42
    call $throwExnWithStack
  )
)
```

The JavaScript code below defines a new tag `tag` and the function `throwExceptionWithStack`.
These are passed to the WebAssembly module in the `importObject` when it is instantiated.

Once the file is instantiated, the code calls the exported WebAssembly `run()` method, which will immediately throw an exception.
The stack is then logged from the `catch` statement.

```js
const tag = new WebAssembly.Tag({ parameters: ['i32'] });

function throwExceptionWithStack(param) {
  // Note: We declare the exception with "{traceStack: true}"
  throw new WebAssembly.Exception(tag, [param], {traceStack: true});
}

// Note: importObject properties match the WebAssembly import statements.
const importObject = {
  "extmod": {
    "exttag": tag,
    "throwExnWithStack": throwExceptionWithStack,
  },
};

WebAssembly.instantiateStreaming(fetch('example.wasm'), importObject)
  .then((obj) => {
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.log(`stack: ${e.stack}`);
  });

//Log output (something like):
// stack: throwExceptionWithStack@http://<url>/main.js:76:9
// @http://<url>/example.wasm:wasm-function[3]:0x73
// @http://<url>/main.js:82:38
```

The most "relevant" part of this code is the line where the exception is created:

```js
new WebAssembly.Exception(tag, [param], {traceStack: true});
```

Passing in `{traceStack: true}` tells the WebAssembly virtual machine that it should attach a stack trace to the returned `WebAssembly.Exception`.
Without this, the stack would be `undefined`.

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
