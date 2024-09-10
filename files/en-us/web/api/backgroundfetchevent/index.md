---
title: BackgroundFetchEvent
slug: Web/API/BackgroundFetchEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.BackgroundFetchEvent
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

The **`BackgroundFetchEvent`** interface of the {{domxref('Background Fetch API', "", "", "nocode")}} is the event type for background fetch events dispatched on the {{domxref("ServiceWorkerGlobalScope", "service worker global scope", "", "nocode")}}.

It is the event type passed to {{domxref("ServiceWorkerGlobalScope/backgroundfetchclick_event", "backgroundfetchclick")}} event and {{domxref("ServiceWorkerGlobalScope/backgroundfetchabort_event", "backgroundfetchabort")}} event.

{{InheritanceDiagram}}

## Constructor

- {{domxref("BackgroundFetchEvent.BackgroundFetchEvent()", "BackgroundFetchEvent()")}} {{Experimental_Inline}}
  - : Creates a new `BackgroundFetchEvent` object. This constructor is not typically used, as the browser creates these objects itself and provides them to background fetch event callbacks.

## Instance properties

_Also inherits properties from its parent, {{domxref("ExtendableEvent")}}._

- {{domxref("BackgroundFetchEvent.registration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("BackgroundFetchRegistration")}} that the event was initialized to.

## Instance methods

_Also inherits methods from its parent, {{domxref("ExtendableEvent")}}._

None.

## Examples

In this example, if the user clicks on the user interface displaying the download progress, a new window will open. The current {{domxref("BackgroundFetchRegistration")}} is returned by calling `event.registration`.

```js
addEventListener("backgroundfetchclick", (event) => {
  const bgFetch = event.registration;

  if (bgFetch.result === "success") {
    clients.openWindow("/latest-podcasts");
  } else {
    clients.openWindow("/download-progress");
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
