---
title: "HashChangeEvent: HashChangeEvent() constructor"
short-title: HashChangeEvent()
slug: Web/API/HashChangeEvent/HashChangeEvent
page-type: web-api-constructor
browser-compat: api.HashChangeEvent.HashChangeEvent
---

{{APIRef("HTML DOM")}}

The **`HashChangeEvent()`** constructor creates a new {{domxref("HashChangeEvent")}} object, that is used by the {{domxref("Window/hashchange_event", "hashchange")}} event fired at the {{domxref("window")}} object when the fragment of the URL changes.

> **Note:** A web developer doesn't typically need to call this constructor, as the browser creates these objects itself when firing {{domxref("Window/hashchange_event", "hashchange")}} events.

## Syntax

```js-nolint
new HashChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `hashchange`.
- `options` {{optional_inline}}
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `oldURL` {{optional_inline}}
      - : A string containing the old URL. Its default value is the empty string (`""`).
    - `newURL`{{optional_inline}}
      - : A string containing the new URL. Its default value is the empty string (`""`).

### Return value

A new {{domxref("HashChangeEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/hashchange_event", "hashchange")}} event
