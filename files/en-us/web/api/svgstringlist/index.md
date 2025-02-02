---
title: SVGStringList
slug: Web/API/SVGStringList
page-type: web-api-interface
browser-compat: api.SVGStringList
---

{{APIRef("SVG")}}

The **`SVGStringList`** interface defines a list of strings.

An `SVGStringList` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

An `SVGStringList` object is indexable and can be accessed like an array.

## Instance properties

- {{domxref("SVGStringList.length", "length")}}
  - : The number of items in the list.
- {{domxref("SVGStringList.numberOfItems", "numberOfItems")}}
  - : The number of items in the list.

## Instance methods

- {{domxref("SVGStringList.appendItem", "appendItem()")}}
  - : Inserts a new item at the end of the list.
- {{domxref("SVGStringList.clear", "clear()")}}
  - : Clears all existing items from the list, with the result being an empty list.
- {{domxref("SVGStringList.initialize", "initialize()")}}
  - : Clears all existing items from the list and re-initializes the list to hold the single item specified by the parameter.
- {{domxref("SVGStringList.getItem", "getItem()")}}
  - : Returns the specified item from the list.
- {{domxref("SVGStringList.insertItemBefore", "insertItemBefore()")}}
  - : Inserts a new item into the list at the specified position.
- {{domxref("SVGStringList.removeItem", "removeItem()")}}
  - : Removes an existing item from the list.
- {{domxref("SVGStringList.replaceItem", "replaceItem()")}}
  - : Replaces an existing item in the list with a new item.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
