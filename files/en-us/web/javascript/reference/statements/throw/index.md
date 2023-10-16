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

The `throw` statement is valid in all contexts where statements can be used. Its execution generates an exception that penetrates through the call stack. For more information on error bubbling and handling, see [Control flow and error handling](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling).

The `throw` keyword can be followed by any kind of expression, for example:

```js
throw error; // Throws a previously defined value (e.g. within a catch block)
throw new Error("Required"); // Throws a new Error object
```

In practice, the exception you throw should _always_ be an {{jsxref("Error")}} object or an instance of an `Error` subclass, such as {{jsxref("RangeError")}}. This is because code that catches the error may expect certain properties, such as {{jsxref("Error/message", "message")}}, to be present on the caught value. For example, web APIs typically throw {{domxref("DOMException")}} instances, which inherit from `Error.prototype`.

### Automatic semicolon insertion

The syntax forbids line terminators between the `throw` keyword and the expression to be thrown.

```js-nolint example-bad
throw
new Error();
```

The code above is transformed by [automatic semicolon insertion (ASI)](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) into:

```js-nolint
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

This example calls a callback-based async function, and throws an error if the callback receives an error.

```js
readFile("foo.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
```

Errors thrown this way are not catchable by the caller and will cause the program to crash unless (a) the `readFile` function itself catches the error, or (b) the program is running in a context that catches top-level errors. You can handle errors more naturally by using the {{jsxref("Promise/Promise", "Promise()")}} constructor.

```js
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

try {
  const data = await readFilePromise("foo.txt");
  console.log(data);
} catch (err) {
  console.error(err);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/try...catch", "try...catch")}}
- {{jsxref("Error")}}
