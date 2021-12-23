---
title: WorkerGlobalScope.ononline
slug: Web/API/WorkerGlobalScope/ononline
tags:
  - API
  - Property
  - Reference
  - Web Workers
  - WorkerGlobalScope
  - ononline
browser-compat: api.WorkerGlobalScope.ononline
---
{{APIRef("Web Workers API")}}

The **`ononline`** property of the {{domxref("WorkerGlobalScope")}} interface represents an [event handler](/en-US/docs/Web/Events/Event_handlers) to be called when the {{event("online")}} event occurs.

## Syntax

```js
self.ononline = function() { /* ... */ };
```

## Example

The following code snippet shows an `ononline` handler set inside a worker:

```js
self.ononline = function() {
  console.log('Your worker is now online');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("WorkerGlobalScope")}} interface it belongs to.
