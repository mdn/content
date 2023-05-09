---
title: Client
slug: Web/API/Client
page-type: web-api-interface
browser-compat: api.Client
---

{{APIRef("Service Workers API")}}

The `Client` interface represents an executable context such as a {{domxref("Worker")}}, or a {{domxref("SharedWorker")}}. {{domxref("Window")}} clients are represented by the more-specific {{domxref("WindowClient")}}. You can get `Client`/`WindowClient` objects from methods such as {{domxref("Clients.matchAll","Clients.matchAll()")}} and {{domxref("Clients.get","Clients.get()")}}.

## Instance methods

- {{domxref("Client.postMessage()")}}
  - : Sends a message to the client.

## Instance properties

- {{domxref("Client.id")}} {{ReadOnlyInline}}
  - : The universally unique identifier of the client as a string.
- {{domxref("Client.type")}} {{ReadOnlyInline}}
  - : The client's type as a string. It can be `"window"`, `"worker"`, or `"sharedworker"`.
- {{domxref("Client.url")}} {{ReadOnlyInline}}
  - : The URL of the client as a string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
