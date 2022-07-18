---
title: FetchEvent()
slug: Web/API/FetchEvent/FetchEvent
page-type: web-api-constructor
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

The **`FetchEvent()`** constructor creates a new {{domxref("FetchEvent")}} object.

## Syntax

```js
new FetchEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `fetch`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, can have the following properties:
    - `request`
      - : The {{domxref("Request")}} object that would have triggered the event handler.
    - `preloadResponse`
      - : A {{jsxref("Promise")}} which returns a previously-loaded response to the client.
    - `clientId`  {{optional_inline}}
      - : The {{domxref("Client")}} that the current service worker is controlling. It defaults to `""`.
    - `isReload` {{deprecated_inline}} {{optional_inline}}
      - : A boolean value that signifies whether the page was reloaded or not when
        the event was dispatched. `true` if yes, and `false` if not.
        Typically, pressing the refresh button in a browser is a reload, while clicking a
        link and pressing the back button is not. If not present, it defaults to
        `false`.
    - `replacesClientId` {{optional_inline}}
      - : A string which identifies the client which is being replaced by `resultingClientId`. It defaults to `""`.
    - `resultingClientId` {{optional_inline}}
      - : A string containing the new `clientId` if the client changes as a result of the page load. It defaults to `""`

## Return value

A new {{domxref("FetchEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
