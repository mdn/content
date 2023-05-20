---
title: "LayoutShift: toJSON() method"
short-title: toJSON()
slug: Web/API/LayoutShift/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.LayoutShift.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("LayoutShift")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("LayoutShift")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("LayoutShift")}} object.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the `LayoutShift` object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "layout-shift", buffered: true });
```

This would log a JSON object like so:

```json
{
  "name": "",
  "entryType": "layout-shift",
  "startTime": 246.39999999850988,
  "duration": 0,
  "value": 0.0071167845054842215,
  "hadRecentInput": false,
  "lastInputTime": 0,
  "sources": [
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
  ]
}
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
