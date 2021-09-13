---
title: MIDIAccess.outputs
slug: Web/API/MIDIAccess/outputs
tags:
  - API
  - Property
  - Reference
  - outputs
  - MIDIAccess
browser-compat: api.MIDIAccess.outputs
---
<div>{{securecontext_header}}{{APIRef("Web MIDI API")}}</div>

<p>The <strong><code>outputs</code></strong> read-only property of the {{domxref("MIDIAccess")}} interface provides access to any available MIDI output ports.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let outputs = MIDIAccess.outputs;</pre>

<h3>Value</h3>
<p>A {{domxref("MIDIOutputMap")}} instance.</p>

<h2 id="Examples">Examples</h2>

<p>The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. Printing the value of <code>outputs</code> to the console returns a {{domxref("MIDIOutputMap")}}.</p>

<pre class="brush: js">navigator.requestMIDIAccess()
  .then(function(access) {

     console.log(access.outputs);

  });</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

