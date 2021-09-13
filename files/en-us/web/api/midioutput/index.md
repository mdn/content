---
title: MIDIOutput
slug: Web/API/MIDIOutput
tags:
  - API
  - Interface
  - Reference
  - MIDIOutput
browser-compat: api.MIDIOutput
---
<div>{{securecontext_header}}{{APIRef("Web MIDI API")}}</div>

<p>The <strong><code>MIDIOutput</code></strong> interface of the {{domxref('Web MIDI API','','',' ')}} provides methods to add messages to the queue of an output device, and to clear the queue of messages.</p>

<h2 id="Properties">Properties</h2>

<p><em>This interface doesn't implement any specific properties, but inherits properties from {{domxref("MIDIPort")}}.</em></p>

<h2 id="Methods">Methods</h2>

<p><em>This interface also inherits methods from {{domxref("MIDIPort")}}.</em></p>

<dl>
  <dt>{{domxref("MIDIoutput.send()")}}</dt>
  <dd>Queues a message to be sent to the MIDI port.</dd>
  <dt>{{domxref("MIDIOutput.clear()")}}</dt>
  <dd>Clears any pending send data from the queue.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following example sends a middle C immediately on MIDI channel 1.</p>

<pre class="brush: js">function sendMiddleC( midiAccess, portID ) {
  var noteOnMessage = [0x90, 60, 0x7f];    // note on, middle C, full velocity
  var output = midiAccess.outputs.get(portID);
  output.send(noteOnMessage); // sends the message.
}</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>
