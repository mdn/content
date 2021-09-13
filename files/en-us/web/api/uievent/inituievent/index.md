---
title: UIEvent.initUIEvent()
slug: Web/API/UIEvent/initUIEvent
tags:
  - API
  - DOM
  - Deprecated
  - Event
  - Method
  - UIEvent
browser-compat: api.UIEvent.initUIEvent
---
{{APIRef("DOM Events")}} {{deprecated_header}}

The **`UIEvent.initUIEvent()`** method initializes a UI event
once it's been created.

Events initialized in this way must have been created with the {{
  domxref("Document.createEvent()") }} method. This method must be called to set the event
before it is dispatched, using {{ domxref("EventTarget.dispatchEvent()") }}. Once
dispatched, it doesn't do anything anymore.

> **Warning:** Do not use this method anymore as it is deprecated.
>
> Instead use specific event constructors, like {{domxref("UIEvent.UIEvent",
    "UIEvent()")}}. The page on [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events) gives more information about the way to use these.

## Syntax

```js
event.initUIEvent(type, canBubble, cancelable, view, detail)
```

### Parameters

- _`type`_
  - : Is a {{domxref("DOMString")}} defining the type of event.
- _`canBubble`_
  - : Is a boolean value deciding whether the event should bubble up through the
    event chain or not. Once set, the read-only property {{ domxref("Event.bubbles") }}
    will give its value.
- _`cancelable`_
  - : Is a boolean value defining whether the event can be canceled. Once set, the
    read-only property {{ domxref("Event.cancelable") }} will give its value.
- _`view`_
  - : Is the {{domxref("WindowProxy")}} associated with the event.
- _`detail`_
  - : Is an `unsigned long`  specifying some detail information about the
    event, depending on the type of event. For mouse events, it indicates how many times
    the mouse has been clicked on a given screen location.

## Example

```js
var e = document.createEvent("UIEvent");
// creates a click event that bubbles, can be cancelled,
// and with its view and detail property initialized to window and 1,
// respectively
e.initUIEvent("click", true, true, window, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("UIEvent") }}
- The constructor to use instead of this deprecated method:
  {{domxref("UIEvent.UIEvent", "UIEvent()")}}. More specific constructors can be used
  too.
