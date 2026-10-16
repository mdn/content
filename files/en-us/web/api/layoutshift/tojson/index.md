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

The **`toJSON()`** method of the {{domxref("LayoutShift")}} interface returns a JSON-serializable plain object representing the `LayoutShift` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `LayoutShift` object is stringified. This method is generally intended to, by default, usefully serialize `LayoutShift` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

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
- {{domxref("LayoutShift/value", "value")}}
- {{domxref("LayoutShift/hadRecentInput", "hadRecentInput")}}
- {{domxref("LayoutShift/lastInputTime", "lastInputTime")}}
- {{domxref("LayoutShift/sources", "sources")}}

The `sources` property contains an array of layout shift attributions. When passed to {{jsxref("JSON.stringify()")}}, these attributions are serialized using {{domxref("LayoutShiftAttribution/toJSON", "LayoutShiftAttribution.toJSON()")}}. Other property values are copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `LayoutShift` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.value); // Same value as entry.value
  });
});

observer.observe({ type: "layout-shift", buffered: true });
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
