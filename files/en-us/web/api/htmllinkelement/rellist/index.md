---
title: HTMLLinkElement.relList
slug: Web/API/HTMLLinkElement/relList
tags:
- API
- HTML DOM
- HTMLLinkElement
- Property
- Read-only
- Reference
browser-compat: api.HTMLLinkElement.relList
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>The <code><strong>HTMLLinkElement.relList</strong></code> read-only property reflects
  the {{htmlattrxref("rel", "link")}} attribute. It is a live {{domxref("DOMTokenList")}}
  containing the set of <a href="/en-US/docs/Web/HTML/Link_types">link types</a>
  indicating the relationship between the resource represented by the
  {{HTMLElement("link")}} element and the current document.</p>

<p>The property itself is read-only, meaning you can substitute the
  {{domxref("DOMTokenList")}} by another one, but the content of the returned list can be
  changed.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>relstr</em> = <em>linkElt</em>.relList;
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">var links = document.getElementsByTagName("link");
var length = links.length;
for (var i = 0; i &lt; length; i++) {
  var list = links[i].relList;
  var listLength = list.length;
  console.log("New link found.");
  for (var j = 0; j &lt; listLength; j++) {
    console.log(list[j]);
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The equivalent property on {{HTMLElement("a")}} and {{HTMLElement("area")}},
    {{domxref("HTMLAnchorElement.relList")}} and {{domxref("HTMLAreaElement.relList")}}.
  </li>
  <li>The very same list but as a space-separated tokens in a {{domxref("DOMString")}}:
    {{domxref("HTMLLinkElement.rel")}}</li>
</ul>
