---
title: '<p>: The Paragraph element'
slug: Web/HTML/Element/p
tags:
  - Element
  - HTML
  - HTML grouping content
  - Reference
  - Web
browser-compat: html.elements.p
---
<div>{{HTMLRef}}</div>

<p>The <strong><code>&lt;p&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.</p>

<p>Paragraphs are <a href="/en-US/docs/Web/HTML/Block-level_elements">block-level elements</a>, and notably will automatically close if another block-level element is parsed before the closing <code>&lt;/p&gt;</code> tag. See “Tag omission” below.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a></th>
   <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>The start tag is required. The end tag may be omitted if the {{HTMLElement("p")}} element is immediately followed by an {{HTMLElement("address")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("div")}}, {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("footer")}}, {{HTMLElement("form")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("header")}}, {{HTMLElement("hr")}}, {{HTMLElement("menu")}}, {{HTMLElement("nav")}}, {{HTMLElement("ol")}}, {{HTMLElement("pre")}}, {{HTMLElement("section")}}, {{HTMLElement("table")}}, {{HTMLElement("ul")}} or another {{HTMLElement("p")}} element, or if there is no more content in the parent element and the parent element is not an {{HTMLElement("a")}} element.</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">flow content</a>.</td>
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
   <td>{{domxref("HTMLParagraphElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">Attributes</h2>

<p>This element only includes the <a href="/en-US/docs/Web/HTML/Global_attributes">global attributes</a>.</p>

<div class="note">
<p><strong>Note:</strong> The <code>align</code> attribute on <code>&lt;p&gt;</code> tags is obsolete and shouldn't be used.</p>
</div>

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.&lt;/p&gt;
&lt;p&gt;This is the second paragraph.
  This is the second paragraph.
  This is the second paragraph.
  This is the second paragraph.&lt;/p&gt;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Example')}}</p>

<h2 id="Styling_paragraphs">Styling paragraphs</h2>

<p>By default, browsers separate paragraphs with a single blank line. Alternate separation methods, such as first-line indentation, can be achieved with {{glossary("CSS")}}:</p>

<h3 id="HTML_2">HTML</h3>

<pre class="brush: html">&lt;p&gt;Separating paragraphs with blank lines is easiest
for readers to scan, but they can also be separated
by indenting their first lines. This is often used
to take up less space, such as to save paper in print.&lt;/p&gt;

&lt;p&gt;Writing that is intended to be edited, such as school
papers and rough drafts, uses both blank lines and
indentation for separation. In finished works, combining
both is considered redundant and amateurish.&lt;/p&gt;

&lt;p&gt;In very old writing, paragraphs were separated with a
special character: ¶, the &lt;i&gt;pilcrow&lt;/i&gt;. Nowadays, this
is considered claustrophobic and hard to read.&lt;/p&gt;

&lt;p&gt;How hard to read? See for yourself:
  &lt;button data-toggle-text="Oh no! Switch back!"&gt;Use pilcrow for paragraphs&lt;/button&gt;
&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
   text-indent: 0;
   display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">document.querySelector('button').addEventListener('click', function (event) {
  document.querySelectorAll('p').forEach(function (paragraph) {
    paragraph.classList.toggle('pilcrow');
  });
  var newButtonText = event.target.dataset.toggleText;
  var oldText = event.target.innerText;
  event.target.innerText = newButtonText;
  event.target.dataset.toggleText = oldText;
});</pre>

<h3 id="Result_2">Result</h3>

<p>{{EmbedLiveSample('Styling_paragraphs')}}</p>

<h2 id="Accessibility_concerns">Accessibility concerns</h2>

<p>Breaking up content into paragraphs helps make a page more accessible. Screen-readers and other assistive technology provide shortcuts to let their users skip to the next or previous paragraph, letting them skim content like how white space lets visual users skip around.</p>

<p>Using empty <code>&lt;p&gt;</code> elements to add space between paragraphs is problematic for people who navigate with screen-reading technology. Screen readers may announce the paragraph's presence, but not any content contained within it — because there is none. This can confuse and frustrate the person using the screen reader.</p>

<p>If extra space is desired, use {{glossary("CSS")}} properties like {{cssxref("margin")}} to create the effect:</p>

<pre class="brush: css">p {
  margin-bottom: 2em; // increase white space after a paragraph
}
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTMLElement("hr")}}</li>
 <li>{{HTMLElement("br")}}</li>
</ul>
