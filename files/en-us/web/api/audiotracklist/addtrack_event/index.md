---
title: 'AudioTrackList: addtrack event'
slug: Web/API/AudioTrackList/addtrack_event
tags:
  - Event
browser-compat: api.AudioTrackList.addtrack_event
---
<div>{{APIRef}}</div>

<p>The <code>addtrack</code> event is fired when a track is added to an <code><a href="/en-US/docs/Web/API/AudioTrackList">AudioTrackList</a></code>.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("TrackEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td><code><a href="/en-US/docs/Web/API/AudioTrackList/onaddtrack">onaddtrack</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>Using <code>addEventListener()</code>:</p>

<pre class="brush: js">const videoElement = document.querySelector('video');

videoElement.audioTracks.addEventListener('addtrack', (event) =&gt; {
  console.log(`Audio track: ${event.track.label} added`);
});</pre>

<p>Using the <code>onaddtrack</code> event handler property:</p>

<pre class="brush: js">const videoElement = document.querySelector('video');

videoElement.audioTracks.onaddtrack = (event) =&gt; {
  console.log(`Audio track: ${event.track.label} added`);
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Related events: <code><a href="/en-US/docs/Web/API/AudioTrackList/removetrack_event">removetrack</a></code>, <code><a href="/en-US/docs/Web/API/AudioTrackList/change_event">change</a></code></li>
 <li>This event on <code><a href="/en-US/docs/Web/API/VideoTrackList">VideoTrackList</a></code> targets: <code><a href="/en-US/docs/Web/API/VideoTrackList/addtrack_event">addtrack</a></code></li>
 <li>This event on <code><a href="/en-US/docs/Web/API/MediaStream">MediaStream</a></code> targets: <code><a href="/en-US/docs/Web/API/MediaStream/addtrack_event">addtrack</a></code></li>
 <li><a href="/en-US/docs/Web/API/Media_Streams_API">Media Streams API</a></li>
 <li><a href="/en-US/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
</ul>
