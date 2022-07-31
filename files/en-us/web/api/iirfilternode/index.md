---
title: IIRFilterNode
slug: Web/API/IIRFilterNode
page-type: web-api-interface
tags:
  - API
  - Audio
  - IIRFilterNode
  - Interface
  - Reference
  - Web Audio API
browser-compat: api.IIRFilterNode
---
{{APIRef("Web Audio API")}}

The **`IIRFilterNode`** interface of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) is a {{domxref("AudioNode")}} processor which implements a general **[infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR) filter; this type of filter can be used to implement tone control devices and graphic equalizers as well. It lets the parameters of the filter response be specified, so that it can be tuned as needed.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td>Same as on the input</td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Typically, it's best to use the {{domxref("BiquadFilterNode")}} interface to implement higher-order filters. There are several reasons why:

- Biquad filters are typically less sensitive to numeric quirks.
- The filter parameters of biquad filters can be automated.
- All even-ordered IIR filters can be created using {{domxref("BiquadFilterNode")}}.

However, if you need to create an odd-ordered IIR filter, you'll need to use `IIRFilterNode`. You may also find this interface useful if you don't need automation, or for other reasons.

> **Note:** Once the node has been created, you can't change its coefficients.

`IIRFilterNode`s have a tail-time reference; they continue to output non-silent audio with zero input. As an IIR filter, the non-zero input continues forever, but this can be limited after some finite time in practice, when the output has approached zero closely enough. The actual time that takes depends on the filter coefficients provided.

## Constructor

- {{domxref("IIRFilterNode.IIRFilterNode", "IIRFilterNode()")}}
  - : Creates a new instance of an IIRFilterNode object.

## Properties

_This interface has no properties of its own; however, it inherits properties from its parent, {{domxref("AudioNode")}}_.

## Methods

_Inherits methods from its parent, {{domxref("AudioNode")}}. It also has the following additional methods:_

- {{domxref("IIRFilterNode.getFrequencyResponse", "getFrequencyResponse()")}}
  - : Uses the filter's current parameter settings to calculate the response for frequencies specified in the provided array of frequencies.

## Examples

You can find a simple IIR filter demo live [on Codepen](https://codepen.io/Rumyra/pen/oPxvYB/). Also see the [source code on GitHub](https://github.com/mdn/webaudio-examples/tree/master/iirfilter-node). It includes some different coefficient values for different lowpass frequencies — you can change the value of the `filterNumber` constant to a value between 0 and 3 to check out the different available effects.

Also see our [Using IIR filters](/en-US/docs/Web/API/Web_Audio_API/Using_IIR_filters) guide for a full explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioNode")}}
- {{domxref("BiquadFilterNode")}}
