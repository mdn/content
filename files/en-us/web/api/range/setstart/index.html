---
title: Range.setStart()
slug: Web/API/Range/setStart
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.setStart
---
<div>{{ApiRef("DOM")}}</div>

<p>The <strong><code>Range.setStart()</code></strong> method sets the start position of a
  {{ domxref("Range") }}.</p>

<p>If the <code>startNode</code> is a {{domxref("Node")}} of type {{domxref("Text")}},
  {{domxref("Comment")}}, or {{domxref("CDataSection")}}, then <code>startOffset</code> is
  the number of characters from the start of <code>startNode</code>. For other
  <code>Node</code> types, <code>startOffset</code> is the number of child nodes between
  the start of the <code>startNode</code>.</p>

<p>Setting the start point below (lower in the document) the end point will result in a
  collapsed range with the start and end points both set to the specified start position.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>range</em>.setStart(<em>startNode</em>, <em>startOffset</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>startNode</em></dt>
  <dd>The {{ domxref("Node") }} where the {{ domxref("Range") }} should start.</dd>
  <dt><em>startOffset</em></dt>
  <dd>An integer greater than or equal to zero representing the offset for the start of
    the {{ domxref("Range") }} from the start of <code>startNode</code>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Highlight_part_of_an_element">Highlight part of an element</h3>

<p>This example uses the <code>Range.setStart()</code> and {{domxref("Range.setEnd()")}}
  methods to add part of an address to a range. The selected range is then highlighted
  using  {{domxref("Range.surroundContents()")}}.</p>

<p>The address contains nine nodes: five text nodes, and four {{htmlElement("br")}}
  elements.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p id="address"&gt;Wyatt Earp&lt;br&gt;
101 E. Main St.&lt;br&gt;
Dodge City, KS&lt;br&gt;
67801&lt;br&gt;
USA&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;Nodes in the original address:&lt;/p&gt;
&lt;ol id="log"&gt;&lt;/ol&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const address = document.getElementById('address');
const log = document.getElementById('log');

// Log info
address.childNodes.forEach(node =&gt; {
  const li = document.createElement('li');
  li.textContent = `${node.nodeName}, ${node.nodeValue}`;
  log.appendChild(li);
});

// Highlight the street and city
const startOffset = 2;  // Start at third node: 101 E. Main St.
const endOffset = 5;    // End at fifth node: Dodge City, KS
const range = document.createRange();
range.setStart(address, startOffset);
range.setEnd(address, endOffset);

const mark = document.createElement('mark');
range.surroundContents(mark);</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Highlight_part_of_an_element", 700, 400)}}</p>

<h3 id="Get_characters_from_a_text_node">Get characters from a text node</h3>

<p>This example uses the <code>Range.setStart()</code> and {{domxref("Range.setEnd()")}}
  methods to define the contents of a range. The resulting range contains the first
  through fifth characters within a text node.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;p id="content"&gt;0123456789&lt;/p&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h4 id="JavaScript_2">JavaScript</h4>

<pre class="brush: js">const element = document.getElementById('content');
const textNode = element.childNodes[0];
const range = document.createRange();
range.setStart(textNode, 0);  // Start at first character
range.setEnd(textNode, 5);    // End at fifth character
document.getElementById('log').textContent = range;</pre>

<h4 id="Result_2">Result</h4>

<p>{{EmbedLiveSample("Get_characters_from_a_text_node", 700, 100)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Document_Object_Model">The DOM interfaces index</a></li>
</ul>
