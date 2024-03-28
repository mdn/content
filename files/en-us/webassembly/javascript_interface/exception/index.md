---
title: WebAssembly.Exception
slug: WebAssembly/JavaScript_interface/Exception
page-type: webassembly-interface
browser-compat: webassembly.api.Exception
---

{{WebAssemblySidebar}} {{AvailableInWorkers}}

The **`WebAssembly.Exception`** object represents a runtime exception thrown from WebAssembly to JavaScript, or thrown from JavaScript to a WebAssembly exception handler.

The [constructor](/en-US/docs/WebAssembly/JavaScript_interface/Exception/Exception) accepts a [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag), an array of values, and an `options` object as arguments.
The tag uniquely defines the _type_ of an exception, including the order of its arguments and their data types.
The same tag that was used to create the `Exception` is required to access the arguments of a thrown exception.
Methods are provided to test whether an exception matches a particular tag, and also to get a particular value by index (if the exception matches specified tag).

JavaScript and other client code can only access WebAssembly exception values, and visa versa, when the associated tag is shared (you can't just use another tag that happens to define the same data types).
Without the matching tag, exceptions can be caught and re-thrown, but they can't be inspected.

In order to make exception-throwing faster, exceptions thrown from WebAssembly generally do not include a stack trace.
WebAssembly code that needs to provide a stack trace must call a JavaScript function to create the exception, passing `options.traceStack=true` parameter in the constructor.
The constructor may then return an exception with a stack trace attached to the [`stack`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/stack) property.

## Constructor

- [`WebAssembly.Exception()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/Exception)
  - : Creates a new `WebAssembly.Exception` object.

## Instance methods

- [`Exception.prototype.is()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/is)

  - : Tests whether the exception matches a particular tag.

- [`Exception.prototype.getArg()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/getArg)
  - : Returns the data fields of an exception that matches a specified tag.

## Instance properties

- [`Exception.prototype.stack`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : Returns the stack trace for the exception, or `undefined`.

## Examples

This example shows how to define a tag and import it into a module, then use it to throw an exception that is caught in JavaScript.

Consider the following WebAssembly code, which is assumed to be compiled to a file **example.wasm**.

- The module imports a tag that is referred to as `$tagname` internally and that has a single `i32` parameter.
  The tag expects the tag to be passed using module `extmod` and tag `exttag`.
- The `$throwException` function throws an exception using the `throw` instruction, taking the `$tagname` and the parameter argument.
- The module exports the function `run()` that throws an exception with the value "42".

```wasm
(module
  ;; import tag that will be referred to here as $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; $throwException function throws i32 param as a $tagname exception
  (func $throwException (param $errorValueArg i32)
    local.get $errorValueArg
    throw $tagname
  )

  ;; Exported function "run" that calls $throwException
  (func (export "run")
    i32.const 42
    call $throwException
  )
)
```

The code below calls [`WebAssembly.instantiateStreaming`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) to import the **example.wasm** file, passing in an "import object" (`importObject`) that includes a new [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag) named `tagToImport`.
The import object defines an object with properties that match the `import` statement in the WebAssembly code.

Once the file is instantiated, the code calls the exported WebAssembly `run()` method, which will immediately throw an exception.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32"] });

// Note: import object properties match the WebAssembly import statement!
const importObject = {
  extmod: {
    exttag: tagToImport,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject)
  .then((obj) => {
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.error(e);
    // Check we have the right tag for the exception
    // If so, use getArg() to inspect it
    if (e.is(tagToImport)) {
      console.log(`getArg 0 : ${e.getArg(tagToImport, 0)}`);
    }
  });

/* Log output
example.js:40 WebAssembly.Exception: wasm exception
example.js:41 getArg 0 : 42
*/
```

The exception is caught in JavaScript using the `catch` block.
We can see it is of type `WebAssembly.Exception`, but if we didn't have the right tag we couldn't do much else.

However, because we have a tag, we use [`Exception.prototype.is()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/is) to check that it's the right one, and because it is correct, we call [`Exception.prototype.getArg()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception/getArg) to read the value of "42".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
