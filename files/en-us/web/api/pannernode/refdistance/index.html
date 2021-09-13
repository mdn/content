---
title: PannerNode.refDistance
slug: Web/API/PannerNode/refDistance
tags:
  - API
  - PannerNode
  - Property
  - Reference
  - Web Audio API
  - refDistance
browser-compat: api.PannerNode.refDistance
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>The <code>refDistance</code> property of the {{ domxref("PannerNode") }} interface is a double value representing the reference distance for reducing volume as the audio source moves further from the listener – i.e. the distance at which the volume reduction starts taking effect. This value is used by all distance models.</p>

<p>The <code>refDistance</code> property's default value is <code>1</code>.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var panner = audioCtx.createPanner();
panner.refDistance = 1;</pre>

<h3 id="Value">Value</h3>

<p>A non-negative number. If the value is set to less than 0, a <code>RangeError</code> is thrown.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
 <dt><code>RangeError</code></dt>
 <dd>The property has been given a value that is outside the accepted range.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example demonstrates how different values of {{ domxref("PannerNode.refDistance", "refDistance") }} affect how the volume of a sound decays as it moves away from the listener. Unlike {{ domxref("PannerNode.rolloffFactor", "rolloffFactor") }}, changing this value also <em>delays</em> the volume decay until the sound moves past the reference point.</p>

<pre class="brush: js">const context = new AudioContext();
// all our test tones will last this many seconds
const NOTE_LENGTH = 6;
// this is how far we'll move the sound
const Z_DISTANCE = 20;

// this function creates a graph for the test tone with a given refDistance
// and schedules it to move away from the listener along the Z (depth-wise) axis
// at the given start time, resulting in a decrease in volume (decay)
const scheduleTestTone = (refDistance, startTime) =&gt; {
  const osc = new OscillatorNode(context);

  const panner = new PannerNode(context);
  panner.refDistance = refDistance;

  // set the initial Z position, then schedule the ramp
  panner.positionZ.setValueAtTime(0, startTime);
  panner.positionZ.linearRampToValueAtTime(Z_DISTANCE, startTime + NOTE_LENGTH);

  osc.connect(panner)
     .connect(context.destination);

  osc.start(startTime);
  osc.stop(startTime + NOTE_LENGTH);
};

// this tone should decay immediately and fairly quickly
scheduleTestTone(1, context.currentTime);
// this tone should decay slower and later than the previous one
scheduleTestTone(4, context.currentTime + NOTE_LENGTH);
// this tone should decay only slightly, and only start decaying fairly late
scheduleTestTone(7, context.currentTime + NOTE_LENGTH * 2);</pre>

<p>After running this code, the resulting waveforms should look something like this:</p>

<p><img alt="A waveform visualisation of three oscillator tones produced in Web Audio. Each oscillator moves away from the listener at the same speed, but with different refDistances affecting the resulting volume decay." src="screen_shot_2018-10-11_at_23.14.32.png"></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics">Web Audio spatialisation basics</a></li>
</ul>
