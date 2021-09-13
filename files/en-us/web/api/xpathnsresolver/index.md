---
title: XPathNSResolver
slug: Web/API/XPathNSResolver
tags:
  - API
  - DOM
  - DOM XPath API
  - Interface
  - Reference
  - XML
  - XPath
  - XPathNSResolver
browser-compat: api.XPathNSResolver
---
<div>{{APIRef("DOM XPath")}}</div>

<p>The <code>XPathNSResolver</code> interface permits prefix strings in an {{Glossary("XPath")}} expression to be properly bound to namespace URI strings.</p>

<p>The {{domxref("XPathEvaluator")}} interface can construct an implementation of <code>XPathNSResolver</code> from a node, or the interface may be implemented by any application.</p>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{DOMxRef("XPathNSResolver.lookupNamespaceURI()")}}</dt>
 <dd>Looks up the namespace URI associated to the given namespace prefix.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("XPathEvaluator")}}</li>
</ul>
