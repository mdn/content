---
title: WebAssembly.Global.prototype.valueOf()
short-title: valueOf()
slug: WebAssembly/Reference/JavaScript_interface/Global/valueOf
page-type: webassembly-instance-method
browser-compat: webassembly.api.Global.valueOf
sidebar: webassemblysidebar
---

The **`valueOf`** method of the
[`WebAssembly.Global`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global) object prototype is an old-style method that returns the value contained inside the global variable.

## Syntax

```js-nolint
valueOf()
```

### Parameters

None.

### Return value

A string indicating the value of the global.

## Examples

### Basic usage

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: true }, 42);

// 42
console.log(myGlobal.valueOf());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global) text instruction
- [WebAssembly](/en-US/docs/WebAssembly)
