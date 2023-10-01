---
title: "AudioProcessingEvent: playbackTime property"
short-title: playbackTime
slug: Web/API/AudioProcessingEvent/playbackTime
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.AudioProcessingEvent.playbackTime
---

{{APIRef}}{{Deprecated_header}}

The **`playbackTime`** read-only property of the {{domxref("AudioProcessingEvent")}} interface represents the time when the audio will be played. It is in the same coordinate system as the time used by the {{domxref("AudioContext")}}.

## Value

A number that doesn't need to be an integer.

## Examples

```js
const audioContext = new AudioContext();
const processor = audioContext.createScriptProcessor(256, 2, 2);

processor.addEventListener("audioprocess", (event) => {
  const inputBuffer = event.inputBuffer;
  const outputBuffer = event.outputBuffer;

  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // Log the corresponding time for this audio buffer
    console.log(`Received audio data to be played at ${event.playbackTime}`);

    // Process the audio data here
    for (let i = 0; i < outputBuffer.length; i++) {
      outputData[i] = inputData[i] * 0.5;
    }
  }
});

processor.connect(audioContext.destination);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioProcessingEvent")}}
- {{domxref("ScriptProcessorNode")}}
