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

A class field initializer expression or a class static initialization block cannot read from its scope the `arguments` identifier. Doing so is a syntax error.

### Notes

- `arguments` can still be assigned in the above conditions:

  ```js example
  class C {
    arguments = 42;
  }
  ```

- This is true even if `arguments` is bound in a parent scope.
- A non-arrow function declared in the previous conditions will still bind and be able to read its own `arguments` identifier.

## Examples

```js example-bad
function makeOne() {
  class C {
    args = { ...arguments }; // SyntaxError: arguments is not valid in fields
  }
  return new C();
}
```

```js example-bad
let CArgs;
class C {
  static {
    CArgs = arguments; // SyntaxError: arguments is not valid in fields
  }
}
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
