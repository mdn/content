---
title: BiquadFilterNode.getFrequencyResponse()
slug: Web/API/BiquadFilterNode/getFrequencyResponse
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - BiquadFilterNode
  - Method
  - Reference
  - Web Audio API
  - filter
  - getFrequencyResponse
browser-compat: api.BiquadFilterNode.getFrequencyResponse
---
{{ APIRef("Web Audio API") }}

The `getFrequencyResponse()` method of the {{ domxref("BiquadFilterNode")
    }} interface takes the current filtering algorithm's settings and calculates the
frequency response for frequencies specified in a specified array of frequencies.

The two output arrays, `magResponseOutput` and
`phaseResponseOutput`, must be created before calling this method; they
must be the same size as the array of input frequency values
(`frequencyArray`).

## Syntax

```js
getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput)
```

### Parameters

- `frequencyArray`
  - : A {{jsxref("Float32Array")}} containing an array of frequencies, specified in Hertz,
    which you want to filter.
- `magResponseOutput`
  - : A {{jsxref("Float32Array")}} to receive the computed magnitudes of the frequency
    response for each frequency value in the `frequencyArray`. For any
    frequency in `frequencyArray` whose value is outside the range 0.0 to
    `sampleRate`/2 (where {{domxref("BaseAudioContext/sampleRate", "sampleRate")}}
    is the sample rate of the {{domxref("AudioContext")}}), the corresponding value in
    this array is {{jsxref("NaN")}}. These are unitless values.
- `phaseResponseOutput`
  - : A {{jsxref("Float32Array")}} to receive the computed phase response values in
    radians for each frequency value in the input `frequencyArray`. For any
    frequency in `frequencyArray` whose value is outside the range 0.0 to
    `sampleRate`/2 (where {{domxref("BaseAudioContext/sampleRate", "sampleRate")}}
    is the sample rate of the {{domxref("AudioContext")}}), the corresponding value in
    this array is {{jsxref("NaN")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidAccessError`
  - : The three arrays provided are not all of the same length.

## Examples

In the following example we are using a biquad filter on a media stream (for the full
demo, see our [stream-source-buffer demo](https://mdn.github.io/webaudio-examples/stream-source-buffer/) live, or [read the source](https://github.com/mdn/webaudio-examples/blob/master/stream-source-buffer/index.html).) As part of this demo, we get the frequency responses for this biquad
filter, for five sample frequencies. We first create the {{jsxref("Float32Array")}}s we
need, one containing the input frequencies, and two to receive the output magnitude and
phase values:

```js
const myFrequencyArray = new Float32Array(5);
myFrequencyArray[0] = 1000;
myFrequencyArray[1] = 2000;
myFrequencyArray[2] = 3000;
myFrequencyArray[3] = 4000;
myFrequencyArray[4] = 5000;

const magResponseOutput = new Float32Array(5);
const phaseResponseOutput = new Float32Array(5);
```

Next we create a {{ htmlelement("ul") }} element in our HTML to contain our results,
and grab a reference to it in our JavaScript:

```html
<p>Biquad filter frequency response for: </p>
<ul class="freq-response-output">
</ul>
```

```js
const freqResponseOutput = document.querySelector('.freq-response-output');
```

Finally, after creating our biquad filter, we use `getFrequencyResponse()`
to generate the response data and put it in our arrays, then loop through each data set
and output them in a human-readable list at the bottom of the page:

```js
const biquadFilter = audioCtx.createBiquadFilter();
biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = range.value;

// …

function calcFrequencyResponse() {
  biquadFilter.getFrequencyResponse(myFrequencyArray,magResponseOutput,phaseResponseOutput);

  for (i = 0; i <= myFrequencyArray.length-1;i++){
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${myFrequencyArray[i]}Hz</strong>: Magnitude ${magResponseOutput[i]}, Phase ${phaseResponseOutput[i]} radians.`;
    freqResponseOutput.appendChild(listItem);
  }
}

calcFrequencyResponse();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
