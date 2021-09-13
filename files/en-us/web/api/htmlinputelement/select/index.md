---
title: HTMLInputElement.select()
slug: Web/API/HTMLInputElement/select
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Method
  - NeedsCompatTable
  - Reference
browser-compat: api.HTMLInputElement.select
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>The <strong><code>HTMLInputElement.select()</code></strong> method selects all the text
	in a {{HTMLElement("textarea")}} element or in an {{HTMLElement("input")}} element
	that includes a text field.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>element</em>.select();</pre>

<h2 id="Example">Example</h2>

<p>Click the button in this example to select all the text in the
	<code>&lt;input&gt;</code> element.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input type="text" id="text-box" size="20" value="Hello world!"&gt;
&lt;button onclick="selectText()"&gt;Select text&lt;/button&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.select();
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Notes">Notes</h2>

<p>Calling <code>element.select()</code> will not necessarily focus the input, so it is
	often used with {{domxref("HTMLElement.focus")}}.</p>

<p>In browsers where it is not supported, it is possible to replace it with a call to <a
		href="/en-US/docs/Web/API/HTMLInputElement/setSelectionRange">HTMLInputElement.setSelectionRange()</a> with
	parameters 0 and the input's value length:</p>

<pre class="brush: html">&lt;input onClick="this.select();" value="Sample Text" /&gt;
&lt;!-- equivalent to --&gt;
&lt;input onClick="this.setSelectionRange(0, this.value.length);" value="Sample Text" /&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{ HTMLElement("input") }}</li>
	<li>{{ HTMLElement("textarea") }}</li>
	<li>{{ domxref("HTMLInputElement") }}</li>
	<li>{{ domxref("HTMLInputElement.setSelectionRange") }}</li>
</ul>
