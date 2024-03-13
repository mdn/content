---
title: "ServiceWorkerRegistration: navigationPreload property"
short-title: navigationPreload
slug: Web/API/ServiceWorkerRegistration/navigationPreload
page-type: web-api-instance-property
browser-compat: api.ServiceWorkerRegistration.navigationPreload
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`navigationPreload`** read-only property of the {{domxref("ServiceWorkerRegistration")}} interface returns the {{domxref("NavigationPreloadManager")}} associated with the current service worker registration.

The returned object allows resources managed by a service worker to be preemptively downloaded in parallel with service worker boot up.

## Value

An instance of {{domxref("NavigationPreloadManager")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
