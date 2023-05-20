---
title: Grouping operator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
page-type: javascript-operator
browser-compat: javascript.operators.grouping
---

{{jsSidebar("Operators")}}

The **grouping `( )`** operator controls the precedence of evaluation in expressions. It also acts as a container for arbitrary expressions in certain syntactic constructs, where ambiguity or syntax errors would otherwise occur.

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## Syntax

```js-nolint
(expression)
```

### Parameters

- `expression`
  - : Any [expression](/en-US/docs/Web/JavaScript/Reference/Operators) to be evaluated, including [comma-joined](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator) expressions.

## Description

The grouping operator consists of a pair of parentheses around an expression that groups the contents. The operator overrides the normal [operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence), so that operators with lower precedence (as low as the [comma](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator) operator) can be evaluated before an operator with higher precedence.

## Examples

### Using the grouping operator

Evaluating addition and subtraction before multiplication and division.

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// default precedence
a + b * c; // 7
// evaluated by default like this
a + (b * c); // 7

// now overriding precedence
// addition before multiplication
(a + b) * c; // 9

// which is equivalent to
a * c + b * c; // 9
```

Notice in these examples that the order in which the _operators_ evaluate has changed, but the order in which the _operands_ evaluate has not. For example, in this code, the function invocations `a()`, `b()`, and `c()` are evaluated left-to-right (the normal order of evaluation) before the operator order is considered.

```js
a() * (b() + c());
```

The function `a` will be called before the function `b`, which will be called before the function `c`. For more on operator precedence, see its [reference page](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Using the grouping operator to eliminate parsing ambiguity

An [expression statement](/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement) cannot start with the keyword `function`, because the parser would see it as the start of a [function declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function). This means the following [IIFE](/en-US/docs/Glossary/IIFE) syntax is invalid:

```js example-bad
function () {
  // code
}();
```

The grouping operator can be used to eliminate this ambiguity, since when the parser sees the left parenthesis, it knows that what follows must be an expression instead of a declaration.

```js
(function () {
  // code
})();
```

You may also use the [`void`](/en-US/docs/Web/JavaScript/Reference/Operators/void#immediately_invoked_function_expressions) operator to eliminate ambiguity.

In an [arrow function](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) concise body (one that directly returns an expression without the keyword `return`), the grouping operator can be used to return an object literal expression, because otherwise the left curly brace would be interpreted as the start of the function body.

```js
const f = () => ({ a: 1 });
```

If a property is accessed on a number literal, the [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) dot `.` may be ambiguous with a decimal point, unless the number already has a decimal point. You can wrap integer literals in parentheses to eliminate this ambiguity.

```js
(1).toString(); // "1"
```

<!-- TODO in the future we can add a decorator section -->

### Grouping operator and automatic semicolon insertion

The grouping operator can mitigate [automatic semicolon insertion](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) pitfalls. For example, the `return` keyword and the returned expression cannot have a line break in between:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

This code will return `undefined`, because a semicolon is inserted directly after the `return` keyword, which causes the function to return immediately without evaluating `a + b`. In case the returned expression is long and you want to keep it well-formatted, you may use the grouping operator to signify that the `return` keyword is followed by an expression and prevent semicolon insertion:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

However, grouping may also _introduce_ ASI hazards. When a line starts with a left parenthesis and the previous line ends with an expression, the parser will not insert a semicolon before the line break, because it could be the middle of a function call. For example:

```js-nolint example-bad
const a = 1
(1).toString()
```

This code would be parsed as:

```js
const a = 1(1).toString();
```

Which throws "TypeError: 1 is not a function". If your coding style does not use semicolons, remember that when a line starts with a left parenthesis, _prefix_ it with a semicolon. This practice is recommended by several formatters and/or style guides, including [Prettier](https://prettier.io/docs/en/rationale.html#semicolons) and [standard](https://standardjs.com/rules.html#semicolons).

```js-nolint example-good
const a = 1
;(1).toString()
```

For more advice on working with ASI, see its [reference section](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
