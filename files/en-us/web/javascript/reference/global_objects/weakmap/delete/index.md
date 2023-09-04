---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
page-type: javascript-instance-method
browser-compat: javascript.builtins.WeakMap.delete
---

{{JSRef}}

The **`delete()`** method of {{jsxref("WeakMap")}} instances removes the specified element from this `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-delete.html")}}

## Syntax

```js-nolint
weakMapInstance.delete(key)
```

### Parameters

- `key`
  - : The key of the element to remove from the `WeakMap` object.

### Return value

`true` if an element in the `WeakMap` object has been removed successfully. `false` if the key is not found in the `WeakMap`. Always returns `false` if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using the delete() method

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.delete(window); // Returns true. Successfully removed.

wm.has(window); // Returns false. The window object is no longer in the WeakMap.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
