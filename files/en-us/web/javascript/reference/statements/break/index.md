---
title: break
slug: Web/JavaScript/Reference/Statements/break
page-type: javascript-statement
browser-compat: javascript.statements.break
---

{{jsSidebar("Statements")}}

The **`break`** statement terminates the current loop or {{jsxref("Statements/switch", "switch")}} statement and transfers program control to the statement following the terminated statement. It can also be used to jump past a [labeled statement](/en-US/docs/Web/JavaScript/Reference/Statements/label) when used within that labeled statement.

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## Syntax

```js-nolint
break;
break label;
```

- `label` {{optional_inline}}
  - : Identifier associated with the label of the statement to break to. If the `break` statement is not nested within a loop or {{jsxref("Statements/switch", "switch")}}, then the label identifier is required.

## Description

When `break;` is encountered, the program breaks out of the innermost `switch` or [looping](/en-US/docs/Web/JavaScript/Reference/Statements#iterations) statement and continues executing the next statement after that.

When `break label;` is encountered, the program breaks out of the statement labeled with `label` and continues executing the next statement after that. The `break` statement needs to be nested within the referenced label. The labeled statement can be any statement (commonly a {{jsxref("Statements/block", "block", "", 1)}} statement); it does not have to be another loop statement.

A `break` statement, with or without a following label, cannot be used at the top level of a script, module, function's body, or [static initialization block](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), even when the function or class is further contained within a loop.

## Examples

### break in while loop

The following function has a `break` statement that terminates the {{jsxref("Statements/while", "while")}} loop when `i` is 3, and then returns the value `3 * x`.

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

The following code has a `break` statement that terminates the {{jsxref("Statements/switch", "switch")}} statement when a case is matched and the corresponding code has run.

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

The following code uses `break` statements with labeled blocks. By using `break outerBlock`, control is transferred to the end of the block statement marked as `outerBlock`.

```js
outerBlock: {
  innerBlock: {
    console.log("1");
    break outerBlock; // breaks out of both innerBlock and outerBlock
    console.log(":-("); // skipped
  }
  console.log("2"); // skipped
}
```

### Unsyntactic break statements

A `break` statement must be nested within any label it references. The following code also uses `break` statements with labeled blocks, but generates a syntax error because its `break` statement references `block2` but it's not nested within `block2`.

```js-nolint example-bad
block1: {
  console.log("1");
  break block2; // SyntaxError: label not found
}

block2: {
  console.log("2");
}
```

Syntax errors are also generated in the following code examples which use `break` statements within functions that are nested within a loop, or labeled block that the `break` statements are intended to break out of.

```js-nolint example-bad
function testBreak(x) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      (() => {
        break;
      })();
    }
    i += 1;
  }

  return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
```

```js-nolint example-bad
block1: {
  console.log("1");
  (() => {
    break block1; // SyntaxError: Undefined label 'block1'
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
