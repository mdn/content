---
title: BackgroundFetchUpdateUIEvent
slug: Web/API/BackgroundFetchUpdateUIEvent
tags:
  - API
  - Interface
  - Reference
  - BackgroundFetchUpdateUIEvent
browser-compat: api.BackgroundFetchUpdateUIEvent
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`BackgroundFetchUpdateUIEvent`** interface of the {{domxref('Background Fetch API','','',' ')}} is an event type passed to {{domxref("ServiceWorkerGlobalScope.onbackgroundfetchsuccess")}} and {{domxref("ServiceWorkerGlobalScope.onbackgroundfetchfail")}}, and provides a method for updating the title and icon of the app to inform a user of the success or failure of a background fetch.

## Constructor

- {{domxref("BackgroundFetchUpdateUIEvent.BackgroundFetchUpdateUIEvent()", "BackgroundFetchUpdateUIEvent()")}}
  - : Creates a new `BackgroundFetchUIEvent` object. This constructor is not typically used, as the browser creates these objects itself and passed them to {{domxref("ServiceWorkerGlobalScope.onbackgroundfetchsuccess")}} and {{domxref("ServiceWorkerGlobalScope.onbackgroundfetchfail")}}.

## Properties

_This interface doesn't implement any specific properties, but inherits properties from {{domxref("Event")}}, and {{domxref("BackgroundFetchEvent")}}._

## Methods

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}}
  - : Updates the title and icon in the user interface to show the status of a background fetch. Resolves with a {{jsxref("Promise")}}.

## Examples

In this example, the `backgroundfetchsuccess` event is listened for, indicating that a fetch has completed successfully. The {{domxref("BackgroundFetchUpdateUIEvent.updateUI()", "updateUI()")}} method is then called, with a message to let the user know the episode they downloaded is ready.

```js
addEventListener('backgroundfetchsuccess', (event) => {
  const bgFetch = event.registration;

  event.waitUntil(async function() {
    // Create/open a cache.
    const cache = await caches.open('downloads');
    // Get all the records.
    const records = await bgFetch.matchAll();
    // Copy each request/response across.
    const promises = records.map(async (record) => {
      const response = await record.responseReady;
      await cache.put(record.request, response);
    });

    // Wait for the copying to complete.
    await Promise.all(promises);

    // Update the progress notification.
    event.updateUI({ title: 'Episode 5 ready to listen!' });
  }());
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
