---
title: "Sanitizer: sanitize() method"
short-title: sanitize()
slug: Web/API/Sanitizer/sanitize
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Sanitizer.sanitize
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`sanitize()`** method of the {{domxref("Sanitizer")}} interface is used to sanitize a tree of DOM nodes, removing any unwanted elements or attributes.

It should be used when the data to be sanitized is already available as DOM nodes.
For example when sanitizing a `Document` instance in a frame.

The default `Sanitizer()` configuration strips out XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, and comments.
The sanitizer configuration may be customized using {{domxref("Sanitizer.Sanitizer","Sanitizer()")}} constructor options.

> **Note:** To sanitize strings, instead use {{domxref("Element.setHTML()")}} or {{domxref("Sanitizer.sanitizeFor()")}}.
> See {{domxref('HTML Sanitizer API')}} for more information.

## Syntax

```js-nolint
sanitize(input)
```

### Parameters

- `input`
  - : A {{domxref('DocumentFragment')}} or {{domxref('Document')}} to be sanitized.

### Return value

A sanitized {{domxref('DocumentFragment')}}.

### Exceptions

None.

## Examples

To sanitize data from an iframe with id `userFrame`:

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

## See also

- {{domxref('HTML Sanitizer API')}}
- {{domxref("Element.setHTML()")}}
