---
title: InstallEvent.activeWorker
slug: Web/API/InstallEvent/activeWorker
page-type: web-api-instance-property
tags:
  - API
  - InstallEvent
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - activeWorker
  - Deprecated
  - Non-standard
browser-compat: api.InstallEvent.activeWorker
---
{{APIRef("Service Workers API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`activeWorker`** read-only property of the {{domxref("InstallEvent")}} interface returns the {{domxref("ServiceWorker")}} that is currently actively controlling the page.

This will return `null` if no active worker is already controlling the page.

## Value

A {{domxref("ServiceWorker")}} object.

## Examples

```js
self.addEventListener('install', (event) => {
  const myActiveWorker = event.activeWorker;
});
```

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
