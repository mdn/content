---
title: WebAssembly.Tag
slug: WebAssembly/Reference/JavaScript_interface/Tag
page-type: webassembly-interface
browser-compat: webassembly.api.Tag
sidebar: webassemblysidebar
---

The **`WebAssembly.Tag`** object represents a WebAssembly exception _type_ that can be thrown in a Wasm module.

## Constructor

- [`WebAssembly.Tag()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)
  - : Creates a new `WebAssembly.Tag` object instance.

## Instance methods

- [`Tag.prototype.type()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag/type)
  - : Returns the object defining the data-types array for the tag (as set in its constructor).

## Description

WebAssembly modules can define exception types using the [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) module definition. Exceptions of those types can then be thrown using the [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction, and caught and handled using [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) blocks containing [catch clauses](/en-US/docs/WebAssembly/Reference/Exception_handling#catch_clauses).

If wished, you can define a Wasm exception type in the JavaScript host using the [`WebAssembly.Tag()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) constructor, before importing it into the Wasm module to use there.

One of the main advantages of defining Wasm exception types in JavaScript is that you need the exception type available when handling an exception in JavaScript. Having it defined in JavaScript saves you having to export it from the Wasm module.

So for example, you can start by constructing an error tag type like this:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

You can then import it into a Wasm module like this:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(/* ... */);
```

Inside the Wasm module, you'd import the error tag and throw an exception of that type somewhere in your code:

```wat
(tag $my_error (import "env" "my_error") (param i32))

(func $throw (param $value i32)

  ...

  (i32.const 42)     ;; error code payload
  (throw $my_error)  ;; throw exception type $my_error

  ...

)

(export "throw" (func $throw))
```

Back in the JavaScript, you could then try running the exported `throw()` function in a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statement. If the function throws, the error propagated to the `catch` block will be a [`WebAssembly.Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) object instance.

```js
WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(
  (result) => {
    try {
      // Cause function to throw
      result.instance.exports.throw(-1);
    } catch (e) {
      if (e instanceof WebAssembly.Exception && e.is(myErrorTag)) {
        const errorCode = e.getArg(myErrorTag, 0); // 0 = first payload value
        console.log("Error code:", errorCode); // 42
      } else {
        throw e; // throw other errors
      }
    }
  },
);
```

You can check whether it has the same exception type we defined earlier (`myErrorTag`) using [`Exception.prototype.is()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), and then access the exception's payload using [`Exception.prototype.getArg()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)).

> [!NOTE]
> You can't access the values of an exception with a new tag that just happens to have the same parameters; it's a different tag!
> This ensures that WebAssembly modules can keep exception information internal if required.
> Code can still catch and rethrow exceptions that it does not understand.

## Examples

For a working example of handling a Wasm exception in JavaScript, see the [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction reference page.

### Basic usage

This code snippet creates a new `Tag` instance:

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

The snippet below shows how we might import it into a Wasm module during instantiation:

```js
const importObject = {
  extmod: {
    exttag: tagToImport,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject).then(
  (obj) => {
    // …
  },
);
```

The WebAssembly module might then import the tag as shown below:

```wat
(module
  (import "extmod" "exttag" (tag $tagname (param i32 f32)))
)
```

If the tag was used to throw an exception that propagated to JavaScript, we could use the tag to inspect its values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
- [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref) type
