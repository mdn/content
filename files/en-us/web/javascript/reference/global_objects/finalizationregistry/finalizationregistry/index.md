---
title: FinalizationRegistry() constructor
slug: >-
  Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
tags:
  - Constructor
  - FinalizationRegistry
  - JavaScript
  - Reference
browser-compat: javascript.builtins.FinalizationRegistry.FinalizationRegistry
---

{{JSRef}}

The **`FinalizationRegistry`** constructor creates a {{jsxref("FinalizationRegistry")}} object that uses the given callback.

## Syntax

```js
// Arrow callback function
new FinalizationRegistry(heldValue => { ... } )

// Callback function
new FinalizationRegistry(callbackFn)

// Inline callback function
new FinalizationRegistry(function callbackFn(heldValue) { ... })
```

### Parameters

- `callback`
  - : The callback function this registry should use.

## Examples

### Creating a new registry

You create the registry passing in the callback:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // ....
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("FinalizationRegistry")}}
