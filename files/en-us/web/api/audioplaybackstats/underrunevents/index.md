---
title: "AudioPlaybackStats: underrunEvents property"
short-title: underrunEvents
slug: Web/API/AudioPlaybackStats/underrunEvents
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.AudioPlaybackStats.underrunEvents
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

The **`underrunEvents`** read-only property of the {{domxref("AudioPlaybackStats")}} interface is a number indicating how many [underrun events](/en-US/docs/Web/API/AudioPlaybackStats#underrun_event) have occurred since the audio context was initialized.

## Value

An integer indicating the number of underrun events. Initialized to `0`.

## Examples

### Basic usage

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log number of underrun events
console.log(stats.underrunEvents);
```

See also the main {{domxref("AudioPlaybackStats")}} reference page for a more in-depth example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
