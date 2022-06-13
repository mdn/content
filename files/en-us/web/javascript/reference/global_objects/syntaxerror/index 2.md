---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
tags:
  - Class
  - JavaScript
  - Object
  - Reference
  - SyntaxError
browser-compat: javascript.builtins.SyntaxError
---
{{JSRef}}

The **`SyntaxError`** object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.

## Constructor

- {{jsxref("Global_Objects/SyntaxError/SyntaxError", "SyntaxError()")}}
  - : Creates a new `SyntaxError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "SyntaxError.prototype.message")}}
  - : Error message. Although ECMA-262 specifies that {{jsxref("SyntaxError")}} should provide its own `message` property, in [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "SyntaxError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "SyntaxError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "SyntaxError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "SyntaxError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "SyntaxError.prototype.stack")}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Examples

### Catching a SyntaxError

```js
try {
  eval('hoo bar');
} catch (e) {
  console.error(e instanceof SyntaxError);
  console.error(e.message);
  console.error(e.name);
  console.error(e.fileName);
  console.error(e.lineNumber);
  console.error(e.columnNumber);
  console.error(e.stack);
}
```

### Creating a SyntaxError

```js
try {
  throw new SyntaxError('Hello', 'someFile.js', 10);
} catch (e) {
  console.error(e instanceof SyntaxError); // true
  console.error(e.message);                // Hello
  console.error(e.name);                   // SyntaxError
  console.error(e.fileName);               // someFile.js
  console.error(e.lineNumber);             // 10
  console.error(e.columnNumber);           // 0
  console.error(e.stack);                  // @debugger eval code:3:9
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
