---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
tags:
  - Boolean
  - Class
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Boolean
---
{{JSRef}}

The **`Boolean`** object is an object wrapper for a boolean value.

## Description

The value passed as the first parameter is converted to a boolean value, if necessary. If the value is omitted or is `0`, `-0`, [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}}, or the empty string (`""`), the object has an initial value of `false`. All other values, including any object, an empty array (`[]`), or the string `"false"`, create an object with an initial value of `true`.

Do not confuse the {{Glossary("Primitive", "primitive")}} `Boolean` values `true` and `false` with the `true` and `false` values of the `Boolean` object.

**Any** object of which the value is not {{jsxref("undefined")}} or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), including a `Boolean` object whose value is `false`, evaluates to `true` when passed to a conditional statement. For example, the condition in the following {{jsxref("Statements/if...else", "if")}} statement evaluates to `true`:

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

Do not use a `Boolean` object to convert a non-boolean value to a boolean value. To perform this task, instead, use `Boolean` as a function, or a [double NOT operator](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!):

```js
const good = Boolean(expression);    // use this
const good2 = !!(expression);        // or this
const bad = new Boolean(expression); // don't use this!
```

If you specify any object, including a `Boolean` object whose value is `false`, as the initial value of a `Boolean` object, the new `Boolean` object has a value of `true`.

```js
const myFalse = new Boolean(false);   // initial value of false
const g = Boolean(myFalse);           // initial value of true
const myString = new String('Hello'); // string object
const s = Boolean(myString);          // initial value of true
```

Do not use a `Boolean` object in place of a `Boolean` primitive.

> **Note:** When the non-standard property [`document.all`](/en-US/docs/Web/API/Document#properties) is used as an argument for this constructor, the result is a `Boolean` object with the value `false`. This property is legacy and non-standard and should not be used.

When using `==` to loosely compare an object to a boolean primitive, it's important to have a clear understanding of what's actually being compared. Consider the following example:

```js
if ([]) { console.log("[] is truthy")}         // logs "[] is truthy"
if ([] == false) { console.log("[] == false")} // logs "[] == false"
```

The reason for `[] == false` even though `[]` is truthy is: the comparison `[] == false` compares the *value* of `[]` to `false`. And to get the *value* of `[]`, the JavaScript engine first calls `[].toString()`. That results in `""`, and *that* is what's actually compared to `false`. In other words, `[] == false` is equivalent to `"" == false`. And `""` is falsy — and so that's what explains the behavior in the example.

## Constructor

- {{jsxref("Global_Objects/Boolean/Boolean", "Boolean()")}}
  - : Creates a new `Boolean` object.

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
const bEmptyString = new Boolean('');
const bfalse = new Boolean(false);
```

### Creating Boolean objects with an initial value of true

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
- [Boolean primitives](/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- [Boolean data type (Wikipedia)](https://en.wikipedia.org/wiki/Boolean_data_type)
