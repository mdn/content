---
title: MediaStreamAudioDestinationNode()
slug: Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode
tags:
  - API
  - Audio
  - Constructor
  - MediaStreamAudioDestinationNode
  - Reference
  - Web Audio API
browser-compat: api.MediaStreamAudioDestinationNode.MediaStreamAudioDestinationNode
---
<p>{{APIRef("Web Audio API")}}</p>

<p>The <code><strong>MediaStreamAudioDestinationNode()</strong></code> constructor of the <a href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a> creates a new {{domxref("MediaStreamAudioDestinationNode")}} object instance.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myAudioDest = new MediaStreamAudioDestinationNode(<em>context</em>, <em>options</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><em>context</em></dt>
 <dd>An {{domxref("AudioContext")}} representing the audio context you want the node to be associated with.</dd>
 <dt><em>options {{optional_inline}}</em></dt>
 <dd>An object defining the properties you want the <code>MediaStreamAudioDestinationNode</code> to have:
  <ul>
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

<p>A new {{domxref("MediaStreamAudioDestinationNode")}} object instance.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">var ac = new AudioContext();

var myDestination = new MediaStreamAudioDestinationNode(<em>ac</em>);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
