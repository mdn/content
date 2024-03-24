---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
page-type: javascript-instance-method
browser-compat: javascript.builtins.WeakSet.add
---

{{JSRef}}

The **`add()`** method of {{jsxref("WeakSet")}} instances appends a new object to the end of this `WeakSet`.

{{EmbedInteractiveExample("pages/js/weakset-prototype-add.html", "taller")}}

## Syntax

```js-nolint
add(value)
```

### Parameters

- `value`
  - : Must be either an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). The value to add to the `WeakSet` collection.

### Return value

The `WeakSet` object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `value` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using add

```js
const ws = new WeakSet();

ws.add(window); // add the window object to the WeakSet

ws.has(window); // true

// WeakSet only takes objects as arguments
ws.add(1);
// results in "TypeError: Invalid value used in weak set" in Chrome
// and "TypeError: 1 is not a non-null object" in Firefox
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
