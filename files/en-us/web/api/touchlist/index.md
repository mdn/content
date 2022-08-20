---
title: TouchList
slug: Web/API/TouchList
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOM Reference
  - Mobile
  - Reference
  - Touch Event
  - TouchList
  - touch
browser-compat: api.TouchList
---
{{APIRef("Touch Events")}}

The **`TouchList`** interface represents a list of contact points on a touch surface. For example, if the user has three fingers on the touch surface (such as a screen or trackpad), the corresponding `TouchList` object would have one {{domxref("Touch")}} object for each finger, for a total of three entries.

## Properties

- {{domxref("TouchList.length")}} {{ReadOnlyInline}}
  - : The number of {{domxref("Touch")}} objects in the `TouchList`.

## Methods

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
