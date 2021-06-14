---
title: ConvolverNode.buffer
slug: Web/API/ConvolverNode/buffer
tags:
  - API
  - Buffer
  - ConvolverNode
  - Property
  - Reference
  - Web Audio API
browser-compat: api.ConvolverNode.buffer
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>The <strong><code>buffer</code></strong> property of the {{ domxref("ConvolverNode") }} interface represents a mono, stereo, or 4-channel {{domxref("AudioBuffer")}} containing the (possibly multichannel) impulse response used by the <code>ConvolverNode</code> to create the reverb effect.</p>

<p>This is normally a simple recording of as-close-to-an-impulse as can be found in the space you want to model. For example, if you want to model the reverb in your bathroom, you might set up a microphone near the door to record the sound of a balloon pop or synthesized impulse from the sink. That audio recording could then be used as the buffer.</p>

<p>This <em>{{domxref("AudioBuffer")}}</em>  must have the same sample-rate as the <code>AudioContext</code> or an exception will be thrown. At the time when this attribute is set, the buffer and the state of the attribute will be used to configure the <code>ConvolverNode</code> with this impulse response having the given normalization. The initial value of this attribute is <code>null</code>.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var convolver = audioCtx.createConvolver();
convolver.buffer = myAudioBuffer;
</pre>

<h3 id="Value">Value</h3>

<p>An {{domxref("AudioBuffer")}}.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var convolver = audioCtx.createConvolver();

  ...

// grab audio track via XHR for convolver node

var soundSource, concertHallBuffer;

ajaxRequest = new XMLHttpRequest();
ajaxRequest.open('GET', 'concert-crowd.ogg', true);
ajaxRequest.responseType = 'arraybuffer';

ajaxRequest.onload = function() {
  var audioData = ajaxRequest.response;
  audioCtx.decodeAudioData(audioData, function(buffer) {
      concertHallBuffer = buffer;
      soundSource = audioCtx.createBufferSource();
      soundSource.buffer = concertHallBuffer;
    }, function(e){"Error with decoding audio data" + e.err});
}

ajaxRequest.send();

  ...

convolver.buffer = concertHallBuffer;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
