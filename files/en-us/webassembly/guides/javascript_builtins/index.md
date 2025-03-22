---
title: WebAssembly JavaScript builtins
slug: WebAssembly/Guides/JavaScript_builtins
page-type: guide
sidebar: webassemblysidebar
---

WebAssembly JavaScript builtins are Wasm equivalents of JavaScript operations that provide a way to use JavaScript features inside Wasm modules without having to import JavaScript glue code to provide a bridge between JavaScript and WebAssembly values and calling conventions.

This article explains how builtins work and which ones are available, then provides a usage example.

## Problems with importing JavaScript functions

For many JavaScript features, regular imports work OK. However, importing glue code for primitives such as {{jsxref("String")}}, {{jsxref("ArrayBuffer")}}, and {{jsxref("Map")}} comes with significant performance overheads. In such cases, WebAssembly and most languages that target it expect a tight sequence of inline operations rather than an indirect function call, which is how regular imported functions work.

Specifically, importing functions from JavaScript to WebAssembly modules creates performance problems for the following reasons:

- Existing APIs require a conversion to handle differences around the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) value, which WebAssembly function `import` calls leave as `undefined`.
- Certain primitives use JavaScript operators such as [`===`](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) and [`<`](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) that cannot be imported.
- Most JavaScript functions are extremely permissive of the types of values they accept, and it's desirable to leverage WebAssembly's type system to remove those checks and coercions wherever possible.

Considering these problems, creating built-in definitions that adapt existing JavaScript functionality such as {{jsxref("String")}} primitives to WebAssembly is simpler and better for performance than importing it and relying on indirect function calls.

## Available WebAssembly JavaScript builtins

The below sections detail the available builtins. Other builtins are likely to be supported in the future.

### String operations

The available {{jsxref("String")}} builtins are:

- [`"wasm:js-string" "cast"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-cast)

  - : Throws an error if the provided value is not a string. Roughly equivalent to:

    ```js
    if (typeof obj !== "string") throw new WebAssembly.RuntimeError();
    ```

- [`"wasm:js-string" "compare"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-compare)
  - : Compares two string values and determines their order. Returns `-1` if the first string is [less than](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) the second, `1` if the first string is [greater than](/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than) the second, and `0` if the strings are [strictly equal](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality).
- [`"wasm:js-string" "concat"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)
  - : Equivalent to {{jsxref("String.prototype.concat()")}}.
- [`"wasm:js-string" "charCodeAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-charcodeat)
  - : Equivalent to {{jsxref("String.prototype.charCodeAt()")}}.
- [`"wasm:js-string" "codePointAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-codepointat)
  - : Equivalent to {{jsxref("String.prototype.codePointAt()")}}.
- [`"wasm:js-string" "equals"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-equals)
  - : Compares two string values for [strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality), returning `1` if they are equal, and `0` if not.
    > [!NOTE]
    > The `"equals"` function is the only string builtin that doesn't throw for `null` inputs, so Wasm modules don't need to check for `null` values before calling it. All the other functions have no reasonable way to handle `null` inputs, so they throw for them.
- [`"wasm:js-string" "fromCharCode"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcode)
  - : Equivalent to {{jsxref("String.fromCharCode()")}}.
- [`"wasm:js-string" "fromCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcodearray)
  - : Creates a string from a Wasm array of `i16` values.
- [`"wasm:js-string" "fromCodePoint"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcodepoint)
  - : Equivalent to {{jsxref("String.fromCodePoint()")}}.
- [`"wasm:js-string" "intoCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-intocharcodearray)
  - : Writes a string's char codes into a Wasm array of `i16` values.
- [`"wasm:js-string" "length"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-length)
  - : Equivalent to {{jsxref("String.prototype.length")}}.
- [`"wasm:js-string" "substring"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-substring)
  - : Equivalent to {{jsxref("String.prototype.substring()")}}.
- [`"wasm:js-string" "test"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-test)

  - : Returns `0` if the provided value is not a string, or `1` if it is a string. Roughly equivalent to:

    ```js
    typeof obj === "string";
    ```

## How do you use builtins?

Builtins work in a similar way to functions imported from JavaScript, except that you are using standard Wasm function equivalents for performing JavaScript operations that are defined in a reserved namespace (`wasm:`). This being the case, browsers can predict and generate optimal code for them. This section summarizes how to use them.

### JavaScript API

Builtins are enabled at compile-time by specifying the `compileOptions.builtins` property as an argument when calling methods to compile and/or instantiate a module. Its value is an array of strings that identify the sets of builtins you want to enable:

```js
WebAssembly.compile(bytes, { builtins: ["js-string"] });
```

The `compileOptions` object is available to the following functions:

- [`WebAssembly.compile()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
- The [`WebAssembly.Module()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module/Module) constructor

### WebAssembly module features

Over in your WebAssembly module, you can now import builtins as specified in the `compileOptions` object from the `wasm:` namespace (in this case, the [`concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat) function; see also the [equivalent built-in definition](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)):

```wasm
(func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
```

## Feature detecting builtins

When using builtins, type checks will be stricter than when they are not present — certain rules are imposed on the builtin imports.

Therefore, to write feature detection code for builtins you can define a module that's _invalid_ with the feature present, and _valid_ without it. You then return `true` when validation fails, to indicate support. A basic module that will achieve this is as follows:

```wasm
(module
  (function (import "wasm:js-string" "cast")))
```

Without builtins, the module is valid, because you can import any function with any signature you want (in this case: no parameters and no return values). With builtins, the module is invalid, because the now-special-cased `"wasm:js-string" "cast"` function must have a specific signature (an `externref` parameter and a non-nullable `(ref extern)` return value).

You can then try validating this module with the [`validate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/validate_static) method, but note how the result is negated with the `!` operator — remember that builtins are supported if the module is _invalid_:

```js
const compileOptions = {
  builtins: ["js-string"],
};

fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.validate(bytes, compileOptions))
  .then((result) => console.log(`Builtins available: ${!result}`));
```

The above module code is so short that you could just validate the literal bytes rather than downloading the module. A feature detection function could look like so:

```js
function JsStringBuiltinsSupported() {
  let bytes = new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 2, 23, 1, 14, 119, 97, 115,
    109, 58, 106, 115, 45, 115, 116, 114, 105, 110, 103, 4, 99, 97, 115, 116, 0,
    0,
  ]);
  return !WebAssembly.validate(bytes, { builtins: ["js-string"] });
}
```

> [!NOTE]
> In many cases there are alternatives to feature detecting builtins. Another option could be to provide regular imports alongside the builtins, and supporting browsers will just ignore the fallbacks.

## Builtins example

Let's work through a basic but complete example to show how builtins are used. This example will define a function inside a Wasm module that concatenates two strings together and prints the result to the console, then export it. We will then call the exported function from JavaScript.

The example we'll be referring to uses the [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) function on the webpage to handle the compilation and instantiation; you can find this and other examples on our `webassembly-examples` repo — see [`js-builtin-examples`](https://github.com/mdn/webassembly-examples/tree/main/js-builtin-examples).

You can build up the example by following the steps below. In addition, you can [see it running live](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — open your browser's JavaScript console to see the example output.

### JavaScript

The JavaScript for the example is shown below. To test this locally, include it in an HTML page using a method of your choosing (for example, inside {{htmlelement("script")}} tags, or in an external `.js` file referenced via `<script src="">`).

```js
const importObject = {
  // Regular import
  m: {
    log: console.log,
  },
};

const compileOptions = {
  builtins: ["js-string"], // Enable JavaScript string builtins
  importedStringConstants: "string_constants", // Enable imported global string constants
};

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject, compileOptions))
  .then((result) => result.instance.exports.main());
```

The JavaScript:

- Defines an `importObject` that specifies a function `"log"` at a namespace `"m"` to import into the Wasm module during instantiation. It's the {{domxref("console.log_static", "console.log()")}} function.
- Defines a `compileOptions` object that includes:
  - the `builtins` property to enable string builtins.
  - the `importedStringConstants` property to enable [imported global string constants](/en-US/docs/WebAssembly/Guides/Imported_string_constants).
- Uses {{domxref("Window.fetch", "fetch()")}} to fetch the Wasm module (`log-concat.wasm`), converts the response to an {{jsxref("ArrayBuffer")}} using {{domxref("Response.arrayBuffer")}}, then compiles and instantiates the Wasm module using [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- Calls the `main()` function exported from the Wasm module.

### Wasm module

The text representation of our WebAssembly module code looks like this:

```wasm
(module
  (global $h (import "string_constants" "hello ") externref)
  (global $w (import "string_constants" "world!") externref)
  (func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
  (func $log (import "m" "log") (param externref))
  (func (export "main")
    (call $log (call $concat (global.get $h) (global.get $w))))
)
```

This code:

- Imports two global string constants, `"hello "` and `"world!"`, with the `"string_constants"` namespace as specified in the JavaScript. They are given names of `$h` and `$w`.
- Imports the [`concat`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat) builtin from the `wasm:` namespace, giving it a name of `$concat` and specifying that it has two parameters and a return value.
- Imports the imported `"log"` function from the `"m"` namespace, as specified in the JavaScript `importObject` object, giving it a name of `$log` and specifying that it has a parameter. We decided to include a regular import as well as a builtin in the example, to show you how the two approaches compare.
- Defines a function that will be exported with the name `"main"`. This function calls `$log`, passing it a `$concat` call as a parameter. The `$concat` call is passed the `$h` and `$w` global string constants as parameters.

To get your local example working:

1. Save the WebAssembly module code shown above into a text file called `log-concat.wat`, in the same directory as your HTML/JavaScript.
2. Compile it into a WebAssembly module (`log-concat.wasm`) using the `wasm-as` tool, which is part of the [Binaryen library](https://github.com/WebAssembly/binaryen) (see the [build instructions](https://github.com/WebAssembly/binaryen?tab=readme-ov-file#building)). You'll need to run `wasm-as` with reference types and garbage collection (GC) enabled for these examples to compile successfully:

   ```sh
   wasm-as --enable-reference-types -–enable-gc log-concat.wat
   ```

   Or you can use the `-all` flag in place of `--enable-reference-types -–enable-gc`:

   ```sh
   wasm-as -all log-concat.wat
   ```

3. Load your example HTML page in a [supporting browser](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static#browser_compatibility) using a [local HTTP server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

The result should be a blank webpage, with `"hello world!"` logged to the JavaScript console, generated by an exported Wasm function. The logging was done using a function imported from JavaScript, while the concatenation of the two original strings was done by a builtin.
