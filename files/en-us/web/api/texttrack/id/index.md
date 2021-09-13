---
title: TextTrack.id
slug: Web/API/TextTrack/id
tags:
  - API
  - Property
  - Reference
  - id
  - TextTrack
browser-compat: api.TextTrack.id
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>id</code></strong> read-only property of the {{domxref("TextTrack")}} interface returns the ID of the track if it has one.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let id = TextTrack.id;</pre>

<h3>Value</h3>
<p>A {{domxref("DOMString","string")}} containing the ID, or an empty string.</p>

<h2 id="Examples">Examples</h2>

<p>In the following example the value of <code>id</code> is printed to the console.</p>

<pre class="brush: js">let video = document.querySelector('video');
  let track = video.addTextTrack("captions", "Captions", "en");
  track.mode = "showing";
  console.log(track.id);
  </pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


