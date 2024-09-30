---
title: ConstantSourceNode
slug: Web/API/ConstantSourceNode
page-type: web-api-interface
browser-compat: api.ConstantSourceNode
---

{{APIRef("Web Audio API")}}

The `ConstantSourceNode` interface—part of the Web Audio API—represents an audio source (based upon {{domxref("AudioScheduledSourceNode")}}) whose output is single unchanging value. This makes it useful for cases in which you need a constant value coming in from an audio source. In addition, it can be used like a constructible {{domxref("AudioParam")}} by automating the value of its {{domxref("ConstantSourceNode.offset", "offset")}} or by connecting another node to it; see [Controlling multiple parameters with ConstantSourceNode](/en-US/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

A `ConstantSourceNode` has no inputs and exactly one monaural (one-channel) output. The output's value is always the same as the value of the {{domxref("ConstantSourceNode.offset", "offset")}} parameter.

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
  </tbody>
</table>

## Constructor

- {{domxref("ConstantSourceNode.ConstantSourceNode", "ConstantSourceNode()")}}
  - : Creates and returns a new `ConstantSourceNode` instance, optionally specifying an object which establishes initial values for the object's properties. As an alternative, you can use the {{domxref("BaseAudioContext.createConstantSource()")}} factory method; see [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Instance properties

_Inherits properties from its parent interface, {{domxref("AudioScheduledSourceNode")}}, and adds the following properties:_

- {{domxref("ConstantSourceNode.offset", "offset")}}
  - : An {{domxref("AudioParam")}} which specifies the value that this source continuously outputs. The default value is 1.0.

### Events

_Inherits events from its parent interface, {{domxref("AudioScheduledSourceNode")}}._

> [!NOTE]
> Some browsers' implementations of these events are part of the {{domxref("AudioScheduledSourceNode")}} interface.

- {{domxref("AudioScheduledSourceNode.ended_event","ended")}}
  - : Fired whenever the `ConstantSourceNode` data has stopped playing.

## Instance methods

_Inherits methods from its parent interface, {{domxref("AudioScheduledSourceNode")}}._

> [!NOTE]
> Some browsers' implementations of these methods are part of the {{domxref("AudioScheduledSourceNode")}} interface.

- {{domxref("AudioScheduledSourceNode.start", "start()")}}
  - : Schedules a sound to playback at an exact time.
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
  - : Schedules a sound to stop playback at an exact time.

## Example

In the article [Controlling multiple parameters with ConstantSourceNode](/en-US/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode), a `ConstantSourceNode` is created to allow one slider control to change the gain on two {{domxref("GainNode")}}s. The three nodes are set up like this:

```js
gainNode2 = context.createGain();
gainNode3 = context.createGain();
gainNode2.gain.value = gainNode3.gain.value = 0.5;
volumeSliderControl.value = gainNode2.gain.value;

constantNode = context.createConstantSource();
constantNode.connect(gainNode2.gain);
constantNode.connect(gainNode3.gain);
constantNode.start();

gainNode2.connect(context.destination);
gainNode3.connect(context.destination);
```

This code starts by creating the gain nodes and setting them and the volume control that will adjust their value all to 0.5. Then the `ConstantSourceNode` is created by calling {{domxref("BaseAudioContext/createConstantSource", "AudioContext.createConstantSource()")}}, and the gain parameters of each of the two gain nodes are connected to the `ConstantSourceNode`. After starting the constant source by calling its {{domxref("AudioScheduledSourceNode.start", "start()")}} method. Finally, the two gain nodes are connected to the audio destination (typically speakers or headphones).

Now, whenever the value of {{domxref("ConstantSourceNode.offset", "constantNode.offset")}} changes, the gain on both `gainNode2` and `gainNode3` will change to have that same value.

To see this example in action, as well as to read the rest of the code from which these snippets were derived, see [Controlling multiple parameters with ConstantSourceNode.](/en-US/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioScheduledSourceNode")}}
- {{domxref("AudioNode")}}
