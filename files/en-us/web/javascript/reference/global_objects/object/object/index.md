---
title: Object() constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
tags:
  - Constructor
  - JavaScript
  - Object
  - Reference
browser-compat: javascript.builtins.Object.Object
---
{{JSRef}}

The **`Object` constructor** creates an object wrapper for the
given value.

- If the value is {{jsxref("null")}} or {{jsxref("undefined")}}, it will create and
  return an empty object.
- Otherwise, it will return an object of a Type that corresponds to the given value.
- If the value is an object already, it will return the value.

When called in a non-constructor context, `Object` behaves identically to
`new Object()`.

## Syntax

```js
new Object()
new Object(value)
```

### Parameters

- `value`
  - : Any value.

## Examples

### Creating a new Object

```js
let o = new Object()
o.foo = 42

console.log(o)
// Object { foo: 42 }
```

### Using Object given undefined and null types

The following examples store an empty `Object` object in `o`:

```js
let o = new Object()
```

```js
let o = new Object(undefined)
```

```js
let o = new Object(null)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Object
  initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
