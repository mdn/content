---
title: Document.childElementCount
slug: Web/API/Document/childElementCount
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.Document.childElementCount
---
{{ APIRef("DOM") }}

The **`Document.childElementCount`** read-only property
returns the number of child elements of the document.

To get the number of children of a specific element, see {{domxref("Element.childElementCount")}}.

## Value

A number.

## Examples

```js
document.children;
// HTMLCollection, usually containing an <html> element, the document's only child

document.childElementCount;
// 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.childElementCount")}}
- {{domxref("DocumentFragment.childElementCount")}}
