---
title: "Clients: get() method"
short-title: get()
slug: Web/API/Clients/get
page-type: web-api-instance-method
browser-compat: api.Clients.get
---

{{APIRef("Service Workers API")}}

The **`get()`** method of the
{{domxref("Clients")}} interface gets a service worker client matching a given
`id` and returns it in a {{jsxref("Promise")}}.

## Syntax

```js-nolint
get(id)
```

### Parameters

- `id`
  - : A string representing the id of the client you want to get.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("Client")}} object or
`undefined`.

## Examples

```js
self.clients.get(id).then((client) => {
  self.clients.openWindow(client.url);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
