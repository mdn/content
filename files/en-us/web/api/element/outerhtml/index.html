---
title: Element.outerHTML
slug: Web/API/Element/outerHTML
tags:
- API
- DOM
- DOM Parsing
- Element
- NeedsMobileBrowserCompatibility
- Parsing
- Property
- Reference
- Serialization
- Serializing
- outerHTML
browser-compat: api.Element.outerHTML
---
<div>{{APIRef("DOM")}}</div>

<p>The <strong><code>outerHTML</code></strong> attribute of the {{ domxref("Element") }}
  DOM interface gets the serialized HTML fragment describing the element including its
  descendants. It can also be set to replace the element with nodes parsed from the given
  string.</p>

<p>To only obtain the HTML representation of the contents of an element, or to replace the
  contents of an element, use the {{domxref("Element.innerHTML", "innerHTML")}} property
  instead.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>var content</em> = <em>element</em>.outerHTML;

<em>element</em>.outerHTML = <em>htmlString</em>;
</pre>

<h3 id="Value">Value</h3>

<p>Reading the value of <code>outerHTML</code> returns a {{domxref("DOMString")}}
  containing an HTML serialization of the <code>element</code> and its descendants.
  Setting the value of <code>outerHTML</code> replaces the element and all of its
  descendants with a new DOM tree constructed by parsing the specified
  <code>htmlString</code>.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>SyntaxError</code></dt>
  <dd>An attempt was made to set <code>outerHTML</code> using an HTML string which is not
    valid.</dd>
  <dt><code>NoModificationAllowedError</code></dt>
  <dd>An attempt was made to set <code>outerHTML</code> on an element which is a direct
    child of a {{domxref("Document")}}, such as {{domxref("Document.documentElement")}}.
  </dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>Getting the value of an element's <code>outerHTML</code> property:</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="d"&gt;
  &lt;p&gt;Content&lt;/p&gt;
  &lt;p&gt;Further Elaborated&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="Javascript">Javascript</h3>

<pre class="brush: js">var d = document.getElementById("d");
console.log(d.outerHTML);

// The string '&lt;div id="d"&gt;&lt;p&gt;Content&lt;/p&gt;&lt;p&gt;Further Elaborated&lt;/p&gt;&lt;/div&gt;'
// is written to the console window
</pre>

<p>Replacing a node by setting the <code>outerHTML</code> property:</p>

<h3 id="HTML_2">HTML</h3>

<pre class="brush: html">&lt;div id="container"&gt;
  &lt;div id="d"&gt;This is a div.&lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="Javascript_2">Javascript</h3>

<pre class="brush: js">var container = document.getElementById("container");
var d = document.getElementById("d");

console.log(container.firstElementChild.nodeName); // logs "DIV"

d.outerHTML = "&lt;p&gt;This paragraph replaced the original div.&lt;/p&gt;";

console.log(container.firstElementChild.nodeName); // logs "P"

// The #d div is no longer part of the document tree,
// the new paragraph replaced it.
</pre>

<h2 id="Notes">Notes</h2>

<p>If the element has no parent element, setting its <code>outerHTML</code> property will
  not change it or its descendants. Many browsers will also throw an exception. For
  example:</p>

<pre class="brush: js">var div = document.createElement("div");
div.outerHTML = "&lt;div class=\"test\"&gt;test&lt;/div&gt;";
console.log(div.outerHTML); // output: "&lt;div&gt;&lt;/div&gt;"</pre>

<p>Also, while the element will be replaced in the document, the variable whose
  <code>outerHTML</code> property was set will still hold a reference to the original
  element:</p>

<pre class="brush: js">var p = document.getElementsByTagName("p")[0];
console.log(p.nodeName); // shows: "P"
p.outerHTML = "&lt;div&gt;This div replaced a paragraph.&lt;/div&gt;";
console.log(p.nodeName); // still "P";
</pre>

<p>The returned value will contain html escaped attributes:</p>

<pre class="brush: js">var anc = document.createElement("a");
anc.href = "https://developer.mozilla.org?a=b&amp;c=d";
console.log(anc.outerHTML); // output: "&lt;a href='https://developer.mozilla.org?a=b&amp;amp;c=d'&gt;&lt;/a&gt;"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>Serializing DOM trees into XML or HTML: {{domxref("XMLSerializer")}}</li>
  <li>Parsing XML or HTML into DOM trees: {{domxref("DOMParser")}}</li>
  <li>{{domxref("HTMLElement.outerText")}}</li>
</ul>
