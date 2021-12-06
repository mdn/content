---
title: SharedWorker.onerror
slug: Web/API/SharedWorker/onerror
tags:
  - API
  - SharedWorker
  - EventHandler
  - Property
  - Reference
  - Web Workers
  - Workers
  - onerror
browser-compat: api.SharedWorker.onerror
---
{{APIRef("Web Workers API")}}

The **`onerror`** property of the {{domxref("SharedWorker")}} interface represents an [event handler](/en-US/docs/Web/Events/Event_handlers), that is a function to be called when the {{event("error")}} event occurs.

## Syntax

```js
mySharedWorker.onerror = function(event) { /* ... */ };
```

## Example

The following code snippet creates a {{domxref("SharedWorker")}} object using the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor and sets up an `onerror` handler on the resulting object:

```js
var mySharedWorker = new SharedWorker('shared-worker.js');

mySharedWorker.onerror = function(event) {
  console.log('There is an error with your worker!');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
