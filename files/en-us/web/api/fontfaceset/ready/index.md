---
title: FontFaceSet.ready
slug: Web/API/FontFaceSet/ready
tags:
- API
- CSSFontLoading API
- CSSOM
- Experimental
- FontFaceSet
- Fonts
- Property
- Ready
- Reference
browser-compat: api.FontFaceSet.ready
---
<p>{{APIRef("CSSFontLoading")}}{{SeeCompatTable}}{{draft}}</p>

<p>The <code>ready</code> readonly property of the {{domxref("FontFaceSet")}} interface
  returns a {{jsxref("Promise")}} that resolves to the given {{domxref("FontFaceSet")}}.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">fontFaceSet.ready.then(function(fontFaceSet) {
  // ...
});</pre>

<h3 id="Returns">Returns</h3>

<p>A {{jsxref("Promise")}} that resolves to the given {{domxref("FontFaceSet")}}.</p>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
