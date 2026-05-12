---
title: "AudioContext: playbackStats property"
short-title: playbackStats
slug: Web/API/AudioContext/playbackStats
page-type: web-api-instance-property
browser-compat: api.AudioContext.playbackStats
---

{{APIRef("Web Audio API")}}

The **`playbackStats`** read-only property of the {{domxref("AudioContext")}} interface returns an {{domxref("AudioPlaybackStats")}} object providing access to duration, underrun, and latency statistics for the `AudioContext`. These statistics allow you to measure audio delay and glitches.

It is possible to retrieve the immediate playout latency of the context via the {{domxref("AudioContext.outputLatency")}} property; `playbackStats`, however, provides access to more detailed statistics that update over time, including average, minimum, and maximum latency.

## Value

An {{domxref("AudioPlaybackStats")}} object.

## Examples

### Basic usage

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log average latency
console.log(stats.averageLatency);
```

See also the main {{domxref("AudioPlaybackStats")}} reference page for a more in-depth example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
