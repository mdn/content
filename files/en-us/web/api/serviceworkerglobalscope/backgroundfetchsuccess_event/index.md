---
title: "ServiceWorkerGlobalScope: backgroundfetchsuccess event"
short-title: backgroundfetchsuccess
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ServiceWorkerGlobalScope.backgroundfetchsuccess_event
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`backgroundfetchsuccess`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when a [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation has completed successfully: that is, when all network requests in the fetch have completed successfully.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("backgroundfetchsuccess", (event) => {});

onbackgroundfetchsuccess = (event) => {};
```

## Event type

A {{domxref("BackgroundFetchUpdateUIEvent")}}.

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Event properties

_Inherits properties from its parent, {{domxref("BackgroundFetchEvent")}}._

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}}
  - : Updates the UI of the element that the browser displays to show the progress of the fetch operation.

## Description

When a [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation completes successfully (meaning that all individual network requests have completed successfully), the browser starts the service worker, if necessary, and fires the `backgroundfetchsuccess` event in the service worker's global scope.

In the handler for this event, the service worker can retrieve and store the responses (for example, using the {{domxref("Cache")}} API). To access the response data, the service worker uses the event's {{domxref("BackgroundFetchEvent/registration", "registration")}} property.

In the background fetch API, the browser shows a UI element to the user to indicate the progress of the operation. In the `backgroundfetchsuccess` handler, the service worker can update that UI to show that the operation has completed successfully. To do this, the handler calls the event's {{domxref("BackgroundFetchUpdateUIEvent/updateUI", "updateUI()")}} method, passing in a new title and/or icons.

## Examples

### Storing responses and updating UI

This event handler stores all responses in the cache, and updates the UI.

```js
addEventListener("backgroundfetchsuccess", (event) => {
  const registration = event.registration;

  event.waitUntil(async () => {
    // Open a cache
    const cache = await caches.open("movies");
    // Get all the records
    const records = await registration.matchAll();
    // Cache all responses
    const cachePromises = records.map(async (record) => {
      const response = await record.responseReady;
      await cache.put(record.request, response);
    });

    // Wait for caching to finish
    await Promise.all(cachePromises);

    // Update the browser's UI
    event.updateUI({ title: "Move download complete" });
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Background Fetch API](/en-US/docs/Web/API/Background_Fetch_API)
