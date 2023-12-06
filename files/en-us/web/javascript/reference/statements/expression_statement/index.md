---
title: Expression statement
slug: Web/JavaScript/Reference/Statements/Expression_statement
page-type: javascript-statement
spec-urls: https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-expression-statement
---

{{jsSidebar("Statements")}}

An **expression statement** is an expression used in a place where a statement is expected. The expression is evaluated and its result is discarded — therefore, it makes sense only for expressions that have side effects, such as executing a function or updating a variable.

## Syntax

```js-nolint
expression;
```

- `expression`
  - : An arbitrary [expression](/en-US/docs/Web/JavaScript/Reference/Operators) to be evaluated. There are [certain expressions](#forbidden_expressions) that may be ambiguous with other statements and are thus forbidden.

## Description

Apart from the [dedicated statement syntaxes](/en-US/docs/Web/JavaScript/Reference/Statements), you can also use almost any [expression](/en-US/docs/Web/JavaScript/Reference/Operators) as a statement on its own. The expression statement syntax requires a semicolon at the end, but the [automatic semicolon insertion](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) process may insert one for you if the lack of a semicolon results in invalid syntax.

Because the expression is evaluated and then discarded, the result of the expression is not available. Therefore, the expression must have some side effect for it to be useful. Expression statements are commonly:

- Function calls (`console.log("Hello");`, `[1, 2, 3].forEach((i) => console.log(i));`)
- [Tagged template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)
- [Assignment expressions](/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators), including compound assignments
- [Increment and decrement operators](/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement)
- [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete)
- [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield) and [`yield*`](/en-US/docs/Web/JavaScript/Reference/Operators/yield*)

Others may also have side effects if they invoke [getters](/en-US/docs/Web/JavaScript/Reference/Functions/get) or trigger [type coercions](/en-US/docs/Web/JavaScript/Data_structures#type_coercion).

### Forbidden expressions

In order for an expression to be used as a statement, it must not be ambiguous with other statement syntaxes. Therefore, the expression must not start with any of the following tokens:

- `function`: which would be a [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function) or [`function*` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function*), not a [`function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function) or [`function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function*)
- `async function`: which would be an [`async function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) or [`async function*` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*), not an [`async function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/async_function) or [`async function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/async_function*)
- `class`: which would be a [`class` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/class), not a [`class` expression](/en-US/docs/Web/JavaScript/Reference/Operators/class)
- `let[`: which would be a [`let` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/let) with [array destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), not a [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) on a variable called `let` (`let` can only be an identifier in [non-strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode#extra_reserved_words))
- `{`: which would be a [block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block), not an [object literal](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

Therefore, all of the following are invalid:

```js-nolint example-bad
function foo() {
  console.log("foo");
}(); // SyntaxError: Unexpected token '('

// For some reason, you have a variable called `let`
var let = [1, 2, 3];
let[0] = 4; // SyntaxError: Invalid destructuring assignment target

{
  foo: 1,
  bar: 2, // SyntaxError: Unexpected token ':'
};
```

More dangerously, sometimes the code happens to be valid syntax, but is not what you intend.

```js-nolint example-bad
// For some reason, you have a variable called `let`
var let = [1, 2, 3];

function setIndex(index, value) {
  if (index >= 0) {
    // Intend to assign to the array `let`, but instead creates an extra variable!
    let[index] = value;
  }
}

setIndex(0, [1, 2]);
console.log(let); // [1, 2, 3]

// This is not an object literal, but a block statement,
// where `foo` is a label and `1` is an expression statement.
// This often happens in the console
{ foo: 1 };
```

To avoid these problems, you can use parentheses, so that the statement is unambiguously an expression statement.

```js example-good
(function foo() {
  console.log("foo");
})();
```

## Examples

### Avoiding control flow statements

You can avoid almost all use of control flow statements using expression statements. For example, `if...else` can be replaced with [ternary operators](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) and [logical operators](/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Iterative statements like `for` or `for...of` can be replaced with [array methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods).

```js
// Using control flow statements
function range(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

// Using expression statements
function range2(start, end) {
  start > end && ([start, end] = [end, start]);
  return Array.from({ length: end - start }, (_, i) => start + i);
}
```

> **Warning:** This only demonstrates a capability of the language. Excessive use of expression statements as a substitute for control-flow statements can make code much less readable.

## Specifications

{{Specifications}}

## See also

- [Statements and declarations](/en-US/docs/Web/JavaScript/Reference/Statements)
- [Expressions and operators](/en-US/docs/Web/JavaScript/Reference/Operators)
