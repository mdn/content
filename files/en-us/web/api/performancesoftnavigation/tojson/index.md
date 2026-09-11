---
title: "PerformanceSoftNavigation: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceSoftNavigation/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PerformanceSoftNavigation.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("PerformanceSoftNavigation")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformanceSoftNavigation")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceSoftNavigation")}} object.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the `PerformanceSoftNavigation` object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "soft-navigation", buffered: true });
```

This would log a JSON object like so:

```json
{
  "duration": 41.4,
  "entryType": "soft-navigation",
  "interactionId": 1704,
  "name": "https://www.example.com/#2",
  "navigationId": 2463,
  "navigationType": "push",
  "paintTime": 2232.4,
  "presentationTime": 2268,
  "startTime": 2226.6
}
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
