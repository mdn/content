---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.getPrototypeOf
---

{{JSRef}}

The **`Object.getPrototypeOf()`** static method returns the prototype
(i.e. the value of the internal `[[Prototype]]` property) of the specified
object.

{{InteractiveExample("JavaScript Demo: Object.getPrototypeOf()", "shorter")}}

```js interactive-example
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// Expected output: true
```

## Syntax

```js-nolint
Object.getPrototypeOf(obj)
```

### Parameters

- `obj`
  - : The object whose prototype is to be returned.

### Return value

The prototype of the given object, which may be [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

## Examples

### Using getPrototypeOf

```js
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### Non-object coercion

In ES5, it will throw a {{jsxref("TypeError")}} exception if the `obj`
parameter isn't an object. In ES2015, the parameter will be coerced to an
{{jsxref("Object")}}.

```js
Object.getPrototypeOf("foo");
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf("foo");
// String.prototype                  (ES2015 code)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.getPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Reflect.getPrototypeOf()")}}
- [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/) by John Resig (2008)
