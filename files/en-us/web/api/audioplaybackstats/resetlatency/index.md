---
title: "AudioPlaybackStats: resetLatency() method"
short-title: resetLatency()
slug: Web/API/AudioPlaybackStats/resetLatency
page-type: web-api-instance-method
browser-compat: api.AudioPlaybackStats.resetLatency
---

{{APIRef("Web Audio API")}}

The **`resetLatency()`** method of the {{domxref("AudioPlaybackStats")}} interface sets the interval over which the latency stats are measured to the {{domxref("BaseAudioContext.currentTime")}} onwards.

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

// Reset latency measurements to current time onwards
stats.resetLatency();
```

See also the main {{domxref("AudioPlaybackStats")}} reference page for a more in-depth example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
