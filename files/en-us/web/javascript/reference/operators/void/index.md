---
title: void operator
slug: Web/JavaScript/Reference/Operators/void
page-type: javascript-operator
browser-compat: javascript.operators.void
---

{{jsSidebar("Operators")}}

The **`void`** operator evaluates the given
`expression` and then returns {{jsxref("undefined")}}.

{{EmbedInteractiveExample("pages/js/expressions-voidoperator.html", "taller")}}

## Syntax

```js-nolint
void expression
```

## Description

This operator allows evaluating expressions that produce a value into places where an
expression that evaluates to {{jsxref("undefined")}} is desired.

The `void` operator is often used merely to obtain the
`undefined` primitive value, usually using `void(0)` (which is
equivalent to `void 0`). In these cases, the global variable
{{jsxref("undefined")}} can be used.

It should be noted that [the precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
of the `void` operator should be taken into account and that
parentheses can help clarify the resolution of the expression following the
`void` operator:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Examples

### Immediately Invoked Function Expressions

When using an [immediately-invoked function expression](/en-US/docs/Glossary/IIFE), the `function` keyword cannot be at the immediate start of the [statement](/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement), because that would be parsed as a [function declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function), and would generate a syntax error when the parentheses representing invocation is reached — if the function is unnamed, it would immediately be a syntax error if the function is parsed as a declaration.

```js example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

In order for the function to be parsed as an [expression](/en-US/docs/Web/JavaScript/Reference/Operators/function), the `function` keyword has to appear at a position that only accepts expressions, not statements. This can be achieved be prefixing the keyword with a [unary operator](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators), which only accepts expressions as operands. Function invocation has higher [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) than unary operators, so it will be executed first. Its return value (which is almost always `undefined`) will be passed to the unary operator and then immediately discarded.

Of all the unary operators, `void` offers the best semantic, because it clearly signals that the return value of the function invocation should be discarded.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

This is a bit longer than wrapping the function expression in parentheses, which has the same effect of forcing the `function` keyword to be parsed as the start of an expression instead of a statement.

```js
(function () {
  console.log("Executed!");
})();
```

### JavaScript URIs

When a browser follows a `javascript:` URI, it evaluates the code in the URI
and then replaces the contents of the page with the returned value, unless the returned
value is {{jsxref("undefined")}}. The `void` operator can be used to return
`undefined`. For example:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> **Note:** `javascript:` pseudo protocol is discouraged over
> other alternatives, such as unobtrusive event handlers.

### Non-leaking Arrow Functions

Arrow functions introduce a short-hand braceless syntax that returns an expression.
This can cause unintended side effects by returning the result of a function call that
previously returned nothing. To be safe, when the return value of a function is not
intended to be used, it can be passed to the void operator to ensure that (for example)
changing APIs do not cause arrow functions' behaviors to change.

```js
button.onclick = () => void doSomething();
```

This ensures the return value of `doSomething` changing from
`undefined` to `true` will not change the behavior of this code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("undefined")}}
