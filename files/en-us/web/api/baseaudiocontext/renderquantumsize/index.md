---
title: "BaseAudioContext: renderQuantumSize property"
short-title: renderQuantumSize
slug: Web/API/BaseAudioContext/renderQuantumSize
page-type: web-api-instance-property
browser-compat: api.BaseAudioContext.renderQuantumSize
---

{{ APIRef("Web Audio API") }}

The **`renderQuantumSize`** read-only property of the {{domxref("BaseAudioContext")}} interface returns an integer representing the **render quantum size** of the audio graph, which is the number of audio sample frames per processing block.

## Value

An integer.

## Description

By default, the Web Audio API renders audio graphs in chunks of 128 audio sample frames. The number of frames per chunk is referred to as the render quantum size. A smaller render quantum size means less latency because each update is smaller and can be processed and output more quickly, but the processing overhead is greater because more chunks need to be processed. A larger render quantum size results in the opposite.

128 frames provides a reasonable balance between processing overhead and latency, and it matches the native processing buffer size of some systems. However, other systems have different processing buffer sizes. When the render quantum size does not match the processing buffer size of the underlying system, the process becomes inefficient.

For example, if an Android phone has a native processing buffer size of 192 frames, each odd-numbered processing iteration will take 2 buffers of 128 frames, with 64 frames left over (256 - 192). Each even-numbered iteration can then make use of those leftover frames to get the next set of 192 frames processed with one 128 frame buffer (128 + 64 = 192). And so on.

At a sample rate of 48 kHz, 128 frames represent 2.666 ms (128/48000). Assuming that, on average, each sample takes the same amount of time to process, this results in peak CPU usage being twice as high during odd-numbered processing iterations as during even-numbered processing iterations.

If the render quantum size were set to 192, CPU usage would remain constant, and more complex graphs could be rendered because the peak CPU would be the same as the average. This would also have no effect on the actual device latency, because the underlying Android system is processing audio in chunks of 192 frames anyway.

You can request a render quantum size for your audio graph using the `renderSizeHint` option of the {{domxref("AudioContext.AudioContext", "AudioContext()")}} or {{domxref("OfflineAudioContext.OfflineAudioContext", "OfflineAudioContext()")}} constructor. This can be set to:

- `default`, which uses the default value of `128`.
- `hardware`, which asks the browser to choose a suitable size for the underlying hardware.
- A specific integer value, which can be between `1` and 6 times the context's {{domxref("BaseAudioContext.sampleRate", "sampleRate")}}. Since `renderSizeHint` is a hint, the requested value may not be honored exactly.

The resulting context's render quantum size can be retrieved using the `renderQuantumSize` property.

In the case of `AudioContext()`, when `hardware` is specified, the resulting `AudioContext` instance's `renderQuantumSize` will return `0` until its {{domxref("BaseAudioContext.state", "state")}} is `running`, to protect against fingerprinting. This is not the case with `OffineAudioContext()`, where there is no concept of hardware, and specifying `hardware` is equivalent to `default`.

> [!NOTE]
> Some applications do not have low latency requirements, and may also use an {{domxref("AudioWorklet")}} to process larger blocks and reduce processing overhead. In such cases, larger render quantum sizes such as 1024 or 2048 may be appropriate.

## Examples

### Basic usage

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
