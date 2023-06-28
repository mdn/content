---
title: WeakRef() constructor
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
page-type: javascript-constructor
browser-compat: javascript.builtins.WeakRef.WeakRef
---

{{JSRef}}

The **`WeakRef()`** constructor creates {{jsxref("WeakRef")}} objects.

## Syntax

```js-nolint
new WeakRef(target)
```

> **Note:** `WeakRef()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `target`
  - : The target value the WeakRef should refer to (also called the _referent_). Must be an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

### Return value

A new `WeakRef` object referring to the given target value.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Creating a new WeakRef object

See the main [`WeakRef`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples)
page for a complete example.

```js
class Counter {
  constructor(element) {
    // Remember a weak reference to a DOM element
    this.ref = new WeakRef(element);
    this.start();
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakRef")}}
