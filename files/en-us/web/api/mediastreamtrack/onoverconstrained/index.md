---
title: MediaStreamTrack.onoverconstrained
slug: Web/API/MediaStreamTrack/onoverconstrained
tags:
  - API
  - Deprecated
  - Event Handler
  - Property
  - Reference
  - WebRTC
browser-compat: api.MediaStreamTrack.onoverconstrained
---
<div>{{ APIRef("Media Capture and Streams") }}{{deprecated_header}}</div>

<p>The <code><strong>MediaStreamTrack.onoverconstrained</strong></code> event handler is a property called when the {{event("overconstrained")}} event is received. Such an event is sent when the track is again able to send data.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="eval"><em>track</em>.onoverconstrained = <em>function</em>;
</pre>

<h3 id="Values">Values</h3>

<ul>
 <li><code>function</code> is the name of a user-defined function, without the <code>()</code> suffix or any parameters, or an anonymous function declaration, such as <code>function(event) {...}</code>. An event handler always has one single parameter, containing the event, here of type {{domxref("MediaStreamErrorEvent")}}.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">dc.onoverconstrained = function() { alert("overconstrained event detected!"); };
</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{event("overconstrained")}} event and its type, {{domxref("MediaStreamErrorEvent")}}.</li>
</ul>
