---
title: RTCOfferAnswerOptions.voiceActivityDetection
slug: Web/API/RTCOfferAnswerOptions/voiceActivityDetection
tags:
- Audio
- Configuration
- Offer
- Options
- Property
- RTCOfferAnswerOptions
- RTCPeerConnection
- Reference
- SDP
- Voice
- WebRTC
- WebRTC API
- answer
- detection
browser-compat: api.RTCOfferAnswerOptions.voiceActivityDetection
---
<div>{{APIRef("WebRTC")}}{{deprecated_header}}</div>

<p>The <code><strong>voiceActivityDetection</strong></code> property of the
  <strong>{{domxref("RTCOfferAnswerOptions")}}</strong> dictionary is used to specify
  whether or not to use automatic voice detection for the audio on an
  {{domxref("RTCPeerConnection")}}. The default value, <code>true</code>, indicates that
  voice detection should be used and that if possible, the {{Glossary("user agent")}}
  should automatically disable or mute outgoing audio when the audio source is not sensing
  a human voice.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>options</em> = {
  voiceActivityDetection: <em>trueOrFalse</em>
};
</pre>

<h3 id="Value">Value</h3>

<p>A Boolean value indicating whether or not the connection should use voice detection
  once running. The default value, <code>true</code>, indicates that the {{Glossary("user
  agent")}} should monitor the audio coming from the microphone or other audio source and
  automatically cease transmitting data or mute when the user isn't speaking into the
  microphone,</p>

<p>A value of <code>false</code> indicates that the audio should continue to be
  transmitted regardless of whether or not speech is detected.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
