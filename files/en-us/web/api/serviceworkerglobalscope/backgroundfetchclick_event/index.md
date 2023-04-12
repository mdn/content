---
title: "ServiceWorkerGlobalScope: backgroundfetchclick event"
short-title: backgroundfetchclick
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ServiceWorkerGlobalScope.backgroundfetchclick_event
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`backgroundfetchclick`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when the user clicks on the UI that the browser provides to show the user the progress of the [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("backgroundfetchclick", (event) => {});

onbackgroundfetchclick = (event) => {};
```

## Event type

A {{domxref("BackgroundFetchEvent")}}.

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Event properties

_Inherits properties from its parent, {{domxref("ExtendableEvent")}}._

- {{domxref("BackgroundFetchEvent.registration")}}
  - : Returns the {{domxref("BackgroundFetchRegistration")}} whose progress dialog the user clicked on.

## Description

When a [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation starts, the browser shows a UI element to the user to indicate the progress of the operation. If the user clicks this element, the browser starts the service worker, if necessary, and fires the `backgroundfetchclick` event in the service worker's global scope.

A common task for the handler in this situation is to open a window giving the user more details about the fetch operation.

## Examples

### Opening a window with more details

This event handler uses the global {{domxref("ServiceWorkerGlobalScope.clients", "clients")}} property to open a window giving the user more details about the fetch. It opens a different window depending on whether the fetch has completed or not.

```js
addEventListener("backgroundfetchclick", (event) => {
  const registration = event.registration;

  if (registration.result === "success") {
    clients.openWindow("/play-movie");
  } else {
    clients.openWindow("/movie-download-progress");
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Background Fetch API](/en-US/docs/Web/API/Background_Fetch_API)
