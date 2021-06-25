---
title: Text.wholeText
slug: Web/API/Text/wholeText
tags:
  - API
  - DOM
  - Property
  - Text
browser-compat: api.Text.wholeText
---
<p>{{ apiref("DOM") }}</p>

<p>The <strong><code>Text.wholeText</code></strong> read-only property returns the full text of all {{domxref("Text")}} nodes logically adjacent to the node. The text is concatenated in document order. This allows specifying any text node and obtaining all adjacent text as a single string.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>str</em> = <em>textnode</em>.wholeText;</pre>

<h2 id="Example">Notes and example</h2>

<p>Suppose you have the following simple paragraph within your webpage (with some whitespace added to aid formatting throughout the code samples here), whose DOM node is stored in the variable <code>para</code>:</p>

<pre class="brush: html">&lt;p&gt;Thru-hiking is great!  &lt;strong&gt;No insipid election coverage!&lt;/strong&gt;
  However, &lt;a href="https://en.wikipedia.org/wiki/Absentee_ballot"&gt;casting a
  ballot&lt;/a&gt; is tricky.&lt;/p&gt;
</pre>

<p>You decide you don’t like the middle sentence, so you remove it:</p>

<pre class="brush: js">para.removeChild(para.childNodes[1]);
</pre>

<p>Later, you decide to rephrase things to, “Thru-hiking is great, but casting a ballot is tricky.” <em>while preserving the hyperlink</em>. So you try this:</p>

<pre class="brush: js">para.firstChild.data = "Thru-hiking is great, but ";
</pre>

<p>All set, right? <em>Wrong!</em> What happened was you removed the <code>strong</code> element, but the removed sentence’s element separated two text nodes. One for the first sentence, and one for the first word of the last. Instead, you now effectively have this:</p>

<pre class="brush: html">&lt;p&gt;Thru-hiking is great, but However, &lt;a
  href="https://en.wikipedia.org/wiki/Absentee_ballot"&gt;casting a
  ballot&lt;/a&gt; is tricky.&lt;/p&gt;
</pre>

<p>You’d really prefer to treat all those adjacent text nodes as a single one. That’s where <code>wholeText</code> comes in: if you have multiple adjacent text nodes, you can access the contents of all of them using <code>wholeText</code>. Let’s pretend you never made that last mistake. In that case, we have:</p>

<pre class="brush: js">assert(para.firstChild.wholeText == "Thru-hiking is great!    However, ");
</pre>

<p><code>wholeText</code> is just a property of text nodes that returns the string of data making up all the adjacent (i.e. not separated by an element boundary) text nodes combined.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{domxref("Text")}} interface it belongs to.</li>
</ul>
