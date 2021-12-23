---
title: CloseEvent.initCloseEvent()
slug: Web/API/CloseEvent/initCloseEvent
tags:
  - API
  - CloseEvent
  - initCloseEvent
  - Method
  - Reference
  - Deprecated
browser-compat: api.CloseEvent.initCloseEvent
---
{{APIRef("Websockets API")}}{{deprecated_header}}

The **`CloseEvent.initCloseEvent()`** method initializes the
value of a close event once it's been created (normally using the
{{domxref("Document.createEvent()")}} method).

Events initialized in this way must have been created with the {{domxref("Document.createEvent()") }} method.
This method must be called to set the event before it is dispatched, using {{ domxref("EventTarget.dispatchEvent()") }}.
Once dispatched, it doesn't do anything anymore.

> **Note:** Do not use this method any more as it is deprecated.
>
> Instead use specific event constructors, like {{domxref("CloseEvent.MouseEvent", "CloseEvent()")}}.
> The page on [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events) gives more information about the way to use these.

## Syntax

```js
event.initMouseEvent(type, canBubble, cancelable, wasClean, reasonCode, reason);
```

### Parameters

- _`type`_
  - : the string to set the event's {{domxref("Event.type", "type")}} to. Possible types
    for mouse events include: `click`, `mousedown`,
    `mouseup`, `mouseover`, `mousemove`,
    `mouseout`.
- _`canBubble`_
  - : whether or not the event can bubble. Sets the value of
    {{domxref("Event.bubbles")}}.
- _`cancelable`_
  - : whether or not the event's default action can be prevented. Sets the value of
    {{domxref("Event.cancelable")}}.
- _`wasClean`_
  - : whether or not the connection was cleanly closed.
- `reasonCode`
  - : the reason of the close.
- `reason`
  - : a {{domxref("DOMString")}} describing the reason of the close in shuman-readable
    way.

## Specifications

_This is no part of any specifications, though it was in some early drafts._

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CloseEvent.CloseEvent()","CloseEvent()")}} constructor, the modern
  standard way of creating a {{domxref("CloseEvent")}}
- {{domxref("Event.initEvent()")}} is a simpler method serving a similar purpose. It
  is also obsolete and shouldn't be used any more.
