---
title: ExtendableCookieChangeEvent()
slug: Web/API/ExtendableCookieChangeEvent/ExtendableCookieChangeEvent
tags:
  - API
  - Constructor
  - Reference
  - ExtendableCookieChangeEvent
browser-compat: api.ExtendableCookieChangeEvent.ExtendableCookieChangeEvent
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store")}}

The **`ExtendableCookieChangeEvent()`** constructor creates a new {{domxref("ExtendableCookieChangeEvent")}} object which is the event type passed to {{domxref("ServiceWorkerRegistration.oncookiechange()")}}. This constructor is called by the browser when a change event occurs.

> **Note:** This event constructor is generally not needed for production web sites. It's primary use is for tests that require an instance of this event.

## Syntax

```js
var extendableCookieChangeEvent = new ExtendableCookieChangeEvent(type, [eventInitDict]);
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} with the value `"changed"` or `"deleted"`.
- `eventInitDict`{{Optional_Inline}}

  - : An object containing:

    - `changed`
      - : An array containing a changed cookie.
    - `deleted`
      - : An array containing a deleted cookie.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
