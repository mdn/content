---
title: "Navigator: hardwareConcurrency property"
short-title: hardwareConcurrency
slug: Web/API/Navigator/hardwareConcurrency
page-type: web-api-instance-property
browser-compat: api.Navigator.hardwareConcurrency
---

{{APIRef("HTML DOM")}}

The **`navigator.hardwareConcurrency`** read-only property
returns the number of logical processors available to run threads on the user's
computer.

## Value

A number between 1 and the number of logical processors potentially available to the user agent.

Modern computers have multiple physical processor cores in their CPU (two or four cores
is typical), but each physical core is also usually able to run more than one thread at
a time using advanced scheduling techniques. So a four-core CPU may offer eight
**logical processor cores**, for example. The number of logical processor
cores can be used to measure the number of threads which can effectively be run at once
without them having to context switch.

The browser may, however, choose to report a lower number of logical cores in order to
represent more accurately the number of {{domxref("Worker")}}s that can run at once, so
don't treat this as an absolute measurement of the number of cores in the user's system.

## Examples

In this example, one {{domxref("Worker")}} is created for each logical processor
reported by the browser and a record is created which includes a reference to the new
worker as well as a Boolean value indicating whether or not we're using that worker yet;
these objects are, in turn, stored into an array for later use. This creates a pool of
workers we can use to process requests later.

```js
let workerList = [];

for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
  let newWorker = {
    worker: new Worker("cpuworker.js"),
    inUse: false,
  };
  workerList.push(newWorker);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Navigator")}}
- {{domxref("WorkerNavigator")}}
