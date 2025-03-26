---
title: "PressureObserver: takeRecords() method"
short-title: takeRecords()
slug: Web/API/PressureObserver/takeRecords
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PressureObserver.takeRecords
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

The **`takeRecords()`** method of the {{domxref('PressureObserver')}} interface returns the current list of pressure records stored in the pressure observer, emptying it out.

It is useful when you want to a stop observing a source but would like to be sure to get any records that have not yet been passed into the observer callback.

## Syntax

```js-nolint
takeRecords()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of {{domxref("PressureRecord")}} objects.

## Examples

### Taking records

The following example stores the current list of pressure records into `records` and empties the pressure observer.

```js
const observer = new PressureObserver(callback):
observer.observe("cpu");

const records = observer.takeRecords();
observer.disconnect(); // shut down observer now that we've taken records

if (records.length > 0) {
  console.log(records[0].state);
  console.log(records[0].time);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
