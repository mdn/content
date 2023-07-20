---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
page-type: javascript-class
browser-compat: javascript.builtins.Boolean
---

{{JSRef}}

The **`Boolean`** object represents a truth value: `true` or `false`.

## Description

### Boolean primitives and Boolean objects

Do not confuse the {{Glossary("Primitive", "primitive")}} `Boolean` values `true` and `false` with the `true` and `false` values of the `Boolean` object.

**Any** object, including a `Boolean` object whose value is `false`, evaluates to `true` when passed to a conditional statement. For example, the condition in the following {{jsxref("Statements/if...else", "if")}} statement evaluates to `true`:

```js
const x = new Boolean(false);
if (x) {
  // this code is executed
}
```

This behavior does not apply to `Boolean` primitives. For example, the condition in the following {{jsxref("Statements/if...else", "if")}} statement evaluates to `false`:

```js
const x = false;
if (x) {
  // this code is not executed
}
```

Do not use the `Boolean()` constructor with `new` to convert a non-boolean value to a boolean value — use `Boolean` as a function or a [double NOT](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!) instead:

```js
const good = Boolean(expression); // use this
const good2 = !!expression; // or this
const bad = new Boolean(expression); // don't use this!
```

If you specify any object, including a `Boolean` object whose value is `false`, as the initial value of a `Boolean` object, the new `Boolean` object has a value of `true`.

```js
const myFalse = new Boolean(false); // initial value of false
const g = Boolean(myFalse); // initial value of true
const myString = new String("Hello"); // string object
const s = Boolean(myString); // initial value of true
```

> **Warning:** You should rarely find yourself using `Boolean` as a constructor.

### Boolean coercion

Many built-in operations that expect booleans first coerce their arguments to booleans. [The operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean) can be summarized as follows:

- Booleans are returned as-is.
- [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) turns into `false`.
- [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) turns into `false`.
- `0`, `-0`, and `NaN` turn into `false`; other numbers turn into `true`.
- `0n` turns into `false`; other [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) turn into `true`.
- The empty string `""` turns into `false`; other strings turn into `true`.
- [Symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) turn into `true`.
- All objects become `true`.

> **Note:** A legacy behavior makes [`document.all`](/en-US/docs/Web/API/Document/all) return `false` when used as a boolean, despite it being an object. This property is legacy and non-standard and should not be used.

> **Note:** Unlike other type conversions like [string coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) or [number coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), boolean coercion does not attempt to convert objects to primitives.

In other words, there are only a handful of values that get coerced to `false` — these are called [falsy](/en-US/docs/Glossary/Falsy) values. All other values are called [truthy](/en-US/docs/Glossary/Truthy) values. A value's truthiness is important when used with logical operators, conditional statements, or any boolean context.

There are two ways to achieve the same effect in JavaScript.

- [Double NOT](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!): `!!x` negates `x` twice, which converts `x` to a boolean using the same algorithm as above.
- The [`Boolean()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) function: `Boolean(x)` uses the same algorithm as above to convert `x`.

Note that truthiness is not the same as being [loosely equal](/en-US/docs/Web/JavaScript/Reference/Operators/Equality) to `true` or `false`.

```js
if ([]) {
  console.log("[] is truthy");
}
if ([] == false) {
  console.log("[] == false");
}
// [] is truthy
// [] == false
```

`[]` is truthy, but it's also loosely equal to `false`. It's truthy, because all objects are truthy. However, when comparing with `false`, which is a primitive, `[]` is also converted to a primitive, which is `""` via {{jsxref("Array.prototype.toString()")}}. Comparing strings and booleans results in both being [converted to numbers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), and they both become `0`, so `[] == false` is `true`. In general, falsiness and `== false` differ in the following cases:

- `NaN`, `undefined`, and `null` are falsy but not loosely equal to `false`.
- `"0"` (and other string literals that are not `""` but [get coerced to 0](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)) is truthy but loosely equal to `false`.
- Objects are always truthy, but their primitive representation may be loosely equal to `false`.

Truthy values are even more unlikely to be loosely equal to `true`. All values are either truthy or falsy, but most values are loosely equal to neither `true` nor `false`.

## Constructor

- {{jsxref("Boolean/Boolean", "Boolean()")}}
  - : Creates a new `Boolean` object.

## Instance properties

These properties are defined on `Boolean.prototype` and shared by all `Boolean` instances.

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Boolean` instances, the initial value is the {{jsxref("Boolean/Boolean", "Boolean")}} constructor.

## Instance methods

- {{jsxref("Boolean.prototype.toString()")}}
  - : Returns a string of either `true` or `false` depending upon the value of the object. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Returns the primitive value of the {{jsxref("Boolean")}} object. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.

## Examples

### Creating Boolean objects with an initial value of false

```js
const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);
```

### Creating Boolean objects with an initial value of true

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
- [Boolean primitives](/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- [Boolean data type (Wikipedia)](https://en.wikipedia.org/wiki/Boolean_data_type)
