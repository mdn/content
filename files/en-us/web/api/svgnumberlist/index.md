---
title: SVGNumberList
slug: Web/API/SVGNumberList
page-type: web-api-interface
browser-compat: api.SVGNumberList
---

{{APIRef("SVG")}}

The **`SVGNumberList`** interface defines a list of numbers.

An `SVGNumberList` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

An `SVGNumberList` object is indexable and can be accessed like an array.

## Instance properties

- {{domxref("SVGNumberList.length", "length")}}
  - : The number of items in the list.
- {{domxref("SVGNumberList.numberOfItems", "numberOfItems")}}
  - : The number of items in the list.

## Instance methods

- {{domxref("SVGNumberList.appendItem", "appendItem()")}}
  - : Inserts a new item at the end of the list.
- {{domxref("SVGNumberList.clear", "clear()")}}
  - : Clears all existing items from the list, with the result being an empty list.
- {{domxref("SVGNumberList.initialize", "initialize()")}}
  - : Clears all existing items from the list and re-initializes the list to hold the single item specified by the parameter.
- {{domxref("SVGNumberList.getItem", "getItem()")}}
  - : Returns the specified item from the list.
- {{domxref("SVGNumberList.insertItemBefore", "insertItemBefore()")}}
  - : Inserts a new item into the list at the specified position.
- {{domxref("SVGNumberList.removeItem", "removeItem()")}}
  - : Removes an existing item from the list.
- {{domxref("SVGNumberList.replaceItem", "replaceItem()")}}
  - : Replaces an existing item in the list with a new item.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
