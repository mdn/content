---
title: "WorkerGlobalScope: offline event"
short-title: offline
slug: Web/API/WorkerGlobalScope/offline_event
page-type: web-api-event
browser-compat: api.WorkerGlobalScope.offline_event
---

{{APIRef("Web Workers API")}}

The **`offline`** event of the {{domxref("WorkerGlobalScope")}} fires when the device loses connection to the internet.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("offline", (event) => {});

onoffline = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

The following code snippet shows an `onoffline` handler set inside a worker:

```js
self.onoffline = () => {
  console.log("Your worker is now offline");
};
```

The same snippet, but using `addEventListener()`:

```js
self.addEventListener("offline", () => {
  console.log("Your worker is now offline");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("WorkerGlobalScope")}} interface it belongs to.
