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

The **`toJSON()`** method of the {{domxref("PerformanceElementTiming")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformanceElementTiming")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceElementTiming")}} object.

The JSON doesn't contain the {{domxref("PerformanceElementTiming.element", "element")}} property because it is of type {{domxref("Element")}}, which doesn't provide a `toJSON()` operation. The {{domxref("PerformanceElementTiming.id", "id")}} of the element is provided, though.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the `PerformanceElementTiming` object, with the information about the image element.

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
      console.log(entry.toJSON());
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

This would log a JSON object like so:

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

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
