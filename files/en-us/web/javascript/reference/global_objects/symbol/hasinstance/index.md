---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Reference
  - Symbol
browser-compat: javascript.builtins.Symbol.hasInstance
---
{{JSRef}}

The **`Symbol.hasInstance`** well-known symbol is used to determine if a constructor object recognizes an object as its instance. The {{jsxref("Operators/instanceof", "instanceof")}} operator's behavior can be customized by this symbol.

{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}{{js_property_attributes(0,0,0)}}

## Examples

### Custom instanceof behavior

You could implement your custom `instanceof` behavior like this, for example:

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance)
  }
}
console.log([] instanceof MyArray); // true
```

```js
function MyArray() { }
Object.defineProperty(MyArray, Symbol.hasInstance, {
  value(instance) { return Array.isArray(instance); }
});
console.log([] instanceof MyArray); // true
```

### Checking the instance of an object

Just in the same manner at which you can check if an object is an instance of a class using the `instanceof` keyword, we can also use `Symbol.hasInstance` for such checks also.

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
