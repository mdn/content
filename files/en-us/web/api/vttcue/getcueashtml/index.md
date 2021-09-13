---
title: VTTCue.getCueAsHTML()
slug: Web/API/VTTCue/getCueAsHTML
tags:
  - API
  - Method
  - Reference
  - getCueAsHTML
  - VTTCue
browser-compat: api.VTTCue.getCueAsHTML
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>getCueAsHTML()</code></strong> method of the {{domxref("VTTCue")}} interface returns a {{domxref("DocumentFragment")}} containing the cue content.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">VTTCue.getCueAsHTML();</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Returns">Return value</h3>

<p>A {{domxref("DocumentFragment")}} .</p>

<h2 id="Examples">Examples</h2>

<p>In the following example a new {{domxref("VTTCue")}} is created. The value as a document fragment is then printed to the console.</p>

<pre class="brush: js">let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
console.log(cue1.getCueAsHTML());

track.addCue(cue1);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


