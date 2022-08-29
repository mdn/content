---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
tags:
  - Class
  - InternalError
  - JavaScript
  - Object
  - Non-standard
browser-compat: javascript.builtins.InternalError
---
{{JSRef}}{{Non-standard_Header}}

The **`InternalError` object** indicates an error that occurred internally in the JavaScript engine.

Example cases are mostly when something is too large, e.g.:

- "too many switch cases",
- "too many parentheses in regular expression",
- "array initializer too large",
- "too much recursion".

## Constructor

- {{jsxref("InternalError/InternalError", "InternalError()")}} {{Non-standard_Inline}}
  - : Creates a new `InternalError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "InternalError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "InternalError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "InternalError.prototype.cause")}}
  - : Error cause. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "InternalError.prototype.fileName")}} {{Non-standard_Inline}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "InternalError.prototype.lineNumber")}} {{Non-standard_Inline}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "InternalError.prototype.columnNumber")}} {{Non-standard_Inline}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "InternalError.prototype.stack")}} {{Non-standard_Inline}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Examples

### Too much recursion

This recursive function runs 10 times, as per the exit condition.

```js
function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

Setting this condition to an extremely high value, may not work:

```js example-bad
function loop(x) {
  if (x >= 1000000000000)
    return;
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
