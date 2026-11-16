---
title: "SharedWorker: error event"
short-title: error
slug: Web/API/SharedWorker/error_event
page-type: web-api-event
browser-compat: api.SharedWorker.error_event
---

{{APIRef("Web Workers API")}}

The **`error`** event of the {{domxref("SharedWorker")}} interface fires when an error occurs in the worker.

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

The following code snippet creates a {{domxref("SharedWorker")}} object using the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor and sets up an `onerror` handler on the resulting object:

```js
const mySharedWorker = new SharedWorker("shared-worker.js");

mySharedWorker.onerror = (event) => {
  console.error("There is an error with your worker!");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
