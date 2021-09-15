---
title: InstallEvent.activeWorker
slug: Web/API/InstallEvent/activeWorker
tags:
  - API
  - InstallEvent
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - activeWorker
browser-compat: api.InstallEvent.activeWorker
---
{{non-standard_header}}{{deprecated_header}}

The **`activeWorker`** read-only property of the {{domxref("InstallEvent")}} interface returns the {{domxref("ServiceWorker")}} that is currently actively controlling the page.

This will return `null` if no active worker is already controlling the page.

## Syntax

```js
var myActiveWorker = event.activeWorker
```

### Value

A {{domxref("ServiceWorker")}} object.

## Examples

```js
self.addEventListener('install', function(event) {
  var myActiveWorker = event.activeWorker;
});
```

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
