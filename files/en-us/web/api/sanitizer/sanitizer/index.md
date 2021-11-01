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

The **`Sanitizer()`** constructor creates a new {{domxref("Sanitizer")}} object, which can be used to sanitize untrusted strings of HTML, or untrusted {{domxref("Document")}} or {{domxref("DocumentFragment")}} objects, making them safe for insertion into a document’s DOM.

The default `Sanitizer()` configuration causes sanitizer operations to strip out XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, and comments.
The constructor options shown below can be used to customize the sanitizer behavior.

## Syntax

```js
new Sanitizer()
new Sanitizer(config)
```

### Parameters

> **Note:** The custom configuration options described here are not yet supported (because at time of writing the sanitizer configuration object is still being defined).

- `config` {{optional_inline}}

  - : A sanitizer configuration object with the following options (referred to as `SanitizerConfig` in the specification):

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
      - : A {{jsxref('Boolean')}} value set to `false` (default) to remove custom elements and their children.
        Set to `true` to ensure sanitize custom elements using build-in and custom configuration checks.
    - `allowComments` {{optional_inline}}
      - : A {{jsxref('Boolean')}} value set to `false` (default) to remove HTML comments.
        Set to `true` ensures that comments are retained.


## Examples

The example below shows a sanitization operation using the {{domxref("Sanitizer.sanitizeFor()")}} method.
This method takes as inputs a string of HTML to sanitize and the context (tag) in which it is sanitized, and returns a sanitized node object for the specified tag.
To simplify the presentation the result that is shown is actually the _innerHTML_ of the returned object.

> **Note:** The API _only_ sanitizes HTML in strings in the context of a particular element/tag.
> For more information see {{domxref('HTML Sanitizer API')}} (and {{domxref("Sanitizer.sanitizeFor()")}}).

This example shows the result of sanitizing a string with disallowed `script` element using the default sanitizer (in a `div` context). 

```js
let unsanitized = "abc <script>alert(1)</script> def"
const sanitized =  new Sanitizer().sanitizeFor("div", unsanitized);
// Result (innerHTML of 'sanitized'): script will be removed: "abc alert(1) def"
```

<!-- Add other examples showing use of parameter when it is implemented somewhere -->


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
