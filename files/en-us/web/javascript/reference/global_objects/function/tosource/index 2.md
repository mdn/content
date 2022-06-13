---
title: Function.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Function/toSource
tags:
  - Function
  - JavaScript
  - Method
  - Non-standard
  - Deprecated
browser-compat: javascript.builtins.Function.toSource
---
{{JSRef}} {{deprecated_header}}

The **`toSource()`** method returns a string representing the
source code of the object. This method is usually called internally by JavaScript and
not explicitly in code. You can call `toSource()` while debugging to examine
the contents of an object.

## Syntax

```js
toSource()
```

### Return value

A string representing the source code of the object.

## Examples

### Native functions

For the built-in {{jsxref("Function")}} object, `toSource()` returns the
following string indicating that the source code is not available:

```js
function Function() {
  [native code]
}
```

### Custom functions

For custom functions, `toSource()` returns the JavaScript source that
defines the object as a string.

```js
// For example:
function hello() {
  console.log("Hello, World!");
}

hello.toSource();
```

```js
// Results in:
"function hello() {
    console.log(\"Hello, World!\");
}"
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toSource()")}}
