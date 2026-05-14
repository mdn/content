---
title: "AudioPlaybackStats: resetLatency() method"
short-title: resetLatency()
slug: Web/API/AudioPlaybackStats/resetLatency
page-type: web-api-instance-method
browser-compat: api.AudioPlaybackStats.resetLatency
---

{{APIRef("Web Audio API")}}

The **`resetLatency()`** method of the {{domxref("AudioPlaybackStats")}} interface resets the start of the interval during which latency statistics are measured to the {{domxref("BaseAudioContext.currentTime")}}.

## Syntax

```js-nolint
resetLatency()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Basic usage

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Reset the latency measurement to the current time
stats.resetLatency();
```

See also the main {{domxref("AudioPlaybackStats")}} reference page for a more in-depth example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
