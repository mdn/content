---
title: Event.initEvent()
slug: Web/API/Event/initEvent
tags:
  - API
  - DOM
  - Deprecated
  - Event
  - Method
  - Reference
browser-compat: api.Event.initEvent
---
{{ ApiRef("DOM") }}{{deprecated_header}}

The **`Event.initEvent()`** method is used to initialize the
value of an {{ domxref("event") }} created using {{ domxref("Document.createEvent()")
  }}.

Events initialized in this way must have been created with the {{
  domxref("Document.createEvent()") }} method. This method must be called to set the event
before it is dispatched, using {{ domxref("EventTarget.dispatchEvent()") }}. Once
dispatched, it doesn't do anything anymore.

**Do not use this method anymore as it is deprecated.**

Instead use specific event constructors, like {{domxref("Event.Event", "Event()")}}.
The page on [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events) gives more information about the way to use these.

## Syntax

```js
event.initEvent(type, bubbles, cancelable);
```

- _`type`_
  - : Is a {{domxref("DOMString")}} defining the type of event.
- _`bubbles`_
  - : Is a boolean value deciding whether the event should bubble up through the
    event chain or not. Once set, the read-only property {{ domxref("Event.bubbles") }}
    will give its value.
- _`cancelable`_
  - : Is a boolean value defining whether the event can be canceled. Once set, the
    read-only property {{ domxref("Event.cancelable") }} will give its value.

## Example

    // Create the event.
    var event = document.createEvent('Event');

    // Create a click event that bubbles up and
    // cannot be canceled
    event.initEvent('click', true, false);

    // Listen for the event.
    elem.addEventListener('click', function (e) {
      // e.target matches elem
    }, false);

    elem.dispatchEvent(event);

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The constructor to use instead of this deprecated method: {{domxref("Event.Event",
    "Event()")}}. More specific constructors can be used too.
