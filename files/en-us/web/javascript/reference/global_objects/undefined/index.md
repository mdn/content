---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
page-type: javascript-global-property
browser-compat: javascript.builtins.undefined
---

{{jsSidebar("Objects")}}

The **`undefined`** global property represents the primitive
value [`undefined`](/en-US/docs/Web/JavaScript/Data_structures#undefined_type). It is one of JavaScript's
{{Glossary("Primitive", "primitive types")}}.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - undefined")}}

```js interactive-example
function test(t) {
  if (t === undefined) {
    return "Undefined value!";
  }
  return t;
}

let x;

console.log(test(x));
// Expected output: "Undefined value!"
```

## Value

The primitive value [`undefined`](/en-US/docs/Web/JavaScript/Data_structures#undefined_type).

{{js_property_attributes(0, 0, 0)}}

## Description

`undefined` is a property of the _global object_. That is, it is a variable in global scope.

In all non-legacy browsers, `undefined` is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.

A variable that has not been assigned a value is of type `undefined`. A
method or statement also returns `undefined` if the variable that is being
evaluated does not have an assigned value. A function returns `undefined` if
a value was not {{jsxref("Statements/return", "returned")}}.

> [!NOTE]
> While you can use `undefined` as an {{Glossary("identifier")}} (variable name) in any scope other than the global scope (because `undefined` is not a [reserved word](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)), doing so is a very bad idea that will make your code difficult to maintain and debug.
>
> ```js example-bad
> // DON'T DO THIS
>
> (() => {
>   const undefined = "foo";
>   console.log(undefined, typeof undefined); // foo string
> })();
>
> ((undefined) => {
>   console.log(undefined, typeof undefined); // foo string
> })("foo");
> ```

## Examples

### Strict equality and undefined

You can use `undefined` and the strict equality and inequality operators to
determine whether a variable has a value. In the following code, the variable
`x` is not initialized, and the `if` statement evaluates to true.

```js
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}
```

> [!NOTE]
> The _strict equality_ operator (as opposed to the
> _standard equality_ operator) must be used here, because
> `x == undefined` also checks whether `x` is `null`,
> while strict equality doesn't. This is because `null` is not equivalent to
> `undefined`.
>
> See [Equality comparison and sameness](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) for details.

### typeof operator and undefined

Alternatively, {{jsxref("Operators/typeof", "typeof")}} can be used:

```js
let x;
if (typeof x === "undefined") {
  // these statements execute
}
```

One reason to use {{jsxref("Operators/typeof", "typeof")}} is that it does not throw an
error if the variable has not been declared.

```js
// x has not been declared before
// evaluates to true without errors
if (typeof x === "undefined") {
  // these statements execute
}

// Throws a ReferenceError
if (x === undefined) {
}
```

However, there is another alternative. JavaScript is a statically scoped language, so
knowing if a variable is declared can be read by seeing whether it is declared in an
enclosing context.

The global scope is bound to the {{jsxref("globalThis", "global object", "", 1)}}, so
checking the existence of a variable in the global context can be done by checking the
existence of a property on the _global object_, using the
{{jsxref("Operators/in", "in")}} operator, for instance:

```js
if ("x" in window) {
  // These statements execute only if x is defined globally
}
```

### void operator and undefined

The {{jsxref("Operators/void", "void")}} operator is a third alternative.

```js
let x;
if (x === void 0) {
  // these statements execute
}

// y has not been declared before
if (y === void 0) {
  // throws Uncaught ReferenceError: y is not defined
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
- [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
