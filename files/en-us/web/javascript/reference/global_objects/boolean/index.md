---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
page-type: javascript-class
browser-compat: javascript.builtins.Boolean
---

{{JSRef}}

**`Boolean`** values can be one of two values: `true` or `false`, representing the truth value of a logical proposition.

## Description

Boolean values are typically produced by [relational operators](/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators), [equality operators](/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators), and [logical NOT (`!`)](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT). They can also be produced by functions that represent conditions, such as {{jsxref("Array.isArray()")}}. Note that [binary logical operators](/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) such as `&&` and `||` return the values of the operands, which may or may not be boolean values.

Boolean values are typically used in conditional testing, such as the condition for {{jsxref("Statements/if...else", "if...else")}} and {{jsxref("Statements/while", "while")}} statements, the [conditional operator](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) (`? :`), or the predicate return value of {{jsxref("Array.prototype.filter()")}}.

You would rarely need to explicitly convert something to a boolean value, as JavaScript does this automatically in boolean contexts, so you can use any value as if it's a boolean, based on its [truthiness](#boolean_coercion). You are also encouraged to use `if (condition)` and `if (!condition)` instead of `if (condition === true)` or `if (condition === false)` in your own code so you can take advantage of this convention. However, making sure that values representing conditions are always booleans can help clarify the intent of your code.

```js
// Do this:
// This always returns a boolean value
const isObject = (obj) => !!obj && typeof obj === "object";

// Or this:
const isObject = (obj) => Boolean(obj) && typeof obj === "object";

// Or this:
const isObject = (obj) => obj !== null && typeof obj === "object";

// Instead of this:
// This may return falsy values that are not equal to false
const isObject = (obj) => obj && typeof obj === "object";
```

### Boolean primitives and Boolean objects

For converting non-boolean values to boolean, use `Boolean` as a function or use the [double NOT](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!) operator. Do not use the `Boolean()` constructor with `new`.

```js example-good
const good = Boolean(expression);
const good2 = !!expression;
```

```js example-bad
const bad = new Boolean(expression); // don't use this!
```

This is because _all_ objects, including a `Boolean` object whose wrapped value is `false`, are {{glossary("truthy")}} and evaluate to `true` in places such as conditional statements. (See also the [boolean coercion](#boolean_coercion) section below.)

```js
if (new Boolean(true)) {
  console.log("This log is printed.");
}

if (new Boolean(false)) {
  console.log("This log is ALSO printed.");
}

const myFalse = new Boolean(false); // myFalse is a Boolean object (not the primitive value false)
const g = Boolean(myFalse); // g is true
const myString = new String("Hello"); // myString is a String object
const s = Boolean(myString); // s is true
```

> [!WARNING]
> You should rarely find yourself using `Boolean` as a constructor.

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

> [!NOTE]
> A legacy behavior makes [`document.all`](/en-US/docs/Web/API/Document/all) return `false` when used as a boolean, despite it being an object. This property is legacy and non-standard and should not be used.

> [!NOTE]
> Unlike other type conversions like [string coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) or [number coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), boolean coercion does not attempt to [convert objects to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) by calling user methods.

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
  - : Creates `Boolean` objects. When called as a function, it returns primitive values of type Boolean.

## Instance properties

These properties are defined on `Boolean.prototype` and shared by all `Boolean` instances.

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Boolean` instances, the initial value is the {{jsxref("Boolean/Boolean", "Boolean")}} constructor.

## Instance methods

- {{jsxref("Boolean.prototype.toString()")}}
  - : Returns a string of either `true` or `false` depending upon the value of the object. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Returns the primitive value of the `Boolean` object. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.

## Examples

### Creating false values

```js
const bNoParam = Boolean();
const bZero = Boolean(0);
const bNull = Boolean(null);
const bEmptyString = Boolean("");
const bfalse = Boolean(false);
```

### Creating true values

```js
const btrue = Boolean(true);
const btrueString = Boolean("true");
const bfalseString = Boolean("false");
const bSuLin = Boolean("Su Lin");
const bArrayProto = Boolean([]);
const bObjProto = Boolean({});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Boolean](/en-US/docs/Glossary/Boolean)
- [Boolean primitives](/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- [Boolean data type](https://en.wikipedia.org/wiki/Boolean_data_type) on Wikipedia
