---
title: InternalError() constructor
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
tags:
  - Constructor
  - InternalError
  - JavaScript
  - Reference
  - Non-standard
browser-compat: javascript.builtins.InternalError.InternalError
---
{{JSRef}}{{Non-standard_Header}}

The **`InternalError()`** constructor creates an error that indicates an error that occurred internally in the JavaScript engine.

## Syntax

```js
new InternalError()
new InternalError(message)
new InternalError(message, options)
new InternalError(message, fileName)
new InternalError(message, fileName, lineNumber)

InternalError()
InternalError(message)
InternalError(message, options)
InternalError(message, fileName)
InternalError(message, fileName, lineNumber)
```

> **Note:** `InternalError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `InternalError` instance.

### Parameters

- `message` {{Optional_Inline}}
  - : Human-readable description of the error.
- `options` {{Optional_Inline}}
  - : An object that has the following properties:
    - `cause` {{Optional_Inline}}
      - : A property indicating the specific cause of the error.
          When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` {{Optional_Inline}} {{Non-standard_Inline}}
  - : The name of the file containing the code that caused the exception
- `lineNumber` {{Optional_Inline}} {{Non-standard_Inline}}
  - : The line number of the code that caused the exception

## Examples

### Creating a new InternalError

```js
new InternalError("Engine failure");
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
