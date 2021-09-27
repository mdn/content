---
title: '<meta>: The metadata element'
slug: Web/HTML/Element/meta
tags:
  - Document
  - Element
  - HTML
  - HTML charset
  - HTML document metadata
  - Reference
  - Web
  - charset
  - http-equiv
  - metadata
browser-compat: html.elements.meta
---
<div>{{HTMLRef}}</div>

<p>The <strong><code>&lt;meta&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element represents {{Glossary("Metadata","metadata")}} that cannot be represented by other HTML meta-related elements, like {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} or {{HTMLElement("title")}}.</p>

<table class="properties">
 <tbody>
  <tr>
   <th><a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a></th>
   <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content">Metadata content</a>. If the {{htmlattrxref("itemprop")}} attribute is present: <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">flow content</a>, <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th>Permitted content</th>
   <td>None, it is an {{Glossary("empty element")}}.</td>
  </tr>
  <tr>
   <th>Tag omission</th>
   <td>As it is a void element, the start tag must be present and the end tag must not be present.</td>
  </tr>
  <tr>
   <th>Permitted parents</th>
   <td>
    <ul>
     <li><code>&lt;meta charset&gt;</code>, <code>&lt;meta http-equiv&gt;</code>: a {{HTMLElement("head")}} element. If the {{htmlattrxref("http-equiv", "meta")}} is not an encoding declaration, it can also be inside a {{HTMLElement("noscript")}} element, itself inside a <code>&lt;head&gt;</code> element.</li>
     <li><code>&lt;meta name&gt;</code>: any element that accepts <a href="/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content">metadata content</a>.</li>
     <li><code>&lt;meta itemprop&gt;</code>: any element that accepts <a href="/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content">metadata content</a> or <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">flow content</a>.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <th scope="row">Implicit ARIA role</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>No <code>role</code> permitted</td>
  </tr>
  <tr>
   <th>DOM interface</th>
   <td>{{domxref("HTMLMetaElement")}}</td>
  </tr>
 </tbody>
</table>

<p>The type of metadata provided by the <code>&lt;meta&gt;</code> element can be one of the following:</p>

<ul>
 <li>If the {{htmlattrxref("name", "meta")}} attribute is set, the <code>&lt;meta&gt;</code> element provides <em>document-level metadata</em>, applying to the whole page.</li>
 <li>If the {{htmlattrxref("http-equiv", "meta")}} attribute is set, the <code>&lt;meta&gt;</code> element is a <em>pragma directive</em>, providing information equivalent to what can be given by a similarly-named HTTP header.</li>
 <li>If the {{htmlattrxref("charset", "meta")}} attribute is set, the <code>&lt;meta&gt;</code> element is a <em>charset declaration</em>, giving the character encoding in which the document is encoded.</li>
 <li>If the {{htmlattrxref("itemprop")}} attribute is set, the <code>&lt;meta&gt;</code> element provides <em>user-defined metadata</em>.</li>
</ul>

<h2 id="Attributes">Attributes</h2>

<p>This element includes the <a href="/en-US/docs/Web/HTML/Global_attributes">global attributes</a>.</p>

<div class="notecard note">
<p><strong>Note:</strong> the attribute {{htmlattrxref("name", "meta")}} has a specific meaning for the <code>&lt;meta&gt;</code> element, and the {{htmlattrxref("itemprop")}} attribute must not be set on the same <code>&lt;meta&gt;</code> element that has any existing {{htmlattrxref("name", "meta")}}, {{htmlattrxref("http-equiv", "meta")}} or {{htmlattrxref("charset", "meta")}} attributes.</p>
</div>

<dl>
 <dt>{{htmlattrdef("charset")}}</dt>
 <dd>This attribute declares the document's character encoding. If the attribute is present, its value must be an ASCII case-insensitive match for the string "<code>utf-8</code>", because UTF-8 is the only valid encoding for HTML5 documents. <code>&lt;meta&gt;</code> elements which declare a character encoding must be located entirely within the first 1024 bytes of the document.</dd>
 <dt>{{htmlattrdef("content")}}</dt>
 <dd>This attribute contains the value for the {{htmlattrxref("http-equiv", "meta")}} or {{htmlattrxref("name", "meta")}} attribute, depending on which is used.</dd>
 <dt>{{htmlattrdef("http-equiv")}}</dt>
 <dd>
 <p>Defines a pragma directive. The attribute is named <code><strong>http-equiv</strong>(alent)</code> because all the allowed values are names of particular HTTP headers:</p>

 <ul>
  <li><code>content-security-policy</code>

   <p>Allows page authors to define a <a href="/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">content policy</a> for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.</p>
  </li>
  <li><code>content-type</code>
   <p>Declares the <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME type</a> and character encoding of the document. If specified, the <code>content</code> attribute must have the value "<code>text/html; charset=utf-8</code>". This is equivalent to a <code>&lt;meta&gt;</code> element with the {{htmlattrxref("charset", "meta")}} attribute specified, and carries the same restriction on placement within the document. <strong>Note:</strong> Can only be used in documents served with a <code>text/html</code> — not in documents served with an XML MIME type.</p>
  </li>
  <li><code>default-style</code>
   <p>Sets the name of the default <a href="/en-US/docs/Web/CSS">CSS style sheet</a> set.</p>
  </li>
  <li><code>x-ua-compatible</code>
   <p>If specified, the <code>content</code> attribute must have the value "<code>IE=edge</code>". User agents are required to ignore this pragma.</p>
  </li>
  <li><code>refresh</code>
   <div>This instruction specifies:</div>

   <ul>
    <li>The number of seconds until the page should be reloaded - only if the {{htmlattrxref("content", "meta")}} attribute contains a positive integer.</li>
    <li>The number of seconds until the page should redirect to another - only if the {{htmlattrxref("content", "meta")}} attribute contains a positive integer followed by the string '<code>;url=</code>', and a valid URL.</li>
   </ul>

   <h5 id="Accessibility_concerns">Accessibility concerns</h5>

   <div>Pages set with a <code>refresh</code> value run the risk of having the time interval being too short. People navigating with the aid of assistive technology such as a screen reader may be unable to read through and understand the page's content before being automatically redirected. The abrupt, unannounced updating of the page content may also be disorienting for people experiencing low vision conditions.</div>

   <ul>
    <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content">MDN Understanding WCAG, Guideline 2.1 explanations</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways">MDN Understanding WCAG, Guideline 3.1 explanations</a></li>
    <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html">Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0</a></li>
    <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html">Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0</a></li>
    <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html">Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0</a></li>
   </ul>
  </li>
 </ul>
 </dd>
 <dt>{{htmlattrdef("name")}}</dt>
 <dd>
 <p>The <code>name</code> and <code>content</code> attributes can be used together to provide document metadata in terms of name-value pairs, with the <code>name</code> attribute giving the metadata name, and the <code>content</code> attribute giving the value.</p>

 <p>See <a href="/en-US/docs/Web/HTML/Element/meta/name">standard metadata names</a> for details about the set of standard metadata names defined in the HTML specification.</p>
 </dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: html">&lt;meta charset="utf-8"&gt;

&lt;!-- Redirect page after 3 seconds --&gt;
&lt;meta http-equiv="refresh" content="3;url=https://www.mozilla.org"&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
