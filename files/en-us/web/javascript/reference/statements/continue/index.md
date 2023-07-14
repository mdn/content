---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
page-type: javascript-statement
browser-compat: javascript.statements.continue
---

{{jsSidebar("Statements")}}

The **`continue`** statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

{{EmbedInteractiveExample("pages/js/statement-continue.html")}}

## Syntax

```js-nolint
continue;
continue label;
```

- `label` {{optional_inline}}
  - : Identifier associated with the label of the statement.

## Description

In contrast to the {{jsxref("Statements/break", "break")}} statement, `continue` does not terminate the execution of the loop entirely, but instead:

- In a {{jsxref("Statements/while", "while")}} or {{jsxref("Statements/do...while", "do...while")}} loop, it jumps back to the condition.
- In a {{jsxref("Statements/for", "for")}} loop, it jumps to the update expression.
- In a {{jsxref("Statements/for...in", "for...in")}}, {{jsxref("Statements/for...of", "for...of")}}, or {{jsxref("Statements/for-await...of", "for await...of")}} loop, it jumps to the next iteration.

The `continue` statement can include an optional label that allows the program to jump to the next iteration of a labeled loop statement instead of the innermost loop. In this case, the `continue` statement needs to be nested within this labeled statement.

A `continue` statement, with or without a following label, cannot be used at the top level of a script, module, function's body, or [static initialization block](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), even when the function or class is further contained within a loop.

## Examples

### Using continue with while

The following example shows a {{jsxref("Statements/while", "while")}} loop that has a `continue` statement that executes when the value of `i` is 3. Thus, `n` takes on the values 1, 3, 7, and 12.

```js
let i = 0;
let n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
```

### Using continue with a label

In the following example, a statement labeled `checkIAndJ` contains a statement labeled `checkJ`. If `continue` is encountered, the program continues at the top of the `checkJ` statement. Each time `continue` is encountered, `checkJ` reiterates until its condition returns false. When false is returned, the remainder of the `checkIAndJ` statement is completed.

If `continue` had a label of `checkIAndJ`, the program would continue at the top of the `checkIAndJ` statement.

```js
let i = 0;
let j = 8;

checkIAndJ: while (i < 4) {
  console.log(`i: ${i}`);
  i += 1;

  checkJ: while (j > 4) {
    console.log(`j: ${j}`);
    j -= 1;

    if (j % 2 === 0) continue checkJ;
    console.log(`${j} is odd.`);
  }
  console.log(`i = ${i}`);
  console.log(`j = ${j}`);
}
```

Output:

```
i: 0

// start checkj
j: 8
7 is odd.
j: 7
j: 6
5 is odd.
j: 5
// end checkj

i = 1
j = 4

i: 1
i = 2
j = 4

i: 2
i = 3
j = 4

i: 3
i = 4
j = 4
```

### Unsyntactic continue statements

`continue` cannot be used within loops across function boundaries.

```js
for (let i = 0; i < 10; i++) {
  (() => {
    continue; // SyntaxError: Illegal continue statement: no surrounding iteration statement
  })();
}
```

When referencing a label, the labeled statement must contain the `continue` statement.

```js
label: for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  continue label; // SyntaxError: Undefined label 'label'
}
```

The labeled statement must be a loop.

```js
label: {
  for (let i = 0; i < 10; i++) {
    continue label; // SyntaxError: Illegal continue statement: 'label' does not denote an iteration statement
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/label", "label", "", 1)}}
