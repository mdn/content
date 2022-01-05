---
title: BackgroundFetchUpdateUIEvent()
slug: Web/API/BackgroundFetchUpdateUIEvent/BackgroundFetchUpdateUIEvent
tags:
  - API
  - Constructor
  - Reference
  - BackgroundFetchUpdateUIEvent
browser-compat: api.BackgroundFetchUpdateUIEvent.BackgroundFetchUpdateUIEvent
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`BackgroundFetchUpdateUIEvent()`** constructor creates a new {{domxref("BackgroundFetchUpdateUIEvent")}} object. This constructor is not typically used as the browser creates these objects itself and provides them to background fetch event callbacks.

## Syntax

```js
let BackgroundFetchEvent = new BackgroundFetchEvent(type, BackgroundFetchEventInit);
```

### Parameters

- `type`

  - : A {{domxref("DOMString","string")}} representing the name of the event. One of:

    - `onbackgroundfetchsuccess`
    - `onbackgroundfetchfail`

- `BackgroundFetchEventInit`

  - : An object including the following:

    - A {{domxref("BackgroundFetchRegistration")}}.
      - : The background fetch registration instance.
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
