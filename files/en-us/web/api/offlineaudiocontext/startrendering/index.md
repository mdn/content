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

In this simple example, we declare both an {{domxref("AudioContext")}} and an `OfflineAudioContext` object.
We use the `AudioContext` to load an audio track via XHR ({{domxref("BaseAudioContext.decodeAudioData")}}), then the `OfflineAudioContext` to render the audio into an {{domxref("AudioBufferSourceNode")}} and play the track through.
After the offline audio graph is set up, you need to render it to an {{domxref("AudioBuffer")}} using {{domxref("OfflineAudioContext.startRendering")}}.

When the `startRendering()` promise resolves, rendering has completed and the output `AudioBuffer` is returned out of the promise.

At this point we create another audio context, create an {{domxref("AudioBufferSourceNode")}} inside it, and set its buffer to be equal to the promise `AudioBuffer`.
This is then played as part of a simple standard audio graph.

> **Note:** For a working example, see our [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) GitHub repo (see the [source code](https://github.com/mdn/webaudio-examples) too.)

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
          const offlineAudioCtx = new AudioContext();
          const song = offlineAudioCtx.createBufferSource();
          song.buffer = renderedBuffer;

          song.connect(offlineAudioCtx.destination);

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
