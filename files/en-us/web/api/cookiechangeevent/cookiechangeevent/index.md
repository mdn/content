---
title: CookieChangeEvent()
slug: Web/API/CookieChangeEvent/CookieChangeEvent
tags:
  - API
  - Constructor
  - Reference
  - CookieChangeEvent
browser-compat: api.CookieChangeEvent.CookieChangeEvent
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store")}}

The **`CookieChangeEvent()`** constructor creates a new {{domxref("CookieChangeEvent")}} object which is the event type passed to {{domxref("CookieStore.onchange()")}}. This constructor is called by the browser when a change event occurs.

> **Note:** This event constructor is generally not needed for production web sites. It's primary use is for tests that require an instance of this event.

## Syntax

```js
var CookieChangeEvent = new CookieChangeEvent(type,eventInitDict);
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
