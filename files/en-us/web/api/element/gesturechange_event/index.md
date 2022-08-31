---
title: 'Element: gesturechange event'
slug: Web/API/Element/gesturechange_event
page-type: web-api-event
tags:
  - Event
  - Non-standard
  - Reference
browser-compat: api.Element.gesturechange_event
---
{{APIRef}}{{Non-standard_header}}

The **`gesturechange`** event is fired when digits move during a touch gesture.

It is a proprietary event specific to WebKit.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('gesturechange', (event) => {});

ongesturechange = (event) => { };
```

## Event type

A {{domxref("GestureEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("GestureEvent")}}

## Event properties

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("GestureEvent.rotation")}} {{ReadOnlyInline}}
  - : Change in rotation (in degrees) since the event's beginning. Positive values indicate clockwise rotation; negative values indicate counterclockwise rotation. Initial value: `0.0`
- {{domxref("GestureEvent.scale")}} {{ReadOnlyInline}}
  - : Distance between two digits since the event's beginning. Expressed as a floating-point multiple of the initial distance between the digits at the beginning of the gesture. Values below 1.0 indicate an inward pinch (zoom out). Values above 1.0 indicate an outward unpinch (zoom in). Initial value: `1.0`

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- Related events:

  - [`MSGestureStart`](/en-US/docs/Web/API/Element/MSGestureStart_event)
  - [`MSGestureEnd`](/en-US/docs/Web/API/Element/MSGestureEnd_event)
  - [`MSGestureTap`](/en-US/docs/Web/API/Element/MSGestureTap_event)
  - [`MSGestureChange`](/en-US/docs/Web/API/Element/MSGestureChange_event)
  - [`MSGestureHold`](/en-US/docs/Web/API/Element/MSGestureHold_event)
  - [`MSInertiaStart`](/en-US/docs/Web/API/Element/MSInertiaStart_event)
  - [`gesturestart`](/en-US/docs/Web/API/Element/gesturestart_event)
  - [`gestureend`](/en-US/docs/Web/API/Element/gestureend_event)

- [GestureEventClassReference at the Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
