---
title: "AudioProcessingEvent: outputBuffer property"
short-title: outputBuffer
slug: Web/API/AudioProcessingEvent/outputBuffer
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.AudioProcessingEvent.outputBuffer
---

{{APIRef}}{{Deprecated_header}}

The **`outputBuffer`** read-only property of the {{domxref("AudioProcessingEvent")}} interface represents the output buffer of an audio processing event.

The output buffer is represented by an {{domxref("AudioBuffer")}} object, which contains a collection of audio channels, each of which is an array of floating-point values representing the audio signal waveform encoded as a series of amplitudes. The number of channels and the length of each channel are determined by the channel count and buffer size properties of the `AudioBuffer`.

## Value

An {{domxref("AudioBuffer")}} object.

## Examples

In this example, a {{domxref("ScriptProcessorNode")}} is created with a buffer size of 256 samples, 2 input channels, and 2 output channels. When an {{domxref("ScriptProcessorNode/audioprocess_event", "audioprocess")}} event is fired, the input and output buffers are retrieved from the event object. The audio data in the input buffer is processed, and the result is written to the output buffer. In this case, the audio data is scaled down by a factor of 0.5.

```js
const audioContext = new AudioContext();
const processor = audioContext.createScriptProcessor(256, 2, 2);

processor.addEventListener("audioprocess", (event) => {
  const inputBuffer = event.inputBuffer;
  const outputBuffer = event.outputBuffer;

  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

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

- {{domxref("AudioProcessingEvent.inputBuffer")}}
- {{domxref("ScriptProcessorNode")}}
