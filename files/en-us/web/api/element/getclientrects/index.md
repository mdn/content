---
title: Element.getClientRects()
slug: Web/API/Element/getClientRects
tags:
- API
- CSSOM View
- Element
- Method
- Reference
- clientHeight
- getBoundingClientRect
- getClientRects
- offsetHeight
- scrollHeight
browser-compat: api.Element.getClientRects
---
<p>{{APIRef("DOM")}}</p>

<p>The <strong><code>getClientRects()</code></strong> method of the {{domxref("Element")}}
  interface returns a collection of {{DOMxRef("DOMRect")}} objects that indicate the
  bounding rectangles for each <a
    href="/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">CSS border
    box</a> in a client.</p>

<p>Most elements only have one border box each, but a multiline <a
    href="/en-US/docs/Web/HTML/Inline_elements">inline element</a> (such as a multiline
  {{HTMLElement("span")}} element, by default) has a border box around each line.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">let <var>rectCollection</var> = <var>object</var>.getClientRects();</pre>

<h3 id="Return_value">Return value</h3>

<p>The returned value is a collection of {{DOMxRef("DOMRect")}} objects, one for each CSS
  border box associated with the element. Each {{DOMxRef("DOMRect")}} object contains
  read-only <code>left</code>, <code>top</code>, <code>right</code> and
  <code>bottom</code> properties describing the border box, in pixels, with the top-left
  relative to the top-left of the viewport. For tables with captions, the caption is
  included even though it's outside the border box of the table. When called on SVG
  elements other than an outer-<code>&lt;svg&gt;</code>, the "viewport" that the resulting
  rectangles are relative to is the viewport that the element's
  outer-<code>&lt;svg&gt;</code> establishes (and to be clear, the rectangles are also
  transformed by the outer-<code>&lt;svg&gt;</code>'s <code>viewBox</code> transform, if
  any).</p>

<p>Originally, Microsoft intended this method to return a <code>TextRectangle</code>
  object for each <em>line</em> of text. However, the CSSOM working draft specifies that
  it returns a {{DOMxRef("DOMRect")}} for each <em>border box</em>. For an inline element,
  the two definitions are the same. But for a block element, Mozilla will return only a
  single rectangle.</p>

<p>{{Fx_MinVersion_Note(3.5, "Firefox 3.5 adds <code>width</code> and <code>height</code>
  properties to the <code>TextRectangle</code> object.")}}</p>

<p>The amount of scrolling that has been done of the viewport area (or any other
  scrollable element) is taken into account when computing the rectangles.</p>

<p>The returned rectangles do not include the bounds of any child elements that might
  happen to overflow.</p>

<p>For HTML {{HtmlElement("area")}} elements, SVG elements that do not render anything
  themselves, <code>display:none</code> elements, and generally any elements that are not
  directly rendered, an empty list is returned.</p>

<p>Rectangles are returned even for CSS boxes that have empty border-boxes. The
  <code>left</code>, <code>top</code>, <code>right</code>, and <code>bottom</code>
  coordinates can still be meaningful.</p>

<p>Fractional pixel offsets are possible.</p>

<h2 id="Examples">Examples</h2>

<p>These examples draw client rects in various colors. Note that the JavaScript function
  that paints the client rects is connected to the markup via the class
  <code>withClientRectsOverlay</code>.</p>

<h3 id="HTML">HTML</h3>

<p>Example 1: This HTML creates three paragraphs with a <code>&lt;span&gt;</code> inside,
  each embedded in a <code>&lt;div&gt;</code> block. Client rects are painted for the
  paragraph in the second block, and for the <code>&lt;span&gt;</code> element in the
  third block.</p>

<pre class="brush: html">&lt;h3&gt;A paragraph with a span inside&lt;/h3&gt;
&lt;p&gt;Both the span and the paragraph have a border set. The
  client rects are in red. Note that the p has onlyone border
  box, while the span has multiple border boxes.&lt;/p&gt;

&lt;div&gt;
  &lt;strong&gt;Original&lt;/strong&gt;
  &lt;p&gt;
    &lt;span&gt;Paragraph that spans multiple lines&lt;/span&gt;
  &lt;/p&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;strong&gt;p's rect&lt;/strong&gt;
  &lt;p class="withClientRectsOverlay"&gt;
    &lt;span&gt;Paragraph that spans multiple lines&lt;/span&gt;
  &lt;/p&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;strong&gt;span's rect&lt;/strong&gt;
  &lt;p&gt;
    &lt;span class="withClientRectsOverlay"&gt;Paragraph that spans multiple lines&lt;/span&gt;
  &lt;/p&gt;
&lt;/div&gt;</pre>

<p>Example 2: This HTML creates three ordered lists. Client rects are painted for the
  <code>&lt;ol&gt;</code> in the second block, and for each <code>&lt;li&gt;</code>
  element in the third block.</p>

<pre class="brush: html">&lt;h3&gt;A list&lt;/h3&gt;
&lt;p&gt;Note that the border box doesn't include the number, so
  neither do the client rects.&lt;/p&gt;

&lt;div&gt;
  &lt;strong&gt;Original&lt;/strong&gt;
  &lt;ol&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
  &lt;/ol&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;strong&gt;ol's rect&lt;/strong&gt;
  &lt;ol class="withClientRectsOverlay"&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
  &lt;/ol&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;strong&gt;each li's rect&lt;/strong&gt;
  &lt;ol&gt;
    &lt;li class="withClientRectsOverlay"&gt;Item 1&lt;/li&gt;
    &lt;li class="withClientRectsOverlay"&gt;Item 2&lt;/li&gt;
  &lt;/ol&gt;
&lt;/div&gt;</pre>

<p>Example 3: This HTML creates two tables with captions. Client rects are painted for the
  <code>&lt;table&gt;</code> in the second block.</p>

<pre class="brush: html">&lt;h3&gt;A table with a caption&lt;/h3&gt;
&lt;p&gt;Although the table's border box doesn't include the
  caption, the client rects do include the caption.&lt;/p&gt;

&lt;div&gt;
  &lt;strong&gt;Original&lt;/strong&gt;
  &lt;table&gt;
    &lt;caption&gt;caption&lt;/caption&gt;
    &lt;thead&gt;
      &lt;tr&gt;&lt;th&gt;thead&lt;/th&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;&lt;td&gt;tbody&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;strong&gt;table's rect&lt;/strong&gt;
  &lt;table class="withClientRectsOverlay"&gt;
    &lt;caption&gt;caption&lt;/caption&gt;
    &lt;thead&gt;
      &lt;tr&gt;&lt;th&gt;thead&lt;/th&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;&lt;td&gt;tbody&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<p>The CSS draws borders around the paragraph and the <code>&lt;span&gt;</code> inside
  each <code>&lt;div&gt;</code> block for the first example, around the
  <code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code> for the second example, and around
  <code>&lt;table&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code>
  elements for the third example.</p>

<pre class="brush: css">strong {
  text-align: center;
}
div {
  display: inline-block;
  width: 150px;
}
div p, ol, table {
  border: 1px solid blue;
}
span, li, th, td {
  border: 1px solid green;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<p>The JavaScript code draws the client rects for all HTML elements that have CSS class
  <code>withClientRectsOverlay</code> assigned.</p>

<pre class="brush: js">function addClientRectsOverlay(elt) {
  /* Absolutely position a div over each client rect so that its border width
     is the same as the rectangle's width.
     Note: the overlays will be out of place if the user resizes or zooms. */
  var rects = elt.getClientRects();
  for (var i = 0; i != rects.length; i++) {
    var rect = rects[i];
    var tableRectDiv = document.createElement('div');
    tableRectDiv.style.position = 'absolute';
    tableRectDiv.style.border = '1px solid red';
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    tableRectDiv.style.margin = tableRectDiv.style.padding = '0';
    tableRectDiv.style.top = (rect.top + scrollTop) + 'px';
    tableRectDiv.style.left = (rect.left + scrollLeft) + 'px';
    // We want rect.width to be the border width, so content width is 2px less.
    tableRectDiv.style.width = (rect.width - 2) + 'px';
    tableRectDiv.style.height = (rect.height - 2) + 'px';
    document.body.appendChild(tableRectDiv);
  }
}

(function() {
  /* Call function addClientRectsOverlay(elt) for all elements with
     assigned class "withClientRectsOverlay" */
  var elt = document.getElementsByClassName('withClientRectsOverlay');
  for (var i = 0; i &lt; elt.length; i++) {
    addClientRectsOverlay(elt[i]);
  }
})();</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Examples', 680, 650)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h3 id="Notes">Notes</h3>

<p><code>getClientRects()</code> was first introduced in the MS IE DHTML object model.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{DOMxRef("Element.getBoundingClientRect()")}}</li>
</ul>
