---
title: Document.anchors
slug: Web/API/Document/anchors
tags:
- API
- Deprecated
- Document
- HTML DOM
- Property
- Reference
browser-compat: api.Document.anchors
---
<div>{{APIRef("DOM")}} {{Deprecated_Header}}</div>

<p>The <strong><code>anchors</code></strong> read-only property of the
  {{domxref("Document")}} interface returns a list of all of the anchors in the document.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>nodeList</var> = document.anchors;
</pre>

<h3 id="Value">Value</h3>

<p>An {{domxref("HTMLCollection")}}.</p>

<h2 id="Example">Example</h2>

<pre class="brush:js">if (document.anchors.length &gt;= 5) {
  dump("found too many anchors");
}
</pre>

<p>The following is an example that auto populates a Table of Contents with every anchor
  on the page:</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;Test&lt;/title&gt;
&lt;script&gt;
function init() {
  var toc = document.getElementById("toc");
  var i, li, newAnchor;
  for (i = 0; i &lt; document.anchors.length; i++) {
    li = document.createElement("li");
    newAnchor = document.createElement('a');
    newAnchor.href = "#" + document.anchors[i].name;
    newAnchor.textContent = document.anchors[i].text;
    li.appendChild(newAnchor);
    toc.appendChild(li);
  }
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body onload="init()"&gt;

&lt;h1&gt;Title&lt;/h1&gt;
&lt;h2&gt;&lt;a name="contents"&gt;Contents&lt;/a&gt;&lt;/h2&gt;
&lt;ul id="toc"&gt;&lt;/ul&gt;

&lt;h2&gt;&lt;a name="plants"&gt;Plants&lt;/a&gt;&lt;/h2&gt;
&lt;ol&gt;
  &lt;li&gt;Apples&lt;/li&gt;
  &lt;li&gt;Oranges&lt;/li&gt;
  &lt;li&gt;Pears&lt;/li&gt;
&lt;/ol&gt;

&lt;h2&gt;&lt;a name="veggies"&gt;Veggies&lt;/a&gt;&lt;/h2&gt;
&lt;ol&gt;
  &lt;li&gt;Carrots&lt;/li&gt;
  &lt;li&gt;Celery&lt;/li&gt;
  &lt;li&gt;Beats&lt;/li&gt;
&lt;/ol&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<p><a href="https://jsfiddle.net/S4yNp">View on JSFiddle</a></p>

<h2 id="Notes">Notes</h2>

<p>For reasons of backwards compatibility, the returned set of anchors only contains those
  anchors created with the <code>name</code> attribute, not those created with the
  <code>id</code> attribute.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>
