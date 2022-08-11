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
{{APIRef("Performance Timeline API")}}

The **`toJSON()`** method is a _serializer_; it returns
a JSON representation of the {{domxref("PerformanceEntry","performance entry")}} object.

{{AvailableInWorkers}}

## Syntax

```js
toJSON()
```

### Parameters

None.

### Return value

A JSON object that is the serialization of the {{domxref("PerformanceEntry")}} object.

## Examples

The following example shows the use of the `toJSON()` method.

```js
function run_PerformanceEntry() {
  console.log("PerformanceEntry support…");

  if (performance.mark === undefined) {
    console.log("The property performance.mark is not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  const perf = performance.getEntries();
  perf.forEach((entry, i) => {
    log(`Entry[${i}]`);
    check_PerformanceEntry(entry);
  });
}

function check_PerformanceEntry(obj) {
  const properties = ["name", "entryType", "startTime", "duration"];
  const methods = ["toJSON"];

  // Check each property
  properties.forEach((prop) => {
    const supported = prop in obj;
    console.log(`…${prop} = ${supported ? obj[prop] : "Not supported"}`);
  });

  // Check each method
  methods.forEach((meth) => {
    const supported = typeof obj[meth] === "function";
    console.log(`…${meth} = ${supported ? obj[meth] : "Not supported"}`);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
