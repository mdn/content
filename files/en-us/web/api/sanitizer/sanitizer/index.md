---
title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
tags:
  - Constructor
  - HTML Sanitizer API
  - sanitize
browser-compat: api.Sanitizer.Sanitizer
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`Sanitizer()`** constructor creates a new
{{domxref("sanitizer")}} object which allows developers to take untrusted strings of
HTML, and sanitize them for safe insertion into a document’s DOM.

## Syntax

```js
var sanitizer = new Sanitizer();
```

### Parameters

- `config` {{optional_inline}}

  - : An object in the format of SanitizerConfig. Options are as follows:

    - `allowElements`: An {{jsxref('Array')}} of
      {{jsxref('String','strings')}} representing elements the sanitizer should retain
      in the input.
    - `blockElements`: An {{jsxref('Array')}} of
      {{jsxref('String','strings')}} representing elements the sanitizer should remove
      in the input, but retain any of their children elements.
    - `dropElements`: An {{jsxref('Array')}} of
      {{jsxref('String','strings')}} representing elements the sanitizer should remove
      in the input along with their children.
    - `allowAttributes`: An {{jsxref('Array')}} of
      {{jsxref('String','strings')}} representing attributes the sanitizer should retain
      in the input.
    - `dropAttributes`: An {{jsxref('Array')}} of
      {{jsxref('String','strings')}} representing attributes the sanitizer should remove
      in the input.

> **Note:** At the time of writing the default elements within each configuration property above
> are still under consideration. Due to this the above config parameter has not been
> implemented.

## Examples

This example shows the result of sanitizing a string with disallowed
`script` elements.

```js
new Sanitizer().sanitizeToString("abc <script>alert(1)</script> def");
// Result: script will be removed: "abc alert(1) def"
```

This example shows how the different configuration options would return the same
string.

```js
const sample = "Some text <b><i>with</i></b> <blink>tags</blink>.";

const allow = new Sanitizer({allowElements: [ "b" ]).sanitizeToString(sample);
console.log(allow)
// Logs: "Some text <b>with</b> text tags."

const block = new Sanitizer({blockElements: [ "b" ]).sanitizeToString(sample);
console.log(block);
// Logs: "Some text <i>with</i> <blink>tags</blink>."

const drop = new Sanitizer({dropElements: [ "b" ]).sanitizeToString(sample);
// Logs: "Some text tags."
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
