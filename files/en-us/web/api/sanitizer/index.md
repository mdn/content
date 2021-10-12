---
title: Sanitizer
slug: Web/API/Sanitizer
tags:
  - HTML Sanitizer API
  - Interface
  - sanitize
browser-compat: api.Sanitizer
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`Sanitizer`** interface of the {{domxref('HTML Sanitizer API')}} sanitizes untrusted strings of HTML, {{domxref("Document")}} and {{domxref("DocumentFragment")}} objects.
After sanitization, unwanted elements or attributes are removed, and the returned objects can safely be inserted into a document’s DOM.

The default configuration strips out XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, and comments.
This configuration may be customized using constructor options.

## Constructors

- {{domxref('Sanitizer.Sanitizer')}}
  - : Creates and returns a `Sanitizer` object, optionally with custom sanitization behavior.

## Methods

- {{domxref('Sanitizer.sanitizeFor()')}}
  - : Returns a sanitized string of HTML in the context of insertion into a particular context (tag).

    > **Note:** {{domxref('Element.setHTML()')}} should be used instead of this method if the string of HTML is immediately being assigned to an element (in this case the context is the element).

- {{domxref('Sanitizer.sanitize()')}}
  - : Returns a sanitized {{domxref('DocumentFragment')}} from an input {{domxref('Document')}} or {{domxref('DocumentFragment')}}


<!--
## Examples

-->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
