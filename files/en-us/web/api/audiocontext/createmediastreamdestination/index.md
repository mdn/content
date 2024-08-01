---
title: "AudioContext: createMediaStreamDestination() method"
short-title: createMediaStreamDestination()
slug: Web/API/AudioContext/createMediaStreamDestination
page-type: web-api-instance-method
browser-compat: api.AudioContext.createMediaStreamDestination
---

{{ APIRef("Web Audio API") }}

The `createMediaStreamDestination()` method of the {{ domxref("AudioContext") }} Interface is used to create a new {{domxref("MediaStreamAudioDestinationNode")}} object associated with a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} representing an audio stream, which may be stored in a local file or sent to another computer.

The {{domxref("MediaStream")}} is created when the node is created and is accessible via the {{domxref("MediaStreamAudioDestinationNode")}}'s `stream` attribute. This stream can be used in a similar way as a `MediaStream` obtained via {{domxref("navigator.getUserMedia") }} — it can, for example, be sent to a remote peer using the `addStream()` method of `RTCPeerConnection`.

For more details about media stream destination nodes, check out the {{domxref("MediaStreamAudioDestinationNode")}} reference page.

## Syntax

```js-nolint
createMediaStreamDestination()
```

### Parameters

None.

### Return value

A {{domxref("MediaStreamAudioDestinationNode")}}.

## Examples

In the following simple example, we create a {{domxref("MediaStreamAudioDestinationNode")}}, an {{ domxref("OscillatorNode") }} and a {{ domxref("MediaRecorder") }} (the example will therefore only work in Firefox and Chrome at this time.) The `MediaRecorder` is set up to record information from the `MediaStreamDestinationNode`.

When the button is clicked, the oscillator starts, and the `MediaRecorder` is started. When the button is stopped, the oscillator and `MediaRecorder` both stop. Stopping the `MediaRecorder` causes the `dataavailable` event to fire, and the event data is pushed into the `chunks` array. After that, the `stop` event fires, a new `blob` is made of type opus — which contains the data in the `chunks` array, and a new window (tab) is then opened that points to a URL created from the blob.

From here, you can play and save the opus file.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>createMediaStreamDestination() demo</title>
  </head>
  <body>
    <h1>createMediaStreamDestination() demo</h1>

    <p>Encoding a pure sine wave to an Opus file</p>
    <button>Make sine wave</button>
    <audio controls></audio>
    <script>
      const b = document.querySelector("button");
      let clicked = false;
      const chunks = [];
      const ac = new AudioContext();
      const osc = ac.createOscillator();
      const dest = ac.createMediaStreamDestination();
      const mediaRecorder = new MediaRecorder(dest.stream);
      osc.connect(dest);

      b.addEventListener("click", (e) => {
        if (!clicked) {
          mediaRecorder.start();
          osc.start(0);
          e.target.textContent = "Stop recording";
          clicked = true;
        } else {
          mediaRecorder.stop();
          osc.stop(0);
          e.target.disabled = true;
        }
      });

      mediaRecorder.ondataavailable = (evt) => {
        // Push each chunk (blobs) in an array
        chunks.push(evt.data);
      };

      mediaRecorder.onstop = (evt) => {
        // Make blob out of our blobs, and open it.
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        document.querySelector("audio").src = URL.createObjectURL(blob);
      };
    </script>
  </body>
</html>
```

> [!NOTE]
> You can [view this example live](https://mdn.github.io/webaudio-examples/create-media-stream-destination/index.html), or [study the source code](https://github.com/mdn/webaudio-examples/blob/main/create-media-stream-destination/index.html), on GitHub.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
