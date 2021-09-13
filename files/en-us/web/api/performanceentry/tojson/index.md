---
title: PerformanceEntry.toJSON()
slug: Web/API/PerformanceEntry/toJSON
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
json = perfEntry.toJSON();
```

### Arguments

- None
  - :

### Return value

- json
  - : A JSON object that is the serialization of the {{domxref("PerformanceEntry")}}
    object.

## Example

The following example shows the use of the `toJSON()` method.

```js
function run_PerformanceEntry() {
  log("PerformanceEntry support ...");

  if (performance.mark === undefined) {
    log("... performance.mark Not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  var p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }
}
function check_PerformanceEntry(obj) {
  var properties = ["name", "entryType", "startTime", "duration"];
  var methods = ["toJSON"];

  for (var i=0; i < properties.length; i++) {
    // check each property
    var supported = properties[i] in obj;
    if (supported)
      log("..." + properties[i] + " = " + obj[properties[i]]);
    else
      log("..." + properties[i] + " = Not supported");
  }
  for (var i=0; i < methods.length; i++) {
    // check each method
    var supported = typeof obj[methods[i]] == "function";
    if (supported) {
      var js = obj[methods[i]]();
      log("..." + methods[i] + "() = " + JSON.stringify(js));
    } else {
      log("..." + methods[i] + " = Not supported");
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
