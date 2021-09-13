---
title: TextTrackCue.onexit
slug: Web/API/TextTrackCue/onexit
tags:
  - API
  - Property
  - Reference
  - onexit
  - TextTrackCue
browser-compat: api.TextTrackCue.onexit
---
<div>{{APIRef("WebVTT")}}</div>

<p>The <strong><code>onexit</code></strong> EventHandler of the {{domxref("TextTrackCue")}} interface processes <code>exit</code> events.</p>

<p> The <code>exit</code> event fires when a cue stops being active.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">TextTrackCue.onexit = function;
TextTrackCue.addEventListener('exit', function);</pre>

<h2>Example</h2>

<p>In the following example, <code>onenter</code> is used to print to the console when <code>cue1</code> stops being displayed as the active cue.</p>

<pre class="brush: js">cue1.onexit = function() {
  console.log('Cue 1 has left the building.');
}</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


