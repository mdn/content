---
title: "PerformanceLongAnimationFrameTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceLongAnimationFrameTiming/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PerformanceLongAnimationFrameTiming.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("PerformanceLongAnimationFrameTiming")}} interface returns a JSON-serializable plain object representing the `PerformanceLongAnimationFrameTiming` object.

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceLongAnimationFrameTiming` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization.

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
- {{domxref("PerformanceLongAnimationFrameTiming/paintTime", "paintTime")}}
- {{domxref("PerformanceLongAnimationFrameTiming/presentationTime", "presentationTime")}}
- {{domxref("PerformanceLongAnimationFrameTiming/renderStart", "renderStart")}}
- {{domxref("PerformanceLongAnimationFrameTiming/styleAndLayoutStart", "styleAndLayoutStart")}}
- {{domxref("PerformanceLongAnimationFrameTiming/firstUIEventTimestamp", "firstUIEventTimestamp")}}
- {{domxref("PerformanceLongAnimationFrameTiming/blockingDuration", "blockingDuration")}}
- {{domxref("PerformanceLongAnimationFrameTiming/scripts", "scripts")}}

The `scripts` property contains an array of script timings.
When the returned object is passed to {{jsxref("JSON.stringify()")}}, these timings are serialized using {{domxref("PerformanceScriptTiming/toJSON", "PerformanceScriptTiming.toJSON()")}}.
Other property values are copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `PerformanceLongAnimationFrameTiming` object.
Calling `toJSON()` directly returns a plain object.
Its properties have the same values as the corresponding properties of the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.blockingDuration); // Same value as entry.blockingDuration
  });
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(entry));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "name": "long-animation-frame",
  "entryType": "long-animation-frame",
  "startTime": 11802.25,
  "duration": 60.5,
  "navigationId": 2463,
  "paintTime": 11862.75,
  "presentationTime": 11868.5,
  "renderStart": 11859.5,
  "styleAndLayoutStart": 11859.5,
  "firstUIEventTimestamp": 11801.25,
  "blockingDuration": 2.5,
  "scripts": [
    {
      "name": "script",
      "entryType": "script",
      "startTime": 11803.25,
      "duration": 49.25,
      "navigationId": 2463,
      "invoker": "DOMWindow.onclick",
      "invokerType": "event-listener",
      "windowAttribution": "self",
      "executionStart": 11803.25,
      "forcedStyleAndLayoutDuration": 0.5,
      "pauseDuration": 0.25,
      "sourceURL": "https://web.dev/js/index-ffde4443.js",
      "sourceFunctionName": "myClickHandler",
      "sourceCharPosition": 17796
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{jsxref("JSON")}}
