---
title: 'RTCDTMFSender: tonechange event'
slug: Web/API/RTCDTMFSender/tonechange_event
tags:
  - DTMF
  - RTCDTMFSender
  - Reference
  - Touch-tone
  - WebRTC
  - WebRTC API
  - events
  - tonechange
browser-compat: api.RTCDTMFSender.tonechange_event
---
<p>{{WebRTCSidebar}}</p>

<p>The <strong><code>tonechange</code></strong> event is sent to an {{domxref("RTCDTMFSender")}} by the <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a> to indicate when {{Glossary("DTMF")}} tones previously queued for sending (by calling {{domxref("RTCDTMFSender.insertDTMF()")}}) begin and end.</p>

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
   <td>{{DOMxRef("RTCDTMFToneChangeEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{DOMxRef("RTCDTMFSender.ontonechange", "ontonechange")}}</td>
  </tr>
 </tbody>
</table>

<p>To determine what tone started playing, or if a tone stopped playing, check the value of the event's {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}} property.</p>

<h2 id="Examples">Examples</h2>

<p>This example establishes a handler for the {{event("tonechange")}} event which updates an element to display the currently playing tone in its content, or, if all tones have played, the string "&lt;none&gt;".</p>

<p>This can be done using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:</p>

<pre class="brush: js">dtmfSender.addEventListener("tonechange", ev =&gt; {
  let tone = ev.tone;
  if (tone === "") {
    tone = "&amp;lt;none&amp;gt;";
  }

  document.getElementById("playingTone").innerText = tone;
}, false);
</pre>

<p>You can also just set the {{domxref("RTCDTMFSender.ontonechange", "ontonechange")}} event handler property directly:</p>

<pre class="brush: js">dtmfSender.ontonechange = function( ev ) {
  let tone = ev.tone;
  if (tone === "") {
    tone = "&amp;lt;none&amp;gt;"
  }

  document.getElementById("playingTone").innerText = tone;
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
