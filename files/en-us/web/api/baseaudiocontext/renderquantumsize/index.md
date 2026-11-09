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

By default, the Web Audio API processes [audio graphs](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) in chunks of 128 audio [sample frames](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels). The number of frames per chunk is called the **render quantum size**. A smaller render quantum size means less latency because each update is smaller and can be processed and output more quickly, but the processing overhead increases because more chunks are processed. A larger render quantum size has the opposite effect.

128 frames provides a reasonable balance between processing overhead and latency, and it matches the processing buffer size (the number of frames processed in one go) of some systems. However, other systems have different processing buffer sizes. When the render quantum size doesn't match the underlying system processing buffer size, the process becomes inefficient.

For example, suppose an Android phone has a processing buffer size of 192 frames, so each time the system asks for audio, it needs 192 frames (real buffer sizes vary by device). With a render quantum size of 128, the first request needs two render quanta (256 frames): 192 frames are sent, and 64 frames are left over. The next request can use those 64 frames plus one more render quantum (64 + 128 = 192), leaving nothing left over. This pattern then repeats, so odd-numbered requests render two quanta and even-numbered requests render one.

At a sample rate of 48 kHz, each 192-frame request must be filled within 4 ms (192 / 48000). Audio processing has a hard deadline: if a processing iteration takes longer, the output glitches. Assuming rendering time scales linearly with the number of frames, odd-numbered iterations (two quanta, 256 frames) do twice the work of even-numbered ones (one quantum, 128 frames), for an average of 1.5 quanta per iteration.

Because the busiest iteration must still finish in time, the graph has to be simple enough for the peak, not the average, load. The lighter iterations sit partly idle, and that spare capacity can't be used.

If the render quantum size were set to 192, every iteration would render exactly one quantum, so the peak would equal the average and that wasted headroom would become available to the graph. The same hardware could then render more complex graphs. Latency wouldn't change, because the Android system already processes audio in 192-frame chunks.

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
  const audioCtx = new AudioContext({ renderSizeHint: "hardware" });

  // ...

  console.log(audioCtx.renderQuantumSize);
  // returns an appropriate number for the current combination of
  // hardware, driver, browser, etc.
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
