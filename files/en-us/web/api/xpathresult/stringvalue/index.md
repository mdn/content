---
title: XPathResult.stringValue
slug: Web/API/XPathResult/stringValue
tags:
- API
- DOM XPath API
- Property
- Reference
- XPath
- XPathResult
browser-compat: api.XPathResult.stringValue
---
<div>{{APIRef("DOM XPath")}}</div>

<p>The read-only <strong><code>stringValue</code></strong> property of the
  {{domxref("XPathResult")}} interface returns the string value of a result with
  {{domxref("XPathResult.resultType")}} being <code>STRING_TYPE</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>value</em> = <em>result</em>.stringValue;
</pre>

<h3 id="Return_Value">Return value</h3>

<p>The return value is the string value of the <code>XPathResult</code> returned by
  {{domxref("Document.evaluate()")}}.</p>

<h3 id="Exceptions">Exceptions</h3>

<h4 id="TYPE_ERR">TYPE_ERR</h4>

<p>In case {{domxref("XPathResult.resultType")}} is not <code>STRING_TYPE</code>, an
  {{domxref("XPathException")}} of type <code>TYPE_ERR</code> is thrown.</p>

<h2 id="Example">Example</h2>

<p>The following example shows the use of the <code>stringValue</code> property.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;XPath example&lt;/div&gt;
&lt;div&gt;Text content of the &amp;lt;div&amp;gt; above: &lt;output&gt;&lt;/output&gt;&lt;/div&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var xpath = "//div/text()";
var result = document.evaluate(xpath, document, null, XPathResult.STRING_TYPE, null);
document.querySelector("output").textContent = result.stringValue;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Example', 400, 70)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
