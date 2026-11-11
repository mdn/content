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

When a browser plays audio, two processing loops are involved:

- The **audio system** (the operating system's audio stack and the audio hardware) plays audio from a buffer. Each time it's ready for more audio, it requests a fixed number of frames from the browser, called the **system buffer size**. The browser must supply those frames before the audio currently playing runs out. System buffer sizes vary across platforms and devices.
- To fill each request, the Web Audio API renders the [audio graph](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) in chunks with a fixed number of [sample frames](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels), called the **render quantum size**. It keeps rendering chunks until it has enough frames for the request. By default, the render quantum size is 128 frames.

Audio can't be sent to the audio system until rendered, and the audio graph always renders a whole render quantum at a time. As a result, both the system buffer size and the render quantum size limit how low latency can go, and whichever is larger sets the limit:

- If the render quantum size is larger than the system buffer size, the render quantum size sets the latency. The browser can't send any part of a quantum until the whole quantum renders, so it has to render more frames than each request needs and hold the extra for later requests.
- If the render quantum size is smaller than or equal to the system buffer size, the system buffer size sets the latency. The audio system's requests determine when audio is needed, and rendering in smaller chunks doesn't make it arrive any sooner. It only adds overhead, because each render quantum has a fixed processing cost.

A 128-frame render quantum size provides balanced overhead and latency, and it matches the system buffer size on some platforms. On other platforms, the two sizes don't match. If the system buffer size isn't a whole multiple of the render quantum size, requests need different numbers of render quanta. CPU load then varies from one request to the next, which wastes processing capacity.

For example, suppose an Android phone has a system buffer size of 192 frames. With the default render quantum size of 128, the first request needs two render quanta (256 frames): 192 frames are sent, and 64 are left over. The next request uses those 64 frames plus one more render quantum (64 + 128 = 192), leaving nothing over. This pattern repeats — odd-numbered requests render two quanta and even-numbered requests render one — an average of 1.5 quanta per request.

At a sample rate of 48 kHz, each request must be filled within 4 ms (192 / 48000). If rendering takes longer, the output glitches. Assuming rendering time scales with the number of frames, the odd-numbered requests must process 256 frames in that time, while the even-numbered requests must process only 192. The more work the audio graph does per frame, the longer each frame takes to render; the 256-frame requests limit the work you can put in the graph. The 192-frame requests finish early and spend the rest of their 4 ms idle, so that capacity goes unused.

If the render quantum size were set to 192, every request would render exactly one render quantum; therefore, the peak load would equal the average. The graph could then be about a third more expensive (256 / 192) on the same hardware. Latency wouldn't increase, because the audio system already requests audio in 192-frame chunks.

You can request a suitable render quantum size for the current combination of hardware and software using the `renderSizeHint` option of the {{domxref("AudioContext.AudioContext", "AudioContext()")}} or {{domxref("OfflineAudioContext.OfflineAudioContext", "OfflineAudioContext()")}} constructor.

This can be set to:

- `default`, which uses the default value of `128`.
- `hardware`, which asks the browser to choose a suitable size for the combination of underlying hardware, driver, browser, etc.
- A specific integer value, which can be between `1`, and 6 times the context's {{domxref("BaseAudioContext.sampleRate", "sampleRate")}}. Since `renderSizeHint` is a hint, the requested value may not be honored exactly.

The resulting context's render quantum size can be retrieved using the `renderQuantumSize` property.

In the case of `AudioContext()`, when `hardware` is specified, the resulting `AudioContext` instance's `renderQuantumSize` will return `0` until its {{domxref("BaseAudioContext.state", "state")}} is `running`, to protect against fingerprinting. This is not the case with `OfflineAudioContext()`, where the audio is output straight to an {{domxref("AudioBuffer")}}, so hardware timing and latency don't apply. Specifying `hardware` in an `OfflineAudioContext()` is equivalent to `default`.

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
