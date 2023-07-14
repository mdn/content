---
title: "Performance: timeOrigin property"
short-title: timeOrigin
slug: Web/API/Performance/timeOrigin
page-type: web-api-instance-property
browser-compat: api.Performance.timeOrigin
---

{{APIRef("Performance API")}}

The **`timeOrigin`** read-only property of the {{domxref("Performance")}} interface returns the high resolution timestamp that is used as the baseline for performance-related timestamps.

In Window contexts, this value represents the time when navigation has started. In {{domxref("Worker")}} and {{domxref("ServiceWorker")}} contexts, this value represents the time when the worker is run. You can use this property to synchronize the time origins between the contexts (see example below).

> **Note:** The value of `performance.timeOrigin` may differ from the value returned by {{jsxref("Date.now()")}} executed at the time origin, because `Date.now()` may have been impacted by system and user clock adjustments, clock skew, etc. The `timeOrigin` property is a [monotonic clock](https://w3c.github.io/hr-time/#dfn-monotonic-clock) which current time never decreases and which isn't subject to these adjustments.

## Value

A high resolution timestamp which considered to be the beginning of the current document's lifetime. It's calculated like this:

- If the script's {{Glossary("global object")}} is a {{domxref("Window")}}, the time origin is determined as follows:

  - If the current {{domxref("Document")}} is the first one loaded in the `Window`, the time origin is the time at which the browser context was created.
  - If during the process of unloading the previous document which was loaded in the window, a confirmation dialog was displayed to let the user confirm whether or not to leave the previous page, the time origin is the time at which the user confirmed that navigating to the new page was acceptable.
  - If neither of the above determines the time origin, then the time origin is the time at which the navigation responsible for creating the window's current `Document` took place.

- If the script's global object is a {{domxref("WorkerGlobalScope")}} (that is, the script is running as a web worker), the time origin is the moment at which the worker was created.
- In all other cases, the time origin is undefined.

## Examples

### Synchronizing time between contexts

To account for the different time origins in window and worker contexts, you can translate the timestamps coming from worker scripts with the help of the `timeOrigin` property, so the timings synchronize for the entire application.

In worker.js

```js
self.addEventListener("connect", (event) => {
  const port = event.ports[0];

  port.onmessage = function (event) {
    const workerTaskStart = performance.now();
    // doSomeWork()
    const workerTaskEnd = performance.now();
  };

  // Convert worker-relative timestamps to absolute timestamps, then send to the window
  port.postMessage({
    startTime: workerTaskStart + performance.timeOrigin,
    endTime: workerTaskEnd + performance.timeOrigin,
  });
});
```

In main.js

```js
const worker = new SharedWorker("worker.js");
worker.port.addEventListener("message", (event) => {
  // Convert absolute timestamps into window-relative timestamps
  const workerTaskStart = event.data.startTime - performance.timeOrigin;
  const workerTaskEnd = event.data.endTime - performance.timeOrigin;

  console.log("Worker task start: ", workerTaskStart);
  console.log("Worker task end: ", workerTaskEnd);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
