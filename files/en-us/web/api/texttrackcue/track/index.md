---
title: TextTrackCue.track
slug: Web/API/TextTrackCue/track
tags:
  - API
  - Property
  - Reference
  - track
  - TextTrackCue
browser-compat: api.TextTrackCue.track
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>track</code></strong> read-only property of the {{domxref("TextTrackCue")}} interface returns the {{domxref("TextTrack")}} object that this cue belongs to.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let track = TextTrackCue.track;</pre>

<h3>Value</h3>
<p>A {{domxref("TextTrack")}} object.</p>

<h2 id="Examples">Examples</h2>

<p>In the following example a new {{domxref("VTTCue")}} (which inherits from <code>TextTrackCue</code>) is created, then added to a track. The value of <code>track</code> is printed to the console.</p>

<pre class="brush: js">let video = document.querySelector('video');
let captiontrack = video.addTextTrack("captions", "Captions", "en");
captiontrack.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
captiontrack.addCue(cue1);
console.log(cue1.track); // a TextTrack object.
</pre>


<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

