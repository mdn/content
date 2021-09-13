---
title: TextTrack.kind
slug: Web/API/TextTrack/kind
tags:
  - API
  - Property
  - Reference
  - kind
  - TextTrack
browser-compat: api.TextTrack.kind
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>kind</code></strong> read-only property of the {{domxref("TextTrack")}} interface returns the kind of text track this object represents. This decides how the track will be handled by a user agent.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let kind = TextTrack.kind;</pre>

<h3>Value</h3>
<p>A {{domxref("DOMString","string")}}. One of:</p>

<dl>
  <dt><code>"subtitles"</code></dt>
  <dd>The cues are overlaid on the video. Positioning of the cues is controlled using the properties of an object that inherits from {{domxref("TextTrackCue")}}, for example {{domxref("VTTCue")}}.</dd>
  <dt><code>"captions"</code></dt>
  <dd>The cues are overlaid on the video. Positioning of the cues is controlled using the properties of an object that inherits from {{domxref("TextTrackCue")}}, for example {{domxref("VTTCue")}}.</dd>
  <dt><code>"descriptions"</code></dt>
  <dd>The cues are made available in a non-visual fashion.</dd>
  <dt><code>"chapters"</code></dt>
  <dd>The user agent will make available a mechanism to navigate by selecting a cue.</dd>
  <dt><code>"metadata"</code></dt>
  <dd>Additional data related to the media data, which could be used for interactive views.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>In the following example the value of <code>kind</code> is printed to the console.</p>

<pre class="brush: js">let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.kind);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


