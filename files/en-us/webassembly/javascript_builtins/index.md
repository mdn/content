---
title: WebAssembly JavaScript builtins
slug: WebAssembly/JavaScript_builtins
page-type: guide
---

{{WebAssemblySidebar}}

WebAssembly JavaScript builtins are Wasm equivalents of JavaScript operations that provide a way to use JavaScript features inside Wasm modules without having to import JavaScript glue code to provide a bridge between JavaScript and WebAssembly values and calling conventions.

This provides performance improvements — importing glue code for primitives such as {{jsxref("String")}} can come with a significant overhead. WebAssembly and most languages that target it expect a tight sequence of inline operations rather than an indirect function call, which is how regular imported functions work.

This article explains how builtins work and which ones are available, then provides a usage example.

## Problems with importing JavaScript functions

There are several reasons why importing functions from JavaScript to WebAssembly modules introduces significant performance overheads:

- Existing APIs require a conversion to handle differences around the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) value, which WebAssembly function `import` calls leave as `undefined`.
- Certain primitives use JavaScript operators such as [`===`](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) and [`<`](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) that cannot be imported.
- Most JavaScript functions are extremely permissive of the types of values they accept, and it's desirable to leverage WebAssembly's type system to remove those checks and coercions wherever possible.

Considering these problems, creating built-in definitions that adapt existing JavaScript functionality to WebAssembly is simpler and better for performance than importing it.

## Available WebAssembly JavaScript builtins

The first builtin operations to be implemented are {{jsxref("String")}} operations. This is because the most pressing use case is languages that would benefit from using the JavaScript `String` type to implement their strings. You can find a list of the `String` operations with builtin equivalents defined for them at [JS String Builtin API](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#js-string-builtin-api).

Other builtins are likely to be supported in the future.

## How do you use builtins?

Builtins work in a similar way to functions imported from JavaScript, except that you are using standard Wasm function equivalents for performing JavaScript operations that are defined in a reserved namespace (`wasm:`). This being the case, browsers can predict and generate optimal code for them. This section summarizes how to use them.

### JavaScript API features

Builtins are enabled at compile-time by specifying the `builtins` property during compilation. This goes inside the `compileOptions` object, and its value is an array of the builtins you want to enable:

```js
WebAssembly.compile(bytes, { builtins: ["js-string"] });
```

The `compileOptions` object is available to the following functions:

- [`WebAssembly.compile()`](/en-US/docs/WebAssembly/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/en-US/docs/WebAssembly/JavaScript_interface/validate_static)
- The [`WebAssembly.Module()`](/en-US/docs/WebAssembly/JavaScript_interface/Module/Module) constructor

If you want to use imported global string constants with your builtins, you can also include the `importedStringConstants` property inside `compileOptions`. This selects an import namespace for imported global string constants that the engine will populate automatically:

```js
WebAssembly.compile(bytes, {
  builtins: ["js-string"],
  importedStringConstants: "#",
});
```

You don't have to use imported global string constants along with builtins; they are two separate features. However, they are often used together.

> [!NOTE]
> The above example uses `"#"` as the imported global string namespace for illustrative purposes. In production, however, it is best practice to use the empty string to save on module file size. The namespace is repeated for every string literal, and real-world modules can have tens of thousands of them, so the saving can be significant. This choice is made by the authors of the toolchain that will generate the Wasm modules. Once you have a `.wasm` file and want to embed it in your JavaScript, you can't freely choose this namespace any more; you have to use what the `.wasm` file expects.

### WebAssembly module features

Over in your WebAssembly module, you can now import string literals, specifying the same namespace you specified in `importedStringConstants` over in the JavaScript:

```wasm
(global $h (import "#" "hello ") externref)
(global $w (import "#" "world!") externref)
```

You can also import builtins as specified in the `compileOptions` object from the `wasm:` namespace (in this case, the [`concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat) function; see also the [equivalent built-in definition](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)):

```wasm
(func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
```

## Builtins example

Let's work through a basic but complete example to show how builtins are used. This example will define a function inside a Wasm module that concatenates two strings together and prints the result to the console, then export it. We will then call the exported function from JavaScript.

The example we'll be referring to uses the [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static) function on the webpage to handle the compilation and instantiation; you can find this and other examples on our `webassembly-examples` repo — see [`js-builtin-examples`](https://github.com/mdn/webassembly-examples/tree/main/js-builtin-examples).

You can build up the example by following the steps below; also [see it running live](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/).

### The JavaScript

The JavaScript for the example is shown below. To test this locally, include it in an HTML page using a method of your chooosing (for example, inside {{htmlelement("script")}} tags, or in an external `.js` file referenced via `<script src="">`).

```js
const importObject = {
  // Regular import
  m: {
    log: console.log,
  },
};

const compileOptions = {
  builtins: ["js-string"], // Enable JavaScript string builtins
  importedStringConstants: "#", // Enable imported global string constants
};

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject, compileOptions))
  .then((result) => result.instance.exports.main());
```

The JavaScript:

- Defines an `importObject` that specifies a function `"log"` at a namespace `"m"` to import into the wasm module during instantiation. It's the {{domxref("console.log()")}} function.
- Defines a `compileOptions` function that includes the `builtins` and `importedStringConstants` properties. As discussed earlier, this is needed to enable builts and imported global string constants.
- Uses {{domxref("Window.fetch", "fetch()")}} to fetch the wasm module (`log-concat.wasm`), converts the response to an {{jsxref("ArrayBuffer")}} using {{domxref("Response.arrayBuffer")}}, then compiles and instantiates the wasm module using [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static).
- Calls the `main()` function exported from the wasm module.

### The wasm module

The text representation of our WebAssembly module code looks like this:

```wasm
(module
  (global $h (import "#" "hello ") externref)
  (global $w (import "#" "world!") externref)
  (func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
  (func $log (import "m" "log") (param externref))
  (func (export "main")
    (call $log (call $concat (global.get $h) (global.get $w))))
)
```

This code:

- Imports two global string constants, `"hello "` and `"world!"`, with the `"#"` namespace as specified in the JavaScript. They are given names of `$h` and `$w`.
- Imports the [`concat`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat) builtin from the `wasm:` namespace, giving it a name of `$concat` and specifying that it has two parameters and a return value.
- Imports the imported `"log"` function from the `"m"` namespace, as specified in the JavaScript `importObject` object, giving it a name of `$log` and specifying that it has a parameter. We decided to include a regular import as well as a builtin in the example, to show you how the two approaches compare.
- Defines a function that will be exported with the name `"main"`. This function calls `$log`, passing it a `$concat` call as a parameter. The `$concat` call is passed the `$h` and `$w` global string constants as parameters.

To get your local example working:

1. Save the WebAssembly module code shown above into a text file called `log-concat.wat`, in the same directory as your HTML/JavaScript.
2. Compile it into a WebAssembly module (`log-concat.wasm`) using the `wasm-as` tool, which is part of the [Binaryen library](https://github.com/WebAssembly/binaryen) (see the [build instructions](https://github.com/WebAssembly/binaryen?tab=readme-ov-file#building)). You'll need to run `wasm-as` with reference types and GC enabled for these examples to compile successfully:

   ```sh
   wasm-as --enable-reference-types -–enable-gc log-concat.wat
   ```

   Or you can use the `-all` flag in place of `--enable-reference-types -–enable-gc`:

   ```sh
   wasm-as -all log-concat.wat
   ```

3. Load your example HTML page in a [supporting browser](/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static#browser_compatibility) using a [local HTTP server](/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

The result should be a blank webpage, with `"hello world!"` logged to the JavaScript console, generated by an exported wasm function. The logging was done using a function imported from JavaScript, while the concatenation of the two original strings was done by a builtin.
