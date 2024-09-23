---
title: "WorkerGlobalScope: origin property"
short-title: origin
slug: Web/API/WorkerGlobalScope/origin
page-type: web-api-instance-property
browser-compat: api.origin
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

The **`origin`** read-only property of the {{domxref("WorkerGlobalScope")}} interface returns the origin of the global scope, serialized as a string.

## Value

A string.

## Examples

Executed from inside worker scope, the following snippet will log the worker's global scope's origin to the console each time it receives a message.

```js
self.onmessage = () => {
  console.log(self.origin);
};
```

If the origin is not a scheme/host/port tuple (say you are trying to run it locally, i.e. via `file://` URL), `origin` will return the string `"null"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Window.origin`](/en-US/docs/Web/API/Window/origin)
- {{Glossary("origin")}} glossary term
