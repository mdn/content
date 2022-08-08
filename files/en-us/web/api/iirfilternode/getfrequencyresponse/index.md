---
title: IIRFilterNode.getFrequencyResponse()
slug: Web/API/IIRFilterNode/getFrequencyResponse
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - IIRFilterNode
  - Method
  - Reference
  - Web Audio API
  - filter
  - getFrequencyResponse
browser-compat: api.IIRFilterNode.getFrequencyResponse
---
{{ APIRef("Web Audio API") }}

The `getFrequencyResponse()` method of the {{ domxref("IIRFilterNode") }}
interface takes the current filtering algorithm's settings and calculates the
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
    response for each frequency value in the `frequencyArray`.
- `phaseResponseOutput`
  - : A {{jsxref("Float32Array")}} to receive the computed phase response values in
    radians for each frequency value in the input `frequencyArray`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the three arrays provided are not all of the same length.

## Examples

In the following example we are using an IIR filter on a media stream (for a complete
full demo, see our [stream-source-buffer demo](https://mdn.github.io/webaudio-examples/stream-source-buffer/) live,
or [read its source](https://github.com/mdn/webaudio-examples/blob/master/stream-source-buffer/index.html)). As part of this demo, we get the frequency responses for this IIR
filter, for five sample frequencies. We first create the {{jsxref("Float32Array")}}
objects we need, one containing the input frequencies, and two to receive the output
magnitude and phase values:

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
<p>IIR filter frequency response for: </p>
<ul class="freq-response-output">
</ul>
```

```js
const freqResponseOutput = document.querySelector('.freq-response-output');
```

Finally, after creating our filter, we use `getFrequencyResponse()` to
generate the response data and put it in our arrays, then loop through each data set and
output them in a human-readable list at the bottom of the page:

```js
const feedforwardCoefficients = [0.1, 0.2, 0.3, 0.4, 0.5];
const feedbackCoefficients = [0.5, 0.4, 0.3, 0.2, 0.1];

const iirFilter = audioCtx.createIIRFilter(feedforwardCoefficients, feedbackCoefficients);

// …

function calcFrequencyResponse() {
  iirFilter.getFrequencyResponse(myFrequencyArray, magResponseOutput, phaseResponseOutput);

  for (i = 0; i <= myFrequencyArray.length-1;i++){
    const listItem = document.createElement('li');
    listItem.textContent = `${myFrequencyArray[i]}Hz: Magnitude ${magResponseOutput[i]}, Phase ${phaseResponseOutput[i]} radians.`;
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
- {{domxref("IIRFilterNode")}}
- {{domxref("AudioNode")}}
