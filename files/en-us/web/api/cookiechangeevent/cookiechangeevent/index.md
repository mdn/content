---
title: "CookieChangeEvent: CookieChangeEvent() constructor"
short-title: CookieChangeEvent()
slug: Web/API/CookieChangeEvent/CookieChangeEvent
page-type: web-api-constructor
browser-compat: api.CookieChangeEvent.CookieChangeEvent
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

The **`CookieChangeEvent()`** constructor creates a new {{domxref("CookieChangeEvent")}} object
which is the event type of the {{domxref("CookieStore/change_event", "change")}} event fired at a {{domxref("CookieStore")}} when any cookie changes occur.
This constructor is called by the browser when a change event occurs.

> [!NOTE]
> This event constructor is generally not needed for production websites. It's primary use is for tests that require an instance of this event.

## Syntax

```js-nolint
new CookieChangeEvent(type)
new CookieChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event. It is case-sensitive and browsers always set it to `change`.
- `options` {{Optional_Inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `changed` {{Optional_Inline}}
      - : An array containing the changed cookies.
    - `deleted` {{Optional_Inline}}
      - : An array containing the deleted cookies.

### Return value

A new {{domxref("CookieChangeEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
