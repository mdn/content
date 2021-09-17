---
title: Sanitizer.sanitize()
slug: Web/API/Sanitizer/sanitize
tags:
  - HTML Sanitizer API
  - Method
  - sanitize
browser-compat: api.Sanitizer.sanitize
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`sanitize()`** method of the
{{domxref("sanitizer")}} interface returns a sanitized {{domxref('DocumentFragment')}}
from an input, removing any offending elements or attributes.

## Syntax

```js
var DocumentFragment = sanitizer.sanitize(input);
```

### Parameters

- `input`
  - : A {{jsxref('String')}} to be sanitized.

### Return value

A {{domxref('DocumentFragment')}}.

### Exceptions

None.

## Examples

This example uses the `sanitize` method to remove a disallowed
`script` and `blink` elements from a string input.

```js
// our input string to clean
const stringToClean = 'Some text <b><i>with</i></b> <blink>tags</blink>, including a rogue script <script>alert(1)</script> def.';

const result = new Sanitizer().sanitize(stringToClean);
// Result: A DocumentFragment containing text nodes and a <b> element, with a <i> child element
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
