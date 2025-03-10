---
title: "PressureRecord: time property"
short-title: time
slug: Web/API/PressureRecord/time
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PressureRecord.time
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

The read-only **`time`** property returns the {{domxref("DOMHighResTimeStamp","timestamp", "", "no-code")}} recorded for a {{domxref("PressureRecord")}}. It corresponds to the time the data was obtained from the system relative to the [time origin of the global object](/en-US/docs/Web/API/Performance/timeOrigin) in which the {{domxref("PressureObserver")}} generated the notification.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the timestamp when the {{domxref("PressureRecord")}} was created.

## Examples

### Using the `time` property

In the following example we log the value of the `time` property in the pressure observer callback.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure ${lastRecord.state}`);
  console.log(`Current pressure observed at ${lastRecord.time}`);
}

try {
  const observer = new PressureObserver(callback);
  await observer.observe("cpu", {
    sampleInterval: 1000, // 1000ms
  });
} catch (error) {
  // report error setting up the observer
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
