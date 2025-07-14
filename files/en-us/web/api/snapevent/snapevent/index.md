---
title: "SnapEvent: SnapEvent() constructor"
short-title: SnapEvent()
slug: Web/API/SnapEvent/SnapEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.SnapEvent.SnapEvent
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

The **`SnapEvent()`** constructor creates a new
{{domxref("SnapEvent")}} object instance.

## Syntax

```js-nolint
new SnapEvent(type, init)
```

### Parameters

- `type`
  - : A string representing the type of event. For {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} events, this is `scrollsnapchanging`. For {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} events, this is `scrollsnapchange`.
- `init`
  - : An object containing the following properties:
    - `snapTargetBlock` {{optional_inline}}
      - : Returns a reference to the element snapped to in the block direction when the event fired, or `null` if scroll snapping only occurs in the inline direction so no element is snapped to in the block direction.
    - `snapTargetInline` {{optional_inline}}
      - : Returns a reference to the element snapped to in the inline direction when the event fired, or `null` if scroll snapping only occurs in the block direction so no element is snapped to in the inline direction.

## Examples

A developer would not use this constructor manually. A new `SnapEvent` object is constructed when a handler is invoked as a result of the {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} or {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} events firing.

For example:

```js
mainElem.addEventListener("scrollsnapchange", (event) => {
  // …

  // Log a SnapEvent object instance to the console
  console.log(event);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} event
- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} event
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
