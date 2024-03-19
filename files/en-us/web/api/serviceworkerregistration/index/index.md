---
title: "ServiceWorkerRegistration: index property"
short-title: index
slug: Web/API/ServiceWorkerRegistration/index
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ServiceWorkerRegistration.index
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`index`** read-only property of the
{{domxref("ServiceWorkerRegistration")}} interface returns a reference to the
{{domxref('ContentIndex')}} interface, which allows for indexing of offline content.

## Value

A {{domxref('ContentIndex')}} object.

## Examples

You can access the property from either your main script or the registered service
worker.

Here is an example from the main script:

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ("index" in registration) {
  // Content Index API functionality
  const contentIndex = registration.index;
}
```

From the [service worker](/en-US/docs/Web/API/ServiceWorker):

```js
// service worker script

const contentIndex = self.registration.index;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Content Index API")}}
- [An introductory article on the Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)
