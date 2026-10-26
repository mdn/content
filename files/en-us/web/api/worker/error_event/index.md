---
title: "Worker: error event"
short-title: error
slug: Web/API/Worker/error_event
page-type: web-api-event
browser-compat: api.Worker.error_event
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

The **`error`** event of the {{domxref("Worker")}} interface fires when an error occurs in the worker.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("error", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onerror = (event) => { }
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
