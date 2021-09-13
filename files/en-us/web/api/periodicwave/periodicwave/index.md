---
title: PeriodicWave()
slug: Web/API/PeriodicWave/PeriodicWave
tags:
  - API
  - Audio
  - Constructor
  - PeriodicWave
  - Reference
  - Web Audio API
browser-compat: api.PeriodicWave.PeriodicWave
---
<p>{{APIRef("Web Audio API")}}</p>

<p>The <code><strong>PeriodicWave()</strong></code> constructor of the <a
    href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a> creates a new
  {{domxref("PeriodicWave")}} object instance.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>myWave</em> = new PeriodicWave(<em>context</em>, <em>options</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>context</code></dt>
  <dd>A {{domxref("BaseAudioContext")}} representing the audio context you want the node
    to be associated with.</dd>
  <dt><code>options</code> {{optional_inline}}</dt>
  <dd>A
    <code><a href="https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveOptions">PeriodicWaveOptions</a></code>
    dictionary object defining the properties you want the <code>PeriodicWave</code> to
    have (It also inherits the options defined in the <a
      href="https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveConstraints">PeriodicWaveConstraints</a>
    dictionary.):
    <ul>
      <li><code>real</code>: A {{jsxref("Float32Array")}} containing the cosine terms
        that you want to use to form the wave (equivalent to the <code>real</code>
        parameter of {{domxref("BaseAudioContext.createPeriodicWave")}}).</li>
      <li><code>imag</code>: A {{jsxref("Float32Array")}} containing the sine terms that
        you want to use to form the wave (equivalent to the <code>imag</code> parameter of
        {{domxref("BaseAudioContext.createPeriodicWave")}}).</li>
      <li><code>channelCount</code>: Represents an integer used to determine how many channels are used when <a
        href="/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing">up-mixing
        and down-mixing</a> connections to any inputs to the node. (See
      {{domxref("AudioNode.channelCount")}} for more information.) Its usage and precise
      definition depend on the value of <code>channelCountMode</code>.</li>
      <li><code>channelCountMode</code>: Represents an enumerated value describing the way channels must be matched between
        the node's inputs and outputs. (See {{domxref("AudioNode.channelCountMode")}} for more
        information including default values.)</li>
      <li>
        <code>channelInterpretation</code>: Represents an enumerated value describing the meaning of the channels. This
        interpretation will define how audio <a
          href="/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing">up-mixing
          and down-mixing</a> will happen.<br>
        The possible values are <code>"speakers"</code> or <code>"discrete"</code>. (See
        {{domxref("AudioNode.channelCountMode")}} for more information including default
        values.)
      </li>
    </ul>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new {{domxref("PeriodicWave")}} object instance.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">var real = new Float32Array(2);
var imag = new Float32Array(2);
var ac = new AudioContext();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

var options = {
  real : real,
  imag : imag,
  disableNormalization : false
}

var wave = new PeriodicWave(ac, options);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
