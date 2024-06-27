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

The **`toJSON()`** method of the {{domxref("PerformanceScriptTiming")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the `PerformanceScriptTiming` object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceScriptTiming")}} object.

## Examples

### Using the `toJSON` method

In this example, calling `entry.toJSON()` returns a JSON representation of the first `PerformanceScriptTiming` object available in an observed long animation frame.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.scripts[0].toJSON());
  });
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

This would log a JSON object like so:

```json
{
  "duration": 45,
  "entryType": "script",
  "executionStart": 11803.199999999255,
  "forcedStyleAndLayoutDuration": 0,
  "invoker": "DOMWindow.onclick",
  "invokerType": "event-listener",
  "name": "script",
  "pauseDuration": 0,
  "sourceURL": "https://web.dev/js/index-ffde4443.js",
  "sourceFunctionName": "myClickHandler",
  "sourceCharPosition": 17796,
  "startTime": 11803.199999999255,
  "window": [Window object],
  "windowAttribution": "self"
}
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{jsxref("JSON")}}
