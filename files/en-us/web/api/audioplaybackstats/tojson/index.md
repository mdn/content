---
title: "AudioPlaybackStats: toJSON() method"
short-title: toJSON()
slug: Web/API/AudioPlaybackStats/toJSON
page-type: web-api-instance-method
browser-compat: api.AudioPlaybackStats.toJSON
---

{{APIRef("Web Audio API")}}

The **`toJSON()`** method of the {{domxref("AudioPlaybackStats")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("AudioPlaybackStats")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("AudioPlaybackStats")}} object.

## Examples

### Using the toJSON method

In this example, calling `stats.toJSON()` returns a JSON representation of the `AudioPlaybackStats` object.

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log current total duration
console.log(stats.toJSON());
```

This would log a JSON object like so:

```json
{
  "underrunDuration": 0,
  "underrunEvents": 0,
  "totalDuration": 68.252138,
  "averageLatency": 0.01863,
  "minimumLatency": 0,
  "maximumLatency": 0.018654
}
```

To get a JSON string, you can use [`JSON.stringify(stats)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
