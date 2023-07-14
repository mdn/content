---
title: "WorkerGlobalScope: console property"
short-title: console
slug: Web/API/WorkerGlobalScope/console
page-type: web-api-instance-property
browser-compat: api.WorkerGlobalScope.console
---

{{APIRef("Web Workers API")}}{{Non-standard_header}}

The **`console`** read-only property of the {{domxref("WorkerGlobalScope")}} interface returns a {{domxref("console")}} object providing access to the browser console for the worker.

## Value

A {{domxref("console")}} object.

## Examples

This property allows you to have access to a browser console for debugging purposes, inside a worker. So for example you could call

```js
console.log("test");
```

inside a worker (which would basically be the equivalent of `self.console.log('test');`, as these are being called on the worker scope, which can be referenced with {{domxref("WorkerGlobalScope.self")}}), to return a test message out to the browser console.

If you are calling `console.log()` from a {{domxref("DedicatedWorkerGlobalScope")}} or other worker scope that acts on a single loaded window, that tab's web console will receive the logs. However, If you are calling `console.log()` from a {{domxref("SharedWorkerGlobalScope")}}, the global browser console will receive the logs.

## Specifications

Not yet part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console")}}
- {{domxref("WorkerGlobalScope")}}
