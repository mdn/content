---
title: TrackDefault.language
slug: Web/API/TrackDefault/language
tags:
  - API
  - Audio
  - Experimental
  - Language
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - TrackDefault
  - Video
browser-compat: api.TrackDefault.language
---
<div>{{APIRef("Media Source Extensions")}}{{deprecated_header}}</div>

<p>The <code><strong>language</strong></code> read-only property of the {{domxref("TrackDefault")}} interface returns a default language for an associated {{domxref("SourceBuffer")}} to use when an <a href="https://w3c.github.io/media-source/#init-segment">initialization segment</a> does not contain language information for a new track.</p>

<p>This should be a valid language code, e.g. <code>en-US</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var mylanguage = TrackDefault.language;
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}}.</p>

<h2 id="Example">Example</h2>

<p>TBD</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBuffer")}}</li>
</ul>
