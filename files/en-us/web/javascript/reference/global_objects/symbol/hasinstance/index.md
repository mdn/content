---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.hasInstance
---

{{JSRef}}

The **`Symbol.hasInstance`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `@@hasInstance`. The {{jsxref("Operators/instanceof", "instanceof")}} operator looks up this symbol on its right-hand operand for the method used to determine if the constructor object recognizes an object as its instance.

{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}

## Value

The well-known symbol `@@hasInstance`.

{{js_property_attributes(0, 0, 0)}}

## Description

The `instanceof` operator uses the following algorithm to calculate the return value of `object instanceof constructor`:

1. If `constructor` has a `@@hasInstance` method, then call it with `object` as the first argument and return the result, [coerced to a boolean](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Throw a {{jsxref("TypeError")}} if `constructor` is not an object, or if `constructor[@@hasInstance]` is not one of `null`, `undefined`, or a function.
2. Otherwise, if `constructor` doesn't have a `@@hasInstance` method (`constructor[@@hasInstance]` is `null` or `undefined`), then determine the result using the same algorithm as [`Function.prototype[@@hasInstance]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance). Throw a {{jsxref("TypeError")}} if `constructor` is not a function.

Because all functions inherit from `Function.prototype` by default, most of the time, the [`Function.prototype[@@hasInstance]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance) method specifies the behavior of `instanceof` when the right-hand side is a function.

## Examples

### Custom instanceof behavior

You could implement your custom `instanceof` behavior like this, for example:

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

```js
function MyArray() {}
Object.defineProperty(MyArray, Symbol.hasInstance, {
  value(instance) {
    return Array.isArray(instance);
  },
});
console.log([] instanceof MyArray); // true
```

### Checking the instance of an object

Just in the same manner at which you can check if an object is an instance of a class using the `instanceof` keyword, we can also use `Symbol.hasInstance` for such checks.

```js
class Animal {
  constructor() {}
}

const cat = new Animal();

console.log(Animal[Symbol.hasInstance](cat)); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Operators/instanceof", "instanceof")}}
- [`Function.prototype[@@hasInstance]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance)
