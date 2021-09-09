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
const p = new Proxy(target, {
  deleteProperty: function(target, property) {
  }
});
```

### Parameters

The following parameters are passed to the `deleteProperty()` method.
`this` is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : The name or {{jsxref("Symbol")}} of the property to delete.

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
  deleteProperty: function(target, prop) {
    if (prop in target){
      delete target[prop]
      console.log('property removed: ' + prop)
      return true
    }
    else {
      console.log('property not found: ' + prop)
      return false
    }
  }
})

let result

p.a = 10
console.log('a' in p)  // true

result = delete p.a    // "property removed: a"
console.log(result)    // true
console.log('a' in p)  // false

result = delete p.a    // "property not found: a"
console.log(result)    // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Operators/delete", "delete")}} operator
- {{jsxref("Reflect.deleteProperty()")}}
