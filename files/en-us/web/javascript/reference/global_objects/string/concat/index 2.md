---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.concat
---
{{JSRef}}

The **`concat()`** method concatenates
the string arguments to the calling string and returns a new string.

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## Syntax

```js
concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)
```

### Parameters

- `strN`
  - : One or more strings to concatenate to `str`.

### Return value

A new string containing the combined text of the strings provided.

## Description

The `concat()` function concatenates the string arguments to the calling
string and returns a new string. Changes to the original string or the returned string
don't affect the other.

If the arguments are not of the type string, they are converted to string values before
concatenating.

## Performance

It is strongly recommended that the {{jsxref("Operators/Assignment_Operators",
  "assignment operators", "", 1)}} (`+`, `+=`) are used instead of
the `concat()` method.

## Examples

### Using concat()

The following example combines strings into a new string.

```js
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"

"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Operators/Assignment_Operators", "Assignment operators", "", 1)}}
