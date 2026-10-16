---
title: "LargestContentfulPaint: toJSON() method"
short-title: toJSON()
slug: Web/API/LargestContentfulPaint/toJSON
page-type: web-api-instance-method
browser-compat: api.LargestContentfulPaint.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method of the {{domxref("LargestContentfulPaint")}} interface returns a JSON-serializable plain object representing the `LargestContentfulPaint` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `LargestContentfulPaint` object is stringified. This method is generally intended to, by default, usefully serialize `LargestContentfulPaint` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

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
- {{domxref("LargestContentfulPaint/paintTime", "paintTime")}}
- {{domxref("LargestContentfulPaint/presentationTime", "presentationTime")}}
- {{domxref("LargestContentfulPaint/size", "size")}}
- {{domxref("LargestContentfulPaint/renderTime", "renderTime")}}
- {{domxref("LargestContentfulPaint/loadTime", "loadTime")}}
- {{domxref("LargestContentfulPaint/id", "id")}}
- {{domxref("LargestContentfulPaint/url", "url")}}

Each property's value is copied as-is.

The returned object doesn't contain the {{domxref("LargestContentfulPaint.element", "element")}} property because it is of type {{domxref("Element")}}, which doesn't provide a `toJSON()` operation.

## Examples

### Calling toJSON() directly

This example obtains a `LargestContentfulPaint` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.size); // Same value as entry.size
  });
});

observer.observe({ type: "largest-contentful-paint", buffered: true });
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
  "entryType": "largest-contentful-paint",
  "startTime": 468.2,
  "duration": 0,
  "size": 19824,
  "renderTime": 468.2,
  "loadTime": 0,
  "id": "",
  "url": ""
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
