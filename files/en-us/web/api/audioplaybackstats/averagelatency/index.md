---
title: "AudioPlaybackStats: averageLatency property"
short-title: averageLatency
slug: Web/API/AudioPlaybackStats/averageLatency
page-type: web-api-instance-property
browser-compat: api.AudioPlaybackStats.averageLatency
---

{{APIRef("Web Audio API")}}

The **`averageLatency`** read-only property of the {{domxref("AudioPlaybackStats")}} interface is a number indicating the average latency since the audio context was first initialized, or since {{domxref("AudioPlaybackStats.resetLatency()")}} was last called.

## Value

A floating point number indicating the average latency, in seconds.

## Examples

### Basic usage

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log current average latency
console.log(stats.averageLatency);
```

See also the main {{domxref("AudioPlaybackStats")}} reference page for a more in-depth example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
