---
title: "AudioPlaybackStats: toJSON() method"
short-title: toJSON()
slug: Web/API/AudioPlaybackStats/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.AudioPlaybackStats.toJSON
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("AudioPlaybackStats")}} interface returns a JSON-serializable plain object representing the `AudioPlaybackStats` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when an `AudioPlaybackStats` object is stringified. This method is generally intended to, by default, usefully serialize `AudioPlaybackStats` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("AudioPlaybackStats/underrunDuration", "underrunDuration")}}
- {{domxref("AudioPlaybackStats/underrunEvents", "underrunEvents")}}
- {{domxref("AudioPlaybackStats/totalDuration", "totalDuration")}}
- {{domxref("AudioPlaybackStats/averageLatency", "averageLatency")}}
- {{domxref("AudioPlaybackStats/minimumLatency", "minimumLatency")}}
- {{domxref("AudioPlaybackStats/maximumLatency", "maximumLatency")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains an `AudioPlaybackStats` object from an audio context. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

const json = stats.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.underrunEvents); // Same value as stats.underrunEvents
```

### Serializing to a JSON string

In this example, the `AudioPlaybackStats` object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(stats));
```

This would log a JSON string like so (formatted for readability):

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
