---
title: RangeError() constructor
slug: Web/JavaScript/Reference/Global_Objects/RangeError/RangeError
tags:
  - Constructor
  - JavaScript
  - Reference
browser-compat: javascript.builtins.RangeError.RangeError
---
{{JSRef}}

The **`RangeError()`** constructor creates an error
when a value is not in the set or range of allowed values.

## Syntax

```js
new RangeError()
new RangeError(message)
new RangeError(message, fileName)
new RangeError(message, fileName, lineNumber)
```

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `fileName` {{optional_inline}}
  - : The name of the file containing the code that caused the exception
- `lineNumber` {{optional_inline}}
  - : The line number of the code that caused the exception

## Examples

### Using `RangeError` (for numeric values)

```js
function check(n)
{
    if( !(n >= -500 && n <= 500) )
    {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

try
{
    check(2000)
}
catch(error)
{
    if (error instanceof RangeError)
    {
        // Handle the error
    }
}
```

### Using `RangeError` (for non-numeric values)

```js
function check(value)
{
    if(["apple", "banana", "carrot"].includes(value) === false)
    {
        throw new RangeError('The argument must be an "apple", "banana", or "carrot".')
    }
}

try
{
    check("cabbage")
}
catch(error)
{
    if(error instanceof RangeError)
    {
        // Handle the error
    }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.toExponential()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Number.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
