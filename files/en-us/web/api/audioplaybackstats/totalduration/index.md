---
title: "AudioPlaybackStats: totalDuration property"
short-title: totalDuration
slug: Web/API/AudioPlaybackStats/totalDuration
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.AudioPlaybackStats.totalDuration
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

The **`totalDuration`** read-only property of the {{domxref("AudioPlaybackStats")}} interface is a number indicating the total duration of all audio frames since the audio context was initialized.

## Value

A double-precision floating point number indicating the total duration of all audio frames, in seconds. Initialized to `0`.

## Examples

### Basic usage

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log total duration
console.log(stats.totalDuration);
```

See also the main {{domxref("AudioPlaybackStats")}} reference page for a more in-depth example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
