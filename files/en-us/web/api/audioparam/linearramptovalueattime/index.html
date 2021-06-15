---
title: AudioParam.linearRampToValueAtTime()
slug: Web/API/AudioParam/linearRampToValueAtTime
tags:
  - API
  - Audio
  - AudioParam
  - Method
  - Reference
  - Web Audio API
  - linearRampToValueAtTime
browser-compat: api.AudioParam.linearRampToValueAtTime
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
  <p>The <code>linearRampToValueAtTime()</code> method of the {{ domxref("AudioParam") }}
    Interface schedules a gradual linear change in the value of the
    <code>AudioParam</code>. The change starts at the time specified for the
    <em>previous</em> event, follows a linear ramp to the new value given in the
    <code>value</code> parameter, and reaches the new value at the time given in the
    <code>endTime</code> parameter.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var AudioParam = AudioParam.linearRampToValueAtTime(<em>value</em>, <em>endTime</em>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>value</dt>
  <dd>A floating point number representing the value the <code>AudioParam</code> will ramp
    to by the given time.</dd>
  <dt>endTime</dt>
  <dd>A double representing the exact time (in seconds) after the ramping starts that the
    changing of the value will stop.</dd>
</dl>

<h3 id="Returns">Returns</h3>

<p>A reference to this <code>AudioParam</code> object. In some browsers older
  implementations of this interface return void.</p>

<h2 id="Example">Example</h2>

<p>In this example, we have a media source with two control buttons (see the <a
    href="https://github.com/mdn/webaudio-examples/tree/master/audio-param">audio-param
    repo</a> for the source code, or <a
    href="https://mdn.github.io/webaudio-examples/audio-param/">view the example
    live</a>.) When these buttons are pressed, <code>linearRampToValueAtTime()</code> is
  used to fade the gain value up to 1.0, and down to 0, respectively. This is pretty
  useful for fade in/fade out effects, although {{
  domxref("AudioParam.exponentialRampToValueAtTime()") }} is often said to be a bit more
  natural.</p>

<pre class="brush: js">// create audio context
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

// set basic variables for example
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

var linearRampPlus = document.querySelector('.linear-ramp-plus');
var linearRampMinus = document.querySelector('.linear-ramp-minus');

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
var source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node and set it's gain value to 0.5
var gainNode = audioCtx.createGain();

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// set buttons to do something onclick
linearRampPlus.onclick = function() {
  gainNode.gain.linearRampToValueAtTime(1.0, audioCtx.currentTime + 2);
}

linearRampMinus.onclick = function() {
  gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a>
  </li>
</ul>
