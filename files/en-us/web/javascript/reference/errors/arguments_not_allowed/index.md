---
title: "SyntaxError: arguments is not valid in fields"
slug: Web/JavaScript/Reference/Errors/Arguments_not_allowed
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "SyntaxError: arguments is not valid in fields" occurs when the [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) identifier is read in a class field initializer or in a static initialization block, outside of a non-[arrow function](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Message

```plain
SyntaxError: 'arguments' is not allowed in class field initializer or static initialization block (V8-based)
SyntaxError: arguments is not valid in fields (Firefox)
SyntaxError: Unexpected identifier 'arguments'. Cannot reference 'arguments' in class field initializer. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The `arguments` identifier cannot be read outside of a non-arrow function in a class body or a class static initialization block. Doing so is a syntax error.

## Examples

```js example-bad
function makeOne() {
    class C {
        args = { ...arguments };
    }
    return new C();
}
// SyntaxError: arguments is not valid in fields
```

```js example-bad
let CArgs;
class C {
    static {
        CArgs = arguments;
    }
}
// SyntaxError: arguments is not valid in fields
```

```js example-good
class C {
  args = {};
  constructor() {
    this.args = arguments; // You can use arguments in methods
  }
}
```

```js example-good
function makeOne() {
  const _arguments = arguments;
  class C {
    args = { ..._arguments }; // Only the identifier is forbidden
  }
  return new C();
}
```

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- [Static Initialization Blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
