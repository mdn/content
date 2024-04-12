---
title: "PressureObserver: disconnect() method"
short-title: disconnect()
slug: Web/API/PressureObserver/disconnect
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PressureObserver.disconnect
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`disconnect()`** method of the {{domxref('PressureObserver')}} interface stops the pressure observer callback from receiving pressure records from any source and clears all pending records since the callback was last invoked.

## Syntax

```js-nolint
disconnect()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Stopping a pressure observer

The following example collects 20 samples and then disconnects the pressure observer to disable receiving any more pressure records. The {{domxref('PressureObserver.takeRecords()')}} method is used to store records before disconnecting.

```js
const samples = [];

function pressureChange(records, observer) {
  for (const record of records) {
    samples.push(record.state);
    // We only want 20 samples
    if (samples.length == 20) {
      // read records before disconnecting and clearing all records
      const sampleRecords = observer.takeRecords();
      observer.disconnect();
      return;
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
