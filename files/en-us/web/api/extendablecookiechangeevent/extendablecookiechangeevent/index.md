---
title: "ExtendableCookieChangeEvent: ExtendableCookieChangeEvent() constructor"
short-title: ExtendableCookieChangeEvent()
slug: Web/API/ExtendableCookieChangeEvent/ExtendableCookieChangeEvent
page-type: web-api-constructor
browser-compat: api.ExtendableCookieChangeEvent.ExtendableCookieChangeEvent
---

{{securecontext_header}}{{APIRef("Cookie Store API")}} {{AvailableInWorkers}}

The **`ExtendableCookieChangeEvent()`** constructor creates a new {{domxref("ExtendableCookieChangeEvent")}} object
which is the event type passed to {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} event fired at the {{domxref("ServiceWorkerGlobalScope")}} when any cookie changes occur which match the service worker's cookie change subscription list.
This constructor is called by the browser when a change event occurs.

> **Note:** This event constructor is generally not needed for production websites. It's primary use is for tests that require an instance of this event.

## Syntax

```js-nolint
new ExtendableCookieChangeEvent(type)
new ExtendableCookieChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `cookiechange`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, can have the following properties:
    - `changed` {{optional_inline}}
      - : An array containing a changed cookie.
    - `deleted` {{optional_inline}}
      - : An array containing a deleted cookie.

### Return value

A new {{domxref("ExtendableCookieChangeEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
