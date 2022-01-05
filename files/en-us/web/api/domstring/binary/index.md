---
title: Binary strings
slug: Web/API/DOMString/Binary
tags:
  - DOM
  - JavaScript
  - JavaScript typed arrays
  - Reference
  - String
---
{{jsxref("String", "JavaScript strings")}} are UTF-16 encoded strings. This means that each code unit requires two bytes of memory and is able to represent `65535` different code points. A subset of these strings is represented by UTF-16 strings containing only ASCII characters (i.e., characters whose code point does not exceed `127`). For instance, the string `"Hello world!"` belongs to the ASCII subset, while the string `"ÀÈÌÒÙ"` does not. A **binary string** is a concept similar to the ASCII subset, but instead of limiting the range to `127`, it allows code points until `255`. Its purpose however is not to represent characters, but binary data. The size of the data so represented is twice as big as it would be in normal binary format, however this will not be visible to the final user, since the length of JavaScript strings is calculated using two bytes as the unit.

Binary strings are not part of the JavaScript language design. However at least one native function requires binary strings as its input, {{domxref("btoa","btoa()")}}: invoking it on a string that contains codepoints greater than `255` will cause a `Character Out Of Range` error.

The reason that brought to use UTF-16 code units as placeholders for `uint8` numbers is that as web applications become more and more powerful (adding features such as audio and video manipulation, access to raw data using WebSockets, and so forth) it has become clear that there are times when it would be helpful for JavaScript code to be able to quickly and easily manipulate raw binary data.

In the past, this had to be simulated by treating the raw data as a [string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "JavaScript/Reference/Global Objects/String") and using the [`charCodeAt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt "JavaScript/Reference/Global Objects/String/charCodeAt") method to read the bytes from the data buffer (i.e., using binary strings). However, this is slow and error-prone, due to the need for multiple conversions (especially if the binary data is not actually byte-format data, but, for example, 32-bit integers or floats).

[JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays) provide a mechanism for accessing raw binary data much more efficiently.

## See also

- [Typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- [`DOMString`](/en-US/docs/Web/API/DOMString)
- [String](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
