---
title: ChannelMergerNode
slug: Web/API/ChannelMergerNode
page-type: web-api-interface
browser-compat: api.ChannelMergerNode
---

{{APIRef("Web Audio API")}}

The `ChannelMergerNode` interface, often used in conjunction with its opposite, {{domxref("ChannelSplitterNode")}}, reunites different mono inputs into a single output. Each input is used to fill a channel of the output. This is useful for accessing each channels separately, e.g. for performing channel mixing where gain must be separately controlled on each channel.

![Default channel merger node with six mono inputs combining to form a single output.](webaudiomerger.png)

If `ChannelMergerNode` has one single output, but as many inputs as there are channels to merge; the number of inputs is defined as a parameter of its constructor and the call to {{domxref("BaseAudioContext/createChannelMerger", "AudioContext.createChannelMerger()")}}. In the case that no value is given, it will default to `6`.

Using a `ChannelMergerNode`, it is possible to create outputs with more channels than the rendering hardware is able to process. In that case, when the signal is sent to the {{domxref("BaseAudioContext/listener", "AudioContext.listener")}} object, supernumerary channels will be ignored.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td>variable; default to <code>6</code>.</td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2 </code>(not used in the default count mode)</td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("ChannelMergerNode.ChannelMergerNode()", "ChannelMergerNode()")}}
  - : Creates a new `ChannelMergerNode` object instance.

## Instance properties

_No specific property; inherits properties from its parent, {{domxref("AudioNode")}}_.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("AudioNode")}}_.

## Example

See [`BaseAudioContext.createChannelMerger()`](/en-US/docs/Web/API/BaseAudioContext/createChannelMerger#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
