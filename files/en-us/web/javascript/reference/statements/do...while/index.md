---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
page-type: javascript-statement
browser-compat: javascript.statements.do_while
---

{{jsSidebar("Statements")}}

The **`do...while`** statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

{{InteractiveExample("JavaScript Demo: Statement - Do...While")}}

```js interactive-example
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```

## Syntax

```js-nolint
do
  statement
while (condition);
```

- `statement`
  - : A statement that is executed at least once and re-executed as long as the condition evaluates to true. You can use a [block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block) to execute multiple statements.
- `condition`
  - : An expression evaluated _after_ each pass through the loop. If this condition [evaluates to true](/en-US/docs/Glossary/Truthy), `statement` is re-executed. When condition [evaluates to false](/en-US/docs/Glossary/Falsy), execution continues with the statement after the `do...while` loop.

## Description

Like other looping statements, you can use [control flow statements](/en-US/docs/Web/JavaScript/Reference/Statements#control_flow) inside `statement`:

- {{jsxref("Statements/break", "break")}} stops `statement` execution and goes to the first statement after the loop.
- {{jsxref("Statements/continue", "continue")}} stops `statement` execution and re-evaluates `condition`.

The `do...while` statement syntax requires a semicolon at the end, but the [automatic semicolon insertion](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) process may insert one for you if the lack of a semicolon results in invalid syntax.

## Examples

### Using do...while

In the following example, the `do...while` loop iterates at least once and
reiterates until `i` is no longer less than 5.

```js
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
```

### Using false as do...while condition

Because the statement is always executed once, `do...while (false)` is the same as executing the statement itself. This is a common idiom in C-like languages, which allows you to use `break` to break out of branching logic early.

```js
do {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    break;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    break;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
} while (false);
// The rest of code
```

In JavaScript, there are some alternatives, such as using a [labeled block statement](/en-US/docs/Web/JavaScript/Reference/Statements/label) with `break`:

```js
handleFriends: {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    break handleFriends;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    break handleFriends;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

Or using a function:

```js
function handleFriends() {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    return;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    return;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

### Using an assignment as a condition

In some cases, it can make sense to use an assignment as a condition, such as this:

```js
do {
  // …
} while ((match = regexp.exec(str)));
```

But when you do, there are readability tradeoffs. The [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while) documentation has a [Using an assignment as a condition](/en-US/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) section with our recommendations.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
