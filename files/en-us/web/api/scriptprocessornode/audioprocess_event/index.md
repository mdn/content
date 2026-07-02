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

The **`audioprocess`** event of the {{domxref("ScriptProcessorNode")}} interface is fired when an input buffer of a script processor is ready to be processed.

> [!NOTE]
> This feature was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("audioprocess", (event) => { })

onaudioprocess = (event) => { }
```

## Event type

An {{domxref("AudioProcessingEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("AudioProcessingEvent")}}

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

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
