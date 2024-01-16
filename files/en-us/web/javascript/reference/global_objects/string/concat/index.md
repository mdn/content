---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.concat
---

{{JSRef}}

The **`concat()`** method of {{jsxref("String")}} values concatenates
the string arguments to this string and returns a new string.

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## Syntax

```js-nolint
concat()
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)
```

### Parameters

- `str1`, …, `strN`
  - : One or more strings to concatenate to `str`.

### Return value

A new string containing the combined text of the strings provided.

## Description

The `concat()` function concatenates the string arguments to the calling
string and returns a new string. Changes to the original string or the returned string
don't affect the other.

If the arguments are not of the type string, they are converted to string values before
concatenating.

The `concat()` method is very similar to the [addition/string concatenation operators](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`), except that `concat()` [coerces its arguments directly to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), while addition coerces its operands to primitives first. For more information, see the reference page for the [`+` operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition).

## Examples

### Using concat()

The following example combines strings into a new string.

```js
const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.concat()")}}
- [Addition (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
