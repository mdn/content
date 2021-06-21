---
title: Error() constructor
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
tags:
- Constructor
- JavaScript
- Reference
browser-compat: javascript.builtins.Error.Error
---
{{JSRef}}

The **`Error`** constructor creates an error object.

## Syntax

```js
new Error()
new Error(message)
new Error(message, fileName)
new Error(message, fileName, lineNumber)
```

### Parameters

- `message`{{Optional_Inline}}
  - : A human-readable description of the error.
- `fileName` {{Optional_Inline}}{{Non-standard_inline}}
  - : The value for the `fileName` property on the created `Error` object.
    Defaults to the name of the file containing the code that called the
    `Error()` constructor.
- `lineNumber` {{Optional_Inline}}{{Non-standard_inline}}
  - : The value for the `lineNumber` property on the created `Error` object.
    Defaults to the line number containing the `Error()` constructor invocation.

## Examples

### Function call or new construction

When `Error` is used like a function -- without
{{JSxRef("Operators/new",
  "new")}}, it will return an `Error`
object. Therefore, a mere call to `Error` will produce the same output that
constructing an `Error` object via the `new` keyword would.

```js
// this...
const x = Error('I was created using a function call!')

// ...has the same functionality as this.
const y = new Error('I was constructed via the "new" keyword!')
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("Statements/throw", "throw")}}
- {{JSxRef("Statements/try...catch", "try...catch")}}
