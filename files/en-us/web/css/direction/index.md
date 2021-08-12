---
title: direction
slug: Web/CSS/direction
tags:
  - BiDi
  - CSS
  - CSS Property
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.direction
---
<div>{{CSSRef}}</div>

<p>The <strong><code>direction</code></strong> CSS property sets the direction of text, table columns, and horizontal overflow. Use <code>rtl</code> for languages written from right to left (like Hebrew or Arabic), and <code>ltr</code> for those written from left to right (like English and most other languages).</p>

<div>{{EmbedInteractiveExample("pages/css/direction.html")}}</div>

<p>Note that text direction is usually defined within a document (e.g., with <a href="/en-US/docs/Web/HTML/Global_attributes/dir">HTML's <code>dir</code> attribute</a>) rather than through direct use of the <code>direction</code> property.</p>

<p>The property sets the base text direction of block-level elements and the direction of embeddings created by the {{Cssxref("unicode-bidi")}} property. It also sets the default alignment of text, block-level elements, and the direction that cells flow within a table row.</p>

<p>Unlike the <code>dir</code> attribute in HTML, the <code>direction</code> property is not inherited from table columns into table cells, since CSS inheritance follows the document tree, and table cells are inside of rows but not inside of columns.</p>

<p>The <code>direction</code> and {{cssxref("unicode-bidi")}} properties are the two only properties which are not affected by the {{cssxref("all")}} shorthand property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* Keyword values */
direction: ltr;
direction: rtl;

/* Global values */
direction: inherit;
direction: initial;
direction: revert;
direction: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>ltr</code></dt>
 <dd>Text and other elements go from left to right. This is the default value.</dd>
 <dt><code>rtl</code></dt>
 <dd>Text and other elements go from right to left.</dd>
</dl>

<p>For the <code>direction</code> property to have any effect on inline-level elements, the {{Cssxref("unicode-bidi")}} property's value must be <code>embed</code> or <code>override</code>.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_right-to-left_direction">Setting right-to-left direction</h3>

<p>In the example below are two strings of text, both which are displaying using <code>direction: rtl</code>. While the Arabic text is displayed correctly with this setting, the English text now has a full stop in an unusual location.</p>

<pre class="brush: css">blockquote {
  direction: rtl;
  width: 300px;
}
</pre>

<pre class="brush: html">&lt;blockquote&gt;
&lt;p&gt;This paragraph is in English but incorrectly goes right to left.&lt;p&gt;
&lt;/blockquote&gt;

&lt;blockquote&gt;
&lt;p&gt;هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.&lt;p&gt;
&lt;/blockquote&gt;</pre>

<p>{{EmbedLiveSample('Setting_right-to-left_direction', '100%', 200)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{Cssxref("unicode-bidi")}}</li>
 <li>{{Cssxref("writing-mode")}}</li>
 <li>The HTML {{htmlattrxref("dir")}} global attribute</li>
</ul>
