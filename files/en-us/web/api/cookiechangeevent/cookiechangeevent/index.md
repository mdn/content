---
title: "CookieChangeEvent: CookieChangeEvent() constructor"
short-title: CookieChangeEvent()
slug: Web/API/CookieChangeEvent/CookieChangeEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CookieChangeEvent.CookieChangeEvent
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

The **`CookieChangeEvent()`** constructor creates a new {{domxref("CookieChangeEvent")}} object
which is the event type passed to {{domxref("CookieStore/change_event", "CookieStore.onchange()")}}.
This constructor is called by the browser when a change event occurs.

> **Note:** This event constructor is generally not needed for production websites. It's primary use is for tests that require an instance of this event.

## Syntax

```js-nolint
new CookieChangeEvent(type)
new CookieChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `cookiechange`.
- `options` {{Optional_Inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `changed`
      - : An array containing the changed cookies.
    - `deleted`
      - : An array containing the deleted cookies.

### Return value

A new {{domxref("CookieChangeEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
