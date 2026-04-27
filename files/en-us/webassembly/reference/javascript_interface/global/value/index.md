---
title: WebAssembly.Global.prototype.value
short-title: value
slug: WebAssembly/Reference/JavaScript_interface/Global/value
page-type: webassembly-instance-property
browser-compat: webassembly.api.Global.value
sidebar: webassemblysidebar
---

The **`value`** property of the [`WebAssembly.Global`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global) object prototype returns the value contained inside the global variable.

## Value

A string indicating the value of the global.

## Description

The `value` property of a `Global` object instance allows you to directly get or set the global's value.

For the setter to work, the global must be mutable (the [`mutable`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global/Global#mutable) option was set to `true` when it was declared). If this is not the case, a `TypeError` exception is thrown.

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

- [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global) definition
- [WebAssembly](/en-US/docs/WebAssembly)
