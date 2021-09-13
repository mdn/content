---
title: Range.getBoundingClientRect()
slug: Web/API/Range/getBoundingClientRect
tags:
- API
- CSSOM View
- Experimental
- Method
- Range
- Reference
browser-compat: api.Range.getBoundingClientRect
---
<div>{{ApiRef("DOM")}}{{SeeCompatTable}}</div>

<p>The <strong><code>Range.getBoundingClientRect()</code></strong> method returns a {{
  domxref("DOMRect") }} object that bounds the contents of the range; this is a rectangle
  enclosing the union of the bounding rectangles for all the elements in the range.</p>

<p>This method is useful for determining the viewport coordinates of the cursor or
  selection inside a text box. See {{domxref("Element.getBoundingClientRect()")}} for
  details on the returned value.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>boundingRect</em> = <em>range</em>.getBoundingClientRect()
</pre>

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre
  class="brush: html">&lt;div id="highlight"&gt;&lt;/div&gt;
&lt;p&gt;This example positions a "highlight" rectangle behind the contents of a range. The range's content &lt;b&gt;starts here&lt;/b&gt; and continues on until it &lt;b&gt;ends here&lt;/b&gt;. The bounding client rectangle contains everything selected in the range.&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#highlight {
  background: yellow;
  position: absolute;
  z-index: -1;
}

p {
  width: 200px;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">const range = document.createRange();
range.setStartBefore(document.getElementsByTagName('b').item(0), 0);
range.setEndAfter(document.getElementsByTagName('b').item(1), 0);

const clientRect = range.getBoundingClientRect();
const highlight = document.getElementById('highlight');
highlight.style.left = `${clientRect.x}px`;
highlight.style.top = `${clientRect.y}px`;
highlight.style.width = `${clientRect.width}px`;
highlight.style.height = `${clientRect.height}px`;</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Range.getClientRects()")}} - finer-grained result for non-rectangular
    ranges (e.g., when the selection wraps onto the next line);</li>
  <li>{{domxref("Element.getBoundingClientRect()")}}</li>
  <li>{{domxref("Document.caretPositionFromPoint()")}} - to get the (node, offset) from
    viewport coordinates.</li>
</ul>
