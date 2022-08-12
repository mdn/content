---
title: WebAssembly.Module.customSections()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections
tags:
  - API
  - JavaScript
  - Method
  - Module
  - Object
  - Reference
  - WebAssembly
  - customSections
browser-compat: javascript.builtins.WebAssembly.Module.customSections
---
{{JSRef}}

The **`WebAssembly.customSections()`** function returns a copy
of the contents of all custom sections in the given module with the given string name.

## Syntax

```js
WebAssembly.Module.customSections(module, sectionName)
```

### Parameters

- `module`
  - : The {{jsxref("WebAssembly.Module")}} object whose custom sections are being
    considered.
- `sectionName`
  - : The string name of the desired custom section.

### Return value

A (possibly empty) array containing {{jsxref("ArrayBuffer")}} copies of the contents of all custom sections matching `sectionName`.

### Exceptions

If `module` is not a {{jsxref("WebAssembly.Module")}} object instance, a
{{jsxref("TypeError")}} is thrown.

## Description

A wasm module consists of a sequence of **sections**. Most of these
sections are fully specified and validated by the wasm spec, but modules can also
contain **custom sections** that are ignored and skipped over during
validation. (Read [High level structure](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#high-level-structure)
for information on section structures, and how normal sections
("known sections") and custom sections are distinguished.)

This provides developers with a way to include custom data inside wasm modules for other purposes,
for example the [name custom section](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#name-section),
which allows developers to provide names for all the functions and
locals in the module (like "symbols" in a native build).

Note that the WebAssembly text format currently doesn't have a syntax specified for
adding new custom sections; you can however add a name section to your wasm during
conversion from text format over to .wasm. The `wast2wasm` command available as part of
the [wabt tool](https://github.com/webassembly/wabt) has a
`--debug-names` option — specify this during conversion to get a .wasm with a
names custom section, for example:

```bash
wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names
```

## Examples

### Using customSections

The following example uses `WebAssembly.Module.customSections` to check
if a loaded module instance contains a "name" custom section. A module contains a "name" custom section if `WebAssembly.Module.customSections`
returns an `ArrayBuffer` with a length greater than 0.

See custom-section.html [source code](https://github.com/mdn/webassembly-examples/blob/master/other-examples/custom-section.html)
and [live example](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html).

```js
WebAssembly.compileStreaming(fetch('simple-name-section.wasm'))
.then(function(mod) {
  const nameSections = WebAssembly.Module.customSections(mod, "name");
  if (nameSections.length !== 0) {
    console.log("Module contains a name section");
    console.log(nameSections[0]);
  };
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
