---
title: Worker.onerror
slug: Web/API/Worker/onerror
tags:
  - API
  - Worker
  - EventHandler
  - Property
  - Reference
  - Web Workers
  - Workers
  - onerror
browser-compat: api.Worker.onerror
---
{{APIRef("Web Workers API")}}

The **`onerror`** property of the {{domxref("Worker")}} interface represents an [event handler](/en-US/docs/Web/Events/Event_handlers), that is a function to be called when the {{event("error")}} event occurs.

## Syntax

```js
myWorker.onerror = function(event) { /* ... */ };
```

## Example

The following code snippet creates a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor and sets up an `onerror` handler on the resulting object:

```js
var myWorker = new Worker('worker.js');

myWorker.onerror = function(event) {
  console.log('There is an error with your worker!');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
