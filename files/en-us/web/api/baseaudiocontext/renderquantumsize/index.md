---
title: "BaseAudioContext: renderQuantumSize property"
short-title: renderQuantumSize
slug: Web/API/BaseAudioContext/renderQuantumSize
page-type: web-api-instance-property
browser-compat: api.BaseAudioContext.renderQuantumSize
---

{{ APIRef("Web Audio API") }}

The **`renderQuantumSize`** read-only property of the {{domxref("BaseAudioContext")}} interface returns an integer representing the **render quantum size** of the audio graph, which is the number of audio sample frames processed in each processing iteration.

## Value

A non-negative integer.

## Description

By default, the Web Audio API renders [audio graphs](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) in chunks of 128 audio [sample frames](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs:~:text=sample%20frame). The number of frames per chunk is called the **render quantum size**. A smaller render quantum size means less latency because each update is smaller and can be processed and output more quickly, but the processing overhead is greater because more chunks are processed. A larger render quantum size results in the opposite.

128 frames provides a reasonable balance between processing overhead and latency, and it matches the processing buffer size (the number of frames processed in one go) of some systems. However, other systems have different processing buffer sizes. When the render quantum size doesn't match the underlying system processing buffer size, the process becomes inefficient.

For example, if an Android phone has a processing buffer size of 192 frames, each odd-numbered processing iteration will take 2 buffers of 128 frames, with 64 frames left over ((2 * 128) - 192). Each even-numbered iteration can then use those leftover frames to get the next set of 192 frames processed with one 128-frame buffer (128 + 64 = 192). And so on.

At a sample rate of 48 kHz, 128 frames represent 2.666 ms (128/48000). Assuming each sample takes the same average time to process, this results in twice the peak CPU usage during odd-numbered processing iterations as during even-numbered processing iterations, and an average of 1.5 buffers per iteration.

If the render quantum size were set to 192, each processing iteration would render exactly one buffer, so the CPU load would be the same every time. This matters because audio processing has a hard deadline: if an iteration takes longer than the time available, the output glitches. The graph therefore has to be simple enough for the busiest iteration to finish in time, not just the average one. With a 128-frame quantum, the busiest iterations render two buffers while the average is only 1.5, so the peak sets the limit and some processing capacity sits idle on the lighter iterations. With a 192-frame quantum, the peak equals the average, so that wasted headroom is available to the graph, and more complex graphs can be rendered on the same hardware. This wouldn't affect the actual device latency, because the underlying Android system processes audio in chunks of 192 frames anyway.

You can request a suitable render quantum size for the current combination of hardware and software using the `renderSizeHint` option of the {{domxref("AudioContext.AudioContext", "AudioContext()")}} or {{domxref("OfflineAudioContext.OfflineAudioContext", "OfflineAudioContext()")}} constructor.

This can be set to:

- `default`, which uses the default value of `128`.
- `hardware`, which asks the browser to choose a suitable size for the combination of underlying hardware, driver, browser, etc.
- A specific integer value, which can be between `1`, and 6 times the context's {{domxref("BaseAudioContext.sampleRate", "sampleRate")}}. Since `renderSizeHint` is a hint, the requested value may not be honored exactly.

The resulting context's render quantum size can be retrieved using this property.

In the case of `AudioContext()`, when `hardware` is specified, the resulting `AudioContext` instance's `renderQuantumSize` will return `0` until its {{domxref("BaseAudioContext.state", "state")}} is `running`, to protect against fingerprinting. This is not the case with `OfflineAudioContext()`, where the audio is output straight to an {{domxref("AudioBuffer")}}, therefore hardware timing and latency don't apply. Specifying `hardware` in an `OfflineAudioContext()` is equivalent to `default`.

> [!NOTE]
> Some applications do not have low latency requirements, and may also use an {{domxref("AudioWorklet")}} to process larger chunks and reduce processing overhead. In such cases, larger render quantum sizes such as 1024 or 2048 may be appropriate.

## Examples

### Basic `renderQuantumSize` usage

```js
const btn = document.querySelector("button");

function init() {
  const audioCtx = new AudioContext({ renderSizeHint: 192 });

  // ...

  console.log(audioCtx.renderQuantumSize); // 192
}

btn.addEventListener("click", init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioContext.AudioContext", "AudioContext()")}}
- {{domxref("OfflineAudioContext.OfflineAudioContext", "OfflineAudioContext()")}}
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
