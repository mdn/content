---
title: "CustomEvent: initCustomEvent() method"
short-title: initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.CustomEvent.initCustomEvent
---

{{APIRef("DOM")}}{{Deprecated_header}}{{AvailableInWorkers}}

The **`CustomEvent.initCustomEvent()`** method initializes a {{domxref("CustomEvent")}} object.
If the event has already been dispatched, this method does nothing.

Events initialized in this way must have been created with the {{domxref("Document.createEvent()")}} method.
This method must be called to set the event before it is dispatched using {{ domxref("EventTarget.dispatchEvent()") }}.
Once dispatched, it doesn't do anything anymore.

> **Note:** **Do not use this method anymore, as it is deprecated.**
>
> Rather than using the feature, instead use specific event constructors, like {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}.
> The page on [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events) gives more information about the way to use those.

## Syntax

```js-nolint
initCustomEvent(type, canBubble, cancelable, detail)
```

### Parameters

- `type`
  - : A string containing the name of the event.
- `canBubble`
  - : A boolean value indicating whether the event bubbles up through the DOM
    or not.
- `cancelable`
  - : A boolean value indicating whether the event is cancelable.
- `detail`
  - : Any data that will be available to the handler through the {{domxref("CustomEvent.detail")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CustomEvent")}}
- The constructor to use instead of this deprecated method: {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}.
