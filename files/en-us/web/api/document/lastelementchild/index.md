---
title: Document.lastElementChild
slug: Web/API/Document/lastElementChild
tags:
  - API
  - DOM
  - Element
  - Property
browser-compat: api.Document.lastElementChild
---
{{ APIRef("DOM") }}

The **`Document.lastElementChild`** read-only property
returns the document's last child {{domxref("Element")}}, or `null` if there
are no child elements.

For HTML documents, this is usually the only child, the root `<html>` element.

See {{domxref("Element.lastElementChild")}} for the last child element of specific elements within a document.

## Syntax

```js
// Getter
element = document.lastElementChild;

// No setter; read-only property
```

## Example

```js
document.lastElementChild;
// returns the root <html> element, the only child of the document
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.lastElementChild")}}
