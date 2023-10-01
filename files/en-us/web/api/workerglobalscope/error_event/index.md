---
title: "WorkerGlobalScope: error event"
short-title: error
slug: Web/API/WorkerGlobalScope/error_event
page-type: web-api-event
browser-compat: api.WorkerGlobalScope.error_event
---

{{APIRef("Web Workers API")}}

The **`error`** event of the {{domxref("WorkerGlobalScope")}} interface fires when an error occurs in the worker.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

The following code snippet shows an `onerror` handler set inside a worker:

```js
self.onerror = () => {
  console.log("There is an error inside your worker!");
};
```

The same snippet, but using `addEventListener()`:

```js
self.addEventListener("error", () => {
  console.log("There is an error inside your worker!");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("WorkerGlobalScope")}} interface it belongs to.
