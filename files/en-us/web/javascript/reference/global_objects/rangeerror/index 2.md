---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
tags:
  - Class
  - JavaScript
  - Object
  - RangeError
browser-compat: javascript.builtins.RangeError
---
{{JSRef}}

The **`RangeError`** object indicates an error when a value is not in the set or range of allowed values.

## Description

A `RangeError` is thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value.

This can be encountered when:

- passing a value that is not one of the allowed string values to {{jsxref("String.prototype.normalize()")}}, or
- when attempting to create an array of an illegal length with the {{jsxref("Array")}} constructor, or
- when passing bad values to the numeric methods {{jsxref("Number.prototype.toExponential()")}}, {{jsxref("Number.prototype.toFixed()")}} or {{jsxref("Number.prototype.toPrecision()")}}.

## Constructor

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : Creates a new `RangeError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "RangeError.prototype.message")}}
  - : Error message. Although ECMA-262 specifies that {{jsxref("RangeError")}} should provide its own `message` property, in [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "RangeError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "RangeError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "RangeError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "RangeError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "RangeError.prototype.stack")}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Examples

### Using RangeError (for numeric values)

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

### Using RangeError (for non-numeric values)

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
