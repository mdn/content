---
title: handler.has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.has
---

{{JSRef}}

The **`handler.has()`** method is a trap for the `[[HasProperty]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as the {{jsxref("Operators/in", "in")}} operator.

{{EmbedInteractiveExample("pages/js/proxyhandler-has.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  has(target, prop) {
  }
});
```

### Parameters

The following parameters are passed to `has()` method. `this` is
bound to the handler.

- `target`
  - : The target object.
- `prop`
  - : The name or {{jsxref("Symbol")}} of the property to check for existence.

### Return value

The `has()` method must return a boolean value.

## Description

### Interceptions

This trap can intercept these operations:

- The [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in) operator: `foo in proxy`
- [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) check: `with(proxy) { (foo); }`
- {{jsxref("Reflect.has()")}}

Or any other operation that invokes the `[[HasProperty]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

If the following invariants are violated, the trap throws a {{jsxref("TypeError")}} when invoked.

- A property cannot be reported as non-existent, if it exists as a non-configurable
  own property of the target object.
- A property cannot be reported as non-existent, if it exists as an own property of
  the target object and the target object is not extensible.

## Examples

### Trapping the in operator

The following code traps the {{jsxref("Operators/in", "in")}} operator.

```js
const p = new Proxy(
  {},
  {
    has(target, prop) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

console.log("a" in p);
// "called: a"
// true
```

The following code violates an invariant.

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);

const p = new Proxy(obj, {
  has(target, prop) {
    return false;
  },
});

"a" in p; // TypeError is thrown
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Reflect.has()")}}
