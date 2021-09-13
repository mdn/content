---
title: Sanitizer
slug: Web/API/Sanitizer
tags:
  - HTML Sanitizer API
  - Interface
  - sanitize
browser-compat: api.Sanitizer
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`Sanitizer`** interface of the {{domxref('HTML Sanitizer API')}} allows developers to take untrusted strings of HTML, and sanitize them for safe insertion into a document’s DOM.

## Constructors

- {{domxref('Sanitizer.Sanitizer')}}
  - : Creates and returns a `Sanitizer` object.

## Methods

- {{domxref('Sanitizer.sanitizeToString()')}}
  - : Returns a sanitized {{jsxref('String')}} from an input, removing any offending elements or attributes.
- {{domxref('Sanitizer.sanitize()')}}
  - : Returns a sanitized {{domxref('DocumentFragment')}} from an input, removing any offending elements or attributes.

## Examples

This example shows the result of sanitizing a string using the {{domxref('Sanitizer.sanitizeToString()')}} method. Disallowed `script` and `blink` elements are removed from the input.

```js
// our input string to clean
const stringToClean = 'Some text <b><i>with</i></b> <blink>tags</blink>, including a rogue script <script>alert(1)</script> def.';

const result = new Sanitizer().sanitizeToString(stringToClean);
console.log(result);
// Logs: "Some text <b><i>with</i></b> <blink>tags</blink>, including a rogue script def."
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
