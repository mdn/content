---
title: TextTrack.language
slug: Web/API/TextTrack/language
tags:
  - API
  - Property
  - Reference
  - language
  - TextTrack
browser-compat: api.TextTrack.language
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>language</code></strong> read-only property of the {{domxref("TextTrack")}} interface returns the language of the text track.</p>

<p>This uses the same values as the HTML {{htmlattrxref("lang")}} attribute. These values are documented in the <a href="https://datatracker.ietf.org/doc/html/bcp47">Tags for Identifying Languages</a> (BCP 47) document from the IETF.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let language = TextTrack.language;</pre>

<h3>Value</h3>
<p>A {{domxref("DOMString","string")}} containing a language identifier. For example, <code>"en-US"</code> for United States English or <code>"pt-BR"</code> for Brazilian Portuguese.</p>

<h2 id="Examples">Examples</h2>

<p>In the following example the value of <code>language</code> is printed to the console.</p>

<pre class="brush: js">let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en-US");
track.mode = "showing";
console.log(track.language);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


