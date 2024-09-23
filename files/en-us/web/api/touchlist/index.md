---
title: TouchList
slug: Web/API/TouchList
page-type: web-api-interface
browser-compat: api.TouchList
---

{{APIRef("Touch Events")}}

The **`TouchList`** interface represents a list of contact points on a touch surface. For example, if the user has three fingers on the touch surface (such as a screen or trackpad), the corresponding `TouchList` object would have one {{domxref("Touch")}} object for each finger, for a total of three entries.

This interface was an [attempt to create an unmodifiable list](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and only continues to be supported to not break code that's already using it. Modern APIs represent list structures using types based on JavaScript [arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), thus making many array methods available, and at the same time imposing additional semantics on their usage (such as making their items read-only).

These historical reasons do not mean that you as a developer should avoid `TouchList`. You don't create `TouchList` objects yourself, but you get them from APIs such as {{domxref("TouchEvent.targetTouches")}}, and these APIs are not deprecated. However, be careful of the semantic differences from a real array.

## Instance properties

- {{domxref("TouchList.length")}} {{ReadOnlyInline}}
  - : The number of {{domxref("Touch")}} objects in the `TouchList`.

## Instance methods

- {{domxref("TouchList.item()")}}
  - : Returns the {{domxref("Touch")}} object at the specified index in the list.

## Example

See the [example on the main Touch events article](/en-US/docs/Web/API/Touch_events#example).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Touch events](/en-US/docs/Web/API/Touch_events)
- {{domxref("Document.createTouchList()")}}
