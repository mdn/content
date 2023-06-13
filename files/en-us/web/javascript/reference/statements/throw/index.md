---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
page-type: javascript-statement
browser-compat: javascript.statements.throw
---

{{jsSidebar("Statements")}}

The **`throw`** statement throws a user-defined exception. Execution of the current function will stop (the statements after `throw` won't be executed), and control will be passed to the first [`catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block in the call stack. If no `catch` block exists among caller functions, the program will terminate.

{{EmbedInteractiveExample("pages/js/statement-throw.html")}}

## Syntax

```js-nolint
throw expression;
```

- `expression`
  - : The expression to throw.

## Description

The `throw` statement is valid in all contexts where statements can be used. Its execution generates an exception that penetrates through the call stack. For more information on error bubbling and handling, see [Control flow and error handling](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling). The `throw` keyword can be followed by any kind of expression, for example:

```js
throw error; // Throws a previously defined value (e.g. within a catch block)
throw new Error("Required"); // Throws a new Error object
```

In practice, the exception you throw should _always_ be an {{jsxref("Error")}} object — including an instance of an `Error` subclass, such as {{jsxref("RangeError")}} — because code that catches the error may expect certain properties, such as {{jsxref("Error/message", "message")}}, to be present on the caught value. For example, web APIs typically throw {{domxref("DOMException")}} instances, which inherit from `Error.prototype`.

### Automatic semicolon insertion

The syntax forbids any line terminator between the `throw` keyword and the expression, therefore introducing [automatic semicolon insertion (ASI)](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) hazards.

```js-nolint example-bad
throw
new Error();
```

is transformed by ASI into:

```js
throw;
new Error();
```

This is invalid code, because unlike {{jsxref("Statements/return", "return")}}, `throw` must be followed by an expression.

To avoid this problem (to prevent ASI), you could use parentheses:

```js-nolint
throw (
  new Error()
);
```

## Examples

### Throwing a user-defined error

This example defines a function that throws a {{jsxref("TypeError")}} if the input is not of the expected type.

```js
function isNumeric(x) {
  return ["number", "bigint"].includes(typeof x);
}

function sum(...values) {
  if (!values.every(isNumeric)) {
    throw new TypeError("Can only add numbers");
  }
  return values.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
try {
  sum("1", "2");
} catch (e) {
  console.error(e); // TypeError: Can only add numbers
}
```

### Throwing an existing object

This example calls a callback-based async function (which may be turned into a promise-based one with the {{jsxref("Promise/Promise", "Promise()")}} constructor) and throws an error if the callback receives an error.

```js
readFile("foo.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/try...catch", "try...catch")}}
- {{jsxref("Error")}}
