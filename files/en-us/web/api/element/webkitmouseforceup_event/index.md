---
title: "Element: webkitmouseforceup event"
short-title: webkitmouseforceup
slug: Web/API/Element/webkitmouseforceup_event
page-type: web-api-event
status:
  - non-standard
browser-compat: api.Element.webkitmouseforceup_event
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

The non-standard **`webkitmouseforceup`** event is fired by Safari at an {{domxref("Element")}} some time after the {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} event, when pressure on the button has been reduced sufficiently to end the "force click".

**`webkitmouseforceup`** is a proprietary, WebKit-specific event. It is part of the [Force Touch events](/en-US/docs/Web/API/Force_Touch_events) feature.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("webkitmouseforceup", (event) => { })

onwebkitmouseforceup = (event) => { }
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
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
