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
  const p = performance.getEntries();
  for (let i=0; i < p.length; i++) {
    log(`Entry[${i}]`);
    check_PerformanceEntry(p[i]);
  }
}
function check_PerformanceEntry(obj) {
  const properties = ["name", "entryType", "startTime", "duration"];
  const methods = ["toJSON"];

  for (let i=0; i < properties.length; i++) {
    // check each property
    const supported = properties[i] in obj;
    if (supported) {
      console.log(`…${properties[i]} = ${obj[properties[i]]}`);
    } else {
      console.log(`…${properties[i]} = Not supported`);
    }
  }
  for (let i=0; i < methods.length; i++) {
    // check each method
    const supported = typeof obj[methods[i]] === "function";
    if (supported) {
      const js = obj[methods[i]]();
      console.log(`…${methods[i]}() = ${JSON.stringify(js)}`);
    } else {
      console.log(`…${methods[i]} = Not supported`);
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
