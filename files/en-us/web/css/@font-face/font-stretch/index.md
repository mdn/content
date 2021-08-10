---
title: font-stretch
slug: Web/CSS/@font-face/font-stretch
tags:
  - '@font-face'
  - At-rule descriptor
  - CSS
  - Reference
  - descriptor
  - font-stretch
browser-compat: css.at-rules.font-face.font-stretch
---
<p>{{CSSRef}}</p>

<p>The <strong><code>font-stretch</code></strong> CSS descriptor allows authors to specify a normal, condensed, or expanded face for the fonts specified in the {{cssxref("@font-face")}} rule.</p>

<p>For a particular font family, authors can download various font faces which correspond to the different styles of the same font family, and then use the <code>font-stretch </code>descriptor to explicitly specify the font face's stretch. The values for the CSS descriptor is same as that of its corresponding font property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* Single values */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* multiple values */
font-stretch: 75% 125%;
font-stretch: condensed ultra-condensed;;
</pre>

<p>The <code>font-weight</code> property is described using any one of the values listed below.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>Specifies a normal font face.</dd>
 <dt><code>semi-condensed</code>, <code>condensed</code>, <code>extra-condensed</code>, <code>ultra-condensed</code></dt>
 <dd>Specifies a more condensed font face than normal, with ultra-condensed as the most condensed.</dd>
 <dt><code>semi-expanded</code>, <code>expanded</code>, <code>extra-expanded</code>, <code>ultra-expanded</code></dt>
 <dd>Specifies a more expanded font face than normal, with ultra-expanded as the most expanded.</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>A {{cssxref("&lt;percentage&gt;")}} value between 50% and 200% (inclusive). Negative values are not allowed for this property.</dd>
</dl>

<p>In earlier versions of the <code>font-stretch</code> specification, the property accepts only the nine keyword values. CSS Fonts Level 4 extends the syntax to accept a <code>&lt;percentage&gt;</code> value as well. This enables variable fonts to offer something more like a continuum of character widths. For TrueType or OpenType variable fonts, the "wdth" variation is used to implement varying widths.</p>

<p>If the font does not provide a face that exactly matches the given value, then values less than 100% map to a narrower face, and values greater than or equal to 100% map to a wider face.</p>

<h3 id="Keyword_to_numeric_mapping">Keyword to numeric mapping</h3>

<p>The table below shows the mapping between keyword values and numeric percentages:</p>

<table class="fullwidth-table standard-table">
 <thead>
  <tr>
   <th scope="col">Keyword</th>
   <th scope="col">Percentage</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>ultra-condensed</code></td>
   <td>50%</td>
  </tr>
  <tr>
   <td><code>extra-condensed</code></td>
   <td>62.5%</td>
  </tr>
  <tr>
   <td><code>condensed</code></td>
   <td>75%</td>
  </tr>
  <tr>
   <td><code>semi-condensed</code></td>
   <td>87.5%</td>
  </tr>
  <tr>
   <td><code>normal</code></td>
   <td>100%</td>
  </tr>
  <tr>
   <td><code>semi-expanded</code></td>
   <td>112.5%</td>
  </tr>
  <tr>
   <td><code>expanded</code></td>
   <td>125%</td>
  </tr>
  <tr>
   <td><code>extra-expanded</code></td>
   <td>150%</td>
  </tr>
  <tr>
   <td><code>ultra-expanded</code></td>
   <td>200%</td>
  </tr>
 </tbody>
</table>

<h3 id="Variable_fonts">Variable fonts</h3>

<p>Most fonts have a particular width which corresponds to one of the keyterm values. However some fonts, called variable fonts, can support a range of stretching with more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight. For this, percentage ranges are useful.</p>

<p>For TrueType or OpenType variable fonts, the "wdth" variation is used to implement varying glyph widths.</p>

<h2 id="Accessibility_concerns">Accessibility concerns</h2>

<p>People with dyslexia and other cognitive conditions may have difficulty reading fonts that are too condensed, especially if the font has a <a href="/en-US/docs/Web/CSS/color#accessibility_concerns">low contrast color ratio</a>.</p>

<ul>
 <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html" rel="noopener">Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_a_percentage_range_for_font-stretch">Setting a percentage range for font-stretch</h3>

<p>The following find a local Open Sans font or import it, and allow using the font for normal, semi-condensed and semi-expanded states.</p>

<pre class="brush: css">@font-face {
  font-family: "Open Sans";
  src: local("Open Sans") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-stretch: 87.5% 112.5%;
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("@font-face/font-display", "font-display")}}</li>
 <li>{{cssxref("@font-face/font-family", "font-family")}}</li>
 <li>{{cssxref("@font-face/font-weight", "font-weight")}}</li>
 <li>{{cssxref("@font-face/font-style", "font-style")}}</li>
 <li>{{cssxref("@font-face/font-variant", "font-variant")}}</li>
 <li>{{cssxref("font-feature-settings", "font-feature-settings")}}</li>
 <li>{{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}</li>
 <li>{{cssxref("@font-face/src", "src")}}</li>
 <li>{{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}</li>
</ul>
