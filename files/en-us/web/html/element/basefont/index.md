---
title: <basefont>
slug: Web/HTML/Element/basefont
tags:
  - Element
  - Fonts
  - HTML
  - Layout
  - Deprecated
  - Reference
  - Style
  - Web
  - basefont
browser-compat: html.elements.basefont
---
<div>{{deprecated_header}}</div>

<p>The <strong><code>&lt;basefont&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element is deprecated. It sets a default font face, size, and color for the other elements which are descended from its parent element. With this set, the font's size can then be varied relative to the base size using the {{HTMLElement("font")}} element.</p>

<p>You should not use this element; instead, you should use CSS properties such as {{cssxref("font")}}, {{cssxref("font-family")}}, {{cssxref("font-size")}}, and {{cssxref("color")}} to change the font configuration for an element and its contents.</p>

<h2 id="Attributes">Attributes</h2>

<p>Like all other HTML elements, this element supports the <a href="/en-US/docs/Web/HTML/Global_attributes" title="HTML/Global attributes">global attributes</a>.</p>

<dl>
 <dt>{{htmlattrdef("color")}}</dt>
 <dd>This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.</dd>
 <dt>{{htmlattrdef("face")}}</dt>
 <dd>This attribute contains a list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system.</dd>
 <dt>{{htmlattrdef("size")}}</dt>
 <dd>This attribute specifies the font size as either a numeric or relative value. Numeric values range from 1 to 7 with 1 being the smallest and 3 the default.</dd>
</dl>

<h2 id="Usage_notes">Usage notes</h2>

<p><strong>Do not use this element!</strong> Though once (imprecisely) normalized in HTML 3.2, it wasn't supported in all major browsers. Further, browsers, and even successive versions of browsers, never implemented it in the same way: practically, using it has always brought <em>indeterminate</em> results.</p>

<p>The <code>&lt;basefont&gt;</code> element was deprecated in the standard at the same time as all elements related to styling only. Starting with HTML 4, HTML does not convey styling information anymore (outside the {{HTMLElement("style")}} element or the <strong>style</strong> attribute of each element). In HTML5, this element has been removed completely. For any new web development, styling should be written using <a href="/en-US/docs/Web/CSS">CSS</a> only.</p>

<p>The former behavior of the {{HTMLElement("font")}} element can be achieved, and even better controlled using the <a href="/en-US/docs/Web/CSS/CSS_Fonts">CSS Fonts</a> properties.</p>

<h2 id="DOM_interface">DOM interface</h2>

<p>This element implements the {{domxref("HTMLBaseFontElement")}} interface.</p>

<h2 id="Example">Example</h2>

<pre>&lt;basefont color="#FF0000" face="Helvetica" size="+2" /&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Notes">Notes</h2>

<ul>
 <li>HTML 3.2 supports the basefont element but only with the size attribute.</li>
 <li>The strict HTML and XHTML specifications do not support this element.</li>
 <li>Despite being part of transitional standards, some standards-focused browsers like Mozilla and Opera do not support this element.</li>
 <li>This element can be imitated with a CSS rule on the {{HTMLElement("body")}} element.</li>
 <li>XHTML 1.0 requires a trailing slash for this element: <code>&lt;basefont /&gt;</code>.</li>
</ul>

<div>{{HTMLRef}}</div>
