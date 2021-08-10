---
title: unicode-range
slug: Web/CSS/@font-face/unicode-range
tags:
  - At-rule descriptor
  - CSS
  - CSS Fonts
  - CSS Property
  - Experimental
  - Layout
  - Reference
  - Web
browser-compat: css.at-rules.font-face.unicode-range
---
<div>{{CSSRef}}</div>

<p>The <strong><code>unicode-range</code></strong> CSS descriptor sets the specific range of characters to be used from a font defined by {{cssxref("@font-face")}} and made available for use on the current page. If the page doesn't use any character in this range, the font is not downloaded; if it uses at least one, the whole font is downloaded.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css">/* &lt;unicode-range&gt; values */
unicode-range: U+26;               /* single codepoint */
unicode-range: U+0-7F;
unicode-range: U+0025-00FF;        /* codepoint range */
unicode-range: U+4??;              /* wildcard range */
unicode-range: U+0025-00FF, U+4??; /* multiple values */
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><em><strong>single codepoint</strong></em></dt>
 <dd>A single Unicode character code point, for example <code>U+26</code>.</dd>
 <dt><em><strong>codepoint range</strong></em></dt>
 <dd>A range of Unicode code points. So for example, <code>U+0025-00FF</code> means <em>include all characters in the range <code>U+0025</code> to <code>U+00FF</code></em>.</dd>
 <dt><em><strong>wildcard range</strong></em></dt>
 <dd>A range of Unicode code points containing wildcard characters, that is using the <code>'?'</code> character, so for example <code>U+4??</code> means <em>include all characters in the range <code>U+400</code> to <code>U+4FF</code></em>.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>The purpose of this descriptor is to allow the font resources to be segmented so that a browser only needs to download the font resource needed for the text content of a particular page. For example, a site with many localizations could provide separate font resources for English, Greek and Japanese. For users viewing the English version of a page, the font resources for Greek and Japanese fonts wouldn't need to be downloaded, saving bandwidth.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Using_a_different_font_for_a_single_character">Using a different font for a single character</h3>

<p>In this example we create a simple HTML containing a single {{HTMLElement("div")}} element, including an ampersand, that we want to style with a different font. To make it obvious, we will use a sans-serif font, <em>Helvetica</em>, for the text, and a serif font, <em>Times New Roman</em>, for the ampersand.</p>

<p>In the CSS we are in effect defining a completely separate {{cssxref("@font-face")}} that only includes a single character in it, meaning that only this character will be styled with this font. We could also have done this by wrapping the ampersand in a {{HTMLElement("span")}} and applying a different font just to that, but that is an extra element and rule set.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;Me &amp; You = Us&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">@font-face {
  font-family: 'Ampersand';
  src: local('Times New Roman');
  unicode-range: U+26;
}

div {
  font-size: 4em;
  font-family: Ampersand, Helvetica, sans-serif;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Using_a_different_font_for_a_single_character", 500,104)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("@font-face/font-display", "font-display")}}</li>
 <li>{{cssxref("@font-face/font-family", "font-family")}}</li>
 <li>{{cssxref("@font-face/font-stretch", "font-stretch")}}</li>
 <li>{{cssxref("@font-face/font-style", "font-style")}}</li>
 <li>{{cssxref("@font-face/font-weight", "font-weight")}}</li>
 <li>{{cssxref("@font-face/font-variant", "font-variant")}}</li>
 <li>{{cssxref("font-feature-settings", "font-feature-settings")}}</li>
 <li>{{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}</li>
 <li>{{cssxref("@font-face/src", "src")}}</li>
</ul>
