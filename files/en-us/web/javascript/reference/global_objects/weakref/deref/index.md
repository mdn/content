---
title: WeakRef.prototype.deref()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/deref
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - WeakRef
browser-compat: javascript.builtins.WeakRef.deref
---
{{JSRef}}

The `deref` method returns the {{jsxref("WeakRef")}} instance's target
object, or `undefined` if the target object has been garbage-collected.

## Syntax

```js
deref()
```

### Return value

The target object of the WeakRef, or `undefined` if the object has been
garbage-collected.

## Notes

See the [Notes on WeakRefs](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) section of the {{jsxref("WeakRef")}} page for some important notes.

## Examples

### Using deref

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
