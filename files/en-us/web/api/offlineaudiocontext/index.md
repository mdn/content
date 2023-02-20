---
title: OfflineAudioContext
slug: Web/API/OfflineAudioContext
page-type: web-api-interface
browser-compat: api.OfflineAudioContext
---

{{APIRef("Web Audio API")}}

The `OfflineAudioContext` interface is an {{domxref("AudioContext")}} interface representing an audio-processing graph built from linked together {{domxref("AudioNode")}}s. In contrast with a standard {{domxref("AudioContext")}}, an `OfflineAudioContext` doesn't render the audio to the device hardware; instead, it generates it, as fast as it can, and outputs the result to an {{domxref("AudioBuffer")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("OfflineAudioContext.OfflineAudioContext()", "OfflineAudioContext()")}}
  - : Creates a new `OfflineAudioContext` instance.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("BaseAudioContext")}}._

- {{domxref('OfflineAudioContext.length')}} {{ReadOnlyInline}}
  - : An integer representing the size of the buffer in sample-frames.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("BaseAudioContext")}}._

- {{domxref("OfflineAudioContext.suspend()")}}
  - : Schedules a suspension of the time progression in the audio context at the specified time and returns a promise.
- {{domxref("OfflineAudioContext.startRendering()")}}
  - : Starts rendering the audio, taking into account the current connections and the current scheduled changes. This page covers both the event-based version and the promise-based version.

### Deprecated methods

- {{domxref("OfflineAudioContext.resume()")}}
  - : Resumes the progression of time in an audio context that has previously been suspended.

> **Note:** The `resume()` method is still available — it is now defined on the {{domxref("BaseAudioContext")}} interface (see {{domxref("AudioContext.resume")}}) and thus can be accessed by both the {{domxref("AudioContext")}} and {{domxref("OfflineAudioContext")}} interfaces.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface:

- [`complete`](/en-US/docs/Web/API/OfflineAudioContext/complete_event)
  - : Fired when the rendering of an offline audio context is complete.

## Examples

In this simple example, we declare both an {{domxref("AudioContext")}} and an `OfflineAudioContext` object. We use the `AudioContext` to load an audio track via XHR ({{domxref("BaseAudioContext.decodeAudioData")}}), then the `OfflineAudioContext` to render the audio into an {{domxref("AudioBufferSourceNode")}} and play the track through. After the offline audio graph is set up, you need to render it to an {{domxref("AudioBuffer")}} using {{domxref("OfflineAudioContext.startRendering")}}.

When the `startRendering()` promise resolves, rendering has completed and the output `AudioBuffer` is returned out of the promise.

At this point we create another audio context, create an {{domxref("AudioBufferSourceNode")}} inside it, and set its buffer to be equal to the promise `AudioBuffer`. This is then played as part of a simple standard audio graph.

> **Note:** For a working example, see our [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) GitHub repo (see the [source code](https://github.com/mdn/webaudio-examples/tree/master/offline-audio-context-promise) too.)

```js
// define online and offline audio context

const audioCtx = new AudioContext();
const offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

source = offlineCtx.createBufferSource();

// use XHR to load an audio track, and
// decodeAudioData to decode it and OfflineAudioContext to render it

function getData() {
  request = new XMLHttpRequest();

  request.open("GET", "viper.ogg", true);

  request.responseType = "arraybuffer";

  request.onload = () => {
    const audioData = request.response;

    audioCtx.decodeAudioData(audioData, (buffer) => {
      myBuffer = buffer;
      source.buffer = myBuffer;
      source.connect(offlineCtx.destination);
      source.start();
      //source.loop = true;
      offlineCtx
        .startRendering()
        .then((renderedBuffer) => {
          console.log("Rendering completed successfully");
          const song = audioCtx.createBufferSource();
          song.buffer = renderedBuffer;

          song.connect(audioCtx.destination);

          play.onclick = () => {
            song.start();
          };
        })
        .catch((err) => {
          console.error(`Rendering failed: ${err}`);
          // Note: The promise should reject when startRendering is called a second time on an OfflineAudioContext
        });
    });
  };

  request.send();
}

// Run getData to start the process off

getData();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
