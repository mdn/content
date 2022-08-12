---
title: Clients.matchAll()
slug: Web/API/Clients/matchAll
page-type: web-api-instance-method
tags:
  - API
  - Clients
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
browser-compat: api.Clients.matchAll
---
{{APIRef("Service Workers API")}}

The **`matchAll()`** method of the {{domxref("Clients")}}
interface returns a {{jsxref("Promise")}} for a list of service worker
{{domxref("Client")}} objects. Include the `options` parameter to return all service worker
clients whose origin is the same as the associated service worker's origin. If options
are not included, the method returns only the service worker clients controlled by the
service worker.

## Syntax

```js
matchAll()
matchAll(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An options object allowing you to set options for the matching operation. Available
    options are:

    - `includeUncontrolled`
      - : A boolean value — if set to
        `true`, the matching operation will return all service worker clients
        who share the same origin as the current service worker. Otherwise, it returns
        only the service worker clients controlled by the current service worker. The
        default is `false`.
    - `type`
      - : Sets the type of clients you want matched. Available values
        are `"window"`, `"worker"`, `"sharedworker"`, and
        `"all"`. The default is `"window"`.

### Return value

A {{jsxref("Promise")}} that resolves to an array of {{domxref("Client")}} objects. In
Chrome 46/Firefox 54 and later, this method returns clients in most recently focused
order, correct as per spec.

## Examples

```js
clients.matchAll(options).then((clientList) => {
  for (const client of clientList) {
    if (client.url === 'index.html') {
      clients.openWindow(client);
      // or do something else involving the matching client
    }
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
