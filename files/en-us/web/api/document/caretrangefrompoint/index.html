---
title: Document.caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
tags:
- API
- CSSOM View
- Document
- HTML DOM
- Method
- Non-standard
- Reference
- caretRangeFromPoint
browser-compat: api.Document.caretRangeFromPoint
---
<div>{{APIRef("DOM")}}{{Non-standard_header}}</div>

<p>The <strong><code>caretRangeFromPoint()</code></strong> method of the
  {{domxref("Document")}} interface returns a {{domxref("Range")}} object for the document
  fragment under the specified coordinates.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <var>range</var> = <var>document</var>.caretRangeFromPoint(float <var>x</var>, float <var>y</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><var>x</var></dt>
  <dd>A horizontal position within the current viewport.</dd>
  <dt><var>y</var></dt>
  <dd>A vertical position within the current viewport.</dd>
</dl>

<h3 id="Returns">Returns</h3>

<p>One of the following:</p>

<ul>
  <li>A {{domxref("Range")}}.</li>
  <li><code>Null</code>, if <var>x</var> or <var>y</var> are negative, outside viewport,
    or there is no text entry node.</li>
</ul>

<h2 id="Example">Example</h2>

<p>Click anywhere in the <strong>Demo</strong> paragraph below to insert a line break at the point where you click. The code for it is below the demo.</p>

<h3 id="Demo">Demo</h3>

<p>{{EmbedLiveSample('Example', '100%', '100px')}}</p>

<p>The code below first checks for <code>document.caretRangeFromPoint</code> support, but if the browser doesn’t support that, the code then checks for {{domxref("Document.caretPositionFromPoint", "document.caretPositionFromPoint")}}, and uses that instead.</p>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else {
    document.body.textContent = "[This browser supports neither"
      + " document.caretRangeFromPoint"
      + " nor document.caretPositionFromPoint.]";
    return;
  }
  // Only split TEXT_NODEs
  if (textNode &amp;&amp; textNode.nodeType == 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement('br');
    textNode.parentNode.insertBefore(br, replacement);
  }
}

let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i &lt; paragraphs.length; i++) {
  paragraphs[i].addEventListener('click', insertBreakAtPoint, false);
}</pre>

<h3 id="HTML">HTML</h3>

<pre
  class="brush: html">&lt;p&gt;Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.&lt;/p&gt;</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
