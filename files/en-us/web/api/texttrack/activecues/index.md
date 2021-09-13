---
title: TextTrack.activeCues
slug: Web/API/TextTrack/activeCues
tags:
  - API
  - Property
  - Reference
  - activeCues
  - TextTrack
browser-compat: api.TextTrack.activeCues
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>activeCues</code></strong> read-only property of the {{domxref("TextTrack")}} interface returns a {{domxref("TextTrackCueList")}} object listing the currently active cues.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let activeCues = TextTrack.activeCues;</pre>

<h3>Value</h3>
<p>A {{domxref("TextTrackCueList")}} object.</p>

<h2 id="Examples">Examples</h2>

<p>The following example adds a new <code>TextTrack</code> to a video. The <code>activeCues</code> are printed to the console.</p>

<pre class="brush: js">let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.activeCues);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

