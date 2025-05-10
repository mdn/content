---
title: Sanitizer
slug: Web/API/Sanitizer
page-type: web-api-interface
browser-compat: api.Sanitizer
---

{{APIRef("Sanitizer")}}

The **`Sanitizer`** interface of the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) defines a configuration object that specifies what elements, attributes and comments are allowed or should be removed when inserting strings of HTML into a DOM or ShadowRoot, or when parsing an HTML string into a {{domxref("Document")}}.

The default configuration disallows XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, event handler attributes, and comments.
This configuration may be customized using constructor options.

An object of this type can be passed to the following methods in order to sanitize the input HTML string:

- {{domxref('Element.setHTML()')}} and {{domxref('Element.setHTMLUnsafe()')}} - insert HTML into an element
- {{domxref('ShadowRoot.setHTML()')}} and {{domxref('ShadowRoot.setHTMLUnsafe()')}}
- {{domxref('Document.parseHTML()')}} and {{domxref('Document.parseHTMLUnsafe()')}}

Note that the methods that do not have the `Unsafe()` suffix are XSS-"safe" methods.
They will always use a sanitizer, either the one that is specified or the default, and they will sanitize the input of unsafe elements and attributes irrespective of whether they are allowed by the sanitizer.
By contrast, the unsafe methods will allow any input allowed by the sanitizer, or all input if none is specified.

## Constructors

- {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}}
  - : Creates and returns a `Sanitizer` object, optionally with custom sanitization behavior.

### Get current configuration

- {{domxref('Sanitizer.get()')}}
  - : Returns the current `Sanitizer` configuration as an {{domxref('SanitizerConfig')}} dictionary instance.

### Modify configuration

- {{domxref('Sanitizer.allowElement()')}}

  - : Specifies the elements, and/or elements with specific attributes, that are allowed (not filtered out of the input).

- {{domxref('Sanitizer.removeElement()')}}

  - : Specifies the elements that will be removed from the input.

- {{domxref('Sanitizer.replaceElementWithChildren()')}}

  - : TBD

- {{domxref('Sanitizer.allowAttribute()')}}

  - : Specifies the attributes that will be allowed on any element.

- {{domxref('Sanitizer.removeAttribute()')}}

  - : Specifies the attributes that will be removed from any element.

- {{domxref('Sanitizer.setComments()')}}

  - : Sets whether comments will be allowed or removed.

- {{domxref('Sanitizer.setDataAttributes()')}}
  - : Sets whether or not data attributes will be allowed on elements.

### Make sanitizer safe

- {{domxref('Sanitizer.removeUnsafe()')}}
  - : Updates the sanitizer so that it will remove any unsafe HTML when passed to one of the HTML parsing methods.
    Note that this is "implicitly" called on a `Sanitizer` used in one of the "safe" HTML setters, such as {{domxref("Element.setHTML()")}} and {{domxref("ShadowRoot.setHTML()")}} ("implicitly here means that the `Sanitizer` is not actually modified, but it behaves as though it were).

## Examples

For examples see the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) and the individual methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
