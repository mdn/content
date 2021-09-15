---
title: ConvolverNode()
slug: Web/API/ConvolverNode/ConvolverNode
tags:
  - API
  - Audio
  - Constructor
  - Convolver
  - Reference
  - Web Audio API
browser-compat: api.ConvolverNode.ConvolverNode
---
{{APIRef("Web Audio API")}}

The **`ConvolverNode()`** constructor
of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new
{{domxref("ConvolverNode")}} object instance.

## Syntax

```js
var convolverNode = new ConvolverNode(context, options)
```

### Parameters

- _context_
  - : A reference to an {{domxref("AudioContext")}}.
- _options_ {{optional_inline}}

  - : Options are as follows:

    - `audioBuffer`: A mono, stereo, or
      4-channel *{{domxref("AudioBuffer")}}* containing the
      (possibly multichannel) impulse response used by the `ConvolverNode`
      to create the reverb effect.
    - `disableNormalization`: A boolean value controlling
      whether the impulse response from the buffer will be scaled by an equal-power
      normalization, or not. The default is '`false`'.
    - `channelCount`: Represents an integer used to determine how many channels are used when [up-mixing
      and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node. (See
      {{domxref("AudioNode.channelCount")}} for more information.) Its usage and precise
      definition depend on the value of `channelCountMode`.
    - `channelCountMode`: Represents an enumerated value describing the way channels must be matched between
      the node's inputs and outputs. (See {{domxref("AudioNode.channelCountMode")}} for more
      information including default values.)
    - `channelInterpretation`: Represents an enumerated value describing the meaning of the channels. This
      interpretation will define how audio [up-mixing
      and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) will happen.
      The possible values are `"speakers"` or `"discrete"`. (See
      {{domxref("AudioNode.channelCountMode")}} for more information including default
      values.)

### Return value

A new {{domxref("ConvolverNode")}} object instance.

### Exceptions

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>NotSupportedError</code></td>
      <td>
        The referenced {{domxref("AudioBuffer")}} does not have the
        correct number of channels, or it has a different sample rate to the
        associated {{domxref("AudioContext")}}.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
