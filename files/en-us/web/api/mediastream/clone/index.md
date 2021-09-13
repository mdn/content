---
title: MediaStream.clone()
slug: Web/API/MediaStream/clone
tags:
- API
- Media Capture and Streams
- Media Stream API
- MediaStream
- Method
- Reference
- clone
browser-compat: api.MediaStream.clone
---
<p>{{APIRef("Media Capture and Streams")}}</p>

<p>The <strong><code>clone()</code></strong> method of the {{domxref("MediaStream")}}
  interface creates a duplicate of the <code>MediaStream</code>. This new
  <code>MediaStream</code> object has a new unique {{domxref("MediaStream.id", "id")}} and
  contains clones of every {{domxref("MediaStreamTrack")}} contained by the
  <code>MediaStream</code> on which <code>clone()</code> was called.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>stream</em> = <em>MediaStream</em>.clone();</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A new {{domxref("MediaStream")}} instance which has a new unique ID and contains clones
  of every {{domxref("MediaStreamTrack")}} contained by the <code>MediaStream</code> on
  which <code>clone()</code> was called.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
