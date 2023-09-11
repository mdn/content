---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
page-type: javascript-class
status:
  - non-standard
browser-compat: javascript.builtins.InternalError
---

{{JSRef}}{{Non-standard_Header}}

The **`InternalError`** object indicates an error that occurred internally in the JavaScript engine.

Example cases are mostly when something is too large, e.g.:

- "too many switch cases",
- "too many parentheses in regular expression",
- "array initializer too large",
- "too much recursion".

`InternalError` is a subclass of {{jsxref("Error")}}.

## Constructor

- {{jsxref("InternalError/InternalError", "InternalError()")}} {{Non-standard_Inline}}
  - : Creates a new `InternalError` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Error")}}_.

These properties are defined on `InternalError.prototype` and shared by all `InternalError` instances.

- {{jsxref("Object/constructor", "InternalError.prototype.constructor")}}
  - : The constructor function that created the instance object. For `InternalError` instances, the initial value is the {{jsxref("InternalError/InternalError", "InternalError")}} constructor.
- {{jsxref("Error/name", "InternalError.prototype.name")}}
  - : Represents the name for the type of error. For `InternalError.prototype.name`, the initial value is `"InternalError"`.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Error")}}_.

## Examples

### Too much recursion

This recursive function runs 10 times, as per the exit condition.

```js
function loop(x) {
  // "x >= 10" is the exit condition
  if (x >= 10) return;

  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

Setting this condition to an extremely high value, may not work:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;

  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

For more information, see [InternalError: too much recursion.](/en-US/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
- [InternalError: too much recursion](/en-US/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
