---
title: WorkerLocation
slug: Web/API/WorkerLocation
tags:
  - API
  - Web Workers
  - Reference
browser-compat: api.WorkerLocation
---
{{APIRef("Web Workers API")}}

The **`WorkerLocation`** interface defines the absolute location of the script executed by the {{domxref("Worker")}}. Such an object is initialized for each worker and is available via the {{domxref("WorkerGlobalScope.location")}} property obtained by calling `self.location`.

This interface is only visible from inside a JavaScript script executed in the context of a Web worker.

## Properties

- {{domxref("WorkerLocation.href")}} {{readOnlyInline}}
  - : Returns a {{domxref("USVString")}} containing the serialized {{domxref("URL")}} for the worker's location.
- {{domxref("WorkerLocation.protocol")}} {{readOnlyInline}}
  - : Returns the {{domxref("URL.protocol", "protocol")}} part of the worker's location.
- {{domxref("WorkerLocation.host")}} {{readOnlyInline}}
  - : Returns the {{domxref("URL.host", "host")}} part of the worker's location.
- {{domxref("WorkerLocation.hostname")}} {{readOnlyInline}}
  - : Returns the {{domxref("URL.hostname", "hostname")}} part of the worker's location.
- {{domxref("WorkerLocation.origin")}} {{readOnlyInline}}
  - : Returns the worker's {{domxref("URL.origin", "origin")}}.
- {{domxref("WorkerLocation.port")}} {{readOnlyInline}}
  - : Returns the {{domxref("URL.port", "port")}} part of the worker's location.
- {{domxref("WorkerLocation.pathname")}} {{readOnlyInline}}
  - : Returns the {{domxref("URL.pathname", "pathname")}} part of the worker's location.
- {{domxref("WorkerLocation.search")}} {{readOnlyInline}}
  - : Returns the {{domxref("URL.search", "search")}} part of the worker's location.
- {{domxref("WorkerLocation.hash")}} {{readOnlyInline}}
  - : Returns the {{domxref("URL.hash", "hash")}} part of the worker's location.

## Methods

- {{domxref("WorkerLocation.toString()")}}
  - : Returns a {{domxref("USVString")}} containing the serialized {{domxref("URL")}} for the worker's location. It is a synonym for {{domxref("WorkerLocation.href")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other Worker-related interfaces: {{domxref("Worker")}}, {{domxref("WorkerNavigator")}}, and {{domxref("WorkerGlobalScope")}}.
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
