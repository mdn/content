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

The **`toJSON()`** method of the {{domxref("PerformanceSoftNavigation")}} interface returns a JSON-serializable plain object representing the `PerformanceSoftNavigation` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceSoftNavigation` object is stringified. This method is generally intended to, by default, usefully serialize `PerformanceSoftNavigation` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PerformanceEntry/name", "name")}}
- {{domxref("PerformanceEntry/entryType", "entryType")}}
- {{domxref("PerformanceEntry/startTime", "startTime")}}
- {{domxref("PerformanceEntry/duration", "duration")}}
- {{domxref("PerformanceEntry/navigationId", "navigationId")}}
- {{domxref("PerformanceSoftNavigation/paintTime", "paintTime")}}
- {{domxref("PerformanceSoftNavigation/presentationTime", "presentationTime")}}
- {{domxref("PerformanceSoftNavigation/navigationType", "navigationType")}}
- {{domxref("PerformanceSoftNavigation/interactionId", "interactionId")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `PerformanceSoftNavigation` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.navigationType); // Same value as entry.navigationType
  });
});

observer.observe({ type: "soft-navigation", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(entry));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "name": "https://www.example.com/#2",
  "entryType": "soft-navigation",
  "startTime": 2226.6,
  "duration": 41.4,
  "navigationId": 2463,
  "paintTime": 2232.4,
  "presentationTime": 2268,
  "navigationType": "push",
  "interactionId": 1704
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
