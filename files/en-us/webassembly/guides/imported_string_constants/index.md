---
title: WebAssembly Imported global string constants
slug: WebAssembly/Guides/Imported_string_constants
page-type: guide
sidebar: webassemblysidebar
---

WebAssembly imported global string constants make working with JavaScript strings inside Wasm modules easier by removing the need for a lot of the boilerplate associated with traditional string imports.

This article explains how imported global string constants work.

## The problem with traditional string imports

Let's start by exploring how string imports have traditionally worked in WebAssembly. In a Wasm module, you could import a couple of strings from a namespace called `"string_constants"` with the following snippet:

```wasm
(global (import "string_constants" "string_constant_1") externref)
(global (import "string_constants" "string_constant_2") externref)
```

In your JavaScript, you would then provide the strings to import in an `importObject`:

```js
importObject = {
  ...,
  string_constants: {
    string_constant_1: "hello ",
    string_constant_2: "world!",
    ...
  },
};
```

Before compiling/instantiating the module to make use of its functions:

```js
WebAssembly.instantiateStreaming(fetch("my-module.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

This is sub-optimal for several reasons:

1. The download size is increased for each new string imported, and this increase is more than just the strings themselves — for every string you need the definition of the imported global in the Wasm module, and the definition of the value on the JavaScript side. For a Wasm module with thousands of imported strings, this can really add up.
2. All these bytes also take time to parse before the Wasm module can be instantiated.
3. For Wasm module optimization, it is an added inconvenience to have to modify an accompanying JavaScript file along with the Wasm module, for example when removing unused string constants at compile time.

Import names can be any unicode string you like, so developers often set the entire string as the import name for convenience (for example, when debugging). This would result in our above Wasm snippet being rewritten like so:

```wasm
(global (import "string_constants" "hello ") externref)
(global (import "string_constants" "world!") externref)
```

And the accompanying `importObject` like this:

```js
importObject = {
  ...,
  string_constants: {
    "hello ": "hello ",
    "world!": "world!",
    ...
  },
};
```

Looking at the above code, it makes sense to let the browser automate away some of this boilerplate, and that's exactly what the imported global string constants feature does.

## Using imported global string constants

Now we'll look at how imported global string constants are used.

### JavaScript API

Imported global string constants are enabled by including the `compileOptions.importedStringConstants` property when calling methods to compile and/or instantiate a module. Its value is an import namespace for imported global string constants that the Wasm engine will populate automatically:

```js
WebAssembly.compile(bytes, {
  importedStringConstants: "string_constants",
});
```

That's it! No lists of strings required in the import object.

The `compileOptions` object is available to the following functions:

- [`WebAssembly.compile()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
- The [`WebAssembly.Module()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module/Module) constructor

### WebAssembly module features

Over in your WebAssembly module, you can now import string literals, specifying the same namespace you specified in `importedStringConstants` over in the JavaScript:

```wasm
(global $h (import "string_constants" "hello ") externref)
(global $w (import "string_constants" "world!") externref)
```

The Wasm engine then looks at all the imported globals in the `string_constants` namespace, and creates a string equal to each specified import name.

### A note on namespace choices

The above example uses `"string_constants"` as the imported global string namespace for illustrative purposes. In production, however, it is best practice to use the empty string (`""`) to save on module file size. The namespace is repeated for every string literal, and real-world modules can have thousands of them, so the saving can be significant.

If you are already using the `""` namespace for some other purpose, you should consider using a single-character namespace for your strings such as `"s"`, `"'"`, or `"#"`.

The namespace choice is generally made by the authors of the toolchain that will generate the Wasm modules. Once you have a `.wasm` file and want to embed it in your JavaScript, you can't freely choose this namespace any more; you have to use what the `.wasm` file expects.

## Imported global string example

You can see an example that uses imported global strings [running live](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — open your browser's JavaScript console to see the example output. This example defines a function inside a Wasm module that concatenates two imported strings together and prints the result to the console, exports it, then calls the exported function from JavaScript.

The JavaScript for the example is shown below. You can see how we've used `importedStringConstants` to enable imported global strings:

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

The text representation of our WebAssembly module code looks like this — notice how it imports two strings in the specified namespace, which are later used in the `$concat` function:

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

> [!NOTE]
> This example also uses a JavaScript String builtin. See [WebAssembly JavaScript builtins](/en-US/docs/WebAssembly/Guides/JavaScript_builtins) for more information on these, and a complete walkthrough of the above example.
