---
title: "Navigator: serviceWorker property"
short-title: serviceWorker
slug: Web/API/Navigator/serviceWorker
page-type: web-api-instance-property
browser-compat: api.Navigator.serviceWorker
---

{{securecontext_header}}{{APIRef("Service Workers API")}}

The **`serviceWorker`** read-only property of the {{domxref("Navigator")}} interface returns the {{domxref("ServiceWorkerContainer")}} object for the [associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window), which provides access to registration, removal, upgrade, and communication with the {{domxref("ServiceWorker")}}.

The feature may not be available in private mode.

Note that a worker can similarly access the {{domxref("ServiceWorkerContainer")}} for a document using {{domxref("WorkerNavigator.serviceWorker")}}.

## Value

{{domxref("ServiceWorkerContainer")}}.

## Examples

This code checks if the browser supports service workers.

```js
if ("serviceWorker" in navigator) {
  // Supported!
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Service Worker API", "", "", "nocode")}}
- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
