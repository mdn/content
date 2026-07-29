---
title: "Element: webkitmouseforcechanged event"
short-title: webkitmouseforcechanged
slug: Web/API/Element/webkitmouseforcechanged_event
page-type: web-api-event
status:
  - non-standard
browser-compat: api.Element.webkitmouseforcechanged_event
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

The non-standard **`webkitmouseforcechanged`** event is fired by Safari each time the amount of pressure changes on the trackpad/touchscreen.

**`webkitmouseforcechanged`** is a proprietary, WebKit-specific event introduced by Apple to support their [Force Touch events](/en-US/docs/Web/API/Force_Touch_events) feature.

This event first fires after the {{domxref("Element/mousedown_event", "mousedown")}} event and stops firing before the {{domxref("Element/mouseup_event", "mouseup")}} event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("webkitmouseforcechanged", (event) => { })

onwebkitmouseforcechanged = (event) => { }
```

## Event type

A {{domxref("MouseEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Specifications

_Not part of any specification._ Apple has [a description at the Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser compatibility

{{Compat}}

## See also

- [Learn: Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
