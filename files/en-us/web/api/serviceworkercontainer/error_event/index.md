---
title: 'ServiceWorkerContainer: error event'
slug: Web/API/ServiceWorkerContainer/error_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
  - error
  - Deprecated
  - Non-standard
browser-compat: api.ServiceWorkerContainer.error_event
---
{{APIRef("Service Workers API")}}{{Deprecated_header}}{{Non-standard_header}}

The `error` event fires when an error occurs in the service worker.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('error', (event) => { });

onerror = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Example

```js
navigator.serviceWorker.onerror = (errorevent) => {
  console.error(`received error message: ${errorevent.message}`);
}
```

## Browser compatibility

{{Compat}}
