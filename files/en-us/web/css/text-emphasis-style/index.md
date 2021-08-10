---
title: text-emphasis-style
slug: Web/CSS/text-emphasis-style
tags:
  - CSS
  - CSS Property
  - CSS Text Decoration
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.text-emphasis-style
---
<div>{{CSSRef}}</div>

<p>The <strong><code>text-emphasis-style</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the appearance of emphasis marks. It can also be set, and reset, using the {{cssxref("text-emphasis")}} shorthand.</p>

<pre class="brush:css no-line-numbers">/* Initial value */
text-emphasis-style: none; /* No emphasis marks */

/* &lt;string&gt; values */
text-emphasis-style: 'x';
text-emphasis-style: '点';
text-emphasis-style: '\25B2';
text-emphasis-style: '*';
text-emphasis-style: 'foo'; /* Should NOT be used. It may be computed to or rendered as 'f' only */

/* Keyword values */
text-emphasis-style: filled;
text-emphasis-style: open;
text-emphasis-style: dot;
text-emphasis-style: circle;
text-emphasis-style: double-circle;
text-emphasis-style: triangle;
text-emphasis-style: filled sesame;
text-emphasis-style: open sesame;

/* Global values */
text-emphasis-style: inherit;
text-emphasis-style: initial;
text-emphasis-style: revert;
text-emphasis-style: unset;
</pre>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>No emphasis marks.</dd>
 <dt><code>filled</code></dt>
 <dd>The shape is filled with solid color. If neither <code>filled</code> nor <code>open</code> is present, this is the default.</dd>
 <dt><code>open</code></dt>
 <dd>The shape is hollow.</dd>
 <dt><code>dot</code></dt>
 <dd>Display small circles as marks. The filled dot is <code>'•'</code> (<code>U+2022</code>), and the open dot is <code>'◦'</code> (<code>U+25E6</code>).</dd>
 <dt><code>circle</code></dt>
 <dd>Display large circles as marks. The filled circle is <code>'●'</code> (<code>U+25CF</code>), and the open circle is <code>'○'</code> (<code>U+25CB</code>).</dd>
 <dt><code>double-circle</code></dt>
 <dd>Display double circles as marks. The filled double-circle is <code>'◉'</code> (<code>U+25C9</code>), and the open double-circle is <code>'◎'</code> (<code>U+25CE</code>).</dd>
 <dt><code>triangle</code></dt>
 <dd>Display triangles as marks. The filled triangle is <code>'▲'</code> (<code>U+25B2</code>), and the open triangle is <code>'△'</code> (<code>U+25B3</code>).</dd>
 <dt><code>sesame</code></dt>
 <dd>Display sesames as marks. The filled sesame is <code>'﹅'</code> (<code>U+FE45</code>), and the open sesame is <code>'﹆'</code> (<code>U+FE46</code>).</dd>
 <dt><code>&lt;string&gt;</code></dt>
 <dd>Display the given string as marks. Authors should not specify more than one <em>character</em> in <code>&lt;string&gt;</code>. The UA may truncate or ignore strings consisting of more than one grapheme cluster.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Basic_example">Basic example</h3>

<pre><code>h2 {
  text-emphasis-style: sesame;
}</code></pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The related properties {{cssxref('text-emphasis-color')}}, {{cssxref('text-emphasis')}}.</li>
 <li>The {{cssxref('text-emphasis-position')}} property allowing to define the position of the emphasis marks.</li>
</ul>
