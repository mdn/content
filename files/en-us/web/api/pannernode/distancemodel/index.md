---
title: PannerNode.distanceModel
slug: Web/API/PannerNode/distanceModel
tags:
  - API
  - PannerNode
  - Property
  - Reference
  - Web Audio API
  - distanceModel
browser-compat: api.PannerNode.distanceModel
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>The <code>distanceModel</code> property of the {{ domxref("PannerNode") }} interface is an enumerated value determining which algorithm to use to reduce the volume of the audio source as it moves away from the listener.</p>

<p>The possible values are:</p>

<ul>
 <li><code>linear</code>: A <em>linear distance model</em> calculating the gain induced by the distance according to:<br>
  <code>1 - rolloffFactor * (distance - refDistance) / (maxDistance - refDistance)</code></li>
 <li><code>inverse</code>: An <em>inverse distance model</em> calculating the gain induced by the distance according to:<br>
  <code>refDistance / (refDistance + rolloffFactor * (Math.max(distance, refDistance) - refDistance))</code></li>
 <li><code>exponential</code>: An <em>exponential distance model</em> calculating the gain induced by the distance according to:<br>
  <code>pow((Math.max(distance, refDistance) / refDistance, -rolloffFactor)</code>.</li>
</ul>

<p><code>inverse</code> is the default value of <code>distanceModel</code>.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var panner = audioCtx.createPanner();
panner.distanceModel = 'inverse';</pre>

<h3 id="Value">Value</h3>

<p>A enum — see <a href="https://webaudio.github.io/web-audio-api/#idl-def-DistanceModelType"><code>DistanceModelType</code></a>.</p>

<h2 id="Example">Example</h2>

<p>See <a href="/en-US/docs/Web/API/BaseAudioContext/createPanner#example"><code>BaseAudioContext.createPanner()</code></a> for example code.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics">Web Audio spatialisation basics</a></li>
</ul>
