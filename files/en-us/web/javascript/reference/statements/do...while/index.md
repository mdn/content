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
    {{jsxref("Statements/block", "block", "", 1)}} statement (`{ ... }`) to
    group those statements.
- `condition`
  - : An expression evaluated after each pass through the loop. If `condition`
    evaluates to true, the `statement` is re-executed. When
    `condition` evaluates to false, control passes to the statement following
    the `do...while`.

## Examples

### Using `do...while`

In the following example, the `do...while` loop iterates at least once and
reiterates until `i` is no longer less than 5.

```js
var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
}
while (i > 0 && i < 5);
// Despite i == 0 this will still loop as it starts off without the test

console.log(result);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
