---
title: WeakRef() constructor
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
tags:
  - Constructor
  - JavaScript
  - Reference
  - WeakRef
browser-compat: javascript.builtins.WeakRef.WeakRef
---
{{JSRef}}

The **`WeakRef`** constructor creates a {{jsxref("WeakRef")}}
object referring to a given target object.

## Syntax

```js
new WeakRef(targetObject)
```

> **Note:** `WeakRef()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `targetObject`
  - : The target object the WeakRef should refer to (also called the _referent_).

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
