---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
page-type: javascript-instance-method
browser-compat: javascript.builtins.WeakSet.has
---

{{JSRef}}

The **`has()`** method returns a boolean indicating whether an
object exists in a `WeakSet` or not.

{{EmbedInteractiveExample("pages/js/weakset-prototype-has.html")}}

## Syntax

```js-nolint
has(value)
```

### Parameters

- `value`
  - : The value to test for presence in the `WeakSet`.

### Return value

Returns `true` if an element with the specified value exists in the `WeakSet` object; otherwise `false`. Always returns `false` if `value` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using the `has()` method

```js
const ws = new WeakSet();
const obj = {};
ws.add(window);

ws.has(window); // returns true
ws.has(obj); // returns false

// Storing a non-registered symbol
const sym = Symbol("foo");
ws.add(sym);
ws.add(Symbol.iterator);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
