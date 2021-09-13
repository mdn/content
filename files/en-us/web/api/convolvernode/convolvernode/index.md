---
title: ConvolverNode()
slug: Web/API/ConvolverNode/ConvolverNode
tags:
- API
- Audio
- Constructor
- Convolver
- Reference
- Web Audio API
browser-compat: api.ConvolverNode.ConvolverNode
---
<p>{{APIRef("Web Audio API")}}</p>

<p>The <strong><code>ConvolverNode()</code></strong> constructor
    of the <a href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a> creates a new
    {{domxref("ConvolverNode")}} object instance.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var convolverNode = new ConvolverNode(context, options)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>context</em></dt>
  <dd>A reference to an {{domxref("AudioContext")}}.</dd>
  <dt><em>options</em> {{optional_inline}}</dt>
  <dd>Options are as follows:
    <ul>
      <li><code>audioBuffer</code>: A mono, stereo, or
          4-channel <em>{{domxref("AudioBuffer")}}</em> containing the
          (possibly multichannel) impulse response used by the <code>ConvolverNode</code>
          to create the reverb effect.</li>
      <li><code>disableNormalization</code>: A boolean value controlling
          whether the impulse response from the buffer will be scaled by an equal-power
          normalization, or not. The default is '<code>false</code>'.</li>
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

<p>A new {{domxref("ConvolverNode")}} object instance.</p>

<h3 id="Exceptions">Exceptions</h3>

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>NotSupportedError</code></td>
      <td>The referenced {{domxref("AudioBuffer")}} does not have the correct number of
        channels, or it has a different sample rate to the associated
        {{domxref("AudioContext")}}.</td>
    </tr>
  </tbody>
</table>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
