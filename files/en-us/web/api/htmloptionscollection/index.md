---
title: HTMLOptionsCollection
slug: Web/API/HTMLOptionsCollection
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Reference
browser-compat: api.HTMLOptionsCollection
---
<div>
<div>{{ APIRef("HTML DOM") }}</div>

<div>The <strong><code>HTMLOptionsCollection</code></strong> interface represents a collection of <code><a href="/en-US/docs/Web/HTML/Element/option">&lt;option&gt;</a></code> HTML elements (in document order) and offers methods and properties for selecting from the list as well as optionally altering its items. This object is returned only by the <code>options</code> property of <a href="/en-US/docs/Web/API/HTMLSelectElement">select</a>.</div>
</div>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties">Properties</h2>

<dl>
  <dt><code>length</code></dt>
  <dd><code>unsigned long</code>. As optionally allowed by the spec, this property isn't read-only. You can either remove options from the end by lowering the value, or add blank options at the end by raising the value. Mozilla allows this, while other implementations could potentially throw a <a href="/en-US/docs/Web/API/DOMException">DOMException</a>.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>This interface inherits the methods of its parent, <a href="/en-US/docs/Web/API/HTMLCollection" title="The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list."><code>HTMLCollection</code></a>.</em></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/HTMLCollection">HTMLCollection</a></li>
</ul>
