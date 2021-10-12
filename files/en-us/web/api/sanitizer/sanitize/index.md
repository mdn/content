---
title: Sanitizer.sanitize()
slug: Web/API/Sanitizer/sanitize
tags:
  - HTML Sanitizer API
  - Method
  - sanitize
browser-compat: api.Sanitizer.sanitize
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`sanitize()`** method of the {{domxref("Sanitizer")}} interface is used to sanitize a tree of DOM nodes, removing any unwanted elements or attributes.

It should be used when the data to be sanitized is already available as DOM nodes.
For example when sanitizing a `Document` instance in a frame.

The default `Sanitizer()` configuration strips out XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, and comments.
This configuration may be customized using {{domxref("Sanitizer.Sanitizer","Sanitizer()")}} constructor options.

> **Note:** This method is not intended for sanitizing strings.
> If string sanitizing is needed you would use {{domxref("Element.setHTML()")}} or {{domxref("Sanitizer.sanitizeFor()")}}.
> See {{domxref('HTML Sanitizer API')}} for more information.

## Syntax

```js
sanitize(input)
```

### Parameters

- `input`
  - : A  {{domxref('DocumentFragment')}} or {{domxref('Document')}} to be sanitized.

### Return value

A sanitized {{domxref('DocumentFragment')}}.

### Exceptions

None.

## Examples

To sanitize data from an iframe with id `userFrame`:

```js
const sanitizer = new Sanitizer( ... );  // Our Sanitizer;

// Get the frame and its Document object
const frame_element = document.getElementById("userFrame")
const unsantitized_frame_tree = frame_element.contentWindow.document;

// Sanitize the document tree and update the frame.
const sanitized_frame_tree = sanitizer.sanitize(unsantitized_frame_tree);
frame_element.replaceChildren(sanitized_frame_tree);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
