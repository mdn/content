---
title: XPathEvaluator.createNSResolver()
slug: Web/API/XPathEvaluator/createNSResolver
tags:
- API
- DOM
- DOM XPath API
- Method
- NeedsExample
- Reference
- XPath
- XPathEvaluator
browser-compat: api.XPathEvaluator.createNSResolver
---
<div>{{APIRef("DOM XPath")}}</div>

<p>This method adapts any DOM node to resolve namespaces so that an XPath expression can
  be easily evaluated relative to the context of the node where it appeared within the
  document.</p>

<p>This adapter works like the DOM Level 3 method {{domxref("Node.lookupNamespaceURI",
  "Node.lookupNamespaceURI()")}} in resolving the namespace URI from a given prefix using
  the current information available in the node's hierarchy at the time the method is
  called, also correctly resolving the implicit <code>xml</code> prefix.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>XPathNSResolver</var> <var>XPathEvaluator</var>.createNSResolver(<var>nodeResolver</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>nodeResolver</dt>
  <dd>A {{domxref("Node")}} to be used as a context for namespace resolution.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{domxref("XPathNSResolver")}} object which resolves namespaces with respect to the
  definitions in scope for a specified node.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{DOMxRef("Document.createNSResolver()")}}</li>
  <li>{{DOMxRef("XPathExpression")}}</li>
</ul>
