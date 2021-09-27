---
title: '<body>: The Document Body element'
slug: Web/HTML/Element/body
tags:
  - Element
  - HTML
  - Reference
  - Sectioning Root Element
  - Sections
  - Web
browser-compat: html.elements.body
---
<div>{{HTMLRef}}</div>

<p>The <strong><code>&lt;body&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element represents the content of an HTML document. There can be only one <code>&lt;body&gt;</code> element in a document.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a></th>
   <td><a href="/en-US/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">Sectioning root</a>.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>The start tag may be omitted if the first thing inside it is not a space character, comment, {{HTMLElement("script")}} element or {{HTMLElement("style")}} element. The end tag may be omitted if the <code>&lt;body&gt;</code> element has contents or has a start tag, and is not immediately followed by a comment.</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>It must be the second element of an {{HTMLElement("html")}} element.</td>
  </tr>
  <tr>
   <th scope="row">Implicit ARIA role</th>
   <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Document_Role">document</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>No <code>role</code> permitted</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLBodyElement")}}
    <ul>
     <li>The <code>&lt;body&gt;</code> element exposes the {{domxref("HTMLBodyElement")}} interface.</li>
     <li>You can access the <code>&lt;body&gt;</code> element through the {{domxref("document.body")}} property.</li>
    </ul>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">Attributes</h2>

<p>This element includes the <a href="/en-US/docs/Web/HTML/Global_attributes">global attributes</a>.</p>

<dl>
 <dt>{{htmlattrdef("alink")}} {{deprecated_inline}}</dt>
 <dd>Color of text for hyperlinks when selected. <em>This method is non-conforming, use CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":active")}} pseudo-class instead.</em></dd>
 <dt>{{htmlattrdef("background")}} {{deprecated_inline}}</dt>
 <dd>URI of a image to use as a background. <em>This method is non-conforming, use CSS {{cssxref("background")}} property on the element instead.</em></dd>
 <dt>{{htmlattrdef("bgcolor")}} {{deprecated_inline}}</dt>
 <dd>Background color for the document. <em>This method is non-conforming, use CSS {{cssxref("background-color")}} property on the element instead.</em></dd>
 <dt>{{htmlattrdef("bottommargin")}} {{deprecated_inline}}</dt>
 <dd>The margin of the bottom of the body. <em>This method is non-conforming, use CSS {{cssxref("margin-bottom")}} property on the element instead.</em></dd>
 <dt>{{htmlattrdef("leftmargin")}} {{deprecated_inline}}</dt>
 <dd>The margin of the left of the body. <em>This method is non-conforming, use CSS {{cssxref("margin-left")}} property on the element instead.</em></dd>
 <dt>{{htmlattrdef("link")}} {{deprecated_inline}}</dt>
 <dd>Color of text for unvisited hypertext links. <em>This method is non-conforming, use CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":link")}} pseudo-class instead.</em></dd>
 <dt>{{htmlattrdef("onafterprint")}}</dt>
 <dd>Function to call after the user has printed the document.</dd>
 <dt>{{htmlattrdef("onbeforeprint")}}</dt>
 <dd>Function to call when the user requests printing of the document.</dd>
 <dt>{{htmlattrdef("onbeforeunload")}}</dt>
 <dd>Function to call when the document is about to be unloaded.</dd>
 <dt>{{htmlattrdef("onblur")}}</dt>
 <dd>Function to call when the document loses focus.</dd>
 <dt>{{htmlattrdef("onerror")}}</dt>
 <dd>Function to call when the document fails to load properly.</dd>
 <dt>{{htmlattrdef("onfocus")}}</dt>
 <dd>Function to call when the document receives focus.</dd>
 <dt>{{htmlattrdef("onhashchange")}}</dt>
 <dd>Function to call when the fragment identifier part (starting with the hash (<code>'#'</code>) character) of the document's current address has changed.</dd>
 <dt>{{htmlattrdef("onlanguagechange")}} {{experimental_inline}}</dt>
 <dd>Function to call when the preferred languages changed.</dd>
 <dt>{{htmlattrdef("onload")}}</dt>
 <dd>Function to call when the document has finished loading.</dd>
 <dt>{{htmlattrdef("onmessage")}}</dt>
 <dd>Function to call when the document has received a message.</dd>
 <dt>{{htmlattrdef("onoffline")}}</dt>
 <dd>Function to call when network communication has failed.</dd>
 <dt>{{htmlattrdef("ononline")}}</dt>
 <dd>Function to call when network communication has been restored.</dd>
 <dt>{{htmlattrdef("onpopstate")}}</dt>
 <dd>Function to call when the user has navigated session history.</dd>
 <dt>{{htmlattrdef("onredo")}}</dt>
 <dd>Function to call when the user has moved forward in undo transaction history.</dd>
 <dt>{{htmlattrdef("onresize")}}</dt>
 <dd>Function to call when the document has been resized.</dd>
 <dt>{{htmlattrdef("onstorage")}}</dt>
 <dd>Function to call when the storage area has changed.</dd>
 <dt>{{htmlattrdef("onundo")}}</dt>
 <dd>Function to call when the user has moved backward in undo transaction history.</dd>
 <dt>{{htmlattrdef("onunload")}}</dt>
 <dd>Function to call when the document is going away.</dd>
 <dt>{{htmlattrdef("rightmargin")}} {{deprecated_inline}}</dt>
 <dd>The margin of the right of the body. <em>This method is non-conforming, use CSS {{cssxref("margin-right")}} property on the element instead.</em></dd>
 <dt>{{htmlattrdef("text")}} {{deprecated_inline}}</dt>
 <dd>Foreground color of text. <em>This method is non-conforming, use CSS {{cssxref("color")}} property on the element instead.</em></dd>
 <dt>{{htmlattrdef("topmargin")}} {{deprecated_inline}}</dt>
 <dd>The margin of the top of the body. <em>This method is non-conforming, use CSS {{cssxref("margin-top")}} property on the element instead.</em></dd>
 <dt>{{htmlattrdef("vlink")}} {{deprecated_inline}}</dt>
 <dd>Color of text for visited hypertext links. <em>This method is non-conforming, use CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":visited")}} pseudo-class instead.</em></dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: html">&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Document title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;This is a paragraph&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTMLElement("html")}}</li>
 <li>{{HTMLElement("head")}}</li>
</ul>
