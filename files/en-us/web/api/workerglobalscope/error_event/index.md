---
title: "WorkerGlobalScope: error event"
short-title: error
slug: Web/API/WorkerGlobalScope/error_event
page-type: web-api-event
browser-compat: api.WorkerGlobalScope.error_event
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

The **`error`** event of the {{domxref("WorkerGlobalScope")}} interface fires when an error occurs in the worker.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("error", (event) => {});

onerror = (message, filename, lineno, colno, error) => {};
```

> [!NOTE]
> For historical reasons, `onerror` on {{domxref("Window")}} and `WorkerGlobalScope` objects is the only event handler property that receives more than one argument.
>
> For more details about this, see the page for the {{domxref("Window.error_event", "error")}} event on `Window` objects.

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
