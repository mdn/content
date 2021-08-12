---
title: ':scope'
slug: Web/CSS/:scope
tags:
  - ':scope'
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Scoped Elements
  - Selector
  - Web
browser-compat: css.selectors.scope
---
<div>{{CSSRef}}</div>

<p>The <strong><code>:scope</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> represents elements that are a reference point for selectors to match against.</p>

<pre class="brush: css">/* Selects a scoped element */
:scope {
  background-color: lime;
}</pre>

<p>Currently, when used in a stylesheet, <code>:scope</code> is the same as {{cssxref(":root")}}, since there is not at this time a way to explicitly establish a scoped element. When used from a DOM API such as {{domxref("Element.querySelector", "querySelector()")}}, {{domxref("Element.querySelectorAll", "querySelectorAll()")}}, {{domxref("Element.matches", "matches()")}}, or {{domxref("Element.closest()")}}, <code>:scope</code> matches the element on which the method was called.</p>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Identity_match">Identity match</h3>

<p>In this simple example, we demonstrate that using the <code>:scope</code> pseudo-class from the {{domxref("Element.matches()")}} method matches the element on which it's called.</p>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">let paragraph = document.getElementById("para");
let output = document.getElementById("output");

if (paragraph.matches(":scope")) {
  output.innerText = "Yep, the element is its own scope as expected!";
}</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p id="para"&gt;
  This is a paragraph. It is not an interesting paragraph. Sorry about that.
&lt;/p&gt;
&lt;p id="output"&gt;&lt;/p&gt;</pre>

<h4 id="Result">Result</h4>

<div>{{ EmbedLiveSample('Identity_match') }}</div>

<h3 id="Direct_children">Direct children</h3>

<p>A situation where the <code>:scope</code> pseudo-class prove to be useful is when you need to get direct descendant of an already retrieved {{domxref("Element")}}.</p>

<h4 id="JavaScript_2">JavaScript</h4>

<pre class="brush: js">var context = document.getElementById('context');
var selected = context.querySelectorAll(':scope &gt; div');

document.getElementById('results').innerHTML = Array.prototype.map.call(selected, function (element) {
    return '#' + element.getAttribute('id');
}).join(', ');</pre>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div id="context"&gt;
    &lt;div id="element-1"&gt;
        &lt;div id="element-1.1"&gt;&lt;/div&gt;
        &lt;div id="element-1.2"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div id="element-2"&gt;
        &lt;div id="element-2.1"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;p&gt;
    Selected elements ids :
    &lt;span id="results"&gt;&lt;/span&gt;
&lt;/p&gt;</pre>

<h4 id="Result_2">Result</h4>

<p>{{ EmbedLiveSample('Direct_children') }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{cssxref(":root")}} <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a></li>
 <li><a href="/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors">Locating DOM elements using selectors</a></li>
 <li>{{domxref("Element.querySelector()")}} and {{domxref("Element.querySelectorAll()")}}</li>
 <li>{{domxref("Document.querySelector()")}} and {{domxref("Document.querySelectorAll()")}}</li>
 <li>{{domxref("DocumentFragment.querySelector()")}} and {{domxref("DocumentFragment.querySelectorAll()")}}</li>
</ul>
