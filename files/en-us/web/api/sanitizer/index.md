---
title: Sanitizer
slug: Web/API/Sanitizer
page-type: web-api-interface
browser-compat: api.Sanitizer
---

{{APIRef("Sanitizer")}}

The **`Sanitizer`** interface of the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) defines a configuration object that specifies what elements, attributes and comments are allowed or should be removed when inserting strings of HTML into an element or ShadowRoot, or when parsing an HTML string into a {{domxref("Document")}}.

<!--

The default configuration disallows XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, event handler attributes, and comments.
This configuration may be customized using constructor options.

An object of this type can be passed to the following methods in order to sanitize the input HTML string:

- {{domxref('Element.setHTML()')}} and {{domxref('Element.setHTMLUnsafe()')}} - insert HTML into an element
- {{domxref('ShadowRoot.setHTML()')}} and {{domxref('ShadowRoot.setHTMLUnsafe()')}}
- {{domxref('Document.parseHTML()')}} and {{domxref('Document.parseHTMLUnsafe()')}}

Note that the methods that do not have the `Unsafe()` suffix are XSS-"safe" methods.
They will always use a sanitizer, either the one that is specified or the default, and they will sanitize the input of unsafe elements and attributes irrespective of whether they are allowed by the sanitizer.
By contrast, the unsafe methods will allow any input allowed by the sanitizer, or all input if none is specified.
-->

## Constructors

- {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}}
  - : Creates and returns a `Sanitizer` object, optionally with custom sanitization behavior.

## Instance methods

### Get configuration

- {{domxref('Sanitizer.get()')}}
  - : Returns the current `Sanitizer` configuration as an {{domxref('SanitizerConfig')}} dictionary instance.

### Modify configuration

- {{domxref('Sanitizer.allowElement()')}}
  - : Sets an element as allowed by the sanitizer, optionally with an array of attributes that are allowed or disallowed.
- {{domxref('Sanitizer.removeElement()')}}
  - : Sets an element as disallowed (to be removed) by the sanitizer.
- {{domxref('Sanitizer.replaceElementWithChildren()')}}
  - : Sets an element to be replaced by its child HTML elements.
- {{domxref('Sanitizer.allowAttribute()')}}
  - : Sets an attribute as allowed on any element.
- {{domxref('Sanitizer.removeAttribute()')}}
  - : Sets an attribute as disallowed on any element.
- {{domxref('Sanitizer.setComments()')}}
  - : Sets whether comments will be allowed or removed by the sanitizer.
- {{domxref('Sanitizer.setDataAttributes()')}}
  - : Sets whether data attributes on elements will be allowed or removed by the sanitizer.

### Make sanitizer XSS-safe

- {{domxref('Sanitizer.removeUnsafe()')}}
  - : Updates the sanitizer configuration so that it will remove any XSS-unsafe HTML.

## Examples

For examples see the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) and the individual methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
