---
title: CustomEvent.initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
tags:
  - API
  - CustomEvent
  - DOM
  - Deprecated
  - Method
  - Reference
browser-compat: api.CustomEvent.initCustomEvent
---
{{APIRef("DOM")}}{{Deprecated_header}}

The **`CustomEvent.initCustomEvent()`** method initializes a
`CustomEvent` object. If the event has already been dispatched, this method
does nothing.

Events initialized in this way must have been created with the {{
  domxref("Document.createEvent()") }} method. This method must be called to set the event
before it is dispatched, using {{ domxref("EventTarget.dispatchEvent()") }}. Once
dispatched, it doesn't do anything anymore.

> **Note:** **Do not use this method anymore, as it is deprecated.**
>
> Rather than using the feature, instead use specific event constructors, like {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}.
> The page on [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events) gives more information about the way to use those.

## Syntax

```js
event.initCustomEvent(type, canBubble, cancelable, detail);
```

### Parameters

- `type`
  - : Is a {{domxref("DOMString")}} containing the name of the event.
- _`canBubble`_
  - : Is a boolean value indicating whether the event bubbles up through the DOM
    or not.
- `cancelable`
  - : Is a boolean value indicating whether the event is cancelable.
- _`detail`_
  - : The data passed when initializing the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CustomEvent")}}
- The constructor to use instead of this deprecated method:
  {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}.
