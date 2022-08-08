---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
tags:
  - JavaScript
  - Language feature
  - Statement
browser-compat: javascript.statements.do_while
---
{{jsSidebar("Statements")}}

The **`do...while` statement** creates a loop that executes a
specified statement until the test condition evaluates to false. The condition is
evaluated after executing the statement, resulting in the specified statement executing
at least once.

{{EmbedInteractiveExample("pages/js/statement-dowhile.html")}}

## Syntax

```js
do
  statement
while (condition);
```

- `statement`
  - : A statement that is executed at least once and is re-executed each time the
    condition evaluates to true. To execute multiple statements within the loop, use a
    {{jsxref("Statements/block", "block", "", 1)}} statement (`{ /* ... */ }`) to
    group those statements.

- `condition`
  - : An expression evaluated after each pass through the loop. If `condition`
    [evaluates to true](/en-US/docs/Glossary/Truthy), the `statement` is re-executed. When
    `condition` [evaluates to false](/en-US/docs/Glossary/Falsy), control passes to the statement following
    the `do...while`.

    Note: Use the {{jsxref("Statements/break", "break")}} statement to stop a loop before `condition` evaluates
    to true.

## Examples

### Using `do...while`

In the following example, the `do...while` loop iterates at least once and
reiterates until `i` is no longer less than 5.

```js
let result = '';
let i = 0;
do {
  i += 1;
  result += `${i} `;
}
while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
```

### Using an assignment as a condition

In some cases, it can make sense to use an assignment as a condition — but when you do, there's a right way to do it, and a wrong way; the [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while) documentation has a [Using an assignment as a condition](/en-US/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) section with an example showing a general best-practice syntax you should know about and follow.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
