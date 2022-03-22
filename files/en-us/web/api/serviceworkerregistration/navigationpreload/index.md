---
title: ServiceWorkerRegistration.navigationPreload
slug: Web/API/ServiceWorkerRegistration/navigationPreload
tags:
  - API
  - NavigationPreloadManager
  - Property
  - Service Workers
  - Workers
browser-compat: api.ServiceWorkerRegistration.navigationPreload
---
{{ServiceWorkerSidebar}}

The **`navigationPreload`** read-only property of the {{domxref("ServiceWorkerRegistration")}} interface returns the {{domxref("NavigationPreloadManager")}} associated with the current service worker registration.

The returned object allows resources managed by a service worker to be preemptively downloaded in parallel with service worker boot up.

## Value

An instance of {{domxref("NavigationPreloadManager")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
