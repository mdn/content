---
title: MIDIMessageEvent.MIDIMessageEvent()
slug: Web/API/MIDIMessageEvent/MIDIMessageEvent
tags:
  - API
  - Constructor
  - Reference
  - MIDIMessageEvent
browser-compat: api.MIDIMessageEvent.MIDIMessageEvent
---
<p>{{securecontext_header}}{{APIRef("Web MIDI API")}}</p>

<p>The <strong><code>MIDIMessageEvent()</code></strong> constructor creates a new {{domxref("MIDIMessageEvent")}} object. Typically this constructor is not used as events are created when a {{domxref("MIDIInput")}} finishes receiving one or more MIDI messages.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">new MIDIMessageEvent(type);
new MIDIMessageEvent(type, MIDIMessageEventInit);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
	<dt><code>type</code></dt>
	<dd>Will always be <code>'MIDIMessageEvent'</code>.</dd>
	<dt><code>MIDIMessageEventInit</code>{{optional_inline}}</dt>
  <dd>A dictionary including the following fields:
    <dl>
      <dt><code>port</code></dt>
      <dd>The {{domxref("MIDIPort")}} instance representing the port that has connected or disconnected.</dd>
      <dt><code>bubbles</code> {{optional_inline}}</dt>
      <dd>A boolean value indicating whether the event bubbles. The default is
        <code>false</code>.</dd>
      <dt><code>cancelable</code> {{optional_inline}}</dt>
      <dd>A boolean value indicating whether the event can be cancelled. The
        default is <code>false</code>.</dd>
      <dt><code>composed</code> {{optional_inline}}</dt>
      <dd>A boolean value indicating whether the event will trigger listeners
        outside of a shadow root (see {{domxref("Event.composed")}} for details). The
        default is <code>false</code>.</dd>
    </dl>
  </dd>
</dl>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

