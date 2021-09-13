---
title: 'ScriptProcessorNode: audioprocess event'
slug: Web/API/ScriptProcessorNode/audioprocess_event
tags:
  - ScriptProcessorNode
  - Web Audio API
  - audioprocess
  - event
browser-compat: api.ScriptProcessorNode.audioprocess_event
---
{{APIRef("Web Audio API")}}{{deprecated_header}}

The audioprocess event of the {{domxref("ScriptProcessorNode")}} interface is fired when an input buffer of a script processor is ready to be processed.

> **Note:** This feature was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Default action</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("AudioProcessingEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("ScriptProcessorNode.onaudioprocess")}}</td>
    </tr>
  </tbody>
</table>

## Examples

```js
scriptNode.addEventListener('audioprocess', function(audioProcessingEvent) {
  // The input buffer is a song we loaded earlier
  var inputBuffer = audioProcessingEvent.inputBuffer;

  // The output buffer contains the samples that will be modified and played
  var outputBuffer = audioProcessingEvent.outputBuffer;

  // Loop through the output channels (in this case there is only one)
  for (var channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    var inputData = inputBuffer.getChannelData(channel);
    var outputData = outputBuffer.getChannelData(channel);

    // Loop through the 4096 samples
    for (var sample = 0; sample < inputBuffer.length; sample++) {
      // make output equal to the same as the input
      outputData[sample] = inputData[sample];

      // add noise to each output sample
      outputData[sample] += ((Math.random() * 2) - 1) * 0.2;
    }
  }
})
```

You could also set up the event handler using the {{domxref("ScriptProcessorNode.onaudioprocess")}} property:

```js
scriptNode.onaudioprocess = function(audioProcessingEvent) {
  ...
}
```

## Specifications

Since the August 29 2014 [Web Audio API specification](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) publication, this feature has been deprecated. It is no longer on track to become a standard.

It was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ScriptProcessorNode.onaudioprocess")}}
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
