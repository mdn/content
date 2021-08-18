---
title: while
slug: Web/JavaScript/Reference/Statements/while
tags:
  - JavaScript
  - Language feature
  - Statement
  - while
browser-compat: javascript.statements.while
---
{{jsSidebar("Statements")}}

The **while statement** creates a loop that executes a specified statement
as long as the test condition evaluates to true. The condition is evaluated before
executing the statement.

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## Syntax

```js
while (condition)
  statement
```

- `condition`
  - : An expression evaluated before each pass through the loop. If this condition
    [evaluates to true](/en-US/docs/Glossary/Truthy), `statement` is executed. When condition
    [evaluates to false](/en-US/docs/Glossary/Falsy), execution continues with the statement after the
    `while` loop.
- `statement`

  - : An optional statement that is executed as long as the condition evaluates to true.
    To execute multiple statements within the loop, use a [block](/en-US/docs/JavaScript/Reference/Statements/block) statement
    (`{ ... }`) to group those statements.

    Note: Use the `break` statement to stop a loop before condition evaluates
    to true.

## Examples

### Using while

The following `while` loop iterates as long as `n` is less than
three.

```js
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

Each iteration, the loop increments `n` and adds it to `x`.
Therefore, `x` and `n` take on the following values:

- After the first pass: `n` = 1 and `x` = 1
- After the second pass: `n` = 2 and `x` = 3
- After the third pass: `n` = 3 and `x` = 6

After completing the third pass, the condition `n` < 3 is no longer true,
so the loop terminates.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
