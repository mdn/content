---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
page-type: javascript-language-feature
browser-compat: javascript.operators.null
sidebar: jssidebar
---

The **`null`** keyword refers to the [`null`](/en-US/docs/Web/JavaScript/Guide/Data_structures#null_type) [primitive value](/en-US/docs/Glossary/Primitive), which represents the intentional absence of any object value.

{{InteractiveExample("JavaScript Demo: null")}}

```js interactive-example
function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels("sky"));
// Expected output: 0
```

## Syntax

```js-nolint
null
```

## Description

The keyword `null` is a literal for the `null` value. Unlike {{jsxref("undefined")}}, which is a global variable, `null` is not an identifier but a syntax keyword.

`null` has the following behaviors:

- Like `undefined`, accessing any property on `null` throws a {{jsxref("TypeError")}} instead of returning `undefined` or searching prototype chains.
- Like `undefined`, `null` is treated as [falsy](/en-US/docs/Glossary/Falsy) for boolean operations, and [nullish](/en-US/docs/Glossary/Nullish) for [nullish coalescing](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) and [optional chaining](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
- The [`typeof null`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) result is `"object"`. This is a bug in JavaScript that cannot be fixed due to backward compatibility.
- Unlike `undefined`, {{jsxref("JSON.stringify()")}} can represent `null` faithfully.

JavaScript is unique to have two nullish values: `null` and `undefined`. Semantically, their difference is very minor: `undefined` represents the absence of a value, while `null` represents the absence of an _object_. For example, the end of the [prototype chain](/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) is `null` because the prototype chain is composed of objects; {{domxref("document.querySelector()")}} returns `null` if it doesn't match, because had it matched, the result would be an object. If you are designing an API, you should likely treat `null` and `undefined` as equivalent, because many codebases have stylistic rules about when to use `null` or `undefined` by default.

## Examples

### Difference between `null` and `undefined`

When checking for `null` or `undefined`, beware of the [differences between equality (==) and identity (===) operators](/en-US/docs/Web/JavaScript/Reference/Operators), as the former performs type-conversion.

```js
typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
- {{jsxref("Operators/void", "void")}}
