---
title: "ServiceWorkerContainer: error event"
short-title: error
slug: Web/API/ServiceWorkerContainer/error_event
page-type: web-api-event
status:
  - deprecated
  - non-standard
browser-compat: api.ServiceWorkerContainer.error_event
---

{{APIRef("Service Workers API")}}{{Deprecated_header}}{{Non-standard_header}}{{SecureContext_Header}}{{AvailableInWorkers}}

The `error` event fires when an error occurs in the service worker.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

```js
navigator.serviceWorker.onerror = (event) => {
  console.error(`received error message: ${event.message}`);
};
```

## Browser compatibility

{{Compat}}
