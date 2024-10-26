---
title: "PressureRecord: toJSON() method"
short-title: toJSON()
slug: Web/API/PressureRecord/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PressureRecord.toJSON
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

The **`toJSON()`** method is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PressureRecord")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PressureRecord")}} object.

## Examples

### Using the `toJSON` method

In this example, calling `lastRecord.toJSON()` returns a JSON representation of the {{domxref("PressureRecord")}} object.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(lastRecord.toJSON);
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

This would log a JSON object like so:

```json
{
  "source": "cpu",
  "state": "fair",
  "time": 1712052746385.347
}
```

To get a JSON string, you can use [`JSON.stringify(lastRecord)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
