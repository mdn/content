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

A class field initializer expression or a class static initialization block does not have `arguments` in its scope. Trying to access it is a syntax error.

- This is true even if `arguments` is bound in a parent scope (such as when the class is nested in a non-arrow function).
- A non-arrow function declared within this scope will still bind its own `arguments` and read it normally.

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
    this.args = arguments; // You can use arguments in constructors
  }
  myMethod() {
    this.args = arguments; // You can also use it in methods
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
- [Public class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [Static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
