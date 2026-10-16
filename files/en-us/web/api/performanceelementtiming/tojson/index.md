---
title: "PerformanceElementTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceElementTiming/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PerformanceElementTiming.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("PerformanceElementTiming")}} interface returns a JSON-serializable plain object representing the `PerformanceElementTiming` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceElementTiming` object is stringified. This method is generally intended to, by default, usefully serialize `PerformanceElementTiming` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

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
- {{domxref("PerformanceElementTiming/paintTime", "paintTime")}}
- {{domxref("PerformanceElementTiming/presentationTime", "presentationTime")}}
- {{domxref("PerformanceElementTiming/renderTime", "renderTime")}}
- {{domxref("PerformanceElementTiming/loadTime", "loadTime")}}
- {{domxref("PerformanceElementTiming/intersectionRect", "intersectionRect")}}
- {{domxref("PerformanceElementTiming/identifier", "identifier")}}
- {{domxref("PerformanceElementTiming/naturalWidth", "naturalWidth")}}
- {{domxref("PerformanceElementTiming/naturalHeight", "naturalHeight")}}
- {{domxref("PerformanceElementTiming/id", "id")}}
- {{domxref("PerformanceElementTiming/url", "url")}}

When passed to {{jsxref("JSON.stringify()")}}, the `intersectionRect` property represents a rectangle serialized using {{domxref("DOMRectReadOnly/toJSON", "DOMRectReadOnly.toJSON()")}}. Other property values are copied as-is.

The returned object doesn't contain the {{domxref("PerformanceElementTiming.element", "element")}} property because it is of type {{domxref("Element")}}, which doesn't provide a `toJSON()` operation. The {{domxref("PerformanceElementTiming.id", "id")}} of the element is provided, though.

## Examples

### Calling toJSON() directly

This example obtains a `PerformanceElementTiming` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      const json = entry.toJSON();
      console.log(json); // A plain object
      console.log(typeof json); // "object"
      console.log(json.identifier); // Same value as entry.identifier
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(entry));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "name": "image-paint",
  "entryType": "element",
  "startTime": 670894.1000000238,
  "duration": 0,
  "renderTime": 0,
  "loadTime": 670894.1000000238,
  "intersectionRect": {
    "x": 299,
    "y": 76,
    "width": 135,
    "height": 155,
    "top": 76,
    "right": 434,
    "bottom": 231,
    "left": 299
  },
  "identifier": "big-image",
  "naturalWidth": 135,
  "naturalHeight": 155,
  "id": "myImage",
  "url": "https://en.wikipedia.org/static/images/project-logos/enwiki.png"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
