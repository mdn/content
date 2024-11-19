---
title: DOMRectList
slug: Web/API/DOMRectList
page-type: web-api-interface
browser-compat: api.DOMRectList
---

{{APIRef("Geometry Interfaces")}}

The **`DOMRectList`** interface represents a collection of {{domxref("DOMRect")}} objects, typically used to hold the rectangles associated with a particular element, like bounding boxes returned by methods such as {{domxref("Element.getClientRects", "getClientRects()")}}. It provides access to each rectangle in the list via its index, along with a `length` property that indicates the total number of rectangles in the list.

> **Note**: `DOMRectList` exists for compatibility with legacy Web content and is not recommended to be used when creating new APIs.

## Instance properties

- {{domxref("DOMRectList.length")}} {{ReadOnlyInline}}
  - : A read-only property that returns the total number of {{domxref("DOMRect")}} objects in the `DOMRectList`.

## Instance methods

- {{domxref("DOMRectList.item")}}
  - : Returns the {{domxref("DOMRect")}} object at the specified index. If the `index` is out of range, it returns `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMRect")}}
- {{domxref("DOMRectReadOnly")}}
