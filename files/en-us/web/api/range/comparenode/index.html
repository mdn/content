---
title: Range.compareNode()
slug: Web/API/Range/compareNode
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - Non-standard
  - Deprecated
  - Range
  - Reference
  - compareNode
browser-compat: api.Range.compareNode
---
<p>{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_Header}}</p>

<p>The <strong><code>Range.compareNode()</code></strong> returns a constant indicating the
  position of the {{DOMxRef("Node")}}.</p>

<p>The possible values are:</p>

<dl>
  <dt><code>NODE_BEFORE</code> (<code>0</code>)</dt>
  <dd>Node starts before the Range</dd>
  <dt><code>NODE_AFTER</code> (<code>1</code>)</dt>
  <dd>Node ends after the Range</dd>
  <dt><code>NODE_BEFORE_AND_AFTER</code> (<code>2</code>)</dt>
  <dd>Node starts before and ends after the Range</dd>
  <dt><code>NODE_INSIDE</code> (<code>3</code>)</dt>
  <dd>Node starts after and ends before the Range, i.e. the Node is completely selected by
    the Range.</dd>
</dl>

<div class="notecard warning">
  <p><strong>Warning:</strong> This method <a
      href="/en-US/docs/Mozilla/Firefox/Releases/3/Site_compatibility">has been
      removed</a> from <a href="/en-US/docs/Mozilla/Firefox/Releases/3">Gecko 1.9</a> and
    will not exist in future versions of Firefox, which was the only browser implementing
    it; you should switch to {{DOMxRef("Range.compareBoundaryPoints()")}} as soon as
    possible.</p>
</div>

<p>The following function can be used as replacement:</p>

<pre class="brush: js;">function rangeCompareNode(range, node) {
  var nodeRange = node.ownerDocument.createRange();
  try {
    nodeRange.selectNode(node);
  }
  catch (e) {
    nodeRange.selectNodeContents(node);
  }
  var nodeIsBefore = range.compareBoundaryPoints(Range.START_TO_START, nodeRange) == 1;
  var nodeIsAfter = range.compareBoundaryPoints(Range.END_TO_END, nodeRange) == -1;

  if (nodeIsBefore &amp;&amp; !nodeIsAfter)
    return 0;
  if (!nodeIsBefore &amp;&amp; nodeIsAfter)
    return 1;
  if (nodeIsBefore &amp;&amp; nodeIsAfter)
    return 2;

  return 3;
}
</pre>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>returnValue</em> = <em>range</em>.compareNode( <em>referenceNode</em> );
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>referenceNode</em></dt>
  <dd>The {{DOMxRef("Node")}} to compare with the <code>Range</code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="eval">range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
returnValue = range.compareNode(document.getElementsByTagName("p").item(0));
</pre>

<h2 id="Notes">Notes</h2>

<p>This method is obsolete; you should use the W3C DOM
  {{DOMxRef("Range.compareBoundaryPoints()")}} method.</p>

<h2 id="Specifications">Specifications</h2>

<p>This method is not standard and therefore not part of any specification.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Document_Object_Model">The DOM interfaces index</a></li>
</ul>
