---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.apply
---
{{JSRef}}

The static **`Reflect.apply()`** method calls a target function
with arguments as specified.

{{EmbedInteractiveExample("pages/js/reflect-apply.html")}}

## Syntax

```js
Reflect.apply(target, thisArgument, argumentsList)
```

### Parameters

- `target`
  - : The target function to call.
- `thisArgument`
  - : The value of `this` provided for the call to
    `target`.
- `argumentsList`
  - : An array-like object specifying the arguments with which
    `target` should be called.

### Return value

The result of calling the given `target` function with the
specified `this` value and arguments.

### Exceptions

A {{jsxref("TypeError")}}, if the `target` is not callable.

## Description

In ES5, you typically use the {{jsxref("Function.prototype.apply()")}} method to call a
function with a given `this` value and `arguments` provided as an array
(or an [array-like object](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)).

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

With `Reflect.apply()` this becomes less verbose and easier to understand.

## Examples

### Using Reflect.apply()

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index
// 4

Reflect.apply(''.charAt, 'ponies', [3])
// "i"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.apply` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
