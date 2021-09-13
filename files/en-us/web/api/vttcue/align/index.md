---
title: VTTCue.align
slug: Web/API/VTTCue/align
tags:
  - API
  - Property
  - Reference
  - align
  - VTTCue
browser-compat: api.VTTCue.align
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>align</code></strong> property of the {{domxref("VTTCue")}} interface represents the alignment of all of the lines of text in the text box.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let align = VTTCue.align;
VTTCue.align = a;</pre>

<h3>Value</h3>
<p>A {{domxref("DOMString","string")}} containing one of the following values:</p>
<dl>
  <dt><code>"start"</code></dt>
  <dd>Start alignment.</dd>
  <dt><code>"center"</code></dt>
  <dd>Center alignment.</dd>
  <dt><code>"end"</code></dt>
  <dd>End alignment.</dd>
  <dt><code>"left"</code></dt>
  <dd>Left alignment.</dd>
  <dt><code>"right"</code></dt>
  <dd>Right alignment.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>In the following example a new {{domxref("VTTCue")}} is created, then the value of <code>align</code> is set to <code>"start"</code>. The value is then printed to the console.</p>

<pre class="brush: js">let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, 'Hildy!');
cue1.align = 'start';
console.log(cue1.align);

track.addCue(cue1);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


