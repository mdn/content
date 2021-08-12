---
title: font-variation-settings
slug: Web/CSS/@font-face/font-variation-settings
tags:
  - '@font-face'
  - At-rule descriptor
  - CSS
  - CSS Descriptor
  - CSS Fonts
  - Reference
browser-compat: css.at-rules.font-face.font-variation-settings
---
<div>{{CSSRef}}</div>

<p>The <strong><code>font-variation-settings</code></strong> CSS descriptor allows authors to specify low-level OpenType or TrueType font variations in the {{cssxref("@font-face")}} rule.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* Use the default settings */
font-variation-settings: normal;

/* Set values for OpenType axis names */
font-variation-settings: "xhgt" 0.7;</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>Text is laid out using default settings.</dd>
 <dt><code>&lt;string&gt; &lt;number&gt;</code></dt>
 <dd>When rendering text, the list of OpenType axis names is passed to the text layout engine to enable or disable font features. Each setting is always a {{cssxref("&lt;string&gt;")}} of 4 ASCII characters, followed by a {{cssxref("number")}} indicating the axis value. If the <code>&lt;string&gt;</code> has more or fewer characters or contains characters outside the U+20 - U+7E codepoint range, the whole property is invalid. The <code>&lt;number&gt;</code> can be fractional or negative.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_font_weight_and_stretch_in_a_font-face_rule">Setting font weight and stretch in a @font-face rule</h3>

<pre class="brush: css">@font-face {
  font-family: 'OpenTypeFont';
  src: url('open_type_font.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-variation-settings: 'wght' 400, 'wdth' 300;
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
 <li>{{cssxref("@font-face/font-weight", "font-weight")}}</li>
 <li>{{cssxref("@font-face/font-variant", "font-variant")}}</li>
 <li>{{cssxref("font-feature-settings", "font-feature-settings")}}</li>
 <li>{{cssxref("@font-face/src", "src")}}</li>
 <li>{{cssxref("@font-face/unicode-range", "unicode-range")}}</li>
</ul>
