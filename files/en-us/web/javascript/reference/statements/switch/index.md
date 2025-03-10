---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
page-type: javascript-statement
browser-compat: javascript.statements.switch
---

{{jsSidebar("Statements")}}

The **`switch`** statement evaluates an [expression](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators), matching the expression's value against a series of `case` clauses, and executes [statements](/en-US/docs/Web/JavaScript/Reference/Statements) after the first `case` clause with a matching value, until a `break` statement is encountered. The `default` clause of a `switch` statement will be jumped to if no `case` matches the expression's value.

{{InteractiveExample("JavaScript Demo: Statement - Switch", "taller")}}

```js interactive-example
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

## Syntax

```js-nolint
switch (expression) {
  case caseExpression1:
    statements
  case caseExpression2:
    statements
  // …
  case caseExpressionN:
    statements
  default:
    statements
}
```

- `expression`
  - : An expression whose result is matched against each `case` clause.
- `caseExpressionN` {{optional_inline}}
  - : A `case` clause used to match against `expression`. If the value of `expression` matches the value of any `caseExpressionN`, execution starts from the first statement after that `case` clause until either the end of the `switch` statement or the first encountered `break`.
- `default` {{optional_inline}}
  - : A `default` clause; if provided, this clause is executed if the value of `expression` doesn't match any of the `case` clauses. A `switch` statement can only have one `default` clause.

## Description

A `switch` statement first evaluates its expression. It then looks for the first `case` clause whose expression evaluates to the same value as the result of the input expression (using the [strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) comparison) and transfers control to that clause, executing all statements following that clause.

The clause expressions are only evaluated when necessary — if a match is already found, subsequent `case` clause expressions will not be evaluated, even when they will be visited by [fall-through](#breaking_and_fall-through).

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// Only logs 1
```

If no matching `case` clause is found, the program looks for the optional `default` clause, and if found, transfers control to that clause, executing statements following that clause. If no `default` clause is found, the program continues execution at the statement following the end of `switch`. By convention, the `default` clause is the last clause, but it does not need to be so. A `switch` statement may only have one `default` clause; multiple `default` clauses will result in a {{jsxref("SyntaxError")}}.

### Breaking and fall-through

You can use the [`break`](/en-US/docs/Web/JavaScript/Reference/Statements/break) statement within a `switch` statement's body to break out early, often when all statements between two `case` clauses have been executed. Execution will continue at the first statement following `switch`.

If `break` is omitted, execution will proceed to the next `case` clause, even to the `default` clause, regardless of whether the value of that clause's expression matches. This behavior is called "fall-through".

```js
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1
```

In the appropriate context, other control-flow statements also have the effect of breaking out of the `switch` statement. For example, if the `switch` statement is contained in a function, then a [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return) statement terminates the execution of the function body and therefore the `switch` statement. If the `switch` statement is contained in a loop, then a [`continue`](/en-US/docs/Web/JavaScript/Reference/Statements/continue) statement stops the `switch` statement and jumps to the next iteration of the loop.

### Lexical scoping

The `case` and `default` clauses are like [labels](/en-US/docs/Web/JavaScript/Reference/Statements/label): they indicate possible places that control flow may jump to. However, they don't create lexical [scopes](/en-US/docs/Glossary/Scope) themselves (neither do they automatically break out — as demonstrated above). For example:

```js-nolint example-bad
const action = "say_hello";
switch (action) {
  case "say_hello":
    const message = "hello";
    console.log(message);
    break;
  case "say_hi":
    const message = "hi";
    console.log(message);
    break;
  default:
    console.log("Empty action received.");
}
```

This example will output the error "Uncaught SyntaxError: Identifier 'message' has already been declared", because the first `const message = 'hello';` conflicts with the second `const message = 'hi';` declaration, even when they're within their own separate case clauses. Ultimately, this is due to both `const` declarations being within the same block scope created by the `switch` body.

To fix this, whenever you need to use `let` or `const` declarations in a `case` clause, wrap it in a block.

```js
const action = "say_hello";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}
```

This code will now output `hello` in the console as it should, without any errors.

## Examples

### Using switch

In the following example, if `expr` evaluates to `Bananas`, the program matches the value with case `case 'Bananas'` and executes the associated statement. When `break` is encountered, the program breaks out of `switch` and executes the statement following `switch`. If `break` were omitted, the statement for the `case 'Cherries'` would also be executed.

```js
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");
```

### Putting the default clause between two case clauses

If no match is found, execution will start from the `default` clause, and execute all statements after that.

```js
const foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}
```

It also works when you put `default` before all other `case` clauses.

### Taking advantage of fall-through

This method takes advantage of the fact that if there is no `break` below a `case` clause, execution will continue to the next `case` clause regardless if that `case` meets the criteria.

The following is an example of a single operation sequential `case` statement, where four different values perform exactly the same.

```js
const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}
```

The following is an example of a multiple-operation sequential `case` clause, where, depending on the provided integer, you can receive different output. This shows you that it will traverse in the order that you put the `case` clauses, and it does not have to be numerically sequential. In JavaScript, you can even mix in definitions of strings into these `case` statements as well.

```js
const foo = 1;
let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
```

The output from this example:

| Value                                                 | Log text                          |
| ----------------------------------------------------- | --------------------------------- |
| `foo` is `NaN` or not `1`, `2`, `3`, `4`, `5`, or `0` | Please pick a number from 0 to 5! |
| `0`                                                   | Output: So What Is Your Name?     |
| `1`                                                   | Output: What Is Your Name?        |
| `2`                                                   | Output: Your Name?                |
| `3`                                                   | Output: Name?                     |
| `4`                                                   | Output: ?                         |
| `5`                                                   | Output: !                         |

### An alternative to if...else chains

You may often find yourself doing a series of [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) matches.

```js
if ("fetch" in globalThis) {
  // Fetch a resource with fetch
} else if ("XMLHttpRequest" in globalThis) {
  // Fetch a resource with XMLHttpRequest
} else {
  // Fetch a resource with some custom AJAX logic
}
```

This pattern is not doing a sequence of `===` comparisons, but you can still convert it to a `switch` construct.

```js
switch (true) {
  case "fetch" in globalThis:
    // Fetch a resource with fetch
    break;
  case "XMLHttpRequest" in globalThis:
    // Fetch a resource with XMLHttpRequest
    break;
  default:
    // Fetch a resource with some custom AJAX logic
    break;
}
```

The `switch (true)` pattern as an alternative to `if...else` is especially useful if you want to utilize the fall-through behavior.

```js
switch (true) {
  case isSquare(shape):
    console.log("This shape is a square.");
  // Fall-through, since a square is a rectangle as well!
  case isRectangle(shape):
    console.log("This shape is a rectangle.");
  case isQuadrilateral(shape):
    console.log("This shape is a quadrilateral.");
    break;
  case isCircle(shape):
    console.log("This shape is a circle.");
    break;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/if...else", "if...else")}}
