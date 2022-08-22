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
concat(str1, str2, /* …, */ strN)
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

The `concat()` method is very similar to the [addition/string concatenation operators](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`), but they have slightly different semantics. Addition would coerce the expression to a _primitive_, which calls [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) in priority; on the other hand, `concat()` would coerce the parameter to a _string_, which calls [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) in priority. If the parameter has a [`@@toPrimitive`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) method, addition calls it with `"default"` as hint, while `concat()` use `"string"`. This is important for objects that have different string and primitive representations — such as [Temporal](https://github.com/tc39/proposal-temporal), whose `valueOf()` method throws.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

## Examples

### Using concat()

The following example combines strings into a new string.

```js
const hello = 'Hello, ';
console.log(hello.concat('Kevin', '. Have a nice day.'));
// Hello, Kevin. Have a nice day.

const greetList = ['Hello', ' ', 'Venkat', '!'];
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
- [Addition operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
