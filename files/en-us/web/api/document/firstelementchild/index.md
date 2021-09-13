---
title: Document.firstElementChild
slug: Web/API/Document/firstElementChild
tags:
  - API
  - DOM
  - Element
  - Property
browser-compat: api.Document.firstElementChild
---
{{ APIRef("DOM") }}

The **`Document.firstElementChild`** read-only property
returns the document's first child {{domxref("Element")}}, or `null` if there
are no child elements.

For HTML documents, this is usually the only child, the root `<html>` element.

See {{domxref("Element.firstElementChild")}} for the first child element of specific elements within a document.

## Syntax

```js
// Getter
element = document.firstElementChild;

// No setter; read-only property
```

## Example

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
