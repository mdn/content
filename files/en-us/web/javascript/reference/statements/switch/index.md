---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
tags:
  - JavaScript
  - Language feature
  - Reference
  - Statement
  - Web
browser-compat: javascript.statements.switch
---
{{jsSidebar("Statements")}}

The **`switch`** statement evaluates
an [expression](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators),
matching the expression's value to a `case` clause, and executes [statements](/en-US/docs/Web/JavaScript/Reference/Statements) associated
with that `case`, as well as statements in `case`s that follow
the matching `case`.

{{EmbedInteractiveExample("pages/js/statement-switch.html", "taller")}}

## Syntax

```js
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
```

- `expression`
  - : An expression whose result is matched against each `case` clause.
- `case valueN` {{optional_inline}}
  - : A `case` clause used to match against `expression`.
    If the `expression` matches the specified
    `valueN`, the statements inside the matching `case` clause are
    executed, and then the statements inside all `case` clauses which follow the matching `case` clause are executed — until either the end of the `switch` statement or a
    `break`.
- `default` {{optional_inline}}
  - : A `default` clause; if provided, this clause is executed if the value of
    `expression` doesn't match any of the `case` clauses.

## Description

A `switch` statement first evaluates its expression. It then looks for the
first `case` clause whose expression evaluates to the same value as the
result of the input expression
(using the [strict comparison](/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), `===`)
and transfers control to that clause, executing the associated statements.
(If multiple `case`s match the provided value, the
first `case` that matches is selected, even if the `case`s are not
equal to each other.)

If no matching `case` clause is found, the program looks for the optional
`default` clause, and if found, transfers control to that clause, executing
the associated statements. If no `default` clause is found, the program
continues execution at the statement following the end of `switch`. By
convention, the `default` clause is the last clause, but it does not need to
be so.

The optional
[`break`](/en-US/docs/Web/JavaScript/Reference/Statements/break)
statement associated with each `case` label ensures that the program breaks
out of `switch` once the matched statement is executed and continues
execution at the statement following `switch`. If `break` is
omitted, the program continues execution at the next statement in the
`switch` statement. The
[`break`](/en-US/docs/Web/JavaScript/Reference/Statements/break)
statement is not required if a
[`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return)
statement precedes it.

## Examples

### Using `switch`

In the following example, if `expr` evaluates to `Bananas`, the
program matches the value with case `case 'Bananas'` and executes the
associated statement. When `break` is encountered, the program breaks out of
`switch` and executes the statement following `switch`. If
`break` were omitted, the statement for the `case 'Cherries'`
would also be executed.

```js
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");
```

### What happens if I forgot a `break`?

If you forget a `break` then the script will run from the `case`
where the criterion is met and will run the cases after that **regardless if a
criterion was met**.

See example here:

```js
var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}
```

### Can I put a `default` between cases?

Yes, you can! JavaScript will drop you back to the `default` if it can't
find a match:

```js
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
  case 1:
    console.log('1');
}
```

It also works when you put `default` before all other `case`s.

### Methods for multi-criteria `case`

This technique is also commonly called fall-through.

#### Multi-`case` : single operation

This method takes advantage of the fact that if there is no break below a
`case` clause it will continue to execute the next `case` clause
regardless if the `case` meets the criteria.
(See the section [What happens if I forgot a `break`?](#what_happens_if_i_forgot_a_break))

This is an example of a single operation sequential `case` statement, where
four different values perform exactly the same.

```js
var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}
```

#### Multi-`case` : chained operations

This is an example of a multiple-operation sequential `case` clause, where,
depending on the provided integer, you can receive different output. This shows you that
it will traverse in the order that you put the `case` clauses, and it does
not have to be numerically sequential. In JavaScript, you can even mix in definitions of
strings into these `case` statements as well.

```js
var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
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

### Block-scope variables within `switch` statements

With ECMAScript 2015 (ES6) support made available in most modern browsers, there will
be cases where you would want to use {{jsxref("Statements/let", "let")}} and
{{jsxref("Statements/const", "const")}} statements to declare block-scoped variables.

Take a look at this example:

```js
const action = 'say_hello';
switch (action) {
  case 'say_hello':
    let message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    let message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
}
```

This example will output the error
`Uncaught SyntaxError: Identifier 'message' has already been declared` which
you were not probably expecting.

This is because the first `let message = 'hello';` conflicts with second let
statement `let message = 'hi';` even they're within their own separate case
clauses `case 'say_hello':` and `case 'say_hi':`. Ultimately, this
is due to both `let` statements being interpreted as duplicate declarations
of the same variable name within the same block scope.

We can easily fix this by wrapping our `case` clauses with brackets:

```js
const action = 'say_hello';
switch (action) {
  case 'say_hello': { // added brackets
    let message = 'hello';
    console.log(message);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    let message = 'hi';
    console.log(message);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
  } // added brackets
}
```

This code will now output `hello` in the console as it should, without any
errors at all.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/if...else", "if...else")}}
