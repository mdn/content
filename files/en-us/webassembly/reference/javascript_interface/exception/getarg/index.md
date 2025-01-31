---
title: WebAssembly.Exception.prototype.getArg()
slug: WebAssembly/Reference/JavaScript_interface/Exception/getArg
page-type: webassembly-instance-method
browser-compat: webassembly.api.Exception.getArg
sidebar: webassemblysidebar
---

The **`getArg()`** prototype method of the [`Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) object can be used to get the value of a specified item in the exception's data arguments.

The method passes a [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) and will only succeed if the thrown `Exception` was created using the same tag, otherwise it will throw a `TypeError`.
This ensures that the exception can only be read if the calling code has access to the tag.
Tags that are neither imported into or exported from the WebAssembly code are internal, and their associated [`WebAssembly.Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) cannot be queried using this method!

> [!NOTE]
> It is not enough that the tag has an identical sequence of data types — it must have the same _identity_ (be the same tag) as was used to create the exception.

## Syntax

```js-nolint
getArg(exceptionTag, index)
```

### Parameters

- `exceptionTag`
  - : A [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) that must match the tag associated with this exception.
- `index`
  - : The index of the value in the data arguments to return, 0-indexed.

### Return value

The value of the argument at `index`.

### Exceptions

- {{jsxref("TypeError")}}
  - : The tags don't match; the exception was not created with the tag passed to the method.
- {{jsxref("RangeError")}}
  - : The value of the `index` parameter is greater than or equal to the number of fields in the data.

## Examples

In order to get the values of an exception, the tag must be "known" to the calling code;
it may be either imported into or exported from the calling code.

### Getting exception value from imported tag

Consider the following WebAssembly code, which is assumed to be compiled to a file "example.wasm".
This imports a tag, which it refers to internally as `$tagname`, and exports a method `run` that can be called by external code to throw an exception using the tag.

```wasm
(module
  ;; import tag that will be referred to here as $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; $throwException function throws i32 param as a $tagname exception
  (func $throwException (param i32)
    local.get 0
    throw $tagname
  )

  ;; Exported function "run" that calls $throwException
  (func (export "run")
    i32.const 1
    call $throwException
  )
)
```

The code below calls [`WebAssembly.instantiateStreaming`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) to import the "example.wasm" file, passing in an "import object" (`importObject`) that includes a new [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) named `tagToImport`.
The import object defines an object with properties that match the `import` statement in the WebAssembly code.

Once the file is instantiated, the code calls the exported WebAssembly `run()` method, which will immediately throw an exception.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32"] });

// Note: the import object properties match the import statement in WebAssembly code!
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
    console.log(`getArg 0 : ${e.getArg(tagToImport, 0)}`);
  });

/* Log output
example.js:40 WebAssembly.Exception: wasm exception
example.js:41 getArg 0 : 1
*/
```

The code catches the exception and uses `getArg()` to print the value at the first index.
In this case, it is just "1".

### Getting exception value from an exported tag

The process for using an exported tag is very similar to that shown in the previous section.
Here is the same WebAssembly module, simply replacing the import with an export.

```wasm
(module
  ;; Export tag giving it external name: "exptag"
  (tag $tagname (export "exptag") (param i32))

  (func $throwException (param i32)
    local.get 0
    throw $tagname
  )

  (func (export "run")
    i32.const 1
    call $throwException
  )
)
```

The JavaScript is similar too. In this case, we have no imports, but instead we get the exported tag and use that to get the argument.
To make it a little more "safe", here we also test that we have the right tag using the [`is()` method](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/is).

```js
let tagExportedFromWasm;

WebAssembly.instantiateStreaming(fetch("example.wasm"))
  .then((obj) => {
    // Import the tag using its name from the WebAssembly module
    tagExportedFromWasm = obj.instance.exports.exptag;
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.error(e);
    // If the tag is correct, get the value
    if (e.is(tagExportedFromWasm)) {
      console.log(`getArg 0 : ${e.getArg(tagExportedFromWasm, 0)}`);
    }
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
