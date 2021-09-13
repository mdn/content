---
title: TrackDefault.kinds
slug: Web/API/TrackDefault/kinds
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - TrackDefault
  - Video
  - kinds
browser-compat: api.TrackDefault.kinds
---
<div>{{APIRef("Media Source Extensions")}}{{deprecated_header}}</div>

<p>The <code><strong>kinds</strong></code> read-only property of the {{domxref("TrackDefault")}} interface returns default kinds for an associated {{domxref("SourceBuffer")}} to use when an <a href="https://w3c.github.io/media-source/#init-segment">initialization segment</a> does not contain label information for a new track.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var mykinds = TrackDefault.kinds;
</pre>

<h3 id="Value">Value</h3>

<p>An array of {{domxref("DOMString")}}s.</p>

<h2 id="Example">Example</h2>

<p>TBD</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBuffer")}}</li>
</ul>
