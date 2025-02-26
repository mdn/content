---
title: "SyntaxError: setter functions must have one argument"
slug: Web/JavaScript/Reference/Errors/Setter_one_argument
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "setter functions must have one argument" occurs when a [setter](/en-US/docs/Web/JavaScript/Reference/Functions/get) is declared and the parameter list is not consisted of exactly one formal parameter.

## Message

```plain
SyntaxError: Setter must have exactly one formal parameter. (V8-based)
SyntaxError: Setter function argument must not be a rest parameter (V8-based)
SyntaxError: setter functions must have one argument (Firefox)
SyntaxError: Unexpected token ','. setter functions must have one parameter. (Safari)
SyntaxError: Unexpected token '...'. Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The [`set`](/en-US/docs/Web/JavaScript/Reference/Functions/set) property syntax looks like a function, but it is stricter and not all function syntax is allowed. A setter is always invoked with exactly one argument, so defining it with any other number of parameters is likely an error. This parameter can be [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) or have a [default value](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), but it cannot be a [rest parameter](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

Note that this error only applies to property setters using the `set` syntax. If you define the setter using {{jsxref("Object.defineProperty()")}}, etc., the setter is defined as a normal function, although it's likely still an error if the setter expects any other number of arguments, as it will be called with exactly one.

## Examples

### Invalid cases

```js-nolint example-bad
const obj = {
  set value() {
    this._value = Math.random();
  },
};
```

### Valid cases

```js example-good
// You must declare one parameter, even if you don't use it
const obj = {
  set value(_ignored) {
    this._value = Math.random();
  },
};

// You can also declare a normal method instead
const obj = {
  setValue() {
    this._value = Math.random();
  },
};
```

## See also

- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [`set`](/en-US/docs/Web/JavaScript/Reference/Functions/set)
