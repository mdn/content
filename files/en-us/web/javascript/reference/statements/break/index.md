---
title: break
slug: Web/JavaScript/Reference/Statements/break
tags:
  - JavaScript
  - Language feature
  - Reference
  - Statement
browser-compat: javascript.statements.break
---
{{jsSidebar("Statements")}}

The **`break` statement** terminates the current loop,
{{jsxref("Statements/switch", "switch")}}, or {{jsxref("Statements/label", "label", "", 1)}}
statement and transfers program control to the statement following the terminated
statement.

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## Syntax

```js
break;
break label;
```

- `label` {{optional_inline}}
  - : Identifier associated with the label of the statement. If the statement is not a
    loop or {{jsxref("Statements/switch", "switch")}}, this is required.

## Description

The `break` statement includes an optional label that allows the program to
break out of a labeled statement. The `break` statement needs to be nested
within the referenced label. The labeled statement can be any
{{jsxref("Statements/block", "block", "", 1)}} statement; it does not have to be
preceded by a loop statement.

A `break` statement, with or without a following label, cannot be used
within the body of a function that is itself nested within the current loop, switch, or
label statement that the `break` statement is intended to break out of.

## Examples

### break in while loop

The following function has a `break` statement that terminates the
{{jsxref("Statements/while", "while")}} loop when `i` is 3, and then returns
the value 3 \* `x`.

```js
function testBreak(x) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
```

### break in switch statements

The following code has a `break` statement that terminates the
{{jsxref("Statements/switch", "switch")}} statement when a case is matched and the
corresponding code has run.

```js
const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
```

### break in labeled blocks

The following code uses `break` statements with labeled blocks. A
`break` statement must be nested within any label it references. Notice that
`innerBlock` is nested within `outerBlock`.

```js
outerBlock: {
  innerBlock: {
    console.log('1');
    break outerBlock; // breaks out of both inner_block and outer_block
    console.log(':-('); // skipped
  }
  console.log('2'); // skipped
}
```

### break in labeled blocks that throw

The following code also uses `break` statements with labeled blocks, but
generates a `SyntaxError` because its `break` statement is within
`block1` but references `block2`. A `break` statement
must always be nested within any label it references.

```js example-bad
block1: {
  console.log('1');
  break block2; // SyntaxError: label not found
}

block2: {
  console.log('2');
}
```

### break within functions

`SyntaxError`s are also generated in the following code examples which use
`break` statements within functions that are nested within a loop, or labeled
block that the `break` statements are intended to break out of.

```js example-bad
function testBreak(x) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      (function () {
        break;
      })();
    }
    i += 1;
  }

  return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
```

```js example-bad
block_1: {
  console.log('1');
  (function () {
    break block_1; // SyntaxError: Undefined label 'block_1'
  })();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "label", "", 1)}}
- {{jsxref("Statements/switch", "switch")}}
