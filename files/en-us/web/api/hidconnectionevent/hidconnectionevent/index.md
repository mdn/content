---
title: HIDConnectionEvent()
slug: Web/API/HIDConnectionEvent/HIDConnectionEvent
tags:
  - API
  - Constructor
  - Reference
  - HIDConnectionEvent
browser-compat: api.HIDConnectionEvent.HIDConnectionEvent
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`HIDConnectionEvent()`** constructor creates a new {{domxref("HIDConnectionEvent")}} object. Typically this constructor is not used as events are created when an input report is received.

## Syntax

```js
new HIDConnectionEvent(type, HIDConnectionEventInit);
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} with one of `"connect"` or `"disconnect"`.
- `HIDConnectionEventInit`

  - : A dictionary including the following fields:

    - `device`
      - : The {{domxref("HIDDevice")}} instance representing the device sending the input report.
    - `bubbles` {{optional_inline}}
      - : A boolean value indicating whether the event bubbles. The default is
        `false`.
    - `cancelable` {{optional_inline}}
      - : A boolean value indicating whether the event can be cancelled. The
        default is `false`.
    - `composed` {{optional_inline}}
      - : A boolean value indicating whether the event will trigger listeners
        outside of a shadow root (see {{domxref("Event.composed")}} for more details). The
        default is `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
