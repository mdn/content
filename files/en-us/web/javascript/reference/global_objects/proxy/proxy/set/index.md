---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.set
---

{{JSRef}}

The **`handler.set()`** method is a trap for the `[[Set]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as using [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) to set a property's value.

{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  set(target, property, value, receiver) {
  }
});
```

### Parameters

The following parameters are passed to the `set()` method. `this`
is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : The name or {{jsxref("Symbol")}} of the property to set.
- `value`
  - : The new value of the property to set.
- `receiver`

  - : The object to which the assignment was originally directed. This is usually the
    proxy itself. But a `set()` handler can also be called indirectly, via
    the prototype chain or various other ways.

    For example, suppose a script does
    `obj.name = "jen"`, and `obj` is not a
    proxy, and has no own property `.name`, but it has a proxy on its
    prototype chain. That proxy's `set()` handler will be called, and
    `obj` will be passed as the receiver.

### Return value

The `set()` method should return a boolean value.

- Return `true` to indicate that assignment succeeded.
- If the `set()` method returns `false`, and the assignment
  happened in strict-mode code, a {{jsxref("TypeError")}} will be thrown.

## Description

### Interceptions

This trap can intercept these operations:

- Property assignment: `proxy[foo] = bar` and `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

Or any other operation that invokes the `[[Set]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

If the following invariants are violated, the trap throws a {{jsxref("TypeError")}} when invoked.

- Cannot change the value of a property to be different from the value of the
  corresponding target object property if the corresponding target object property is a
  non-writable, non-configurable data property.
- Cannot set the value of a property if the corresponding target object property is a
  non-configurable accessor property that has `undefined` as its
  `[[Set]]` attribute.
- In strict mode, a `false` return value from the `set()`
  handler will throw a {{jsxref("TypeError")}} exception.

## Examples

### Trap setting of a property value

The following code traps setting a property value.

```js
const p = new Proxy(
  {},
  {
    set(target, prop, value, receiver) {
      target[prop] = value;
      console.log(`property set: ${prop} = ${value}`);
      return true;
    },
  },
);

console.log("a" in p); // false

p.a = 10; // "property set: a = 10"
console.log("a" in p); // true
console.log(p.a); // 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.set()")}}
