---
title: HTMLAnchorElement.rel
slug: Web/API/HTMLAnchorElement/rel
tags:
- API
- HTML DOM
- HTMLAnchorElement
- Property
- Reference
browser-compat: api.HTMLAnchorElement.rel
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The <code><strong>HTMLAnchorElement.rel</strong></code> property reflects the
  {{htmlattrxref("rel", "a")}} attribute. It is a {{domxref("DOMString")}} containing a
  space-separated list of <a href="/en-US/docs/Web/HTML/Link_types">link types</a>
  indicating the relationship between the resource represented by the {{HTMLElement("a")}}
  element and the current document.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>relstr</em> = <em>anchorElt</em>.rel;
<em>anchorElt</em>.rel = <em>relstr</em>;
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">var anchors = document.getElementsByTagName("a");
var length = anchors.length;
for (var i = 0; i &lt; length; i++) {
  alert("Rel: " + anchors[i].rel);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The equivalent property on {{HTMLElement("area")}} and {{HTMLElement("link")}},
    {{domxref("HTMLAreaElement.rel")}} and {{domxref("HTMLLinkElement.rel")}}.</li>
  <li>The very same list but as tokens: {{domxref("HTMLAnchorElement.relList")}}</li>
</ul>
