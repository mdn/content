---
title: ServiceWorkerRegistration.index
slug: Web/API/ServiceWorkerRegistration/index
tags:
  - Content
  - Content Index API
  - Index
  - PWA
  - Property
  - ServiceWorker
  - ServiceWorkerRegistration
  - content index
  - content indexing
browser-compat: api.ServiceWorkerRegistration.index
---
{{draft}}{{DefaultAPISidebar("Service Worker API")}}

The **`index`** read-only property of the
{{domxref("ServiceWorkerRegistration")}} interface returns a reference to the
{{domxref('ContentIndex')}} interface, which allows for indexing of offline content.

## Syntax

```js
var contentIndexObject = ServiceWorkerRegistration.index;
```

### Value

A ContentIndex {{jsxref('Object')}}

## Examples

You can access the property from either your main script or the registered service
worker.

Here is an example from the main script:

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ('index' in registration) {

  // Content Index API functionality
  const contentIndex = registration.index;

}
```

From the {{domxref('ServiceWorker','service worker')}}:

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
- [An introductory article on the
  Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list
  and remove 'save for later' content](https://contentindex.dev/)
