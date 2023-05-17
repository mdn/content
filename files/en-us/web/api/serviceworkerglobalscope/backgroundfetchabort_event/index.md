---
title: "ServiceWorkerGlobalScope: backgroundfetchabort event"
short-title: backgroundfetchabort
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ServiceWorkerGlobalScope.backgroundfetchabort_event
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`backgroundfetchabort`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when the user or the app itself cancels a [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("backgroundfetchabort", (event) => {});

onbackgroundfetchabort = (event) => {};
```

## Event type

A {{domxref("BackgroundFetchEvent")}}.

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Event properties

_Inherits properties from its parent, {{domxref("ExtendableEvent")}}._

- {{domxref("BackgroundFetchEvent.registration")}}
  - : Returns the {{domxref("BackgroundFetchRegistration")}} for the aborted fetch.

## Description

In the background fetch API, the browser shows a UI element to the user to indicate the progress of the operation. This element also enables the user to cancel the fetch. The app itself can also cancel the fetch by calling {{domxref("BackgroundFetchRegistration.abort()")}}.

If the fetch is canceled, the browser aborts the fetch, starts the service worker, if necessary, and fires the `backgroundfetchabort` event in the service worker's global scope.

In the handler for this event, the service worker can clean up any related data for the operation. It can also retrieve and store any successful responses (for example, using the {{domxref("Cache")}} API). To access the response data, the service worker uses the event's {{domxref("BackgroundFetchEvent/registration", "registration")}} property.

## Examples

### Cleaning up

This event handler might perform any cleanup of data associated with the aborted fetch.

```js
addEventListener("backgroundfetchabort", (event) => {
  // clean up any related data
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Background Fetch API](/en-US/docs/Web/API/Background_Fetch_API)
