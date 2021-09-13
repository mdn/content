---
title: Document.createNSResolver()
slug: Web/API/Document/createNSResolver
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - Reference
browser-compat: api.Document.createNSResolver
---
<p>{{ ApiRef("DOM") }}</p>

<p>Creates an <code>XPathNSResolver</code> which resolves namespaces with respect to the definitions in scope for a specified node.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>nsResolver</var> = document.createNSResolver(<var>node</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
 <li><code><var>node</var></code> is the node to be used as a context for namespace resolution.</li>
</ul>

<h3 id="Return_value">Return value</h3>

<ul>
 <li><code>nsResolver</code> is an XPathNSResolver object.</li>
</ul>

<h2 id="Notes">Notes</h2>

<p>Adapts any DOM node to resolve namespaces so that an <a href="/en-US/docs/Web/XPath">XPath</a> expression can be easily evaluated relative to the context of the node where it appeared within the document. This adapter works like the DOM Level 3 method <code>lookupNamespaceURI</code> on nodes in resolving the <code>namespaceURI</code> from a given prefix using the current information available in the node's hierarchy at the time <code>lookupNamespaceURI</code> is called. Also correctly resolves the implicit <code>xml</code> prefix.</p>

<p>Note, XPath defines QNames without prefix to match only elements in the null namespace. There is no way in XPath to pick up the default namespace as applied to a regular element reference (e.g., <code>p[@id='_myid'</code>] for <code>xmlns='http://www.w3.org/1999/xhtml'</code>). To match default elements in a non-null namespace, you either have to refer to a particular element using a form such as <code>*namespace-uri()=http://www.w3.org/1999/xhtml and name()=p[@id='_myid']</code> (<a href="/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript#using_xpath_functions_to_reference_elements_with_its_default_namespace">this approach</a> works well for dynamic XPath expressions where the namespaces might not be known) or use prefixed name tests, and create a namespace resolver mapping the prefix to the namespace. Read more on <a href="/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript#implementing_a_user_defined_namespace_resolver">how to create a user defined namespace resolver</a> if you wish to take the latter approach.</p>

<p><code>createNSResolver</code> was introduced in DOM Level 3.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Document/evaluate">document.evaluate</a></li>
 <li><a href="/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript">Introduction to using XPath in JavaScript</a></li>
</ul>
