---
title: WebAssembly.Tag
slug: WebAssembly/Reference/JavaScript_interface/Tag
page-type: webassembly-interface
browser-compat: webassembly.api.Tag
sidebar: webassemblysidebar
---

The **`WebAssembly.Tag`** object defines a _type_ of a WebAssembly exception that can be thrown to/from WebAssembly code.

When creating a [`WebAssembly.Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception), the tag defines the data types and order of the values carried by the exception.
The same unique tag instance must be used to access the values of the exception (for example, when using [`Exception.prototype.getArg()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)).

[Constructing](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) an instance of `Tag` creates a new unique tag.
This tag can be passed to a WebAssembly module as a tag import, where it will become a typed tag defined in the _tag section_ of the WebAssembly module.
You can also export a tag defined in a module and use it to inspect exceptions thrown from the module.

> [!NOTE]
> You can't access the values of an exception with a new tag that just happens to have the same parameters; it's a different tag!
> This ensures that WebAssembly modules can keep exception information internal if required.
> Code can still catch and rethrow exceptions that it does not understand.

## Constructor

- [`WebAssembly.Tag()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)
  - : Creates a new `WebAssembly.Tag` object.

## Instance methods

- [`Tag.prototype.type()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag/type)
  - : Returns the object defining the data-types array for the tag (as set in its constructor).

## Examples

This code snippet creates a new `Tag` instance.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

The snippet below shows how we might pass it to a module **example.wasm** during instantiation, using an "import object".

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

```wasm
(module
  (import "extmod" "exttag" (tag $tagname (param i32 f32))
)
```

If the tag was used to throw an exception that propagated to JavaScript, we could use the tag to inspect its values.

> [!NOTE]
> There are many alternatives. We could also use the tag to create a [`WebAssembly.Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) and throw that from a function called by WebAssembly.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
