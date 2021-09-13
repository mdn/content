---
title: MediaStreamAudioDestinationNode
slug: Web/API/MediaStreamAudioDestinationNode
tags:
  - API
  - Interface
  - MediaStreamAudioDestinationNode
  - Reference
  - Web Audio API
browser-compat: api.MediaStreamAudioDestinationNode
---
<p>{{APIRef("Web Audio API")}}</p>

<div>
<p>The <code>MediaStreamAudioDestinationNode</code> interface represents an audio destination consisting of a <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> {{domxref("MediaStream")}} with a single <code>AudioMediaStreamTrack</code>, which can be used in a similar way to a <code>MediaStream</code> obtained from {{ domxref("Navigator.getUserMedia()") }}.</p>

<p>It is an {{domxref("AudioNode")}} that acts as an audio destination, created using the {{domxref("AudioContext.createMediaStreamDestination()")}} method.</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Number of inputs</th>
   <td><code>1</code></td>
  </tr>
  <tr>
   <th scope="row">Number of outputs</th>
   <td><code>0</code></td>
  </tr>
  <tr>
   <th scope="row">Channel count</th>
   <td><code>2</code></td>
  </tr>
  <tr>
   <th scope="row">Channel count mode</th>
   <td><code>"explicit"</code></td>
  </tr>
  <tr>
   <th scope="row">Channel count interpretation</th>
   <td><code>"speakers"</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("MediaStreamAudioDestinationNode.MediaStreamAudioDestinationNode()")}}</dt>
 <dd>Creates a new <code>MediaStreamAudioDestinationNode</code> object instance.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its parent, {{domxref("AudioNode")}}</em>.</p>

<dl>
 <dt>{{domxref("MediaStreamAudioDestinationNode.stream")}}</dt>
 <dd>A {{domxref("MediaStream")}} containing a single {{domxref("MediaStreamTrack")}} whose {{domxref("MediaStreamTrack.kind", "kind")}} is <code>audio</code> and with the same number of channels as the node. You can use this property to get a stream out of the audio graph and feed it into another construct, such as a <a href="/en-US/docs/Web/API/MediaStream_Recording_API">Media Recorder</a>.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>Inherits methods from its parent, {{domxref("AudioNode")}}</em>.</p>

<h2 id="Example">Example</h2>

<p>See <a href="/en-US/docs/Web/API/AudioContext.createMediaStreamDestination#examples"><code>AudioContext.createMediaStreamDestination()</code></a> for example code that creates a <code>MediaStreamAudioDestinationNode</code> and uses it as a source for audio to be recorded.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
