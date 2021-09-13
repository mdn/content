---
title: NDEFReadingEvent
slug: Web/API/NDEFReadingEvent
tags:
  - NDEF
  - Reference
  - Web NFC
browser-compat: api.NDEFReadingEvent
---
<p>{{Draft}}{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}</p>

<p>The <code><strong>NDEFReadingEvent</strong></code> interface of the <a href="/en-US/docs/Web/API/Web_NFC_API">Web NFC API</a> represents events dispatched on new NFC readings obtained by {{DOMxRef("NDEFReader")}}.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{DOMxRef("NDEFReadingEvent.NDEFReadingEvent", "NDEFReadingEvent.NDEFReadingEvent()")}}</dt>
 <dd>Creates a new <code>NDEFReadingEvent</code>.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its parent, {{DOMxRef("Event")}}</em>.</p>

<dl>
  <dt>{{DOMxRef("NDEFReadingEvent.message")}}{{ReadOnlyInline}}</dt>
  <dd>Returns an {{DOMxRef("NDEFMessage")}} object containing the received message.</dd>
  <dt>{{DOMxRef("NDEFReadingEvent.serialNumber")}}{{ReadOnlyInline}}</dt>
  <dd>Returns the serial number of the device, which is used for anti-collision and identification, or an empty string if no serial number is available.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>Inherits methods from its parent, {{DOMxRef("Event")}}</em>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
