---
title: "ServiceWorkerRegistration: cookies property"
short-title: cookies
slug: Web/API/ServiceWorkerRegistration/cookies
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ServiceWorkerRegistration.cookies
---

{{APIRef("Cookie Store API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_service")}}

The **`cookies`** read-only property of the {{domxref("ServiceWorkerRegistration")}} interface returns a reference to the {{domxref("CookieStoreManager")}} interface, which enables a web app to subscribe to and unsubscribe from cookie change events in a [service worker](/en-US/docs/Web/API/Service_Worker_API). This is an entry point for the [Cookie Store API](/en-US/docs/Web/API/Cookie_Store_API).

## Value

A {{domxref("CookieStoreManager")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
