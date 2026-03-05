---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
page-type: javascript-global-property
browser-compat: javascript.builtins.undefined
sidebar: jssidebar
---

The **`undefined`** global property represents the primitive value [`undefined`](/en-US/docs/Web/JavaScript/Guide/Data_structures#undefined_type). It is one of JavaScript's {{Glossary("Primitive", "primitive types")}}.

{{InteractiveExample("JavaScript Demo: undefined")}}

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

The primitive value [`undefined`](/en-US/docs/Web/JavaScript/Guide/Data_structures#undefined_type).

{{js_property_attributes(0, 0, 0)}}

## Description

`undefined` is a property of the _global object_. That is, it is a variable in global scope.

In all non-legacy browsers, `undefined` is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.

A variable that has not been assigned a value is of type `undefined`. A function returns `undefined` if a value was not {{jsxref("Statements/return", "returned")}}. Accessing a property that does not exist also returns `undefined`. The {{jsxref("Operators/void", "void")}} operator always returns `undefined`.

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

You can use `undefined` and the strict equality and inequality operators to determine whether a variable has a value. In the following code, the variable `x` is not initialized, and the `if` statement evaluates to true.

```js
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}
```

> [!NOTE]
> The _strict equality_ operator (as opposed to the _loose equality_ operator) must be used here, because `x == undefined` also checks whether `x` is `null`, while strict equality doesn't. This is because `null` is not equivalent to `undefined`.
>
> See [Equality comparison and sameness](/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness) for details.

### typeof operator and undefined

{{jsxref("Operators/typeof", "typeof")}} can also determine whether a variable is `undefined`:

```js
let x;
if (typeof x === "undefined") {
  // these statements execute
}
```

One reason to use {{jsxref("Operators/typeof", "typeof")}} is that it does not throw an error if the variable does not exist in the current scope.

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

It also works with variables declared with `var` _after_ the check, because the declaration is hoisted to the top of the scope with value `undefined`.

```js
if (typeof x === "undefined") {
  // these statements execute
}
var x = 1;
```

This technique is usually only useful for testing global variables. You can know if a variable exists at any other scope (blocks, functions, modules, etc.) just by looking at the source code. The global scope is bound to the {{jsxref("globalThis", "global object", "", 1)}}, so checking the existence of a variable in the global context can be done by checking the existence of a property on the _global object_, such as by using the {{jsxref("Operators/in", "in")}} operator:

```js
if ("x" in window) {
  // These statements execute only if x is defined globally
}
```

However, none of the techniques above work if the variable is declared with `let`, `const`, or other lexical declarations. Using `typeof` before the line of declaration still produces a `ReferenceError`, due to the [temporal dead zone (TDZ)](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz).

```js example-bad
if (typeof z === "undefined") {
  // Uncaught ReferenceError: Cannot access 'z' before initialization
}
let z = 1;
```

Furthermore, `let` and `const` declarations do not create properties on the global object, so they cannot be checked with the `in` operator either.

```js example-bad
let z;
if ("z" in window) {
  // false, even if z is declared globally with let or const
}
```

If you want to share global variables across different scripts, it is more advisable to use `var` or explicitly attach them to the global object:

```js
window.myGlobalVar = "foo";
```

### void operator and undefined

The {{jsxref("Operators/void", "void")}} operator can also be used to produce the `undefined` value. This is very commonly seen in minified code because `void 0` is 3 bytes shorter and cannot be overridden. You should usually avoid this pattern in your own code.

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

- [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Guide/Data_structures)
- [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
