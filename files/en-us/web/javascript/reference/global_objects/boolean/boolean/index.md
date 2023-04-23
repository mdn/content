---
title: Boolean() constructor
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
page-type: javascript-constructor
browser-compat: javascript.builtins.Boolean.Boolean
---

{{JSRef}}

The **`Boolean()`** constructor creates {{jsxref("Boolean")}} objects. When called as a function, it returns primitive values of type Boolean.

{{EmbedInteractiveExample("pages/js/boolean-constructor.html","shorter")}}

## Syntax

```js-nolint
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

## Description

The value passed as the first parameter is [converted to a boolean value](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). If the value is omitted or is `0`, `-0`, `0n`, [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}}, or the empty string (`""`), then the object has an initial value of `false`. All other values, including any object, an empty array (`[]`), or the string `"false"`, create an object with an initial value of `true`.

> **Note:** When the non-standard property [`document.all`](/en-US/docs/Web/API/Document/all) is used as an argument for this constructor, the result is a `Boolean` object with the value `false`. This property is legacy and non-standard and should not be used.

## Examples

### Creating Boolean objects with an initial value of false

```js
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);

typeof bfalse; // "object"
Boolean(bfalse); // true
```

Note how converting a `Boolean` object to a primitive with `Boolean()` always yields `true`, even if the object holds a value of `false`. You are therefore always advised to avoid constructing `Boolean` wrapper objects.

If you need to take the primitive value out from the wrapper object, instead of using the `Boolean()` function, use the object's [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf) method instead.

```js
const bfalse = new Boolean(false);

bfalse.valueOf(); // false
```

### Creating `Boolean` objects with an initial value of `true`

```js
const btrue = new Boolean(true);
const btrueString = new Boolean("true");
const bfalseString = new Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Boolean](/en-US/docs/Glossary/Boolean)
