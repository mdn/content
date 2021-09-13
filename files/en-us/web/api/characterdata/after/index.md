---
title: CharacterData.after()
slug: Web/API/CharacterData/after
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.CharacterData.after
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>CharacterData.after()</strong></code> method inserts a set of
  {{domxref("Node")}} or {{domxref("DOMString")}} objects in the children list of the
  <code>CharacterData</code>'s parent, just after the <code>CharacterData</code>.
  {{domxref("DOMString")}} objects are inserted as equivalent {{domxref("Text")}} nodes.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
after(... nodes)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>nodes</code></dt>
  <dd>A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>{{domxref("HierarchyRequestError")}}: Node cannot be inserted at the specified point
    in the hierarchy.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3>Inserting text in new nodes</h3>

<p>The <code>after()</code> method allows you to insert new nodes after a <code>CharacterData</code> node.</p>

<pre class="brush: js">
const h1TextNode = document.getElementsByTagName('h1')[0].firstChild;
h1TextNode.after(" #h1");

h1TextNode.parentElement.childNodes
// NodeList [#text "CharacterData.after()", #text " #h1"]

h1TextNode.data;
// "CharacterData.after()"
</pre>

<h3>Appending text to the current node</h3>

<p>If you rather want to append text to the current node,
the <a href="/en-US/docs/Web/API/CharacterData/appendData"><code>appendData()</code></a> method lets you append to the current node's data:</p>

<pre class="brush: js">
const h1TextNode = document.getElementsByTagName('h1')[0].firstChild;
h1TextNode.appendData(" #h1");

h1TextNode.parentElement.childNodes;
// NodeList [#text "CharacterData.after() #h1"]

h1TextNode.data;
// "CharacterData.after() #h1"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("CharacterData.appendData()")}}</li>
  <li>{{domxref("CharacterData.before()")}}</li>
  <li>{{domxref("Element.append()")}}</li>
  <li>{{domxref("Node.appendChild()")}}</li>
  <li>{{domxref("Element.insertAdjacentElement()")}}</li>
  <li>{{domxref("NodeList")}}</li>
</ul>
