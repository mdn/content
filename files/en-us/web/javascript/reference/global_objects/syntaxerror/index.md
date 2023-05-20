---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
page-type: javascript-class
browser-compat: javascript.builtins.SyntaxError
---

{{JSRef}}

The **`SyntaxError`** object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.

`SyntaxError` is a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker/postMessage()", "postMessage()")}}.

`SyntaxError` is a subclass of {{jsxref("Error")}}.

## Constructor

- {{jsxref("SyntaxError/SyntaxError", "SyntaxError()")}}
  - : Creates a new `SyntaxError` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Error")}}_.

These properties are defined on `SyntaxError.prototype` and shared by all `SyntaxError` instances.

- {{jsxref("Object/constructor", "SyntaxError.prototype.constructor")}}
  - : The constructor function that created the instance object. For `SyntaxError` instances, the initial value is the {{jsxref("SyntaxError/SyntaxError", "SyntaxError")}} constructor.
- {{jsxref("Error/name", "SyntaxError.prototype.name")}}
  - : Represents the name for the type of error. For `SyntaxError.prototype.name`, the initial value is `"SyntaxError"`.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Error")}}_.

## Examples

### Catching a SyntaxError

```js
try {
  eval("hoo bar");
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
  throw new SyntaxError("Hello", "someFile.js", 10);
} catch (e) {
  console.error(e instanceof SyntaxError); // true
  console.error(e.message); // Hello
  console.error(e.name); // SyntaxError
  console.error(e.fileName); // someFile.js
  console.error(e.lineNumber); // 10
  console.error(e.columnNumber); // 0
  console.error(e.stack); // @debugger eval code:3:9
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
