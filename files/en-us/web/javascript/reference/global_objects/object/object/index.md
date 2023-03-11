---
title: Object() constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
page-type: javascript-constructor
browser-compat: javascript.builtins.Object.Object
---

{{JSRef}}

The **`Object` constructor** turns the input into an object. Its behavior depends on the input's type.

- If the value is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or {{jsxref("undefined")}}, it creates and returns an empty object.
- Otherwise, it returns an object of a Type that corresponds to the given value.
- If the value is an object already, it returns the value.

## Syntax

```js-nolint
new Object(value)
Object(value)
```

> **Note:** `Object()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new object.

### Parameters

- `value`
  - : Any value.

## Examples

### Creating a new Object

```js
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
```

### Using Object given undefined and null types

The following examples store an empty `Object` object in `o`:

```js
const o = new Object();
```

```js
const o = new Object(undefined);
```

```js
const o = new Object(null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
