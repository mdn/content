---
title: VTTCue.region
slug: Web/API/VTTCue/region
tags:
  - API
  - Property
  - Reference
  - region
  - VTTCue
browser-compat: api.VTTCue.region
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>region</code></strong> property of the {{domxref("VTTCue")}} interface returns and sets the {{domxref("VTTRegion")}} that this cue belongs to.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let region = VTTCue.region;
VTTCue.region = a;</pre>

<h3>Value</h3>
<p>A {{domxref("VTTRegion")}} object.</p>

<h2 id="Examples">Examples</h2>

<p>In the following example a new {{domxref("VTTCue")}} is created, then the value of <code>region</code> is printed to the console.</p>

<pre class="brush: js">let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
console.log(cue1.region);

track.addCue(cue1);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


