---
title: RTCDTMFSender.ontonechange
slug: Web/API/RTCDTMFSender/ontonechange
tags:
- DTMF
- Event Handler
- Property
- RTCDTMFSender
- Reference
- Touch-tone
- WebRTC
- WebRTC API
- ontonechange
browser-compat: api.RTCDTMFSender.ontonechange
---
<div>{{ APIRef("WebRTC") }}{{draft}}</div>

<p>The <strong><code>ontonechange</code></strong> property of the {{
  domxref("RTCDTMFSender") }} interface is used to set the event handler for the
  {{event("tonechange")}} event, which is sent to the <code>RTCDTMFSender</code> each time
  a tone begins or ends. The event handler receives as input a single parameter of type
  {{domxref("RTCDTMFToneChangeEvent")}}, which describes the change.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>RTCDTMFSender</em>.ontonechange = <em>toneChangeHandlerFunction</em>;</pre>

<h3 id="Value">Value</h3>

<p>A function which is called when a {{event("tonechange")}} event is sent to the
  <code>RTCDTMFSender</code>, indicating that a DTMF tone has either started playing, or
  if all tones have finished playing.</p>

<h2 id="Example">Example</h2>

<p>tbd</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a></li>
  <li><a href="/en-US/docs/Web/API/WebRTC_API/Using_DTMF">Using DTMF with WebRTC</a></li>
  <li>{{domxref("RTCDTMFSender")}}</li>
</ul>
