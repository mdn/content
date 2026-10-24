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

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `LayoutShiftAttribution` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object containing the following properties:

- {{domxref("LayoutShiftAttribution/previousRect", "previousRect")}}
- {{domxref("LayoutShiftAttribution/currentRect", "currentRect")}}

When the returned object is passed to {{jsxref("JSON.stringify()")}}, the `previousRect` and `currentRect` values are serialized using {{domxref("DOMRectReadOnly/toJSON", "DOMRectReadOnly.toJSON()")}}.
The {{domxref("LayoutShiftAttribution/node", "node")}} property is not included.

## Examples

### Calling toJSON() directly

This example obtains a `LayoutShiftAttribution` object.
Calling `toJSON()` directly returns a plain object.
Its properties have the same values as the corresponding properties of the original object.

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
    "x": 917.25,
    "y": 708.25,
    "width": 706.5,
    "height": 248.5,
    "top": 708.25,
    "right": 1623.75,
    "bottom": 956.75,
    "left": 917.25
  },
  "currentRect": {
    "x": 693.25,
    "y": 708.25,
    "width": 1154.5,
    "height": 472.5,
    "top": 708.25,
    "right": 1847.75,
    "bottom": 1180.75,
    "left": 693.25
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
