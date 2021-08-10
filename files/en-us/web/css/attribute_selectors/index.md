---
title: Attribute selectors
slug: Web/CSS/Attribute_selectors
tags:
  - Attribute selectors
  - CSS
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.attribute
---
<div>{{CSSRef}}</div>

<p>The CSS <strong>attribute selector</strong> matches elements based on the presence or value of a given attribute.</p>

<pre class="brush: css no-line-numbers">/* &lt;a&gt; elements with a title attribute */
a[title] {
  color: purple;
}

/* &lt;a&gt; elements with an href matching "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* &lt;a&gt; elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* &lt;a&gt; elements with an href ending ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* &lt;a&gt; elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}
</pre>

<h2 id="Syntax">Syntax</h2>

<dl>
 <dt><code>[<em>attr</em>]</code></dt>
 <dd>Represents elements with an attribute name of <em>attr</em>.</dd>
 <dt><code>[<em>attr</em>=<em>value</em>]</code></dt>
 <dd>Represents elements with an attribute name of <em>attr</em> whose value is exactly <em>value</em>.</dd>
 <dt><code>[<em>attr</em>~=<em>value</em>]</code></dt>
 <dd>Represents elements with an attribute name of <em>attr</em> whose value is a whitespace-separated list of words, one of which is exactly <em>value</em>.</dd>
 <dt><code>[<em>attr</em>|=<em>value</em>]</code></dt>
 <dd>Represents elements with an attribute name of <em>attr</em> whose value can be exactly <em>value</em> or can begin with <em>value</em> immediately followed by a hyphen, <code>-</code> (U+002D). It is often used for language subcode matches.</dd>
 <dt><code>[<em>attr</em>^=<em>value</em>]</code></dt>
 <dd>Represents elements with an attribute name of <em>attr</em> whose value is prefixed (preceded) by <em>value</em>.</dd>
 <dt><code>[<em>attr</em>$=<em>value</em>]</code></dt>
 <dd>Represents elements with an attribute name of <em>attr</em> whose value is suffixed (followed) by <em>value</em>.</dd>
 <dt><code>[<em>attr</em>*=<em>value</em>]</code></dt>
 <dd>Represents elements with an attribute name of <em>attr</em> whose value contains at least one occurrence of <em>value</em> within the string.</dd>
 <dt><code>[<em>attr</em> <em>operator</em> <em>value</em> i]</code></dt>
 <dd>Adding an <code>i</code> (or <code>I</code>) before the closing bracket causes the value to be compared case-insensitively (for characters within the ASCII range).</dd>
 <dt><code>[<em>attr</em> <em>operator</em> <em>value</em> s]</code> {{Experimental_Inline}}</dt>
 <dd>Adding an <code>s</code> (or <code>S</code>) before the closing bracket causes the value to be compared case-sensitively (for characters within the ASCII range).</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Links">Links</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">a {
  color: blue;
}

/* Internal links, beginning with "#" */
a[href^="#"] {
  background-color: gold;
}

/* Links with "example" anywhere in the URL */
a[href*="example"] {
  background-color: silver;
}

/* Links with "insensitive" anywhere in the URL,
   regardless of capitalization */
a[href*="insensitive" i] {
  color: cyan;
}

/* Links with "cAsE" anywhere in the URL,
with matching capitalization */
a[href*="cAsE" s] {
  color: pink;
}

/* Links that end in ".org" */
a[href$=".org"] {
  color: red;
}

/* Links that start with "https" and end in ".org" */
a[href^="https"][href$=".org"] {
  color: green;
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;&lt;a href="#internal"&gt;Internal link&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="http://example.com"&gt;Example link&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#InSensitive"&gt;Insensitive internal link&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="http://example.org"&gt;Example org link&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="https://example.org"&gt;Example https org link&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Links")}}</p>

<h3 id="Languages">Languages</h3>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">/* All divs with a `lang` attribute are bold. */
div[lang] {
  font-weight: bold;
}

/* All divs without a `lang` attribute are italicized. */
div:not([lang]) {
  font-style: italic;
}

/* All divs in US English are blue. */
div[lang~="en-us"] {
  color: blue;
}

/* All divs in Portuguese are green. */
div[lang="pt"] {
  color: green;
}

/* All divs in Chinese are red, whether
   simplified (zh-CN) or traditional (zh-TW). */
div[lang|="zh"] {
  color: red;
}

/* All divs with a Traditional Chinese
   `data-lang` are purple. */
/* Note: You could also use hyphenated attributes
   without double quotes */
div[data-lang="zh-TW"] {
  color: purple;
}
</pre>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div lang="en-us en-gb en-au en-nz"&gt;Hello World!&lt;/div&gt;
&lt;div lang="pt"&gt;Olá Mundo!&lt;/div&gt;
&lt;div lang="zh-CN"&gt;世界您好！&lt;/div&gt;
&lt;div lang="zh-TW"&gt;世界您好！&lt;/div&gt;
&lt;div data-lang="zh-TW"&gt;世界您好！&lt;/div&gt;
</pre>

<h4 id="Result_2">Result</h4>

<p>{{EmbedLiveSample("Languages")}}</p>

<h3 id="HTML_ordered_lists">HTML ordered lists</h3>

<p>The HTML specification requires the {{htmlattrxref("type", "input")}} attribute to be matched case-insensitively due to it primarily being used in the {{HTMLElement("input")}} element, trying to use attribute selectors to with the {{htmlattrxref("type", "ol")}} attribute of an {{HTMLElement("ol", "ordered list")}} doesn't work without the <a href="#case-sensitive">case-sensitive</a> modifier.</p>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css">/* List types require the case sensitive flag due to a quirk in how HTML treats the type attribute. */
ol[type="a"] {
  list-style-type: lower-alpha;
  background: red;
}

ol[type="a" s] {
  list-style-type: lower-alpha;
  background: lime;
}

ol[type="A" s] {
  list-style-type: upper-alpha;
  background: lime;
}</pre>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html;">&lt;ol type="A"&gt;
  &lt;li&gt;Example list&lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="Result_3">Result</h4>

<p>{{EmbedLiveSample("HTML_ordered_lists")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{CSSxRef("attr")}}</li>
 <li>Selecting a single element: {{DOMxRef("Document.querySelector()")}}, {{DOMxRef("DocumentFragment.querySelector()")}}, or {{DOMxRef("Element.querySelector()")}}</li>
 <li>Selecting all matching elements: {{DOMxRef("Document.querySelectorAll()")}}, {{DOMxRef("DocumentFragment.querySelectorAll()")}}, or {{DOMxRef("Element.querySelectorAll()")}}</li>
</ul>
