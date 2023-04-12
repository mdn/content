---
title: while
slug: Web/JavaScript/Reference/Statements/while
page-type: javascript-statement
browser-compat: javascript.statements.while
---

{{jsSidebar("Statements")}}

The **`while`** statement creates a loop that executes a specified statement
as long as the test condition evaluates to true. The condition is evaluated before
executing the statement.

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## Syntax

```js-nolint
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
    To execute multiple statements within the loop, use a {{jsxref("Statements/block", "block", "", 1)}} statement
    (`{ /* ... */ }`) to group those statements.

    Note: Use the {{jsxref("Statements/break", "break")}} statement to stop a loop before `condition` evaluates
    to true.

## Examples

### Using while

The following `while` loop iterates as long as `n` is less than
three.

```js
let n = 0;
let x = 0;

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

### Using an assignment as a condition

In some cases, it can make sense to use an assignment as a condition — but when you do, there's a best-practice syntax you should know about and follow.

Consider the following example, which iterates over a document's comments, logging them to the console.

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

That's not completely a good-practice example, due to the following line specifically:

```js example-bad
while (currentNode = iterator.nextNode()) {
```

The _effect_ of that line is fine — in that, each time a comment node is found:

1. `iterator.nextNode()` returns that comment node, which gets assigned to `currentNode`.
2. The value of `currentNode = iterator.nextNode()` is therefore [truthy](/en-US/docs/Glossary/Truthy).
3. So the `console.log()` call executes and the loop continues.

…and then, when there are no more comment nodes in the document:

1. `iterator.nextNode()` returns [null](/en-US/docs/Web/JavaScript/Reference/Operators/null).
2. The value of `currentNode = iterator.nextNode()` is therefore also `null`, which is [falsy](/en-US/docs/Glossary/Truthy).
3. So the loop ends.

But although the code _works_ as expected, the problem with that particular line is: conditions typically use [comparison operators](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators) such as `===`, but the `=` in that line isn't a comparison operator — instead, it's an [assignment operator](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators). So that `=` _looks like_ it's a typo for `===` — even though it's _not_ actually a typo.

Therefore, in cases like that one, some [IDEs](https://en.wikipedia.org/wiki/Integrated_development_environment) and [code-linting tools](/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain#code_linting_tools) such as ESLint and JSHint — in order to help you catch a possible typo so that you can fix it — will report a warning such as the following:

> Expected a conditional expression and instead saw an assignment.

But there's a best-practice way to avoid that warning: Make the code more-explicitly indicate it intends the condition to be whether the value of the `currentNode = iterator.nextNode()` assignment is truthy. And you do that minimally by putting additional parentheses as a [grouping operator](/en-US/docs/Web/JavaScript/Reference/Operators/Grouping) around the assignment:

```js
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

But the real best practice is to go a step further and make the code even more clear — by adding a comparison operator to turn the condition into an explicit comparison:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode()) !== null) {
  console.log(currentNode.textContent.trim());
}
```

Along with preventing any warnings in IDEs and code-linting tools, what that code is actually doing will be much more obvious to anybody coming along later who needs to read and understand it or modify it.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
