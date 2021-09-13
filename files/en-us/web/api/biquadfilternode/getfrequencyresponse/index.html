---
title: BiquadFilterNode.getFrequencyResponse()
slug: Web/API/BiquadFilterNode/getFrequencyResponse
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
<p>{{ APIRef("Web Audio API") }}</p>

<div>
  <p>The <code>getFrequencyResponse()</code> method of the {{ domxref("BiquadFilterNode")
    }} interface takes the current filtering algorithm's settings and calculates the
    frequency response for frequencies specified in a specified array of frequencies.</p>

  <p>The two output arrays, <code>magResponseOutput</code> and
    <code>phaseResponseOutput</code>, must be created before calling this method; they
    must be the same size as the array of input frequency values
    (<code>frequencyArray</code>).</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>BiquadFilterNode</em>.getFrequencyResponse(<em>frequencyArray</em>, <em>magResponseOutput</em>, <em>phaseResponseOutput</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>frequencyArray</code></dt>
  <dd>A {{jsxref("Float32Array")}} containing an array of frequencies, specified in Hertz,
    which you want to filter.</dd>
  <dt><code>magResponseOutput</code></dt>
  <dd>A {{jsxref("Float32Array")}} to receive the computed magnitudes of the frequency
    response for each frequency value in the <code>frequencyArray</code>. For any
    frequency in <code>frequencyArray</code> whose value is outside the range 0.0 to
    <code>sampleRate</code>/2 (where {{domxref("BaseAudioContext/sampleRate", "sampleRate")}}
    is the sample rate of the {{domxref("AudioContext")}}), the corresponding value in
    this array is {{jsxref("NaN")}}. These are unitless values.</dd>
  <dt><code>phaseResponseOutput</code></dt>
  <dd>A {{jsxref("Float32Array")}} to receive the computed phase response values in
    radians for each frequency value in the input <code>frequencyArray</code>. For any
    frequency in <code>frequencyArray</code> whose value is outside the range 0.0 to
    <code>sampleRate</code>/2 (where {{domxref("BaseAudioContext/sampleRate", "sampleRate")}}
    is the sample rate of the {{domxref("AudioContext")}}), the corresponding value in
    this array is {{jsxref("NaN")}}.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>{{jsxref("undefined")}}</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>InvalidAccessError</code></dt>
  <dd>The three arrays provided are not all of the same length.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>In the following example we are using a biquad filter on a media stream (for the full
  demo, see our <a href="https://mdn.github.io/stream-source-buffer/">stream-source-buffer
    demo</a> live, or <a
    href="https://github.com/mdn/stream-source-buffer/blob/gh-pages/index.html">read the
    source</a>.) As part of this demo, we get the frequency responses for this biquad
  filter, for five sample frequencies. We first create the {{jsxref("Float32Array")}}s we
  need, one containing the input frequencies, and two to receive the output magnitude and
  phase values:</p>

<pre class="brush: js">var myFrequencyArray = new Float32Array(5);
myFrequencyArray[0] = 1000;
myFrequencyArray[1] = 2000;
myFrequencyArray[2] = 3000;
myFrequencyArray[3] = 4000;
myFrequencyArray[4] = 5000;

var magResponseOutput = new Float32Array(5);
var phaseResponseOutput = new Float32Array(5);</pre>

<p>Next we create a {{ htmlelement("ul") }} element in our HTML to contain our results,
  and grab a reference to it in our JavaScript:</p>

<pre class="brush: html">&lt;p&gt;Biquad filter frequency response for: &lt;/p&gt;
&lt;ul class="freq-response-output"&gt;
&lt;/ul&gt;</pre>

<pre
  class="brush: js">var freqResponseOutput = document.querySelector('.freq-response-output');</pre>

<p>Finally, after creating our biquad filter, we use <code>getFrequencyResponse()</code>
  to generate the response data and put it in our arrays, then loop through each data set
  and output  them in a human-readable list at the bottom of the page:</p>

<pre class="brush: js">var biquadFilter = audioCtx.createBiquadFilter();
biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = range.value;

  ...

function calcFrequencyResponse() {
  biquadFilter.getFrequencyResponse(myFrequencyArray,magResponseOutput,phaseResponseOutput);

  for(i = 0; i &lt;= myFrequencyArray.length-1;i++){
    var listItem = document.createElement('li');
    listItem.innerHTML = '&lt;strong&gt;' + myFrequencyArray[i] + 'Hz&lt;/strong&gt;: Magnitude ' + magResponseOutput[i] + ', Phase ' + phaseResponseOutput[i] + ' radians.';
    freqResponseOutput.appendChild(listItem);
  }
}

calcFrequencyResponse();</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a>
  </li>
</ul>
