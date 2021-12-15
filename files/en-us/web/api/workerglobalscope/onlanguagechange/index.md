---
title: WorkerGlobalScope.onlanguagechange
slug: Web/API/WorkerGlobalScope/onlanguagechange
tags:
  - API
  - Property
  - Reference
  - Web Workers
  - WorkerGlobalScope
  - onlanguagechange
browser-compat: api.WorkerGlobalScope.onlanguagechange
---
{{APIRef("Web Workers API")}}

The **`onlanguagechange`** property of the {{domxref("WorkerGlobalScope")}} interface represents an [event handler](/en-US/docs/Web/Events/Event_handlers) to be called when the {{event("languagechange")}} event occurs.

## Syntax

```js
self.onlanguagechange = function() { /* ... */ };
```

## Example

The following code snippet shows an `onlanguagechange` handler set inside a worker:

```js
self.onlanguagechange = function() {
  console.log('Your preferred language settings have been changed');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("WorkerGlobalScope")}} interface it belongs to.
