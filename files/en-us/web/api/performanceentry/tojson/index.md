---
title: PerformanceEntry.toJSON()
slug: Web/API/PerformanceEntry/toJSON
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method is a _serializer_; it returns
a JSON representation of the {{domxref("PerformanceEntry","performance entry")}} object.

{{AvailableInWorkers}}

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON object that is the serialization of the {{domxref("PerformanceEntry")}} object.

## Examples

The following example shows the use of the `toJSON()` method.

```js
function runPerformanceEntry() {
  console.log("PerformanceEntry support…");

  if (performance.mark === undefined) {
    console.log("The property performance.mark is not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  doWork(50000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  performance.getEntries()
    .forEach((entry, i) => {
      console.log(`Entry[${i}]`);
      checkPerformanceEntry(entry);
    });
}

function checkPerformanceEntry(obj) {
  const properties = ["name", "entryType", "startTime", "duration"];
  const methods = ["toJSON"];

  // Check each property
  properties.forEach((property) => {
    const supported = property in obj;
    console.log(`…${property} = ${supported ? obj[property] : "Not supported"}`);
  });

  // Check each method
  methods.forEach((method) => {
    const supported = typeof obj[method] === "function";
    console.log(`…${method} = ${supported ? JSON.stringify(obj[method]()) : "Not supported"}`);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
