---
title: font-style
slug: Web/CSS/@font-face/font-style
tags:
  - '@font-face'
  - At-rule descriptor
  - CSS
  - CSS Descriptor
  - CSS Fonts
  - Reference
browser-compat: css.at-rules.font-face.font-style
---
<div>{{CSSRef}}</div>

<p>The <strong><code>font-style</code></strong> CSS descriptor allows authors to specify font styles for the fonts specified in the {{cssxref("@font-face")}} rule.</p>

<p>For a particular font family, authors can download various font faces which correspond to the different styles of the same font family, and then use the <code>font-style</code> descriptor to explicitly specify the font face's style. The values for the CSS descriptor is same as that of its corresponding font property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 30deg;
font-style: oblique 30deg 50deg;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>Selects the normal version of the font-family.</dd>
 <dt><code>italic</code></dt>
 <dd>Specifies that font-face is an italicized version of the normal font.</dd>
 <dt><code>oblique</code></dt>
 <dd>Specifies that the font-face is an artificially sloped version of the normal font.</dd>
 <dt><code>oblique</code> with angle</dt>
 <dd>Selects a font classified as <code>oblique</code>, and additionally specifies an angle for the slant of the text.</dd>
 <dt><code>oblique</code> with angle range</dt>
 <dd>Selects a font classified as <code>oblique</code>, and additionally specifies a range of allowable angle for the slant of the text. Note that a range is only supported when the <code>font-style</code> is <code>oblique</code>; for <code>font-style: normal</code> or <code>italic</code>, no second value is allowed.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Specifying_an_italic_font_style">Specifying an italic font style</h3>

<p>As an example, consider the garamond font family, in its normal form, we get the following result:</p>

<pre class="brush: css">@font-face {
  font-family: garamond;
  src: url('garamond.ttf');
}</pre>

<p><img alt="unstyled Garamond" src="garamondunstyled.jpg"></p>

<p>The italicized version of this text uses the same glyphs present in the unstyled version, but they are artificially sloped by a few degrees.</p>

<p><img alt="artificially sloped garamond" src="garamondartificialstyle.jpg"></p>

<p>On the other hand, if a true italicized version of the font family exists, we can include it in the <code>src</code> descriptor and specify the font style as italic, so that it is clear that the font is italicized. True italics use different glyphs and are a bit different from their upright counterparts, having some unique features and generally have a rounded and calligraphic quality. These fonts are specially created by font designers and are <strong>not</strong> artificially sloped.</p>

<pre class="brush: css">@font-face {
  font-family: garamond;
  src: url('garamond-italic.ttf');
  font-style: italic;
}</pre>

<p><img alt="italic garamond" src="garamonditalic.jpg"></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("@font-face/font-display", "font-display")}}</li>
 <li>{{cssxref("@font-face/font-family", "font-family")}}</li>
 <li>{{cssxref("@font-face/font-stretch", "font-stretch")}}</li>
 <li>{{cssxref("@font-face/font-weight", "font-weight")}}</li>
 <li>{{cssxref("@font-face/font-variant", "font-variant")}}</li>
 <li>{{cssxref("font-feature-settings", "font-feature-settings")}}</li>
 <li>{{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}</li>
 <li>{{cssxref("@font-face/src", "src")}}</li>
 <li>{{cssxref("@font-face/unicode-range", "unicode-range")}}</li>
</ul>
