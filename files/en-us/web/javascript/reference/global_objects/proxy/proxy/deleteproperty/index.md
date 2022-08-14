---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.deleteProperty
---
{{JSRef}}

The **`handler.deleteProperty()`** method is a trap for the
{{jsxref("Operators/delete", "delete")}} operator.

{{EmbedInteractiveExample("pages/js/proxyhandler-deleteproperty.html", "taller")}}

## Syntax

```js
new Proxy(target, {
  deleteProperty(target, property) {
  }
});
```

### Parameters

The following parameters are passed to the `deleteProperty()` method.
`this` is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : The name or {{jsxref("Symbol")}} of the property to delete.

### Return value

The `deleteProperty()` method must return a {{jsxref("Boolean")}} indicating
whether or not the property has been successfully deleted.

## Description

The **`handler.deleteProperty()`** method is a trap for the
{{jsxref("Operators/delete", "delete")}} operator.

### Interceptions

This trap can intercept these operations:

- Property deletion: `delete proxy[foo]` and
  `delete proxy.foo`
- {{jsxref("Reflect.deleteProperty()")}}

### Invariants

If the following invariants are violated, the proxy will throw a
{{jsxref("TypeError")}}:

- A property cannot be deleted, if it exists as a non-configurable own property of the
  target object.

## Examples

### Trapping the delete operator

The following code traps the {{jsxref("Operators/delete", "delete")}} operator.

```js
const p = new Proxy({}, {
  deleteProperty(target, prop) {
    if (!(prop in target)) {
      console.log(`property not found: ${prop}`);
      return false;
    }
    delete target[prop];
    console.log(`property removed: ${prop}`);
    return true;
  },
});

p.a = 10;
console.log('a' in p); // true

const result1 = delete p.a; // "property removed: a"
console.log(result1); // true
console.log('a' in p); // false

const result2 = delete p.a; // "property not found: a"
console.log(result2); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/delete", "delete")}} operator
- {{jsxref("Reflect.deleteProperty()")}}
