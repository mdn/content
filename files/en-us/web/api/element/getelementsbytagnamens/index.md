---
title: Element.getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
tags:
- API
- DOM
- Element
- Method
- Reference
browser-compat: api.Element.getElementsByTagNameNS
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>Element.getElementsByTagNameNS()</strong></code> method returns a
  live {{domxref("HTMLCollection")}} of elements with the given tag name belonging to the
  given namespace. It is similar to {{Domxref("Document.getElementsByTagNameNS")}}, except
  that its search is restricted to descendants of the specified element.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><var>elements</var> = <var>element</var>.getElementsByTagNameNS(<var>namespaceURI</var>, <var>localName</var>)</pre>

<ul>
  <li><code>elements</code> is a live {{domxref("HTMLCollection")}} of found elements in
    the order they appear in the tree.</li>
  <li><code>element</code> is the element from where the search should start. Note that
    only the descendants of this element are included in the search, not the node itself.
  </li>
  <li><code>namespaceURI</code> is the namespace URI of elements to look for (see
    {{domxref("Element.namespaceURI")}} and {{domxref("Attr.namespaceURI")}}). For
    example, if you need to look for XHTML elements, use the XHTML namespace URI,
    <code>http://www.w3.org/1999/xhtml</code>.</li>
  <li><code>localName</code> is either the local name of elements to look for or the
    special value <code>"*"</code>, which matches all elements (see
    {{domxref("Element.localName")}} and {{domxref("Attr.localName")}}).</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush:js">// check the alignment on a number of cells in a table in an XHTML document.
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "td");

for (var i = 0; i &lt; cells.length; i++) {
    var axis = cells[i].getAttribute("axis");
    if (axis == "year") {
        // grab the data
    }
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
