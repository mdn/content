---
title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
tags:
  - Sanitizer
  - Constructor
  - HTML Sanitizer API
  - sanitize
browser-compat: api.Sanitizer.Sanitizer
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`Sanitizer()`** constructor creates a new {{domxref("Sanitizer")}} object which allows developers to take untrusted strings of HTML, and sanitize them for safe insertion into a document’s DOM.

## Syntax

```js
new Sanitizer()
```

### Parameters

- `config` {{optional_inline}}

  - : A santizer configuration object with the following options (referred to as `SanitizerConfig` in the specification):

    - `allowElements` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating elements the sanitizer should not remove.
    - `blockElements` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating elements the sanitizer should remove, keeping their child elements.
        Child elements are retained.
    - `dropElements` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating elements the sanitizer should remove, along with their child elements.
    - `allowAttributes` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating attributes the sanitizer should not remove.
    - `dropAttributes` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating attributes the sanitizer should remove.
    - `allowCustomElements` {{optional_inline}}
      - : `false` (default) to remove custom elements and their children.
        `true` to ensure sanitize custom elements using build-in and custom configuration checks.
    - `allowComments` {{optional_inline}}
      - : `false` (default) to remove HTML comments.
        `true` ensures that comments are retained.

> **Note:** At the time of writing the default elements within each configuration property above are still under consideration.
> Due to this the parameter has not been implemented.

## Examples

This example shows the result of sanitizing a string with disallowed `script` elements.

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
