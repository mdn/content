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

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `LayoutShift` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object containing the following properties:

- {{domxref("PerformanceEntry/name", "name")}}
- {{domxref("PerformanceEntry/entryType", "entryType")}}
- {{domxref("PerformanceEntry/startTime", "startTime")}}
- {{domxref("PerformanceEntry/duration", "duration")}}
- {{domxref("PerformanceEntry/navigationId", "navigationId")}}
- {{domxref("LayoutShift/value", "value")}}
- {{domxref("LayoutShift/hadRecentInput", "hadRecentInput")}}
- {{domxref("LayoutShift/lastInputTime", "lastInputTime")}}
- {{domxref("LayoutShift/sources", "sources")}}

The `sources` property contains an array of layout shift attributions.
When the returned object is passed to {{jsxref("JSON.stringify()")}}, these attributions are serialized using {{domxref("LayoutShiftAttribution/toJSON", "LayoutShiftAttribution.toJSON()")}}.
Other property values are copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `LayoutShift` object.
Calling `toJSON()` directly returns a plain object.
Its properties have the same values as the corresponding properties of the original object.

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
  "startTime": 246.5,
  "duration": 0,
  "navigationId": 2463,
  "value": 0.0071167845054842215,
  "hadRecentInput": false,
  "lastInputTime": 0,
  "sources": [
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
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
