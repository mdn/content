---
title: ClipboardEvent.clipboardData
slug: Web/API/ClipboardEvent/clipboardData
tags:
- API
- Clipboard
- Clipboard API
- ClipboardEvent
- Cut
- Experimental
- Property
- Read-only
- copy
- paste
browser-compat: api.ClipboardEvent.clipboardData
---
<p>{{ apiref("Clipboard API") }} {{SeeCompatTable}}</p>

<p>The <code><strong>ClipboardEvent.clipboardData</strong></code> property holds a
  {{domxref("DataTransfer")}} object, which can be used:</p>

<ul>
  <li>to specify what data should be put into the clipboard from the {{event("cut")}} and
    {{event("copy")}} event handlers, typically with a {{domxref("DataTransfer.setData",
    "setData(format, data)")}} call;</li>
  <li>to obtain the data to be pasted from the {{event("paste")}} event handler, typically
    with a {{domxref("DataTransfer.getData", "getData(format)")}} call.</li>
</ul>

<p>See the {{event("cut")}}, {{event("copy")}}, and {{event("paste")}} events
  documentation for more information.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>data</em> = <em>ClipboardEvent</em>.clipboardData</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>Copy-related events: {{event("copy")}}, {{event("cut")}}, {{event("paste")}}</li>
  <li>The {{domxref("ClipboardEvent")}} interface it belongs to.</li>
  <li><a href="/en-US/docs/Web/API/Clipboard_API">Clipboard API</a></li>
</ul>
