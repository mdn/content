---
title: "Element: webkitmouseforcedown event"
short-title: webkitmouseforcedown
slug: Web/API/Element/webkitmouseforcedown_event
page-type: web-api-event
status:
  - non-standard
browser-compat: api.Element.webkitmouseforcedown_event
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

After a {{domxref("Element.mousedown_event", "mousedown")}} event has been fired at the element, if and when sufficient pressure has been applied to the mouse or trackpad button to qualify as a "force click," Safari begins sending **`webkitmouseforcedown`** events to the element.

**`webkitmouseforcedown`** is a proprietary, WebKit-specific event. It is part of the [Force Touch events](/en-US/docs/Web/API/Force_Touch_events) feature.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("webkitmouseforcedown", (event) => { })

onwebkitmouseforcedown = (event) => { }
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
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
