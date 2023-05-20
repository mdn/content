---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.defineProperty
---

{{JSRef}}

The **`Reflect.defineProperty()`** static method is like {{jsxref("Object.defineProperty()")}} but returns a {{jsxref("Boolean")}}.

{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}

## Syntax

```js-nolint
Reflect.defineProperty(target, propertyKey, attributes)
```

### Parameters

- `target`
  - : The target object on which to define the property.
- `propertyKey`
  - : The name of the property to be defined or modified.
- `attributes`
  - : The attributes for the property being defined or modified.

### Return value

A boolean indicating whether or not the property was successfully defined.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` or `attributes` is not an object.

## Description

`Reflect.defineProperty()` provides the reflective semantic of defining an own property on an object. At the very low level, defining a property returns a boolean (as is the case with [the proxy handler](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)). {{jsxref("Object.defineProperty()")}} provides nearly the same semantic, but it throws a {{jsxref("TypeError")}} if the status is `false` (the operation was unsuccessful), while `Reflect.defineProperty()` directly returns the status.

Many built-in operations would also define own properties on objects. The most significant difference between defining properties and [setting](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) them is that [setters](/en-US/docs/Web/JavaScript/Reference/Functions/set) aren't invoked. For example, [class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) directly define properties on the instance without invoking setters.

```js
class B extends class A {
  set a(v) {
    console.log("Setter called");
  }
} {
  a = 1; // Nothing logged
}
```

`Reflect.defineProperty()` invokes the `[[DefineOwnProperty]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) of `target`.

## Examples

### Using Reflect.defineProperty()

```js
const obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
console.log(obj.x); // 7
```

### Checking if property definition has been successful

With {{jsxref("Object.defineProperty()")}}, which returns an object if successful, or throws a {{jsxref("TypeError")}} otherwise, you would use a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block to catch any error that occurred while defining a property.

Because `Reflect.defineProperty()` returns a Boolean success status, you can just use an [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) block here:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.defineProperty` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
- [`Proxy`'s `defineProperty` handler](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)
