---
title: Sanitizer
slug: Web/API/Sanitizer
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Sanitizer
---

{{APIRef("Sanitizer")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Sanitizer`** interface of the {{domxref('HTML Sanitizer API')}} provides methods to sanitize untrusted strings of HTML, {{domxref("Document")}} and {{domxref("DocumentFragment")}} objects.
After sanitization, unwanted elements or attributes are removed, and the returned objects can safely be inserted into a document's DOM.

A **`Sanitizer`** object is also used by the {{domxref('Element.setHTML()')}} method to parse and sanitize a string of HTML, and immediately insert it into an element.

The default configuration strips out XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, and comments.
This configuration may be customized using constructor options.

## Constructors

- {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} {{Experimental_Inline}}
  - : Creates and returns a `Sanitizer` object, optionally with custom sanitization behavior.

## Instance methods

- {{domxref('Sanitizer.sanitize()')}} {{Experimental_Inline}}

  - : Returns a sanitized {{domxref('DocumentFragment')}} from an input {{domxref('Document')}} or {{domxref('DocumentFragment')}}

- {{domxref('Sanitizer.sanitizeFor()')}} {{Experimental_Inline}}
  - : Parses a string of HTML in the context a particular element, and returns an HTML element of that type containing the sanitized subtree.

## Examples

For examples see the {{domxref('HTML Sanitizer API')}} and the individual methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
