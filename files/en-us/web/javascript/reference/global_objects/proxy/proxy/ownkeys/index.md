---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.ownKeys
---

{{JSRef}}

The **`handler.ownKeys()`** method is a trap for the `[[OwnPropertyKeys]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as {{jsxref("Object.keys()")}}, {{jsxref("Reflect.ownKeys()")}}, etc.

{{InteractiveExample("JavaScript Demo: handler.ownKeys()", "taller")}}

```js interactive-example
const monster1 = {
  _age: 111,
  [Symbol("secret")]: "I am scared!",
  eyeCount: 4,
};

const handler1 = {
  ownKeys(target) {
    return Reflect.ownKeys(target);
  },
};

const proxy1 = new Proxy(monster1, handler1);

for (const key of Object.keys(proxy1)) {
  console.log(key);
  // Expected output: "_age"
  // Expected output: "eyeCount"
}
```

## Syntax

```js-nolint
new Proxy(target, {
  ownKeys(target) {
  }
})
```

### Parameters

The following parameter is passed to the `ownKeys()` method. `this` is bound to the handler.

- `target`
  - : The target object.

### Return value

The `ownKeys()` method must return an [array-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) where each element is either a {{jsxref("String")}} or a {{jsxref("Symbol")}} containing no duplicate items.

## Description

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Reflect.ownKeys()")}}

Or any other operation that invokes the `[[OwnPropertyKeys]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

The proxy's `[[OwnPropertyKeys]]` internal method throws a {{jsxref("TypeError")}} if the handler definition violates one of the following invariants:

- The result is an {{jsxref("Object")}}.
- The list of keys contains no duplicate values.
- The type of each key is either a {{jsxref("String")}} or a {{jsxref("Symbol")}}.
- The result list must contain the keys of all non-configurable own properties of the target object. That is, for all keys returned by {{jsxref("Reflect.ownKeys()")}} on the target object, if the key reports `configurable: false` by {{jsxref("Reflect.getOwnPropertyDescriptor()")}}, then the key must be included in the result List.
- If the target object is not extensible, then the result list must contain all the keys of the own properties of the target object and no other values. That is, if {{jsxref("Reflect.isExtensible()")}} returns `false` on `target`, then the result list must contain the same values as the result of {{jsxref("Reflect.ownKeys()")}} on `target`.

## Examples

### Trapping of getOwnPropertyNames

The following code traps {{jsxref("Object.getOwnPropertyNames()")}}.

```js
const p = new Proxy(
  {},
  {
    ownKeys(target) {
      console.log("called");
      return ["a", "b", "c"];
    },
  },
);

console.log(Object.getOwnPropertyNames(p));
// "called"
// [ 'a', 'b', 'c' ]
```

The following code violates an invariant.

```js example-bad
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: true,
  value: 10,
});

const p = new Proxy(obj, {
  ownKeys(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  },
});

console.log(Object.getOwnPropertyNames(p));

// TypeError: proxy [[OwnPropertyKeys]] must return an array
// with only string and symbol elements
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Reflect.ownKeys()")}}
