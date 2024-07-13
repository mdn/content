---
title: BackgroundFetchUpdateUIEvent
slug: Web/API/BackgroundFetchUpdateUIEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.BackgroundFetchUpdateUIEvent
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

The **`BackgroundFetchUpdateUIEvent`** interface of the {{domxref('Background Fetch API','','',' ')}} is an event type for the {{domxref("ServiceWorkerGlobalScope.backgroundfetchsuccess_event", "backgroundfetchsuccess")}} and {{domxref("ServiceWorkerGlobalScope.backgroundfetchfail_event", "backgroundfetchfail")}} events, and provides a method for updating the title and icon of the app to inform a user of the success or failure of a background fetch.

{{InheritanceDiagram}}

## Constructor

- {{domxref("BackgroundFetchUpdateUIEvent.BackgroundFetchUpdateUIEvent()", "BackgroundFetchUpdateUIEvent()")}} {{Experimental_Inline}}
  - : Creates a new `BackgroundFetchUIEvent` object. This constructor is not typically used, as the browser creates these objects itself for the {{domxref("ServiceWorkerGlobalScope.backgroundfetchsuccess_event", "backgroundfetchsuccess")}} and {{domxref("ServiceWorkerGlobalScope.backgroundfetchfail_event", "backgroundfetchfail")}} events.

## Instance properties

_Also inherits properties from its parent, {{domxref("BackgroundFetchEvent")}}._

## Instance methods

_Also inherits methods from its parent, {{domxref("BackgroundFetchEvent")}}._

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}} {{Experimental_Inline}}
  - : Updates the title and icon in the user interface to show the status of a background fetch. Resolves with a {{jsxref("Promise")}}.

## Examples

In this example, the `backgroundfetchsuccess` event is listened for, indicating that a fetch has completed successfully. The {{domxref("BackgroundFetchUpdateUIEvent.updateUI()", "updateUI()")}} method is then called, with a message to let the user know the episode they downloaded is ready.

```js
addEventListener("backgroundfetchsuccess", (event) => {
  const bgFetch = event.registration;

  event.waitUntil(
    (async () => {
      // Create/open a cache.
      const cache = await caches.open("downloads");
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
      event.updateUI({ title: "Episode 5 ready to listen!" });
    })(),
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
