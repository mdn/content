---
title: "PressureRecord: source property"
short-title: source
slug: Web/API/PressureRecord/source
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PressureRecord.source
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}

The read-only **`source`** property is a string indicating the origin source from which the record is coming.

## Value

A string indicating the origin source from which the record is coming. The current version of the Compute Pressure API specification supports two main source types:

- `"thermals"` represents the global thermal state of the system. This state can be affected by other apps and sites than the observing site.
- `"cpu"` represents the average pressure of the central processing unit (CPU) across all its cores. This source is the CPU pressure for the thread the site is using, such as the main thread (window) or workers.

Use the static {{domxref("PressureObserver.supportedSources_static", "PressureObserver.supportedSources")}} property to see which source types are available. Availability can vary by your user agent, your operating system, and your hardware.

## Examples

### Using the `source` property

In the following example we log the value of the `source` property in the pressure observer callback.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure ${lastRecord.state}`);
  console.log(`Current pressure source: ${lastRecord.source}`);
}

const observer = new PressureObserver(callback, {
  sampleInterval: 1000, // 1000ms
});
await observer.observe("cpu");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
