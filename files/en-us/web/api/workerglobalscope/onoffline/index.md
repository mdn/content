---
title: WorkerGlobalScope.onoffline
slug: Web/API/WorkerGlobalScope/onoffline
tags:
  - API
  - Property
  - Reference
  - Web Workers
  - WorkerGlobalScope
  - onoffline
browser-compat: api.WorkerGlobalScope.onoffline
---
{{APIRef("Web Workers API")}}

The **`onoffline`** property of the {{domxref("WorkerGlobalScope")}} interface represents an [event handler](/en-US/docs/Web/Events/Event_handlers) to be called when the {{event("offline")}} event occurs.

## Syntax

    self.onoffline = function() { ... };

## Example

The following code snippet shows an `onoffline` handler set inside a worker:

```js
self.onoffline = function() {
  console.log('Your worker is now offline');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("WorkerGlobalScope")}} interface it belongs to.
