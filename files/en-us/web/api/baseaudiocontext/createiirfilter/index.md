---
title: "BaseAudioContext: createIIRFilter() method"
short-title: createIIRFilter()
slug: Web/API/BaseAudioContext/createIIRFilter
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.createIIRFilter
---

{{ APIRef("Web Audio API") }}

The **`createIIRFilter()`** method of the {{domxref("BaseAudioContext")}} interface creates an {{ domxref("IIRFilterNode") }}, which represents a general **[infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR) filter which can be configured to serve as various types of filter.

> [!NOTE]
> The {{domxref("IIRFilterNode.IIRFilterNode", "IIRFilterNode()")}}
> constructor is the recommended way to create a {{domxref("IIRFilterNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createIIRFilter(feedforward, feedback)
```

### Parameters

- `feedforward`
  - : An array of floating-point values specifying the feedforward (numerator)
    coefficients for the transfer function of the IIR filter. The maximum length of this
    array is 20, and at least one value must be nonzero.
- `feedback`
  - : An array of floating-point values specifying the feedback (denominator) coefficients
    for the transfer function of the IIR filter. This array may have up to 20 members, the
    first of which must not be zero.

### Return value

An {{domxref("IIRFilterNode")}} implementing the filter with the specified feedback and
feedforward coefficient arrays.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if all of the `feedforward` coefficients are 0, or if the first
    `feedback` coefficient is 0.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if one or both of the input arrays exceeds 20 members.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("IIRFilterNode")}}
- {{domxref("AudioNode")}}
