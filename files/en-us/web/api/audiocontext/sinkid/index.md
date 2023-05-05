---
title: "AudioContext: sinkId property"
short-title: sinkId
slug: Web/API/AudioContext/sinkId
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.AudioContext.sinkId
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

The **`sinkId`** read-only property of the
{{domxref("AudioContext")}} interface returns the sink ID of the current output audio device.

## Value

This property returns one of the following values, depending on how the sink ID was set:

- An empty string
  - : If a sink ID has not explicitly been set, the default system audio output device will be used, and `sinkId` will return an empty string.
- A string
  - : If the sink ID is set as a string value (using {{domxref("AudioContext.setSinkId", "setSinkId()")}}, or the `sinkId` {{domxref("AudioContext.AudioContext", "AudioContext()")}} constructor option), `sinkId` will return that same string value.
- An {{domxref("AudioSinkInfo")}} object
  - : If the sink ID is set as an options object (using {{domxref("AudioContext.setSinkId", "setSinkId()")}}, or the `sinkId` {{domxref("AudioContext.AudioContext", "AudioContext()")}} constructor option), `sinkId` will return an {{domxref("AudioSinkInfo")}} object reflecting the same values set in the initial options object.

## Examples

In our [SetSinkId test example](https://set-sink-id.glitch.me/), we create an audio graph that generates a three-second burst of white noise via an {{domxref("AudioBufferSourceNode")}}, which we also run through a {{domxref("GainNode")}} to quiet things down a bit. We also provide the user with a dropdown menu to allow them to change the audio output device.

When the Play button is clicked, we assemble the audio graph and start it playing, and we also log information about the current device to the console based on the value of `sinkId`:

- An empty string means the default device is still being used.
- If the value is an object, the audio will not be playing on any device because we set an options object containing `type: 'none'`.
- Otherwise the value will be a sink ID string, so we log that.

```js
playBtn.addEventListener("click", () => {
  const source = audioCtx.createBufferSource();
  source.buffer = myArrayBuffer;
  source.connect(gain);
  gain.connect(audioCtx.destination);
  source.start();

  if (audioCtx.sinkId === "") {
    console.log("Audio playing on default device");
  } else if (
    typeof audioCtx.sinkId === "object" &&
    audioCtx.sinkId.type === "none"
  ) {
    console.log("Audio not playing on any device");
  } else {
    console.log(`Audio playing on device ${audioCtx.sinkId}`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SetSinkId test example](https://set-sink-id.glitch.me/)
- [Change the destination output device in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- {{domxref("AudioContext.setSinkId()")}}
- {{domxref("AudioContext/sinkchange_event", "sinkchange")}}
