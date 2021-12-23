---
title: Clients.get()
slug: Web/API/Clients/get
tags:
  - API
  - Clients
  - Experimental
  - Method
  - Reference
  - Service Workers
  - get
browser-compat: api.Clients.get
---
{{APIRef("Service Workers API")}}

The **`get()`** method of the
{{domxref("Clients")}} interface gets a service worker client matching a given
`id` and returns it in a {{jsxref("Promise")}}.

## Syntax

```js
self.clients.get(id).then(function(client) {
  // do something with your returned client
});
```

### Parameters

- `id`
  - : A {{domxref("DOMString")}} representing the id of the client you want to get.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("Client")}} object or
`undefined`.

## Examples

```js
self.clients.get(id).then(function(client) {
  self.clients.openWindow(client.url);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
