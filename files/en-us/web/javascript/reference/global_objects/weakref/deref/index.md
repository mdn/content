---
title: WeakRef.prototype.deref()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/deref
page-type: javascript-instance-method
browser-compat: javascript.builtins.WeakRef.deref
---

{{JSRef}}

The **`deref()`** method returns the {{jsxref("WeakRef")}} instance's target value, or `undefined` if the target value has been garbage-collected.

## Syntax

```js-nolint
deref()
```

### Return value

The target value of the WeakRef, which is either an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Returns `undefined` if the value has been garbage-collected.

## Description

See the [Notes on WeakRefs](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) section of the {{jsxref("WeakRef")}} page for some important notes.

## Examples

### Using deref()

See the [Examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples)
section of the {{jsxref("WeakRef")}} page for the complete example.

```js
const tick = () => {
  // Get the element from the weak reference, if it still exists
  const element = this.ref.deref();
  if (element) {
    element.textContent = ++this.count;
  } else {
    // The element doesn't exist anymore
    console.log("The element is gone.");
    this.stop();
    this.ref = null;
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakRef")}}
