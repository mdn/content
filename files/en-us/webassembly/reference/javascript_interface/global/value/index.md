---
title: WebAssembly.Global.prototype.value
short-title: value
slug: WebAssembly/Reference/JavaScript_interface/Global/value
page-type: webassembly-instance-property
browser-compat: webassembly.api.Global.value
sidebar: webassemblysidebar
---

The **`value`** property of the
[`WebAssembly.Global`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global) object prototype returns the value contained inside the global variable. This can be used to directly set and get the global's value.

## Value

A string indicating the value of the global.

For the setter to work, the global must be mutable (the [`mutable`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global/Global#mutable) option was set to `true` when it was first initialized), and the new value must have the same [`data_type`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global/Global#value) as the global.

## Examples

### Creating a non-mutable global

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: false }, 42);

// 42
console.log(myGlobal.value);

// TypeError
myGlobal.value = 100;
```

### Creating a mutable global

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: true }, 42);

// 42
console.log(myGlobal.value);

myGlobal.value = 100;
// 100
console.log(myGlobal.value);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global) text instruction
- [WebAssembly](/en-US/docs/WebAssembly)
