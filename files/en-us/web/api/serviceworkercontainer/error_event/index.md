---
title: 'ServiceWorkerContainer: error event'
slug: Web/API/ServiceWorkerContainer/error_event
page-type: web-api-event
tags:
  - API
  - Experimental
  - Event
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
  - error
browser-compat: api.ServiceWorkerContainer.error_event
---
{{APIRef("Service Workers API")}}{{Deprecated_header}}

The `error` event fires when an error occurs in the service worker.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('error', event => { });

onerror = event => { };
```

## Event type

A generic {{domxref("Event")}}.

## Example

```js
navigator.serviceWorker.onerror = function(errorevent) {
  console.log(`received error message: ${errorevent.message}`);
}
```

## Browser compatibility

{{Compat}}
