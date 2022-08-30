---
title: ServiceWorkerContainer.startMessages()
slug: Web/API/ServiceWorkerContainer/startMessages
page-type: web-api-instance-method
tags:
  - API
  - Reference
  - Service Workers
  - ServiceWorkerContainer
  - startMessages
browser-compat: api.ServiceWorkerContainer.startMessages
---
{{APIRef("Service Workers API")}}

The **`startMessages()`** method of
the {{domxref("ServiceWorkerContainer")}} interface explicitly starts the flow of
messages being dispatched from a service worker to pages under its control (e.g. sent
via {{domxref("Client.postMessage()")}}). This can be used to react to sent messages
earlier, even before that page's content has finished loading.

## Explanation

By default, all messages sent from a page's controlling service worker to the page
(using {{domxref("Client.postMessage()")}}) are queued while the page is loading, and
get dispatched once the page's HTML document has been loaded and parsed (i.e. after the
{{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event fires). It's possible to start dispatching these
messages earlier by calling {{domxref("ServiceWorkerContainer.startMessages()")}}, for
example if you've invoked a message handler using
{{domxref("EventTarget.addEventListener()")}} before the page has finished loading, but
want to start processing the messages right away.

> **Note:** The messages start being sent automatically when setting the
> handler directly using {{domxref("ServiceWorkerContainer.message_event", "onmessage")}}. In this you
> don't need `startMessages()`.

## Syntax

```js
serviceWorkerContainer.startMessages();
```

### Parameters

None.

### Return value

`undefined`.

## Examples

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(() => { console.log('Service Worker Registered'); });
}

// …

navigator.serviceWorker.addEventListener('message', (e) => {
  // …
});

navigator.serviceWorker.startMessages();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
