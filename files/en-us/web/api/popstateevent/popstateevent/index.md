---
title: "PopStateEvent: PopStateEvent() constructor"
short-title: PopStateEvent()
slug: Web/API/PopStateEvent/PopStateEvent
page-type: web-api-constructor
browser-compat: api.PopStateEvent.PopStateEvent
---

{{APIRef("History API")}}

The **`PopStateEvent()`** constructor creates a new {{domxref("PopStateEvent")}} object.

> **Note:** A web developer doesn't typically need to call this constructor, as the browser creates these objects itself when firing {{domxref("Window/popstate_event", "popstate")}} events.

## Syntax

```js-nolint
new PopStateEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `popstate`.
- `options` {{optional_inline}}
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following property:
    - `state` {{optional_inline}}
      - : An object representing the state. Practically it is a value provided by the call to {{domxref("history.pushState()")}} or {{domxref("history.replaceState()")}}. If not set, it defaults to `null`.

### Return value

A new {{domxref("PopStateEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("history.pushState()")}}
- {{domxref("history.replaceState()")}}
- {{domxref("Window/popstate_event", "popstate")}} event
