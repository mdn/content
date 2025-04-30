---
title: "Profiler: samplebufferfull event"
short-title: samplebufferfull
slug: Web/API/Profiler/samplebufferfull_event
page-type: web-api-event
browser-compat: api.Profiler.samplebufferfull_event
---

{{APIRef("JS Self-Profiling API")}}

The **`samplebufferfull`** event of the {{domxref("Profiler")}} interface is fired when the number of samples the profiler has recorded matches the [`maxBufferSize`](/en-US/docs/Web/API/Profiler/Profiler#maxbuffersize) value passed to the profiler's constructor.

After this event fires, the profiler will not record any more samples.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("samplebufferfull", (event) => {});

onsamplebufferfull = (event) => {};
```

## Event type

An {{domxref("Event")}}.

## Examples

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 100 });

profiler.addEventListener("samplebufferfull", async () => {
  console.log("Sample buffer full!");
  const trace = await profiler.stop();
  console.log(JSON.stringify(trace));
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
