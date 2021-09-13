---
title: WorkerGlobalScope.onerror
slug: Web/API/WorkerGlobalScope/onerror
tags:
  - API
  - EventHandler
  - Property
  - Reference
  - Web Workers
  - WorkerGlobalScope
  - onerror
browser-compat: api.WorkerGlobalScope.onerror
---
{{APIRef("Web Workers API")}}

The **`onerror`** property of the {{domxref("WorkerGlobalScope")}} interface represents an [event handler](/en-US/docs/Web/Events/Event_handlers) to be called when the {{event("error")}} event occurs.

## Syntax

    self.onerror = function() { ... };

## Example

The following code snippet shows an `onerror` handler set inside a worker:

```js
self.onerror = function() {
  console.log('There is an error inside your worker!');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("WorkerGlobalScope")}} interface it belongs to.
