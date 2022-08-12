---
title: Document.children
slug: Web/API/Document/children
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Element
  - HTMLCollection
  - Property
  - children
browser-compat: api.Document.children
---
{{ APIRef("DOM") }}

The read-only **`children`** property returns a live {{domxref("HTMLCollection")}}
which contains all of the child {{domxref("Element", "elements")}} of the document upon which it was called.

For HTML documents, this is usually only the root `<html>` element.

See {{domxref("Element.children")}} for child elements of specific HTML elements within the document.

## Value

An {{ domxref("HTMLCollection") }} which is a live, ordered collection of the DOM
elements which are children of the current document. You can access the
individual child nodes in the collection by using either the
{{domxref("HTMLCollection.item()", "item()")}} method on the collection, or by using
JavaScript array-style notation.

If the document has no element children, then `children` is an empty list with a
`length` of `0`.

## Examples

```js
document.children;
// HTMLCollection [<html>]
// Usually only contains the root <html> element, the document's only direct child
```

See {{domxref("Element.children")}} for child elements of specific HTML elements within the document.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.children")}}
- {{domxref("Node.childNodes")}}
