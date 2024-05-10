---
title: "Document: parseHTMLUnsafe() static method"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
page-type: web-api-static-method
browser-compat: api.Document.parseHTMLUnsafe_static
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`Document.parseHTMLUnsafe()`** static method is used to parse a string of HTML as a new document object.

## Syntax

```js-nolint
const doc = Document.parseHTMLUnsafe(input)
```

### Parameters

- `input`
  - : A string defining HTML to be parsed.

### Return value

A {{domxref("Document")}}.

### Exceptions

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Parsing HTML or XML into a DOM tree: {{domxref("DOMParser")}}
- {{domxref("Element.setHTMLUnsafe")}}
