---
title: BackgroundFetchEvent()
slug: Web/API/BackgroundFetchEvent/BackgroundFetchEvent
tags:
  - API
  - Constructor
  - Reference
  - BackgroundFetchEvent
browser-compat: api.BackgroundFetchEvent.BackgroundFetchEvent
---
{{DefaultAPISidebar("null")}}

The **`BackgroundFetchEvent()`** constructor creates a new {{domxref("BackgroundFetchEvent")}} object. This constructor is not typically used as the browser creates these objects itself and provides them to background fetch event callbacks.

## Syntax

```js
let BackgroundFetchEvent = new BackgroundFetchEvent(type, BackgroundFetchEventInit);
```

### Parameters

- `type`

  - : A {{domxref("DOMString","string")}} representing the name of the event. One of:

    - `onbackgroundfetchabort`
    - `onbackgroundfetchclick`

- `BackgroundFetchEventInit`
  - : A {{domxref("BackgroundFetchRegistration")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
