---
title: Client
slug: Web/API/Client
tags:
  - API
  - Client
  - Experimental
  - Interface
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorkerClient
  - ServiceWorkers
browser-compat: api.Client
---
{{APIRef("Service Workers API")}}

The `Client` interface represents an executable context such as a {{domxref("Worker")}}, or a {{domxref("SharedWorker")}}. {{domxref("Window")}} clients are represented by the more-specific {{domxref("WindowClient")}}. You can get `Client`/`WindowClient` objects from methods such as {{domxref("Clients.matchAll","Clients.matchAll()")}} and {{domxref("Clients.get","Clients.get()")}}.

## Methods

- {{domxref("Client.postMessage()")}}
  - : Sends a message to the client.

## Properties

- {{domxref("Client.id")}} {{readonlyInline}}
  - : The universally unique identifier of the client as a string.
- {{domxref("Client.type")}} {{readonlyInline}}
  - : The client's type as a string. It can be "`window"`, "`worker"`, or "`sharedworker"`.
- {{domxref("Client.url")}} {{readonlyInline}}
  - : The URL of the client as a string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
