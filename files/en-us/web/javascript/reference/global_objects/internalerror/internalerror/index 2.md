---
title: InternalError() constructor
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
tags:
  - Constructor
  - InternalError
  - JavaScript
  - Reference
browser-compat: javascript.builtins.InternalError.InternalError
---
{{JSRef}} {{non-standard_header}}

The **`InternalError()`** constructor creates an error that
indicates an error that occurred internally in the JavaScript engine. For example:
"**InternalError**: too much recursion".

## Syntax

```js
new InternalError()
new InternalError(message)
new InternalError(message, fileName)
new InternalError(message, fileName, lineNumber)
```

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `fileName` {{optional_inline}}
  - : The name of the file containing the code that caused the exception
- `lineNumber` {{optional_inline}}
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
