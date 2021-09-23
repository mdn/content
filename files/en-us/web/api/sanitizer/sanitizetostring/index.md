---
title: Sanitizer.sanitizeToString()
slug: Web/API/Sanitizer/sanitizeToString
tags:
  - HTML Sanitizer API
  - Method
  - sanitize
browser-compat: api.Sanitizer.sanitizeToString
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`sanitizeToString()`** method of the
{{domxref("Sanitizer")}} interface returns a sanitized {{jsxref('String')}} from an
input, removing any offending elements or attributes.

## Syntax

```js
var String = sanitizer.sanitizeToString(input);
```

### Parameters

- `input`
  - : A {{jsxref('String')}} to be sanitized.

### Return value

A {{jsxref('String')}}.

### Exceptions

None.

## Examples

This example uses the `sanitizeToString` method to remove disallowed
`script` and `blink` elements from a string input.

```js
// our input string to clean
const stringToClean = 'Some text <b><i>with</i></b> <blink>tags</blink>, including a rogue script <script>alert(1)</script> def.';

const result = new Sanitizer().sanitizeToString(stringToClean);
console.log(result);
// Logs: "Some text <b><i>with</i></b> tags, including a rogue script def."
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
