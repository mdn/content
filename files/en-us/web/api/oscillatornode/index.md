---
title: OscillatorNode
slug: Web/API/OscillatorNode
page-type: web-api-interface
browser-compat: api.OscillatorNode
---

{{APIRef("Web Audio API")}}

The **`OscillatorNode`** interface represents a periodic waveform, such as a sine wave. It is an {{domxref("AudioScheduledSourceNode")}} audio-processing module that causes a specified frequency of a given wave to be created—in effect, a constant tone.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>max</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code> (not used in the default count mode)</td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>speakers</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("OscillatorNode.OscillatorNode", "OscillatorNode()")}}
  - : Creates a new instance of an `OscillatorNode` object, optionally providing an object specifying default values for the node's [properties](#instance_properties). As an alternative, you can use the {{domxref("BaseAudioContext.createOscillator()")}} factory method; see [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Instance properties

_Inherits properties from its parent, {{domxref("AudioScheduledSourceNode")}}, and adds the following properties:_

- {{domxref("OscillatorNode.frequency")}}
  - : An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing the frequency of oscillation in hertz (though the `AudioParam` returned is read-only, the value it represents is not). The default value is 440 Hz (a standard middle-A note).
- {{domxref("OscillatorNode.detune")}}
  - : An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing detuning of oscillation in cents (though the `AudioParam` returned is read-only, the value it represents is not). The default value is 0.
- {{domxref("OscillatorNode.type")}}
  - : A string which specifies the shape of waveform to play; this can be one of a number of standard values, or `custom` to use a {{domxref("PeriodicWave")}} to describe a custom waveform. Different waves will produce different tones. Standard values are `"sine"`, `"square"`, `"sawtooth"`, `"triangle"` and `"custom"`. The default is `"sine"`.

### Event handlers

- {{domxref("AudioScheduledSourceNode.ended_event")}}
  - : Sets the event handler for the {{domxref("AudioScheduledSourceNode/ended_event", "ended")}} event, which fires when the tone has stopped playing.

## Instance methods

_Inherits methods from its parent, {{domxref("AudioScheduledSourceNode")}}, and adds the following:_

- {{domxref("OscillatorNode.setPeriodicWave()")}}
  - : Sets a {{domxref("PeriodicWave")}} which describes a periodic waveform to be used instead of one of the standard waveforms; calling this sets the `type` to `custom`.
- {{domxref("AudioScheduledSourceNode.start()")}}
  - : Specifies the exact time to start playing the tone.
- {{domxref("AudioScheduledSourceNode.stop()")}}
  - : Specifies the time to stop playing the tone.

## Examples

The following example shows basic usage of an {{domxref("AudioContext")}} to create an oscillator node and to start playing a tone on it. For an applied example, check out our [Violent Theremin demo](https://mdn.github.io/webaudio-examples/violent-theremin/) ([see app.js](https://github.com/mdn/webaudio-examples/blob/master/violent-theremin/scripts/app.js) for relevant code).

```js
// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
