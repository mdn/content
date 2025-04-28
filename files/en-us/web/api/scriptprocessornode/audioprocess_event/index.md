---
title: "ScriptProcessorNode: audioprocess event"
short-title: audioprocess
slug: Web/API/ScriptProcessorNode/audioprocess_event
page-type: web-api-event
status:
  - deprecated
browser-compat: api.ScriptProcessorNode.audioprocess_event
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

The `audioprocess` event of the {{domxref("ScriptProcessorNode")}} interface is fired when an input buffer of a script processor is ready to be processed.

> [!NOTE]
> This feature was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

This event is not cancelable and does not bubble.

## Event type

An {{domxref("AudioProcessingEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("AudioProcessingEvent")}}

## Event properties

_Also implements the properties inherited from its parent, {{domxref("Event")}}._

- `playbackTime` {{ReadOnlyInline}}
  - : A double representing the time when the audio will be played,
    as defined by the time of {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}.
- `inputBuffer` {{ReadOnlyInline}}
  - : An {{domxref("AudioBuffer")}} that is the buffer containing the input audio data to be processed.
    The number of channels is defined as a parameter `numberOfInputChannels`,
    of the factory method {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}}.
    Note that the returned <code>AudioBuffer</code> is only valid in the scope of the event handler.
- `outputBuffer` {{ReadOnlyInline}}
  - : An {{domxref("AudioBuffer")}} that is the buffer where the output audio data should be written.
    The number of channels is defined as a parameter, <code>numberOfOutputChannels</code>,
    of the factory method {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}}.
    Note that the returned <code>AudioBuffer</code> is only valid in the scope of the event handler.

## Examples

```js
scriptNode.addEventListener("audioprocess", (audioProcessingEvent) => {
  // The input buffer is a song we loaded earlier
  const inputBuffer = audioProcessingEvent.inputBuffer;

  // The output buffer contains the samples that will be modified and played
  const outputBuffer = audioProcessingEvent.outputBuffer;

  // Loop through the output channels (in this case there is only one)
  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // Loop through the 4096 samples
    for (let sample = 0; sample < inputBuffer.length; sample++) {
      // make output equal to the same as the input
      outputData[sample] = inputData[sample];

      // add noise to each output sample
      outputData[sample] += (Math.random() * 2 - 1) * 0.2;
    }
  }
});
```

You could also set up the event handler using the `onaudioprocess` property:

```js
scriptNode.onaudioprocess = (audioProcessingEvent) => {
  // …
};
```

## Specifications

Since the August 29, 2014, [Web Audio API specification](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) publication, this feature has been deprecated. It is no longer on track to become a standard.

It was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
