---
title: "InteractionContentfulPaint: toJSON() method"
short-title: toJSON()
slug: Web/API/InteractionContentfulPaint/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.InteractionContentfulPaint.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("InteractionContentfulPaint")}} interface returns a JSON-serializable plain object representing the `InteractionContentfulPaint` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when an `InteractionContentfulPaint` object is stringified. This method is generally intended to, by default, usefully serialize `InteractionContentfulPaint` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

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
- {{domxref("InteractionContentfulPaint/paintTime", "paintTime")}}
- {{domxref("InteractionContentfulPaint/presentationTime", "presentationTime")}}
- {{domxref("InteractionContentfulPaint/interactionId", "interactionId")}}
- {{domxref("InteractionContentfulPaint/largestContentfulPaint", "largestContentfulPaint")}}

When passed to {{jsxref("JSON.stringify()")}}, the `largestContentfulPaint` property represents a paint entry serialized using {{domxref("LargestContentfulPaint/toJSON", "LargestContentfulPaint.toJSON()")}}. Other property values are copied as-is.

## Examples

### Calling toJSON() directly

This example obtains an `InteractionContentfulPaint` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.interactionId); // Same value as entry.interactionId
  });
});

observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(entry));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "name": "",
  "entryType": "interaction-contentful-paint",
  "startTime": 2226.6,
  "navigationId": 2463,
  "paintTime": 2589.3,
  "presentationTime": 2616,
  "interactionId": 1704,
  "largestContentfulPaint": {
    "name": "",
    "entryType": "largest-contentful-paint",
    "startTime": 2616,
    "duration": 0,
    "size": 19824,
    "renderTime": 2616,
    "loadTime": 0,
    "id": "",
    "url": ""
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
