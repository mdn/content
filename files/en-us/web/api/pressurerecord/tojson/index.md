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

The **`toJSON()`** method of the {{domxref("PressureRecord")}} interface returns a JSON-serializable plain object representing the `PressureRecord` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PressureRecord` object is stringified. This method is generally intended to, by default, usefully serialize `PressureRecord` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PressureRecord/source", "source")}}
- {{domxref("PressureRecord/state", "state")}}
- {{domxref("PressureRecord/time", "time")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `PressureRecord` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  const record = lastRecord;

  const json = record.toJSON();
  console.log(json); // A plain object
  console.log(typeof json); // "object"
  console.log(json.state); // Same value as record.state
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

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(record));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "source": "cpu",
  "state": "fair",
  "time": 1712052746385.347
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
