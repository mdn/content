---
title: "LayoutShiftAttribution: toJSON() method"
short-title: toJSON()
slug: Web/API/LayoutShiftAttribution/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.LayoutShiftAttribution.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("LayoutShiftAttribution")}} interface returns a JSON-serializable plain object representing the `LayoutShiftAttribution` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `LayoutShiftAttribution` object is stringified. This method is generally intended to, by default, usefully serialize `LayoutShiftAttribution` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("LayoutShiftAttribution/previousRect", "previousRect")}}
- {{domxref("LayoutShiftAttribution/currentRect", "currentRect")}}

When passed to {{jsxref("JSON.stringify()")}}, the `previousRect` and `currentRect` properties represent rectangles serialized using {{domxref("DOMRectReadOnly/toJSON", "DOMRectReadOnly.toJSON()")}}. The {{domxref("LayoutShiftAttribution/node", "node")}} property is not included.

## Examples

### Calling toJSON() directly

This example obtains a `LayoutShiftAttribution` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources) {
      const attribution = sources[0];

      const json = attribution.toJSON();
      console.log(json); // A plain object
      console.log(typeof json); // "object"
      console.log(json.previousRect.x); // Same value as attribution.previousRect.x
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(attribution));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "previousRect": {
    "x": 917,
    "y": 708,
    "width": 706,
    "height": 248,
    "top": 708,
    "right": 1623,
    "bottom": 956,
    "left": 917
  },
  "currentRect": {
    "x": 693,
    "y": 708,
    "width": 1154,
    "height": 472,
    "top": 708,
    "right": 1847,
    "bottom": 1180,
    "left": 693
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
