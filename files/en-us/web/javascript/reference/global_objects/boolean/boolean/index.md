---
title: Boolean() constructor
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
tags:
  - Boolean
  - Constructor
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Boolean.Boolean
---
{{JSRef}}

The **`Boolean()`** constructor can create {{jsxref("Boolean")}} objects or return primitive values of type boolean.

{{EmbedInteractiveExample("pages/js/boolean-constructor.html","shorter")}}

## Syntax

```js
new Boolean(value)
Boolean(value)
```

> **Note:** `Boolean()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), but with different effects. See [Return value](#return_value).

### Parameters

- `value`
  - : The initial value of the `Boolean` object.

### Return value

When `Boolean()` is called as a constructor (with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new)), it creates a {{jsxref("Boolean")}} object, which is **not** a primitive.

When `Boolean()` is called as a function (without `new`), it coerces the parameter to a boolean primitive.

> **Warning:** You should rarely find yourself using `Boolean` as a constructor.

## Examples

### Creating Boolean objects with an initial value of false

```js
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean('');
const bfalse = new Boolean(false);

typeof bfalse // "object"
Boolean(bfalse) // true
```

Note how converting a `Boolean` object to a primitive with `Boolean()` always yields `true`, even if the object holds a value of `false`. You are therefore always advised to avoid constructing `Boolean` wrapper objects.

If you need to take the primitive value out from the wrapper object, instead of using the `Boolean()` function, use the object's [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf) method instead.

```js
const bfalse = new Boolean(false);

bfalse.valueOf() // false
```

### Creating `Boolean` objects with an initial value of `true`

```js
const btrue = new Boolean(true);
const btrueString = new Boolean('true');
const bfalseString = new Boolean('false');
const bSuLin = new Boolean('Su Lin');
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Boolean](/en-US/docs/Glossary/Boolean)
