---
title: Comma operator (,)
slug: Web/JavaScript/Reference/Operators/Comma_operator
page-type: javascript-operator
browser-compat: javascript.operators.comma
---

{{jsSidebar("Operators")}}

The **comma (`,`)** operator evaluates each of its operands (from left to right) and returns the value of the last operand. This is commonly used to provide multiple updaters to a [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for) loop's afterthought.

{{EmbedInteractiveExample("pages/js/expressions-commaoperators.html")}}

## Syntax

```js-nolint
expr1, expr2, expr3/* , … */
```

### Parameters

- `expr1`, `expr2`, `expr3`, …
  - : One or more expressions, the last of which is returned as the value of the compound expression.

## Description

You can use the comma operator when you want to include multiple expressions in a location that requires a single expression. The most common usage of this operator is to supply multiple updaters in a `for` loop.

Because all expressions except the last are evaluated and then discarded, these expressions must have side effects to be useful. Common expressions that have side effects are assignments, function calls, and [`++`](/en-US/docs/Web/JavaScript/Reference/Operators/Increment) and [`--`](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement) operators. Others may also have side effects if they invoke [getters](/en-US/docs/Web/JavaScript/Reference/Functions/get) or trigger [type coercions](/en-US/docs/Web/JavaScript/Data_structures#type_coercion).

The comma operator has the lowest [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) of all operators. If you want to incorporate a comma-joined expression into a bigger expression, you must parenthesize it.

The comma operator is completely different from commas used as syntactic separators in other locations, which include:

- Elements in array initializers (`[1, 2, 3]`)
- Properties in [object initializers](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) (`{ a: 1, b: 2 }`)
- Parameters in [function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function)/expressions (`function f(a, b) { … }`)
- Arguments in function calls (`f(1, 2)`)
- {{glossary("Binding")}} lists in [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const), or [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) declarations (`const a = 1, b = 2;`)
- Import lists in [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) declarations (`import { a, b } from "c";`)
- Export lists in [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export) declarations (`export { a, b };`)

In fact, although some of these places accept almost all expressions, they don't accept comma-joined expressions because that would be ambiguous with the syntactic comma separators. In this case, you must parenthesize the comma-joined expression. For example, the following is a `const` declaration that declares two variables, where the comma is not the comma operator:

```js-nolint
const a = 1, b = 2;
```

It is different from the following, where `b = 2` is an [assignment expression](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment), not a declaration. The value of `a` is `2`, the return value of the assignment, while the value of `1` is discarded:

```js-nolint
const a = (1, b = 2);
```

Comma operators cannot appear as [trailing commas](/en-US/docs/Web/JavaScript/Reference/Trailing_commas).

## Examples

### Using the comma operator in a for loop

If `a` is a 2-dimensional array with 10 elements on each side, the following code uses the comma operator to increment `i` and decrement `j` at once, thus printing the values of the diagonal elements in the array:

```js
const a = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, Math.random),
); // A 10×10 array of random numbers

for (let i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
```

### Using the comma operator to join assignments

Because commas have the lowest [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) — even lower than assignment — commas can be used to join multiple assignment expressions. In the following example, `a` is set to the value of `b = 3` (which is 3). Then, the `c = 4` expression evaluates and its result becomes the return value of the entire comma expression.

```js-nolint
let a, b, c;

a = b = 3, c = 4; // Returns 4
console.log(a); // 3 (left-most)

let x, y, z;

x = (y = 5, z = 6); // Returns 6
console.log(x); // 6 (right-most)
```

### Processing and then returning

Another example that one could make with the comma operator is processing before returning. As stated, only the last element will be returned but all others are going to be evaluated as well. So, one could do:

```js-nolint
function myFunc() {
  let x = 0;

  return (x += 1, x); // the same as return ++x;
}
```

This is especially useful for one-line [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). The following example uses a single [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to get both the sum of an array and the squares of its elements, which would otherwise require two iterations, one with [`reduce()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) and one with `map()`:

```js
let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares); // [1, 4, 9, 16, 25]
console.log(sum); // 15
```

### Discarding reference binding

The comma operator always returns the last expression as a _value_ instead of a _reference_. This causes some contextual information such as the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) binding to be lost. For example, a property access returns a reference to the function, which also remembers the object that it's accessed on, so that calling the property works properly. If the method is returned from a comma expression, then the function is called as if it's a new function value, and `this` is `undefined`.

```js-nolint
const obj = {
  value: "obj",
  method() {
    console.log(this.value);
  },
};

obj.method(); // "obj"
(obj.method)(); // "obj" (the grouping operator still returns the reference)
(0, obj.method)(); // undefined (the comma operator returns a new value)
```

You can enter [indirect eval](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) with this technique, because direct eval requires the function call to happen on the reference to the `eval()` function.

```js-nolint
globalThis.isDirectEval = false;

{
  const isDirectEval = true;
  console.log(eval("isDirectEval")); // true
  console.log((eval)("isDirectEval")); // true (the grouping operator still returns a reference to `eval`)
  console.log((0, eval)("isDirectEval")); // false (the comma operator returns a new value)
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`for` loop](/en-US/docs/Web/JavaScript/Reference/Statements/for)
