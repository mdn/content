---
title: VTTCue.size
slug: Web/API/VTTCue/size
tags:
  - API
  - Property
  - Reference
  - size
  - VTTCue
browser-compat: api.VTTCue.size
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>size</code></strong> property of the {{domxref("VTTCue")}} interface represents the size of the cue as a percentage of the video size.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let size = VTTCue.size;
VTTCue.size = 50;</pre>

<h3>Value</h3>
<p>A number representing the size of the cue as a percentage of the video size.</p>

<h2 id="Examples">Examples</h2>

<p>In the following example a new {{domxref("VTTCue")}} is created, then the value of <code>size</code> is set to <code>50</code>. The value is then printed to the console.</p>

<pre class="brush: js">let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
cue1.size = 50;
console.log(cue1.size);

track.addCue(cue1);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


