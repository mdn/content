---
title: MediaKeySession.update()
slug: Web/API/MediaKeySession/update
tags:
- API
- EncryptedMediaExtensions
- Experimental
- MediaKeySession
- Method
- NeedsExample
- Reference
- Update
browser-compat: api.MediaKeySession.update
---
<p>{{APIRef("EncryptedMediaExtensions")}}</p>

<p>The <code>MediaKeySession.update()</code> method loads messages and licenses to the
  CDM, and then returns a {{jsxref('Promise')}} .</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><var>mediaKeySession</var>.update(<var>response</var>).then(function() { ... });</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>response</dt>
  <dd>An instance of type BufferSource.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref('Promise')}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
