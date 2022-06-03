---
title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
page-type: web-api-constructor
tags:
  - Sanitizer
  - Constructor
  - HTML Sanitizer API
  - sanitize
browser-compat: api.Sanitizer.Sanitizer
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`Sanitizer()`** constructor creates a new {{domxref("Sanitizer")}} object, which can be used to sanitize untrusted strings of HTML, or untrusted {{domxref("Document")}} or {{domxref("DocumentFragment")}} objects, making them safe for insertion into a document's DOM.

The default `Sanitizer()` configuration causes sanitizer operations to strip out XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, and comments.
The constructor `config` option can be used to customize the sanitizer behavior.

## Syntax

```js
new Sanitizer()
new Sanitizer(config)
```

### Parameters

- `config` {{optional_inline}}

  - : A sanitizer configuration object with the following options (referred to as `SanitizerConfig` in the specification):

    - `allowElements` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating elements that the sanitizer should not remove.
    - `blockElements` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating elements that the sanitizer should remove, but keeping their child elements.
    - `dropElements` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating elements (including nested elements) that the sanitizer should remove.
    - `allowAttributes` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating the attributes on an element that the sanitizer should not remove.
    - `dropAttributes` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating attributes that the sanitizer should remove.
    - `allowCustomElements` {{optional_inline}}
      - : A {{jsxref('Boolean')}} value set to `false` (default) to remove custom elements and their children.
        If set to `true`, custom elements will be subject to built-in and custom configuration checks (and will be retained or dropped based on those checks).
    - `allowComments` {{optional_inline}}
      - : A {{jsxref('Boolean')}} value set to `false` (default) to remove HTML comments.
        Set to `true` in order to keep comments.

## Examples

The examples below show a sanitization operation using the {{domxref("Sanitizer.sanitizeFor()")}} method.
This method takes as inputs a string of HTML to sanitize and the context (tag) in which it is sanitized, and returns a sanitized node object for the specified tag.
To simplify the presentation the result that is shown is actually the _innerHTML_ of the returned object.

> **Note:** The API _only_ sanitizes HTML in strings in the context of a particular element/tag.
> For more information see {{domxref('HTML Sanitizer API')}} (and {{domxref("Sanitizer.sanitizeFor()")}}).

### Using the default sanitizer

This example shows the result of sanitizing a string with disallowed `script` element using the default sanitizer (in a `div` context).

```js
const unsanitized = "abc <script>alert(1)<" + "/script> def";
const sanitized =  new Sanitizer().sanitizeFor("div", unsanitized);
// Result (innerHTML of 'sanitized'): script will be removed: "abc alert(1) def"
```

<!-- Add other examples showing use of parameter when it is implemented somewhere -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
