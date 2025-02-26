---
title: "WorkerGlobalScope: online event"
short-title: online
slug: Web/API/WorkerGlobalScope/online_event
page-type: web-api-event
browser-compat: api.WorkerGlobalScope.online_event
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

The **`online`** event of the {{domxref("WorkerGlobalScope")}} fires when the device reconnects to the internet.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("online", (event) => {});

ononline = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

The following code snippet shows an `onoffline` handler set inside a worker:

```js
self.ononline = () => {
  console.log("Your worker is now online");
};
```

The same snippet, but using `addEventListener()`:

```js
self.addEventListener("online", () => {
  console.log("Your worker is now online");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("WorkerGlobalScope")}} interface it belongs to.
