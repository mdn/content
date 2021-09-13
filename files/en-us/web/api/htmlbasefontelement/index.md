---
title: HTMLBaseFontElement
slug: Web/API/HTMLBaseFontElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
  - Deprecated
browser-compat: api.HTMLBaseFontElement
---
<div>{{APIRef("HTML DOM")}}{{deprecated_header}}</div>

<p>The <strong><code>HTMLBaseFontElement</code></strong> interface provides special properties (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("basefont")}} elements.</p>

<p>The <code>&lt;basefont&gt;</code> element has been deprecated in HTML4 and removed in HTML5. This latest specification requires that this element implements {{domxref("HTMLUnknownElement")}} rather than <code>HTMLBaseFontElement</code>.</p>

<div class="notecard note">
  <p><strong>Note:</strong> Use <a href="/en-US/docs/Web/CSS/CSS_Fonts">CSS Fonts</a> features instead.</p>
</div>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its parent, {{domxref("HTMLElement")}}.</em></p>

<dl>
 <dt>{{domxref("HTMLBaseFontElement.color")}}</dt>
 <dd>Is a {{domxref("DOMString")}} representing the text color using either a named color or a color specified in the hexadecimal <code>#RRGGBB</code> format.</dd>
 <dt>{{domxref("HTMLBaseFontElement.face")}}</dt>
 <dd>Is a {{domxref("DOMString")}} representing a list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system.</dd>
 <dt>{{domxref("HTMLBaseFontElement.size")}}</dt>
 <dd>Is a {{domxref("DOMString")}} representing the font size as either a numeric or relative value. Numeric values range from <code>1</code> to <code>7</code> with <code>1</code> being the smallest and <code>3</code> the default. Relative value starts with a <code>'+'</code> or a <code>'-</code>'.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}.</em></p>

<h2 id="Specifications">Specifications</h2>

<p>This feature was present in the HTML specification up through HTML 3.2, but was deprecated in HTML 4, and then removed — and so is not in the current HTML specification. No modern browsers support it and this feature is no longer on track to become a standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The HTML element {{HTMLElement("basefont")}} <em>was</em> implementing this interface.</li>
</ul>
