---
title: '<small>: the side comment element'
slug: Web/HTML/Element/small
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
  - font-size
browser-compat: html.elements.small
---
<div>{{HTMLRef}}</div>

<p>The <strong><code>&lt;small&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from <code>small</code> to <code>x-small</code>.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/small.html", "tabbed-shorter")}}</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Content categories</th>
   <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>, <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">Phrasing content</a></td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>None, must have both a start tag and an end tag.</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>, or any element that accepts <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">flow content</a>.</td>
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

<h3 id="Basic_usage">Basic usage</h3>

<pre class="brush: html">&lt;p&gt;This is the first sentence.
 &lt;small&gt;This whole sentence is in small letters.&lt;/small&gt;
&lt;/p&gt;
</pre>

<p>{{EmbedLiveSample("Basic_usage")}}</p>

<h3 id="CSS_alternative">CSS alternative</h3>

<pre class="brush: html">&lt;p&gt;This is the first sentence.
  &lt;span style="font-size:0.8em"&gt;This whole sentence is in small
  letters.&lt;/span&gt;
&lt;/p&gt;
</pre>

<p>{{EmbedLiveSample("CSS_alternative")}}</p>

<h2 id="Notes">Notes</h2>

<p>Although the <code>&lt;small&gt;</code> element, like the {{htmlelement("b")}} and {{htmlelement("i")}} elements, may be perceived to violate the principle of separation between structure and presentation, all three are valid in HTML5. Authors are encouraged to use their best judgement when determining whether to use <code>&lt;small&gt;</code> or CSS.</p>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTMLElement("b")}}</li>
 <li>{{HTMLElement("sub")}} and {{HTMLElement("sup")}}</li>
 <li>{{HTMLElement("font")}}</li>
 <li>{{HTMLElement("style")}}</li>
 <li>HTML 4.01 Specification: <a href="https://www.w3.org/TR/html4/present/graphics.html#h-15.2">Font Styles</a></li>
</ul>
