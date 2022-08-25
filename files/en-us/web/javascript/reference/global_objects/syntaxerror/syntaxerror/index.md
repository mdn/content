---
title: SyntaxError() constructor
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError
tags:
  - Constructor
  - JavaScript
  - Reference
  - SyntaxError
browser-compat: javascript.builtins.SyntaxError.SyntaxError
---
{{JSRef}}

The **`SyntaxError`** constructor creates a new error object
that represents an error when trying to interpret syntactically invalid code.

## Syntax

```js
new SyntaxError()
new SyntaxError(message)
new SyntaxError(message, options)
new SyntaxError(message, fileName)
new SyntaxError(message, fileName, lineNumber)

SyntaxError()
SyntaxError(message)
SyntaxError(message, options)
SyntaxError(message, fileName)
SyntaxError(message, fileName, lineNumber)
```

> **Note:** `SyntaxError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `SyntaxError` instance.

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error
- `options` {{optional_inline}}
  - : An object that has the following properties:
    - `cause` {{optional_inline}}
      - : A property indicating the specific cause of the error.
          When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : The name of the file containing the code that caused the exception
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : The line number of the code that caused the exception

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
