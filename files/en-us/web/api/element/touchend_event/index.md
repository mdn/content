---
title: "Element: touchend event"
short-title: touchend
slug: Web/API/Element/touchend_event
page-type: web-api-event
browser-compat: api.Element.touchend_event
---

{{APIRef}}

The `touchend` event fires when one or more touch points are removed from the touch surface.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("touchend", (event) => {});

ontouchend = (event) => {};
```

## Event type

A {{domxref("TouchEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TouchEvent")}}

## Event properties

_This interface inherits properties from its parent, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("TouchEvent.altKey")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether or not the alt key was down when the touch event was fired.
- {{domxref("TouchEvent.changedTouches")}} {{ReadOnlyInline}}
  - : A {{domxref("TouchList")}} of all the {{domxref("Touch")}} objects representing individual points of contact whose states changed between the previous touch event and this one.
- {{domxref("TouchEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether or not the control key was down when the touch event was fired.
- {{domxref("TouchEvent.metaKey")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether or not the meta key was down when the touch event was fired.
- {{domxref("TouchEvent.shiftKey")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether or not the shift key was down when the touch event was fired.
- {{domxref("TouchEvent.targetTouches")}} {{ReadOnlyInline}}
  - : A {{domxref("TouchList")}} of all the {{domxref("Touch")}} objects that are both currently in contact with the touch surface **and** were also started on the same element that is the target of the event.
- {{domxref("TouchEvent.touches")}} {{ReadOnlyInline}}
  - : A {{domxref("TouchList")}} of all the {{domxref("Touch")}} objects representing all current points of contact with the surface, regardless of target or changed status.
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Change in rotation (in degrees) since the event's beginning. Positive values indicate clockwise rotation; negative values indicate counterclockwise rotation. Initial value: `0.0`.
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Distance between two digits since the event's beginning. Expressed as a floating-point multiple of the initial distance between the digits at the beginning of the event. Values below 1.0 indicate an inward pinch (zoom out). Values above 1.0 indicate an outward unpinch (zoom in). Initial value: `1.0`.

## Examples

Code samples for those events are available on the dedicated page: [Touch events](/en-US/docs/Web/API/Touch_events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Touch events](/en-US/docs/Web/API/Touch_events)
