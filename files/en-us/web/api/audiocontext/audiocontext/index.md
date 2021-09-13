---
title: AudioContext()
slug: Web/API/AudioContext/AudioContext
tags:
- Audio
- Audio Context
- Audio Graph
- AudioContext
- Constructor
- Context
- Media
- Media Graph
- Reference
- Web Audio
- Web Audio API
browser-compat: api.AudioContext.AudioContext
---
<div>{{APIRef("Web Audio API")}}</div>

<p>The <strong><code>AudioContext()</code></strong> constructor
    creates a new {{domxref("AudioContext")}} object which represents an audio-processing
    graph, built from audio modules linked together, each represented by an
    {{domxref("AudioNode")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">new AudioContext();
new AudioContext(options);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>options</code> {{optional_inline}}</dt>
  <dd>An object used to configure the context. See below for available properties.</dd>
</dl>

<h3>Options</h3>
<dl>
  <dt><code>latencyHint</code></dt>
  <dd>The type of playback that the context will be used for, as a predefined string (<code>"balanced"</code>, <code>"interactive"</code> or <code>"playback"</code>) or a double-precision floating-point value indicating the preferred maximum latency of the context in seconds. The user agent may or may not choose to meet this request; check the value of {{domxref("AudioContext.baseLatency")}} to determine the true latency after creating the context.
    <ul>
      <li><code>"balanced"</code>: The browser balances audio output latency and power consumption when selecting a latency value.</li>
      <li><code>"interactive"</code> (default value): The audio is involved in interactive elements, such as responding to user actions or needing to coincide with visual cues such as a video or game action. The browser selects the lowest possible latency that doesn't cause glitches in the audio. This is likely to require increased power consumption.</li>
    <li><code>"playback"</code>: The browser selects a latency that will maximize playback time by minimizing power consumption at the expense of latency. Useful for non-interactive playback, such as playing music.</li>
    </ul>
  </dd>
  <dt><code>sampleRate</code></dt>
  <dd>Indicates the sample rate to use for the new context. The value must be a floating-point value indicating the sample
  rate, in samples per second, for which to configure the new context; additionally, the
  value must be one which is supported by {{domxref("AudioBuffer.sampleRate")}}.
  The value is typically be between 8,000 Hz and 96,000 Hz; the default will vary depending on the output device, but the sample rate 44,100 Hz is the most common.

  If the <code>sampleRate</code> property is not included in the options, or the options are not specified when creating the audio context, the new context's output device's preferred sample rate is used by default.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The newly constructed {{domxref("AudioContext")}} instance.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>NotSupportedError</code></dt>
  <dd>The specified <code>sampleRate</code> isn't supported by the context.</dd>
</dl>

<h2 id="Usage_notes">Usage notes</h2>

<p>The specification doesn't go into a lot of detail about things like how many audio
  contexts a user agent should support, or minimum or maximum latency requirements (if
  any), so these details can vary from browser to browser. Be sure to check the values if
  they matter to you.</p>

<p>In particular, the specification doesn't indicate a maximum or minimum number of audio
  contexts that must be able to be open at the same time, so this is left up to the
  browser implementations to decide.</p>

<h3 id="Google_Chrome">Google Chrome</h3>

<h4 id="Per-tab_audio_context_limitation_in_Chrome">Per-tab audio context limitation in
  Chrome</h4>

<p>Prior to version 66 Google Chrome only supported up to six audio contexts <em>per
    tab</em> at a time.</p>

<h4 id="Non-standard_exceptions_in_Chrome">Non-standard exceptions in Chrome</h4>

<p>If the value of the <code>latencyHint</code> property isn't valid,
  Chrome throws a <code>TypeError</code> exception with the message
  "The provided value '...' is not a valid enum value of type
  AudioContextLatencyCategory".</p>

<h2 id="Example">Example</h2>

<p>This example creates a new {{domxref("AudioContext")}} for interactive audio
  (optimizing for latency) and a sample rate of 44.1kHz.</p>

<pre class="brush: js">var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext({
  latencyHint: 'interactive',
  sampleRate: 44100,
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("OfflineAudioContext.OfflineAudioContext()", "new
    OfflineAudioContext()")}} constructor</li>
</ul>
