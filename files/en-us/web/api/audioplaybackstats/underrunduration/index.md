---
title: "AudioPlaybackStats: underrunDuration property"
short-title: underrunDuration
slug: Web/API/AudioPlaybackStats/underrunDuration
page-type: web-api-instance-property
browser-compat: api.AudioPlaybackStats.underrunDuration
---

{{APIRef("Web Audio API")}}

The **`underrunDuration`** read-only property of the {{domxref("AudioPlaybackStats")}} interface is a number indicating the total duration of the underrun events since the audio context was initialized.

## Value

A double-precision floating point number indicating the duration of underrun events, in seconds. Initialized to `0`.

## Examples

### Basic usage

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log total duration of underrun events
console.log(stats.underrunDuration);
```

See also the main {{domxref("AudioPlaybackStats")}} reference page for a more in-depth example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
