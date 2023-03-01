---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
page-type: javascript-language-feature
browser-compat: javascript.operators.null
---

{{jsSidebar("Operators")}}

The **`null`** value represents the intentional absence of any object value. It
is one of JavaScript's [primitive values](/en-US/docs/Glossary/Primitive) and
is treated as [falsy](/en-US/docs/Glossary/Falsy) for boolean operations.

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## Syntax

```js-nolint
null
```

## Description

The value `null` is written with a literal: `null`.
`null` is not an identifier for a property of the global object, like
{{jsxref("Global_Objects/undefined","undefined")}} can be. Instead,
`null` expresses a lack of identification, indicating that a variable points
to no object. In APIs, `null` is often retrieved in a place where an object
can be expected but no object is relevant.

```js
// foo does not exist. It is not defined and has never been initialized:
foo; //ReferenceError: foo is not defined
```

```js
// foo is known to exist now but it has no type or value:
const foo = null;
foo; //null
```

## Examples

### Difference between `null` and `undefined`

When checking for `null` or `undefined`, beware of the [differences between equality (==) and identity (===) operators](/en-US/docs/Web/JavaScript/Reference/Operators), as the former performs
type-conversion.

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
