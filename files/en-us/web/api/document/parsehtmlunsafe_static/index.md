---
title: "Document: parseHTMLUnsafe() static method"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
page-type: web-api-static-method
browser-compat: api.Document.parseHTMLUnsafe_static
---

{{APIRef("DOM")}}

The **`parseHTMLUnsafe()`** static method of the {{domxref("Document")}} object is used to parse a string of HTML, which may contain [declarative shadow roots](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom), in order to create a new {{domxref("Document")}} instance.

The suffix "Unsafe" in the method name indicates that, while `<script>` elements are not evaluated during parsing, the method does not sanitize other potentially unsafe XSS-relevant input.

The resulting `Document` will have a [content type](/en-US/docs/Web/API/Document/contentType) of "text/html", a [character set](/en-US/docs/Web/API/Document/characterSet) of UTF-8, and a URL of "about:blank"

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
```

### Parameters

- `html`
  - : A string of HTML to be parsed.

### Return value

A {{domxref("Document")}}.

### Exceptions

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMParser.parseFromString()")}} for parsing HTML or XML into a DOM tree
- {{domxref("Element.setHTMLUnsafe")}}
