---
title: PresentationConnection.binaryType
slug: Web/API/PresentationConnection/binaryType
tags:
  - API
  - NeedsBrowserCompatibility
  - NeedsContent
  - NeedsExample
  - NeedsMarkupWork
  - Presentation
  - Presentation API
  - PresentationConnection
  - Property
  - Reference
  - binaryType
browser-compat: api.PresentationConnection.binaryType
---
<div>{{APIRef("Presentation API")}}</div>

<p>When a {{DOMxRef("PresentationConnection")}} object is created, its <code>binaryType</code> IDL attribute <em>MUST</em> be set to the string <code>"arraybuffer"</code>. Upon getting, the attribute <em>MUST</em> return its most recent value (the value it was last set as). Upon setting, the user agent <em>MUST</em> set the IDL attribute to the new value.</p>

<div class="note">
<p><strong>Note:</strong> The <code>binaryType</code> attribute allows authors to control how binary data is exposed to scripts. By setting the attribute to <dfn><code>"blob"</code></dfn>, binary data is returned in <code>Blob</code> form; by setting it to <dfn><code>"arraybuffer"</code></dfn>, it is returned in {{JSxRef("ArrayBuffer")}} form. The attribute defaults to <code>"arraybuffer"</code>. This attribute has no effect on data sent in a string form.</p>
</div>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
