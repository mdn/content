---
title: "OfflineAudioContext: startRendering() method"
short-title: startRendering()
slug: Web/API/OfflineAudioContext/startRendering
page-type: web-api-instance-method
browser-compat: api.OfflineAudioContext.startRendering
---

{{ APIRef("Web Audio API") }}

The `startRendering()` method of the {{ domxref("OfflineAudioContext") }} Interface starts rendering the audio graph, taking into account the current connections and the current scheduled changes.

The {{domxref("OfflineAudioContext/complete_event", "complete")}} event (of type {{domxref("OfflineAudioCompletionEvent")}}) is raised when the rendering is finished, containing the resulting {{domxref("AudioBuffer")}} in its `renderedBuffer` property.

Browsers currently support two versions of the `startRendering()` method — an older event-based version and a newer promise-based version.
The former will eventually be removed, but currently both mechanisms are provided for legacy reasons.

## Syntax

```js-nolint
startRendering()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with an {{domxref("AudioBuffer")}}.

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
