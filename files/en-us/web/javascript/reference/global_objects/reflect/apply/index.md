---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.apply
---

{{JSRef}}

The **`Reflect.apply()`** static method calls a target function with arguments as specified.

{{InteractiveExample("JavaScript Demo: Reflect.apply()", "taller")}}

```js interactive-example
console.log(Reflect.apply(Math.floor, undefined, [1.75]));
// Expected output: 1

console.log(
  Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]),
);
// Expected output: "hello"

console.log(
  Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index,
);
// Expected output: 4

console.log(Reflect.apply("".charAt, "ponies", [3]));
// Expected output: "i"
```

## Syntax

```js-nolint
Reflect.apply(target, thisArgument, argumentsList)
```

### Parameters

- `target`
  - : The target function to call.
- `thisArgument`
  - : The value of `this` provided for the call to `target`.
- `argumentsList`
  - : An [array-like object](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) specifying the arguments with which `target` should be called.

### Return value

The result of calling the given `target` function with the specified `this` value and arguments.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` is not a function or `argumentsList` is not an object.

## Description

`Reflect.apply()` provides the reflective semantic of a function call. That is, `Reflect.apply(target, thisArgument, argumentsList)` is semantically equivalent to:

```js
Math.floor.apply(null, [1.75]);
Reflect.apply(Math.floor, null, [1.75]);
```

The only differences are:

- `Reflect.apply()` takes the function to call as the `target` parameter instead of the `this` context.
- `Reflect.apply()` throws if `argumentsList` is omitted instead of defaulting to calling with no parameters.

`Reflect.apply()` invokes the `[[Call]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) of `target`.

## Examples

### Using Reflect.apply()

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
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
- [`handler.apply()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply)
