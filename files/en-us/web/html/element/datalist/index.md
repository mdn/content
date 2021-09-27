---
title: '<datalist>: The HTML Data List element'
slug: Web/HTML/Element/datalist
tags:
  - Element
  - HTML
  - HTML forms
  - HTML5
  - Reference
  - Web
browser-compat: html.elements.datalist
---
<div>{{HTMLRef}}</div>

<p>The <strong><code>&lt;datalist&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element contains a set of {{HTMLElement("option")}} elements that represent the permissible or recommended options available to choose from within other controls.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a></th>
   <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>, <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td>Either <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a> or zero or more {{HTMLElement("option")}} elements.</td>
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
   <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role">listbox</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>No <code>role</code> permitted</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLDataListElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">Attributes</h2>

<p>This element has no other attributes than the <a href="/en-US/docs/Web/HTML/Global_attributes">global attributes</a>, common to all elements.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_datalist">Basic datalist</h3>

<pre class="brush: html">&lt;label for="myBrowser"&gt;Choose a browser from this list:&lt;/label&gt;
&lt;input list="browsers" id="myBrowser" name="myBrowser" /&gt;
&lt;datalist id="browsers"&gt;
  &lt;option value="Chrome"&gt;
  &lt;option value="Firefox"&gt;
  &lt;option value="Internet Explorer"&gt;
  &lt;option value="Opera"&gt;
  &lt;option value="Safari"&gt;
  &lt;option value="Microsoft Edge"&gt;
&lt;/datalist&gt;
</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Basic_datalist", '100%', 100)}}</p>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{HTMLElement("input")}} element, and more specifically its {{htmlattrxref("list", "input")}} attribute;</li>
 <li>The {{HTMLElement("option")}} element.</li>
</ul>
