---
title: XPathEvaluator
slug: Web/API/XPathEvaluator
tags:
  - API
  - DOM
  - DOM XPath API
  - Document
  - Interface
  - Reference
  - XML
  - XPath
  - XPathEvaluator
browser-compat: api.XPathEvaluator
---
<p>{{APIRef("DOM XPath")}}</p>

<p>The <code>XPathEvaluator</code> interface allows to compile and evaluate {{Glossary("XPath")}} expressions.</p>

<p>It is implemented by the {{domxref("Document")}} interface.</p>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{DOMxRef("XPathEvaluator.createExpression()")}}</dt>
 <dd>Creates a parsed XPath expression with resolved namespaces.</dd>
 <dt>{{DOMxRef("XPathEvaluator.createNSResolver()")}}</dt>
 <dd>Adapts any DOM node to resolve namespaces allowing the XPath expression to be evaluated relative to the context of the node where it appeared within the document.</dd>
 <dt>{{DOMxRef("XPathEvaluator.evaluate()")}}</dt>
 <dd>Evaluates an XPath expression string and returns a result of the specified type if possible.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>The following example shows the use of the <code>XPathEvaluator</code> interface.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;XPath example&lt;/div&gt;
&lt;div&gt;Number of &amp;lt;div&amp;gt;s: &lt;output&gt;&lt;/output&gt;&lt;/div&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var xpath = "//div";
var evaluator = new XPathEvaluator();
var expression = evaluator.createExpression("//div");
var result = expression.evaluate(document, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
document.querySelector("output").textContent = result.snapshotLength;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Example', 400, 70)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("document.createExpression()")}}</li>
 <li>{{domxref("XPathExpression")}}</li>
</ul>
