---
title: "Document: firstElementChild property"
short-title: firstElementChild
slug: Web/API/Document/firstElementChild
page-type: web-api-instance-property
browser-compat: api.Document.firstElementChild
---

{{ APIRef("DOM") }}

The **`Document.firstElementChild`** read-only property
returns the document's first child {{domxref("Element")}}, or `null` if there
are no child elements.

For HTML documents, this is usually the only child, the root `<html>` element.

See {{domxref("Element.firstElementChild")}} for the first child element of specific elements within a document.

## Value

A {{domxref("Element")}} object, or `null`.

## Examples

```js
document.firstElementChild;
// returns the root <html> element, the only child of the document
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.firstElementChild")}}
