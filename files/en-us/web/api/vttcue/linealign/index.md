---
title: VTTCue.lineAlign
slug: Web/API/VTTCue/lineAlign
tags:
  - API
  - Property
  - Reference
  - lineAlign
  - VTTCue
browser-compat: api.VTTCue.lineAlign
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>lineAlign</code></strong> property of the {{domxref("VTTCue")}} interface represents the alignment of this VTT cue.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let lineAlign = VTTCue.lineAlign;
VTTCue.lineAlign = a;</pre>

<h3>Value</h3>
<p>A {{domxref("DOMString","string")}} containing one of the following values:</p>
<dl>
  <dt><code>"start"</code></dt>
  <dd>Start alignment.</dd>
  <dt><code>"center"</code></dt>
  <dd>Center alignment.</dd>
  <dt><code>"end"</code></dt>
  <dd>End alignment.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>In the following example a new {{domxref("VTTCue")}} is created, then the value of <code>lineAlign</code> is set to <code>"center"</code>. The value is then printed to the console.</p>

<pre class="brush: js">let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
cue1.lineAlign = 'center';
console.log(cue1.lineAlign);

track.addCue(cue1);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


