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

The **`toJSON()`** method is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformanceEntry","performance entry", "", "no-code")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON object that is the serialization of the {{domxref("PerformanceEntry")}} object.

## Examples

### Using the toJSON method

The following example shows the use of the `toJSON()` method.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

// Register the observer for events
observer.observe({type: "event", buffered: true});
```

This would log a JSON object like so:

```json
{
  "name": "dragover",
  "entryType": "event",
  "startTime": 67090751.599999905,
  "duration": 128,
  "processingStart": 67090751.70000005,
  "processingEnd": 67090751.900000095,
  "cancelable": true
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
