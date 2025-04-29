---
title: "Sanitizer: Sanitizer() constructor"
short-title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
page-type: web-api-constructor
status:
  - deprecated
browser-compat: api.Sanitizer.Sanitizer
---

{{APIRef("HTML Sanitizer API")}}{{SecureContext_Header}}{{deprecated_header}}

The **`Sanitizer()`** constructor creates a new {{domxref("Sanitizer")}} object, which can be used to sanitize untrusted strings of HTML, or untrusted {{domxref("Document")}} or {{domxref("DocumentFragment")}} objects, making them safe for insertion into a document's DOM.

The default `Sanitizer()` configuration causes sanitizer operations to strip out XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, and comments.
The constructor `config` option can be used to customize the sanitizer behavior.

## Syntax

```js-nolint
new Sanitizer()
new Sanitizer(config)
```

### Parameters

- `config` {{optional_inline}}

  - : A sanitizer configuration object with the following options (referred to as `SanitizerConfig` in the specification):

    - `allowElements` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating elements that the sanitizer should not remove.
        All elements not in the array will be dropped.
    - `blockElements` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating elements that the sanitizer should remove, but keeping their child elements.
    - `dropElements` {{optional_inline}}
      - : An {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating elements (including nested elements) that the sanitizer should remove.
    - `allowAttributes` {{optional_inline}}
      - : An {{jsxref("Object")}} where each key is the attribute name and the value is an {{jsxref("Array")}} of allowed tag names.
        Matching attributes will not be removed.
        All attributes that are not in the array will be dropped.
    - `dropAttributes` {{optional_inline}}
      - : An {{jsxref('Object')}} where each key is the attribute name and the value is an {{jsxref("Array")}} of dropped tag names.
        Matching attributes will be removed.
    - `allowCustomElements` {{optional_inline}}
      - : A {{jsxref('Boolean')}} value set to `false` (default) to remove custom elements and their children.
        If set to `true`, custom elements will be subject to built-in and custom configuration checks (and will be retained or dropped based on those checks).
    - `allowComments` {{optional_inline}}
      - : A {{jsxref('Boolean')}} value set to `false` (default) to remove HTML comments.
        Set to `true` in order to keep comments.

> **Note:** `allowElements` creates a sanitizer that will drop any elements that are not in `allowElements`, while `blockElements` and `dropElements` create a sanitizer that will allow all elements except those in these properties.
>
> `blockElements` and `dropElements` are processed before `allowElements`.
> If you specify both properties, the elements in `blockElements` or `dropElements` will be discarded first, followed by any elements not in `allowElements`.
> So while it is possible to specify both types of properties at the same time, the intent can always be more clearly captured using just one type.
>
> The same applies to `allowAttributes` and `dropAttributes`.

## Examples

The examples below show a sanitization operation using the {{domxref("Sanitizer.sanitize()")}} method.

### Using the default sanitizer

This example shows how to sanitize data from an iframe with id `userFrame`, using the {{domxref("Sanitizer.sanitize()")}} method:

```js
const sanitizer = new Sanitizer(); // Default sanitizer;

// Get the frame and its Document object
const frame_element = document.getElementById("userFrame");
const unsanitized_frame_tree = frame_element.contentWindow.document;

// Sanitize the document tree and update the frame.
const sanitized_frame_tree = sanitizer.sanitize(unsanitized_frame_tree);
frame_element.replaceChildren(sanitized_frame_tree);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
