---
title: AudioDestinationNode.maxChannelCount
slug: Web/API/AudioDestinationNode/maxChannelCount
tags:
  - API
  - AudioDestinationNode
  - Property
  - Reference
  - Web Audio API
  - maxChannelCount
browser-compat: api.AudioDestinationNode.maxChannelCount
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>The <code>maxchannelCount</code> property of the {{ domxref("AudioDestinationNode") }} interface is an <code>unsigned long</code> defining the maximum amount of channels that the physical device can handle.</p>

<p>The {{domxref("AudioNode.channelCount")}} property can be set between 0 and this value (both included). If <code>maxChannelCount</code> is <code>0</code>, like in {{domxref("OfflineAudioContext")}}, the channel count cannot be changed.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var myDestination = audioCtx.destination;
myDestination.maxChannelCount = 2;
</pre>

<h3 id="Value">Value</h3>

<p>An <code>unsigned long</code>.</p>

<h2 id="Example">Example</h2>

<p>The following would set up a simple audio graph, featuring an <code>AudioDestinationNode</code> with <code>maxChannelCount</code> of 2:</p>

<pre class="brush: js">var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
audioCtx.destination.maxChannelCount = 2;
gainNode.connect(audioCtx.destination);</pre>

<p>To see a more complete implementation, check out one of our MDN Web Audio examples, such as <a href="https://mdn.github.io/voice-change-o-matic/">Voice-change-o-matic</a> or <a href="https://mdn.github.io/violent-theremin/">Violent Theremin</a>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
