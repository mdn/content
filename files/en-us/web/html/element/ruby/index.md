---
title: <ruby>
slug: Web/HTML/Element/ruby
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
browser-compat: html.elements.ruby
---
<div>{{HTMLRef}}</div>

<p>The <strong><code>&lt;ruby&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.</p>

<p>The term <em>ruby</em> originated as <a href="https://en.wikipedia.org/wiki/Agate_(typography)">a unit of measurement used by typesetters</a>, representing the smallest size that text can be printed on newsprint while remaining legible.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/ruby.html", "tabbed-shorter")}}</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a></th>
   <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>, <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Implicit ARIA role</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>Any</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">Attributes</h2>

<p>This element only includes the <a href="/en-US/docs/Web/HTML/Global_attributes">global attributes</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Example_1_Character">Example 1: Character</h3>

<pre class="brush:html">&lt;ruby&gt;
  漢 &lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;Kan&lt;/rt&gt;&lt;rp&gt;)&lt;/rp&gt;
  字 &lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;ji&lt;/rt&gt;&lt;rp&gt;)&lt;/rp&gt;
&lt;/ruby&gt;</pre>

<h3 id="Example_2_Word">Example 2: Word</h3>

<pre class="brush:html">&lt;ruby&gt;
  明日 &lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;Ashita&lt;/rt&gt;&lt;rp&gt;)&lt;/rp&gt;
&lt;/ruby&gt;</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTMLElement("rt")}}</li>
 <li>{{HTMLElement("rp")}}</li>
 <li>{{HTMLElement("rb")}}</li>
 <li>{{HTMLElement("rtc")}}</li>
 <li>{{HTMLElement("rbc")}}</li>
 <li>{{CSSxRef("text-transform")}}: full-size-kana</li>
</ul>
