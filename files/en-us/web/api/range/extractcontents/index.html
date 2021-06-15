---
title: Range.extractContents()
slug: Web/API/Range/extractContents
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.extractContents
---
<div>{{ApiRef("DOM")}}</div>

<p>The <strong><code>Range.extractContents()</code></strong> method moves contents of the
  {{ domxref("Range") }} from the document tree into a {{ domxref("DocumentFragment") }}.
</p>

<p>Event listeners added using DOM Events are not retained during extraction. HTML
  attribute events are retained or duplicated as they are for the
  {{domxref("Node.cloneNode()")}} method. HTML <code>id</code> attributes are also cloned,
  which can lead to an invalid document if a partially-selected node is extracted and
  appended to the document.</p>

<p>Partially selected nodes are cloned to include the parent tags necessary to make the
  document fragment valid.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>documentFragment</em> = <em>range</em>.extractContents();
</pre>

<h2 id="Example">Example</h2>

<h3 id="Basic_example">Basic example</h3>

<pre class="brush: js">var range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
var documentFragment = range.extractContents();
document.body.appendChild(documentFragment);
</pre>

<h3 id="Moving_items_between_containers">Moving items between containers</h3>

<p>This example lets you move items between two containers. Select one or more item, and
  then click "swap" to move them to the opposite container.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p id="list1"&gt;123456&lt;/p&gt;
&lt;button id="swap"&gt;Swap selected item(s)&lt;/button&gt;
&lt;p id="list2"&gt;abcdef&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">body {
  pointer-events: none;
}

p {
  border: 1px solid;
  font-size: 2em;
  padding: .3em;
}

button {
  font-size: 1.2em;
  padding: .5em;
  pointer-events: auto;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const button = document.getElementById('swap');

button.addEventListener('click', e =&gt; {
  selection = window.getSelection();

  for (let i = 0; i &lt; selection.rangeCount; i++) {
    const range = selection.getRangeAt(i);

    if (range.commonAncestorContainer === list1 ||
        range.commonAncestorContainer.parentNode === list1) {
      const documentFragment = range.extractContents();
      list2.appendChild(documentFragment);
    } else if (range.commonAncestorContainer === list2 ||
        range.commonAncestorContainer.parentNode === list2) {
      const documentFragment = range.extractContents();
      list1.appendChild(documentFragment);
    }
  }
});</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Moving_items_between_containers", 700, 300)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Document_Object_Model">The DOM interfaces index</a></li>
</ul>
