---
title: FinalizationRegistry() constructor
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
page-type: javascript-constructor
browser-compat: javascript.builtins.FinalizationRegistry.FinalizationRegistry
---

{{JSRef}}

The **`FinalizationRegistry()`** constructor creates {{jsxref("FinalizationRegistry")}} objects.

## Syntax

```js-nolint
new FinalizationRegistry(callbackFn)
```

> **Note:** `FinalizationRegistry()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `callback`
  - : A function to be invoked each time a registered target value is garbage collected. Its return value is ignored. The function is called with the following arguments:
    - `heldValue`
      - : The value that was passed to the second parameter of the {{jsxref("FinalizationRegistry/register", "register()")}} method when the `target` object was registered.

## Examples

### Creating a new registry

You create the registry passing in the callback:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("FinalizationRegistry")}}
