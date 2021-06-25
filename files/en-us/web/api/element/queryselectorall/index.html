---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
tags:
  - API
  - CSS Selectors
  - DOM
  - Element
  - Finding Elements
  - Method
  - Reference
  - Searching Elements
  - Selecting Elements
  - Selectors
  - querySelector
browser-compat: api.Element.querySelectorAll
---
<div>{{APIRef("DOM")}}</div>

<p>The {{domxref("Element")}} method <code><strong>querySelectorAll()</strong></code>
  returns a static (not live) {{domxref("NodeList")}} representing a list of elements
  matching the specified group of selectors which are descendants of the element on which
  the method was called.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>elementList</var> = <em>parentNode</em>.querySelectorAll(<var>selectors</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>selectors</code></dt>
  <dd>A {{domxref("DOMString")}} containing one or more selectors to match against. This
    string must be a valid <a href="/en-US/docs/Web/CSS/CSS_Selectors">CSS selector</a>
    string; if it's not, a <code>SyntaxError</code> exception is thrown. See <a
      href="/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors">Locating
      DOM elements using selectors</a> for more information about using selectors to
    identify elements. Multiple selectors may be specified by separating them using
    commas.</dd>
</dl>

<div class="note">
  <p><strong>Note:</strong> Characters which are not part of standard CSS syntax must be
    escaped using a backslash character. Since JavaScript also uses backslash escaping,
    special care must be taken when writing string literals using these characters. See
    {{anch("Escaping special characters")}} for more information.</p>
</div>

<h3 id="Return_value">Return value</h3>

<p>A non-live {{domxref("NodeList")}} containing one {{domxref("Element")}} object for
  each descendant node that matches at least one of the specified selectors.</p>

<div class="note">
  <p><strong>Note:</strong> If the specified <code>selectors</code> include a <a
      href="/en-US/docs/Web/CSS/Pseudo-elements">CSS pseudo-element</a>, the returned list
    is always empty.</p>
</div>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>SyntaxError</code></dt>
  <dd>The syntax of the specified <code>selectors</code> string is not valid.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="dataset_selector_attribute_selectors">dataset selector &amp; attribute selectors
</h3>

<pre class="brush: html">&lt;section class="box" id="sect1"&gt;
  &lt;div class="funnel-chart-percent1"&gt;10.900%&lt;/div&gt;
  &lt;div class="funnel-chart-percent2"&gt;3700.00%&lt;/div&gt;
  &lt;div class="funnel-chart-percent3"&gt;0.00%&lt;/div&gt;
&lt;/section&gt;
</pre>

<pre class="brush: js">// dataset selectors
const refs = [...document.querySelectorAll(`[data-name*="funnel-chart-percent"]`)];

// attribute selectors
// const refs = [...document.querySelectorAll(`[class*="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class^="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class$="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class~="funnel-chart-percent"]`)];
</pre>

<h3 id="Obtaining_a_list_of_matches">Obtaining a list of matches</h3>

<p>To obtain a {{domxref("NodeList")}} of all of the {{HTMLElement("p")}} elements
  contained within the element <code>"myBox"</code>:</p>

<pre class="brush: js">var matches = myBox.querySelectorAll("p");</pre>

<p>This example returns a list of all {{HTMLElement("div")}} elements within
  <code>"myBox"</code> with a class of either "<code>note</code>" or "<code>alert</code>":
</p>

<pre class="brush: js">var matches = myBox.querySelectorAll("div.note, div.alert");
</pre>

<p>Here, we get a list of the document's <code>&lt;p&gt;</code> elements whose immediate
  parent element is a {{domxref("div")}} with the class <code>"highlighted"</code> and
  which are located inside a container whose ID is <code>"test"</code>.</p>

<pre class="brush: js">var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted &gt; p");</pre>

<p>This example uses an <a href="/en-US/docs/Web/CSS/Attribute_selectors">attribute
    selector</a> to return a list of the {{domxref("iframe")}} elements in the document
  that contain an attribute named <code>"data-src"</code>:</p>

<pre class="brush: js">var matches = document.querySelectorAll("iframe[data-src]");</pre>

<p>Here, an attribute selector is used to return a list of the list items contained within
  a list whose ID is <code>"userlist"</code> which have a <code>"data-active"</code>
  attribute whose value is <code>"1"</code>:</p>

<pre class="brush: js">var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");</pre>

<h3 id="Accessing_the_matches">Accessing the matches</h3>

<p>Once the {{domxref("NodeList")}} of matching elements is returned, you can examine it
  just like any array. If the array is empty (that is, its <code>length</code> property is
  0), then no matches were found.</p>

<p>Otherwise, you can use standard array notation to access the contents of the list. You
  can use any common looping statement, such as:</p>

<pre class="brush: js">var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function(userItem) {
  deleteUser(userItem);
});</pre>

<div class="note">
  <p><strong>Note:</strong> NodeList is not a genuine array, that is to say it doesn't
    have the array methods like slice, some, map etc. To convert it into an array, try
    Array.from(nodeList).</p>
</div>

<h2 id="User_notes">User notes</h2>

<p><code>querySelectorAll()</code> behaves differently than most common JavaScript DOM
  libraries, which might lead to unexpected results.</p>

<h3 id="HTML">HTML</h3>

<p>Consider this HTML, with its three nested {{HTMLElement("div")}} blocks.</p>

<pre class="brush: html">&lt;div class="outer"&gt;
  &lt;div class="select"&gt;
    &lt;div class="inner"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var select = document.querySelector('.select');
var inner = select.querySelectorAll('.outer .inner');
inner.length; // 1, not 0!
</pre>

<p>In this example, when selecting <code>".outer .inner"</code> in the context the
  <code>&lt;div&gt;</code> with the class <code>"select"</code>, the element with the
  class <code>".inner"</code> is still found, even though <code>.outer</code> is not a
  descendant of the base element on which the search is performed
  (<code>".select"</code>). By default, <code>querySelectorAll()</code> only verifies that
  the last element in the selector is within the search scope.</p>

<p>The {{cssxref(":scope")}} pseudo-class restores the expected behavior, only matching
  selectors on descendants of the base element:</p>

<pre class="brush: js">var select = document.querySelector('.select');
var inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors">Locating
      DOM elements using selectors</a></li>
  <li><a href="/en-US/docs/Web/CSS/Attribute_selectors">Attribute selectors</a> in the CSS
    Guide</li>
  <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">Attribute
      selectors</a> in the MDN Learning Area</li>
  <li>{{domxref("Element.querySelector()")}}</li>
  <li>{{domxref("Document.querySelector()")}} and
    {{domxref("Document.querySelectorAll()")}}</li>
  <li>{{domxref("DocumentFragment.querySelector()")}} and
    {{domxref("DocumentFragment.querySelectorAll()")}}</li>
  <li><a href="/en-US/docs/Code_snippets/QuerySelector">Code snippets for
      <code>querySelector()</code></a></li>
</ul>
