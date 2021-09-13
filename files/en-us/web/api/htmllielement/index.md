---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
tags:
  - API
  - HTML DOM
  - HTML DOM Interface
  - Interface
  - Reference
browser-compat: api.HTMLLIElement
---
<div>
<div>{{ APIRef("HTML DOM") }}</div>
</div>

<p>The <strong><code>HTMLLIElement</code></strong> interface exposes specific properties and methods (beyond those defined by regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating list elements.</p>

<p>{{InheritanceDiagram(600, 120)}}</p>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its parent, {{domxref("HTMLElement")}}.</em></p>

<dl>
 <dt>{{domxref("HTMLLIElement.type")}} {{deprecated_inline}}</dt>
 <dd>Is a {{domxref("DOMString")}} representing the type of the bullets, <code>"disc"</code>, <code>"square"</code> or <code>"circle"</code>. As the standard way of defining the list type is via the CSS {{cssxref("list-style-type")}} property, use the CSSOM methods to set it via a script.</dd>
 <dt>{{domxref("HTMLLIElement.value")}}</dt>
 <dd>Is a <code>long</code> indicating the ordinal position of the <em>list element</em> inside a given {{HTMLElement("ol")}}. It reflects the {{htmlattrxref("value", "li")}} attribute of the HTML {{HTMLElement("li")}} element, and can be smaller than <code>0</code>. If the {{HTMLElement("li")}} element is not a child of an {{HTMLElement("ol")}} element, the property has no meaning.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>No specific method; inherits properties from its parent, {{domxref("HTMLElement")}}.</em></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The HTML element implementing this interface: {{HTMLElement("li")}}</li>
</ul>
