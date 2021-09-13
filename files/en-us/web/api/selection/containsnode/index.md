---
title: Selection.containsNode()
slug: Web/API/Selection/containsNode
tags:
- API
- Experimental
- HTML Editing
- Method
- Reference
- Selection
browser-compat: api.Selection.containsNode
---
<div>{{ ApiRef("DOM") }}{{SeeCompatTable}}</div>

<p>The <strong><code>Selection.containsNode()</code></strong> method indicates whether a
  specfied node is part of the selection.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>sel</em>.containsNode(<em>node, partialContainment</em>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>node</code></dt>
  <dd>The node that is being looked for in the selection.</dd>
  <dt><code>partialContainment</code> {{optional_inline}}</dt>
  <dd>When <code>true</code>, <code>containsNode()</code> returns <code>true</code> when a
    part of the node is part of the selection. When <code>false</code>,
    <code>containsNode()</code> only returns <code>true</code> when the entire node is
    part of the selection. If not specified, the default value <code>false</code> is used.
  </dd>
</dl>

<h2 id="Example">Example</h2>

<h3 id="Check_for_selection">Check for selection</h3>

<p>This snippet checks whether anything inside the body element is selected.</p>

<pre
  class="brush: js">console.log(window.getSelection().containsNode(document.body, true));</pre>

<h3 id="Find_the_hidden_word">Find the hidden word</h3>

<p>In this example, a message appears when you select the secret word. It uses
  {{domxref("EventTarget/addEventListener", "addEventListener()")}} to check for
  {{domxref("Document/selectionchange_event", "selectionchange")}} events.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;Can you find the secret word?&lt;/p&gt;
&lt;p&gt;Hmm, where &lt;span id="secret" style="color:transparent"&gt;SECRET&lt;/span&gt; could it be?&lt;/p&gt;
&lt;p id="win" hidden&gt;You found it!&lt;/p&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const secret = document.getElementById('secret');
const win = document.getElementById('win');

// Listen for selection changes
document.addEventListener('selectionchange', () =&gt; {
  const selection = window.getSelection();
  const found = selection.containsNode(secret);

  win.toggleAttribute('hidden', !found);
});</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Find_the_hidden_word")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Selection")}}, the interface it belongs to.</li>
</ul>
