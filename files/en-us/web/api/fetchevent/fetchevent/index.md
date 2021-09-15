---
title: FetchEvent()
slug: Web/API/FetchEvent/FetchEvent
tags:
  - API
  - Communication
  - Constructor
  - Fetch
  - FetchEvent
  - Networking
  - Reference
  - Service Workers
  - ServiceWorker
browser-compat: api.FetchEvent.FetchEvent
---
{{APIRef("Service Workers API")}}

The **`FetchEvent()`** constructor creates a new
{{domxref("FetchEvent")}} object.

## Syntax

```js
var fetchEvent = new FetchEvent(type, init);
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} object specifying which event the object represents. This
    is always `fetch` for Fetch events.
- `init` {{optional_inline}}

  - : An object conforming to the {{domxref("FetchEventInit")}} dictionary, containing
    options to apply to the event object. Options are as follows:

    - `clientId` {{ReadOnlyInline}}
      - : The {{domxref("Client")}} that the current service worker is controlling.
    - `isReload` {{deprecated_inline}} {{ReadOnlyInline}}
      - : A boolean value that signifies whether the page was reloaded or not when
        the event was dispatched. `true` if yes, and `false` if not.
        Typically, pressing the refresh button in a browser is a reload, while clicking a
        link and pressing the back button is not. If not present, it defaults to
        `false`.
    - `preloadResponse` {{ReadOnlyInline}}
      - : A {{jsxref("Promise")}} which returns a previously-loaded response to the
        client.
    - `replacesClientId` {{ReadOnlyInline}}
      - : A {{domxref("DOMString")}} which identifies the client which is being replaced
        by `resultingClientId`.
    - `resultingClientId` {{ReadOnlyInline}}
      - : A {{domxref("DOMString")}} containing the new `clientId` if the
        client changes as a result of the page load.
    - `request` {{ReadOnlyInline}}
      - : The {{domxref("Request")}} object that would have triggered the event handler.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
