---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Object.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("Object")}} instances converts the `this` value [to an object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). This method is meant to be overridden by derived objects for custom [type conversion](/en-US/docs/Web/JavaScript/Data_structures#type_coercion) logic.

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Parameters

None.

### Return value

The `this` value, converted to an object.

> **Note:** In order for `valueOf` to be useful during type conversion, it must return a primitive. Because all primitive types have their own `valueOf()` methods, calling `aPrimitiveValue.valueOf()` generally does not invoke `Object.prototype.valueOf()`.

## Description

JavaScript calls the `valueOf` method to [convert an object to a primitive value](/en-US/docs/Web/JavaScript/Data_structures#type_coercion). You rarely need to invoke the `valueOf` method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

This method is called in priority by [numeric conversion](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and [primitive conversion](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion), but [string conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) calls `toString()` in priority, and `toString()` is very likely to return a string value (even for the {{jsxref("Object.prototype.toString()")}} base implementation), so `valueOf()` is usually not called in this case.

All objects that inherit from `Object.prototype` (that is, all except [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) inherit the `toString()` method. The `Object.prototype.valueOf()` base implementation is deliberately useless: by returning an object, its return value will never be used by any [primitive conversion algorithm](/en-US/docs/Web/JavaScript/Data_structures#type_coercion). Many built-in objects override this method to return an appropriate primitive value. When you create a custom object, you can override `valueOf()` to call a custom method, so that your custom object can be converted to a primitive value. Generally, `valueOf()` is used to return a value that is most meaningful for the object — unlike `toString()`, it does not need to be a string. Alternatively, you can add a [`[Symbol.toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) method, which allows even more control over the conversion process, and will always be preferred over `valueOf` or `toString` for any type conversion.

## Examples

### Using valueOf()

The base `valueOf()` method returns the `this` value itself, converted to an object if it isn't already. Therefore its return value will never be used by any primitive conversion algorithm.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### Overriding valueOf for custom objects

You can create a function to be called in place of the default `valueOf` method. Your function should take no arguments, since it won't be passed any when called during type conversion.

For example, you can add a `valueOf` method to your custom class `Box`.

```js
class Box {
  #value;
  constructor(value) {
    this.#value = value;
  }
  valueOf() {
    return this.#value;
  }
}
```

With the preceding code in place, any time an object of type `Box` is used in a context where it is to be represented as a primitive value (but not specifically a string), JavaScript automatically calls the function defined in the preceding code.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

An object's `valueOf` method is usually invoked by JavaScript, but you can invoke it yourself as follows:

```js
box.valueOf();
```

### Using unary plus on objects

[Unary plus](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) performs [number coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) on its operand, which, for most objects without [`[Symbol.toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), means calling its `valueOf()`. However, if the object doesn't have a custom `valueOf()` method, the base implementation will cause `valueOf()` to be ignored and the return value of `toString()` to be used instead.

```js
+new Date(); // the current timestamp; same as new Date().getTime()
+{}; // NaN (toString() returns "[object Object]")
+[]; // 0 (toString() returns an empty string list)
+[1]; // 1 (toString() returns "1")
+[1, 2]; // NaN (toString() returns "1,2")
+new Set([1]); // NaN (toString() returns "[object Set]")
+{ valueOf: () => 42 }; // 42
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
