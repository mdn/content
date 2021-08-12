---
title: font-weight
slug: Web/CSS/@font-face/font-weight
tags:
  - '@font-face'
  - At-rule descriptor
  - CSS
  - Reference
  - descriptor
  - font-weight
browser-compat: css.at-rules.font-face.font-weight
---
<p>{{CSSRef}}</p>

<p>The <strong><code>font-weight</code></strong> CSS descriptor allows authors to specify font weights for the fonts specified in the {{cssxref("@font-face")}} rule. The {{cssxref("font-weight")}} property can separately be used to set how thick or thin characters in text should be displayed.</p>

<p>For a particular font family, authors can download various font faces which correspond to the different styles of the same font family, and then use the <code>font-weight </code>descriptor to explicitly specify the font face's weights. The values for the CSS descriptor is same as that of its corresponding font property.</p>

<p>There are generally limited weights available for a particular font family. When a specified weight doesn't exist, a nearby weight is used. Fonts lacking bold are often synthesized by the user agent. To prevent this, use {{cssxref('font-synthesis')}} property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* Single values */
font-weight: normal;
font-weight: bold;
font-weight: 400;

/* Multiple Values */
font-weight: normal bold;
font-weight: 300 500;
</pre>

<p>The <code>font-weight</code> property is described using any one of the values listed below.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>Normal font weight. Same as <code>400</code>.</dd>
 <dt><code>bold</code></dt>
 <dd>Bold font weight. Same as <code>700</code>.</dd>
 <dt><code>&lt;number&gt;</code></dt>
 <dd>A {{cssxref("&lt;number&gt;")}} value between 1 and 1000, inclusive. Higher numbers represent weights that are bolder than (or as bold as) lower numbers. Certain commonly used values correspond to common weight names, as described in the <a href="#common_weight_name_mapping">Common weight name mapping</a> section below.</dd>
</dl>

<p>In earlier versions of the <code>font-weight</code> specification, the property accepts only keyword values and the numeric values 100, 200, 300, 400, 500, 600, 700, 800, and 900; non-variable fonts can only really make use of these set values, although fine-grained values (e.g. 451) will be translated to one of these values for non-variable fonts.</p>

<p>CSS Fonts Level 4 extends the syntax to accept any number between 1 and 1000, inclusive, and introduces {{anch("Variable fonts")}}, which can make use of this much finer-grained range of font weights.</p>

<h3 id="Common_weight_name_mapping">Common weight name mapping</h3>

<p>The numerical values <code>100</code> to <code>900</code> roughly correspond to the following common weight names:</p>

<table>
 <thead>
  <tr>
   <th scope="col">Value</th>
   <th scope="col">Common weight name</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>100</td>
   <td>Thin (Hairline)</td>
  </tr>
  <tr>
   <td>200</td>
   <td>Extra Light (Ultra Light)</td>
  </tr>
  <tr>
   <td>300</td>
   <td>Light</td>
  </tr>
  <tr>
   <td>400</td>
   <td>Normal</td>
  </tr>
  <tr>
   <td>500</td>
   <td>Medium</td>
  </tr>
  <tr>
   <td>600</td>
   <td>Semi Bold (Demi Bold)</td>
  </tr>
  <tr>
   <td>700</td>
   <td>Bold</td>
  </tr>
  <tr>
   <td>800</td>
   <td>Extra Bold (Ultra Bold)</td>
  </tr>
  <tr>
   <td>900</td>
   <td>Black (Heavy)</td>
  </tr>
 </tbody>
</table>

<h3 id="Variable_fonts">Variable fonts</h3>

<p>Most fonts have a particular weight which corresponds to one of the numbers in <a href="#common_weight_name_mapping">Common weight name mapping</a>. However some fonts, called variable fonts, can support a range of weights with more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight.</p>

<p>For TrueType or OpenType variable fonts, the "wght" variation is used to implement varying weights.</p>

<h2 id="Accessibility_concerns">Accessibility concerns</h2>

<p>People experiencing low vision conditions may have difficulty reading text set with a <code>font-weight</code> value of <code>100</code> (Thin/Hairline) or <code>200</code> (Extra Light), especially if the font has a <a href="/en-US/docs/Web/CSS/color#accessibility_concerns">low contrast color ratio</a>.</p>

<ul>
 <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html" rel="noopener">Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_normal_font_weight_in_a_font-face_rule">Setting normal font weight in a @font-face rule</h3>

<p>The following finds a local Open Sans font or imports it, and allows using the font for normal font weights.</p>

<pre class="brush: css">@font-face {
  font-family: "Open Sans";
  src: local("Open Sans") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-weight: 400;
}</pre>

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
 <li>{{cssxref("@font-face/font-variant", "font-variant")}}</li>
 <li>{{cssxref("font-feature-settings", "font-feature-settings")}}</li>
 <li>{{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}</li>
 <li>{{cssxref("@font-face/src", "src")}}</li>
 <li>{{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}</li>
</ul>
