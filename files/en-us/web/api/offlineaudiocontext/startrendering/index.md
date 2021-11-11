---
title: OfflineAudioContext.startRendering()
slug: Web/API/OfflineAudioContext/startRendering
tags:
  - API
  - Method
  - OfflineAudioContext
  - Reference
  - Web Audio API
  - startRendering
browser-compat: api.OfflineAudioContext.startRendering
---
{{ APIRef("Web Audio API") }}

The `startRendering()` method of the {{ domxref("OfflineAudioContext") }}
Interface starts rendering the audio graph, taking into account the current connections
and the current scheduled changes.

The {{event("complete")}} event (of type {{domxref("OfflineAudioCompletionEvent")}}) is
raised when the rendering is finished, containing the resulting
{{domxref("AudioBuffer")}} in its `renderedBuffer` property.

Browsers currently support two versions of the `startRendering()` method —
an older event-based version and a newer promise-based version. The former will
eventually be removed, but currently both mechanisms are provided for legacy reasons.

## Syntax

Event-based version:

```js
offlineAudioCtx.startRendering();
offlineAudioCtx.oncomplete = function(e) {
  // e.renderedBuffer contains the output buffer
}
```

Promise-based version:

```js
offlineAudioCtx.startRendering().then(function(buffer) {
  // buffer contains the output buffer
});
```

### Parameters

None.

### Returns

{{jsxref('undefined')}}.

## Example

In this simple example, we declare both an {{domxref("AudioContext")}} and an
`OfflineAudioContext` object. We use the `AudioContext` to load an
audio track via XHR ({{domxref("BaseAudioContext.decodeAudioData")}}), then the
`OfflineAudioContext` to render the audio into an
{{domxref("AudioBufferSourceNode")}} and play the track through. After the offline audio
graph is set up, you need to render it to an {{domxref("AudioBuffer")}} using
{{domxref("OfflineAudioContext.startRendering")}}.

When the `startRendering()` promise resolves, rendering has completed and
the output `AudioBuffer` is returned out of the promise.

At this point we create another audio context, create an
{{domxref("AudioBufferSourceNode")}} inside it, and set its buffer to be equal to the
promise `AudioBuffer`. This is then played as part of a simple standard audio
graph.

> **Note:** For a working example, see our [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/)
> Github repo (see the [source
> code](https://github.com/mdn/webaudio-examples) too.)

```js
// define online and offline audio context

var audioCtx = new AudioContext();
var offlineCtx = new OfflineAudioContext(2,44100*40,44100);

source = offlineCtx.createBufferSource();

// use XHR to load an audio track, and
// decodeAudioData to decode it and OfflineAudioContext to render it

function getData() {
  request = new XMLHttpRequest();

  request.open('GET', 'viper.ogg', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
      myBuffer = buffer;
      source.buffer = myBuffer;
      source.connect(offlineCtx.destination);
      source.start();
      //source.loop = true;
      offlineCtx.startRendering().then(function(renderedBuffer) {
        console.log('Rendering completed successfully');
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var song = audioCtx.createBufferSource();
        song.buffer = renderedBuffer;

        song.connect(audioCtx.destination);

        play.onclick = function() {
          song.start();
        }
      }).catch(function(err) {
          console.log('Rendering failed: ' + err);
          // Note: The promise should reject when startRendering is called a second time on an OfflineAudioContext
      });
    });
  }

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
