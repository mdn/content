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

> [!NOTE]
> The `resume()` method is still available — it is now defined on the {{domxref("BaseAudioContext")}} interface (see {{domxref("AudioContext.resume")}}) and thus can be accessed by both the {{domxref("AudioContext")}} and `OfflineAudioContext` interfaces.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface:

- [`complete`](/en-US/docs/Web/API/OfflineAudioContext/complete_event)
  - : Fired when the rendering of an offline audio context is complete.

## Examples

### Playing audio with an offline audio context

In this example, we declare both an {{domxref("AudioContext")}} and an `OfflineAudioContext` object. We use the `AudioContext` to load an audio track {{domxref("Window/fetch", "fetch()")}}, then the `OfflineAudioContext` to render the audio into an {{domxref("AudioBufferSourceNode")}} and play the track through. After the offline audio graph is set up, we render it to an {{domxref("AudioBuffer")}} using `OfflineAudioContext.startRendering()`.

When the `startRendering()` promise resolves, rendering has completed and the output `AudioBuffer` is returned out of the promise.

At this point we create another audio context, create an {{domxref("AudioBufferSourceNode")}} inside it, and set its buffer to be equal to the promise `AudioBuffer`. This is then played as part of a simple standard audio graph.

> [!NOTE]
> You can [run the full example live](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/), or [view the source](https://github.com/mdn/webaudio-examples/tree/main/offline-audio-context-promise).

```js
// Define both online and offline audio contexts
let audioCtx; // Must be initialized after a user interaction
const offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

// Define constants for dom nodes
const play = document.querySelector("#play");

function getData() {
  // Fetch an audio track, decode it and stick it in a buffer.
  // Then we put the buffer into the source and can play it.
  fetch("viper.ogg")
    .then((response) => response.arrayBuffer())
    .then((downloadedBuffer) => audioCtx.decodeAudioData(downloadedBuffer))
    .then((decodedBuffer) => {
      console.log("File downloaded successfully.");
      const source = new AudioBufferSourceNode(offlineCtx, {
        buffer: decodedBuffer,
      });
      source.connect(offlineCtx.destination);
      return source.start();
    })
    .then(() => offlineCtx.startRendering())
    .then((renderedBuffer) => {
      console.log("Rendering completed successfully.");
      play.disabled = false;
      const song = new AudioBufferSourceNode(audioCtx, {
        buffer: renderedBuffer,
      });
      song.connect(audioCtx.destination);

      // Start the song
      song.start();
    })
    .catch((err) => {
      console.error(`Error encountered: ${err}`);
    });
}

// Activate the play button
play.onclick = () => {
  play.disabled = true;
  // We can initialize the context as the user clicked.
  audioCtx = new AudioContext();

  // Fetch the data and start the song
  getData();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
