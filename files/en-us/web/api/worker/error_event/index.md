---
title: "Worker: error event"
short-title: error
slug: Web/API/Worker/error_event
page-type: web-api-event
browser-compat: api.Worker.error_event
---

{{APIRef("Web Workers API")}}

The **`error`** event of the {{domxref("Worker")}} interface fires when an error occurs in the worker.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

The following code snippet creates a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor and sets up an `onerror` handler on the resulting object:

```js
const myWorker = new Worker("worker.js");

myWorker.onerror = (event) => {
  console.log("There is an error with your worker!");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
