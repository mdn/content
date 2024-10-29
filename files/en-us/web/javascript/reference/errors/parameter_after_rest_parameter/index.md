---
title: "SyntaxError: parameter after rest parameter"
slug: Web/JavaScript/Reference/Errors/Parameter_after_rest_parameter
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "parameter after rest parameter" occurs when a [rest parameter](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) is followed by anything else in a parameter list, including another rest parameter, a formal parameter, or a [trailing comma](/en-US/docs/Web/JavaScript/Reference/Trailing_commas).

## Message

```plain
SyntaxError: Rest parameter must be last formal parameter (V8-based)
SyntaxError: parameter after rest parameter (Firefox)
SyntaxError: Unexpected token ','. Rest parameter should be the last parameter in a function declaration. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

A rest parameter must be the last parameter in a function definition. This is because the rest parameter collects all the remaining arguments passed to the function, so it doesn't make sense to have any parameters after it. The next non-whitespace character must be the closing parenthesis of the parameter list.

## Examples

### Invalid cases

```js-nolint example-bad
function replacer(match, ...groups, offset, string) {}

function doSomething(
  arg1,
  arg2,
  ...otherArgs, // Accidental trailing comma
) {}
```

### Valid cases

```js example-good
function replacer(match, ...args) {
  const offset = args.at(-2);
  const string = args.at(-1);
}

function doSomething(arg1, arg2, ...otherArgs) {}
```

## See also

- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [Rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
