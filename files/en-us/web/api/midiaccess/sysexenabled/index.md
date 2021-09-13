---
title: MIDIAccess.sysexEnabled
slug: Web/API/MIDIAccess/sysexEnabled
tags:
  - API
  - Property
  - Reference
  - sysexEnabled
  - MIDIAccess
browser-compat: api.MIDIAccess.sysexEnabled
---
<div>{{securecontext_header}}{{APIRef("Web MIDI API")}}</div>

<p>The <strong><code>sysexEnabled</code></strong> read-only property of the {{domxref("MIDIAccess")}} interface indicates whether system exclusive support is enabled on the current MIDIAccess instance.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let sysexEnabled = MIDIAccess.sysexEnabled;</pre>

<h3>Value</h3>
<p>A boolean value.</p>

<h2 id="Examples">Examples</h2>

<p>The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. Printing the value of <code>sysexEnabled</code> to the console returns a boolean value, which is <code>true</code> if system exclusive supported is enabled.</p>

<pre class="brush: js">navigator.requestMIDIAccess()
  .then(function(access) {

     console.log(access.sysexEnabled);

  });</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


