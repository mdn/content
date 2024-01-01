---
title: "ServiceWorkerGlobalScope: backgroundfetchfail event"
short-title: backgroundfetchfail
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ServiceWorkerGlobalScope.backgroundfetchfail_event
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`backgroundfetchfail`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when a [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation has failed: that is, when at least one network request in the fetch has failed to complete successfully.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("backgroundfetchfail", (event) => {});

onbackgroundfetchfail = (event) => {};
```

## Event type

A {{domxref("BackgroundFetchUpdateUIEvent")}}.

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Event properties

_Inherits properties from its parent, {{domxref("BackgroundFetchEvent")}}._

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}}
  - : Updates the UI of the element that the browser displays to show the progress of the fetch operation.

## Description

When a [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation fails (meaning that at least one of the individual network requests has not completed successfully), the browser starts the service worker, if necessary, and fires the `backgroundfetchfail` event in the service worker's global scope.

In the background fetch API, the browser shows a UI element to the user to indicate the progress of the operation. In the `backgroundfetchfail` handler, the service worker can update that UI to show that the operation has failed. To do this, the handler calls the event's {{domxref("BackgroundFetchUpdateUIEvent/updateUI", "updateUI()")}} method, passing in a new title and/or icons.

In the handler for this `backgroundfetchfail`, the service worker can also clean up any related data for the operation. It can also retrieve and store any successful responses (for example, using the {{domxref("Cache")}} API). To access the response data, the service worker uses the event's {{domxref("BackgroundFetchEvent/registration", "registration")}} property.

## Examples

### Updating UI

This event handler updates the UI to let the user know that the operation failed.

```js
addEventListener("backgroundfetchfail", (event) => {
  event.updateUI({ title: "Could not complete download" });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Background Fetch API](/en-US/docs/Web/API/Background_Fetch_API)
