---
title: "WorkerGlobalScope: offline event"
short-title: offline
slug: Web/API/WorkerGlobalScope/offline_event
page-type: web-api-event
browser-compat: api.WorkerGlobalScope.offline_event
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

The **`offline`** event of the {{domxref("WorkerGlobalScope")}} fires when the device loses connection to the internet.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("offline", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onoffline = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Example

The following code snippet shows an `onoffline` handler set inside a worker (but note that this replaces other event listeners added using `onoffline`, if any):

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
