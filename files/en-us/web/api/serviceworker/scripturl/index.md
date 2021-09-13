---
title: ServiceWorker.scriptURL
slug: Web/API/ServiceWorker/scriptURL
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - scriptURL
browser-compat: api.ServiceWorker.scriptURL
---
{{APIRef("Service Workers API")}}

Returns the `ServiceWorker` serialized script URL defined as part of [`ServiceWorkerRegistration`](/en-US/docs/Web/API/ServiceWorkerRegistration "ServiceWorkerRegistion is an interface object representing the service worker registration. You register a service worker to control one or more pages that share the same origin.").
Must be on the same origin as the document that registers the
`ServiceWorker`.

## Syntax

```js
someURL = ServiceWorker.scriptURL
```

### Value

A {{domxref("USVString")}} (see the [WebIDL definition of
USVString](https://heycam.github.io/webidl/#idl-USVString).)

## Examples

```js
TBD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
