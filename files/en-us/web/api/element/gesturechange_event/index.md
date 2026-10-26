---
title: "Element: gesturechange event"
short-title: gesturechange
slug: Web/API/Element/gesturechange_event
page-type: web-api-event
status:
  - non-standard
browser-compat: api.Element.gesturechange_event
---

{{APIRef}}{{Non-standard_header}}

The **`gesturechange`** event is fired when digits move during a touch gesture.

It is a proprietary event specific to WebKit.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("gesturechange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
ongesturechange = (event) => { }
```

## Event type

A {{domxref("GestureEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("GestureEvent")}}

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [GestureEventClassReference at the Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
