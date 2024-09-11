---
title: "SyntaxError: rest parameter may not have a default"
slug: Web/JavaScript/Reference/Errors/Rest_with_default
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "rest parameter may not have a default" occurs when a [rest parameter](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) has a [default value](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters). Because the rest parameter always creates an array, the default value would never apply.

## Message

```plain
SyntaxError: Rest parameter may not have a default initializer (V8-based)
SyntaxError: rest parameter may not have a default (Firefox)
SyntaxError: Unexpected token '='. Expected a ')' or a ',' after a parameter declaration. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

A [default parameter](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) gives a parameter a default value if the argument is not passed or passed as `undefined`. A [rest parameter](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) collects all the remaining arguments passed to the function and always creates an array. Therefore, it doesn't make sense to have a default value for a rest parameter.

## Examples

### Invalid cases

```js-nolint example-bad
function doSomething(...args = []) {}
```

### Valid cases

```js example-good
function doSomething(...args) {
  // args is always an array
}
```

## See also

- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [Default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
