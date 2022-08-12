---
title: Navigator.serviceWorker
slug: Web/API/Navigator/serviceWorker
page-type: web-api-instance-property
tags:
  - API
  - Navigator
  - Property
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
browser-compat: api.Navigator.serviceWorker
---
{{APIRef("Service Workers API")}}

The **`Navigator.serviceWorker`**
read-only property returns the {{domxref("ServiceWorkerContainer")}} object for the [associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window), which provides access to registration, removal, upgrade, and
communication with the {{domxref("ServiceWorker")}}.

The feature may not be available in private mode.

## Value

{{domxref("ServiceWorkerContainer")}}.

## Examples

This code checks if the browser supports service workers.

```js
if ('serviceWorker' in navigator) {
  // Supported!
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
