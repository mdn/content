---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.ownKeys
---

{{JSRef}}

The **`handler.ownKeys()`** method is a trap for the `[[OwnPropertyKeys]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as {{jsxref("Object.keys()")}}, {{jsxref("Reflect.ownKeys()")}}, etc.

{{EmbedInteractiveExample("pages/js/proxyhandler-ownkeys.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  ownKeys(target) {
  }
});
```

### Parameters

The following parameter is passed to the `ownKeys()` method.
`this` is bound to the handler.

- `target`
  - : The target object.

### Return value

The `ownKeys()` method must return an enumerable object.

## Description

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Reflect.ownKeys()")}}

Or any other operation that invokes the `[[OwnPropertyKeys]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

If the following invariants are violated, the trap throws a {{jsxref("TypeError")}} when invoked.

- The result of `ownKeys()` must be an array.
- The type of each array element is either a {{jsxref("String")}} or a
  {{jsxref("Symbol")}}.
- The result List must contain the keys of all non-configurable own properties of the
  target object.
- If the target object is not extensible, then the result List must contain all the
  keys of the own properties of the target object and no other values.

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
