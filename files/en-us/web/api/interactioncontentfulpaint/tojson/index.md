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

The **`toJSON()`** method of the {{domxref("InteractionContentfulPaint")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("InteractionContentfulPaint")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("InteractionContentfulPaint")}} object.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the `InteractionContentfulPaint` object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

This would log a JSON object like so:

```json
{
  "entryType": "interaction-contentful-paint",
  "interactionId": 1704,
  "largestContentfulPaint": <not shown>,
  "name": "",
  "navigationId": 2463,
  "paintTime": 2589.3,
  "presentationTime": 2616,
  "startTime": 2226.6,
}
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
