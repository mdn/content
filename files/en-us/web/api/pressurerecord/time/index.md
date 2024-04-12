---
title: "PressureRecord: time property"
short-title: time
slug: Web/API/PressureRecord/time
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PressureRecord.time
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

The read-only **`time`** property returns the {{domxref("DOMHighResTimeStamp","timestamp", "", "no-code")}} recorded for a {{domxref("PressureRecord")}}. It corresponds to the time the data was obtained from the system relative to the time origin of the global object in which the {{domxref("PressureObserver")}} generated the notification.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the timestamp when the {{domxref("PressureRecord")}} was created.

## Examples

### Using the time property

In the following example we log the value of the `time` property in the pressure observer callback.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure ${lastRecord.state}`);
  console.log(`Current observed at ${lastRecord.time}`);
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
