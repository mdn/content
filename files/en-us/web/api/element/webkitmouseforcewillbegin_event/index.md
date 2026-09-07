---
title: "Element: webkitmouseforcewillbegin event"
short-title: webkitmouseforcewillbegin
slug: Web/API/Element/webkitmouseforcewillbegin_event
page-type: web-api-event
status:
  - non-standard
browser-compat: api.Element.webkitmouseforcewillbegin_event
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

Safari for macOS fires the non-standard **`webkitmouseforcewillbegin`** event at an {{domxref("Element")}} before firing the initial {{domxref("Element/mousedown_event", "mousedown")}} event.

This offers the opportunity to tell the system not to trigger any default Force Touch actions if and when the click turns into a [Force Touch events](/en-US/docs/Web/API/Force_Touch_events).

To instruct macOS not to engage any default Force Touch actions if the user apply enough pressure to activate a Force Touch event, call {{domxref("Event.preventDefault", "preventDefault()")}} on the `webkitmouseforcewillbegin` event object.

**`webkitmouseforcewillbegin`** is a proprietary, WebKit-specific event. It is part of the [Force Touch events](/en-US/docs/Web/API/Force_Touch_events) feature.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("webkitmouseforcewillbegin", (event) => { })

onwebkitmouseforcewillbegin = (event) => { }
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
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
