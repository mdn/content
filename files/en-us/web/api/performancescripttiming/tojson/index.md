---
title: "PerformanceScriptTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceScriptTiming/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PerformanceScriptTiming.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("PerformanceScriptTiming")}} interface returns a JSON-serializable plain object representing the `PerformanceScriptTiming` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceScriptTiming` object is stringified. This method is generally intended to, by default, usefully serialize `PerformanceScriptTiming` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

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
- {{domxref("PerformanceScriptTiming/invoker", "invoker")}}
- {{domxref("PerformanceScriptTiming/invokerType", "invokerType")}}
- {{domxref("PerformanceScriptTiming/windowAttribution", "windowAttribution")}}
- {{domxref("PerformanceScriptTiming/executionStart", "executionStart")}}
- {{domxref("PerformanceScriptTiming/forcedStyleAndLayoutDuration", "forcedStyleAndLayoutDuration")}}
- {{domxref("PerformanceScriptTiming/pauseDuration", "pauseDuration")}}
- {{domxref("PerformanceScriptTiming/sourceURL", "sourceURL")}}
- {{domxref("PerformanceScriptTiming/sourceFunctionName", "sourceFunctionName")}}
- {{domxref("PerformanceScriptTiming/sourceCharPosition", "sourceCharPosition")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `PerformanceScriptTiming` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const scriptTiming = entry.scripts[0];

    const json = scriptTiming.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.sourceURL); // Same value as scriptTiming.sourceURL
  });
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(scriptTiming));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "name": "script",
  "entryType": "script",
  "startTime": 11803.199999999255,
  "duration": 45,
  "invoker": "DOMWindow.onclick",
  "invokerType": "event-listener",
  "windowAttribution": "self",
  "executionStart": 11803.199999999255,
  "forcedStyleAndLayoutDuration": 0,
  "pauseDuration": 0,
  "sourceURL": "https://web.dev/js/index-ffde4443.js",
  "sourceFunctionName": "myClickHandler",
  "sourceCharPosition": 17796
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{jsxref("JSON")}}
