---
title: BiquadFilterNode.type
slug: Web/API/BiquadFilterNode/type
tags:
  - API
  - BiquadFilterNode
  - Property
  - Reference
  - Type
  - Web Audio API
browser-compat: api.BiquadFilterNode.type
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>The <code>type</code> property of the {{ domxref("BiquadFilterNode") }} interface is a string (enum) value defining the kind of filtering algorithm the node is implementing.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var biquadFilter = audioCtx.createBiquadFilter();
biquadFilter.type = 'lowpass';</pre>

<h3 id="Value">Value</h3>

<p>A string (enum) representing a <a href="https://webaudio.github.io/web-audio-api/#idl-def-BiquadFilterType">BiquadFilterType</a>.</p>

<h2 id="type_values_and_their_meaning"><code>type</code> values and their meaning</h2>

<table class="standard-table">
	<tbody>
		<tr>
			<th scope="row"><code>type</code></th>
			<th scope="col">Description</th>
			<th scope="col"><code>frequency</code></th>
			<th scope="col"><code>Q</code></th>
			<th scope="col"><code>gain</code></th>
		</tr>
		<tr>
			<th scope="row"><code>lowpass</code></th>
			<td>Standard second-order resonant lowpass filter with 12dB/octave rolloff. Frequencies below the cutoff pass through; frequencies above it are attenuated.</td>
			<td>The cutoff frequency.</td>
			<td>Indicates how peaked the frequency is around the cutoff. The greater the value is, the greater is the peak.</td>
			<td><em>Not used</em></td>
		</tr>
		<tr>
			<th scope="row"><code>highpass</code></th>
			<td>Standard second-order resonant highpass filter with 12dB/octave rolloff. Frequencies below the cutoff are attenuated; frequencies above it pass through.</td>
			<td>The cutoff frequency.</td>
			<td>Indicates how peaked the frequency is around the cutoff. The greater the value, the greater the peak.</td>
			<td><em>Not used</em></td>
		</tr>
		<tr>
			<th scope="row"><code>bandpass</code></th>
			<td>Standard second-order bandpass filter. Frequencies outside the given range of frequencies are attenuated; the frequencies inside it pass through.</td>
			<td>The center of the range of frequencies.</td>
			<td>Controls the width of the frequency band. The greater the <code>Q</code> value, the larger the frequency band.</td>
			<td><em>Not used</em></td>
		</tr>
		<tr>
			<th scope="row"><code>lowshelf</code></th>
			<td>Standard second-order lowshelf filer. Frequencies lower than the frequency get a boost, or an attenuation; frequencies over it are unchanged.</td>
			<td>The upper limit of the frequencies getting a boost or an attenuation.</td>
			<td><em>Not used</em></td>
			<td>The boost, in dB, to be applied; if negative, it will be an attenuation.</td>
		</tr>
		<tr>
			<th scope="row"><code>highshelf</code></th>
			<td>Standard second-order highshelf filer. Frequencies higher than the frequency get a boost or an attenuation; frequencies lower than it are unchanged.</td>
			<td>The lower limit of the frequencies getting a boost or an attenuation.</td>
			<td><em>Not used</em></td>
			<td>The boost, in dB, to be applied; if negative, it will be an attenuation.</td>
		</tr>
		<tr>
			<th scope="row"><code>peaking</code></th>
			<td>Frequencies inside the range get a boost or an attenuation; frequencies outside it are unchanged.</td>
			<td>The middle of the frequency range getting a boost or an attenuation.</td>
			<td>Controls the width of the frequency band. The greater the <code>Q</code> value, the larger the frequency band.</td>
			<td>The boost, in dB, to be applied; if negative, it will be an attenuation.</td>
		</tr>
		<tr>
			<th scope="row"><code>notch</code></th>
			<td>Standard <a href="https://en.wikipedia.org/wiki/Band-stop_filter">notch</a> filter, also called a <em>band-stop</em> or <em>band-rejection</em> filter. It is the opposite of a bandpass filter: frequencies outside the give range of frequencies pass through; frequencies inside it are attenuated.</td>
			<td>The center of the range of frequencies.</td>
			<td>Controls the width of the frequency band. The greater the <code>Q</code> value, the larger the frequency band.</td>
			<td><em>Not used</em></td>
		</tr>
		<tr>
			<th scope="row"><code>allpass</code></th>
			<td>Standard second-order <a href="https://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation">allpass</a> filter. It Lets all frequencies through, but changes the phase-relationship between the various frequencies.</td>
			<td>The frequency with the maximal <a href="https://en.wikipedia.org/wiki/Group_delay_and_phase_delay">group delay</a>, that is, the frequency where the center of the phase transition occurs.</td>
			<td>Controls how sharp the transition is at the medium frequency. The larger this parameter is, the sharper and larger the transition will be.</td>
			<td><em>Not used</em></td>
		</tr>
	</tbody>
</table>

<h2 id="Example">Example</h2>

<p>The following example shows basic usage of an AudioContext to create a Biquad filter node. For a complete working example, check out our <a href="https://mdn.github.io/voice-change-o-matic/">voice-change-o-matic</a> demo (look at the <a href="https://github.com/mdn/voice-change-o-matic">source code</a> too).</p>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

//set up the different audio nodes we will use for the app
var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();
var convolver = audioCtx.createConvolver();

// connect the nodes together

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipulate the Biquad filter

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
