---
title: PressureRecord
slug: Web/API/PressureRecord
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PressureRecord
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

The **`PressureRecord`** interface is part of the [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API) and describes the pressure trend of a source at a specific moment of transition.

## Instance properties

- {{domxref("PressureRecord.source")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string indicating the origin source from which the record is coming.
- {{domxref("PressureRecord.state")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string indicating the pressure state recorded.
- {{domxref("PressureRecord.time")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the timestamp of the record.

## Instance methods

- {{domxref("PressureRecord.toJSON()")}} {{experimental_inline}}
  - : Returns a JSON representation of the `PressureRecord` object.

## Examples

### Using the `PressureRecord` object

In the following example we log the properties of the `PressureRecord` object in the pressure observer callback.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure is ${lastRecord.state}`);
  console.log(`Current pressure observed at ${lastRecord.time}`);
  console.log(`Current pressure source: ${lastRecord.source}`);
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
