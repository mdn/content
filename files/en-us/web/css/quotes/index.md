---
title: quotes
slug: Web/CSS/quotes
tags:
  - CSS
  - CSS Property
  - Generated Content
  - Layout
  - Reference
  - Web
  - 'recipe:css-property'
browser-compat: css.properties.quotes
---
<div>{{CSSRef}}</div>

<p>The <strong><code>quotes</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets how the browser should render quotation marks that are added using the <code>open-quotes</code> or <code>close-quotes</code> values of the CSS <code><a href="/en-US/docs/Web/CSS/content">content</a></code> property.</p>

<div>{{EmbedInteractiveExample("pages/css/quotes.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* Keyword value */
quotes: none;
quotes: auto;

/* &lt;string&gt; values */
quotes: "«" "»";           /* Set <em>open-quote</em> and <em>close-quote</em> to the French quotation marks */
quotes: "«" "»" "‹" "›";   /* Set two levels of quotation marks */

/* Global values */
quotes: inherit;
quotes: initial;
quotes: revert;
quotes: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>The <code>open-quote</code> and <code>close-quote</code> values of the {{cssxref("content")}} property produce no quotation marks.</dd>
 <dt><code>auto</code></dt>
 <dd>Appropriate quote marks will be used for whatever language value is set on the selected elements (i.e. via the {{htmlattrxref("lang")}} attribute).</dd>
 <dt><code>[&lt;string&gt; &lt;string&gt;]+</code></dt>
 <dd>One or more pairs of {{cssxref("&lt;string&gt;")}} values for <code>open-quote</code> and <code>close-quote</code>. The first pair represents the outer level of quotation, the second pair is for the first nested level, next pair for third level and so on.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Basic_quote_marks">Basic quote marks</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;q&gt;To be or not to be. That's the question!&lt;/q&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">q {
  quotes: '"' '"' "'" "'";
}
q::before {
  content: open-quote;
}
q::after {
  content: close-quote;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Basic_quote_marks', "100%", 60)}}</p>

<h3 id="Auto_quotes">Auto quotes</h3>

<p>For most browsers, the default value of <code>quotes</code> is <code>auto</code> (Firefox 70+), or the browser otherwise had this default behavior (Chromiums, Safari, Edge), so this example works without it being explicitly being set.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div lang="fr"&gt;
  &lt;q&gt;<span class="tlid-translation translation" lang="fr">Ceci est une citation française.</span>&lt;/q&gt;
&lt;div&gt;
&lt;hr&gt;
&lt;div lang="ru"&gt;
  &lt;q&gt;<span class="tlid-translation translation" lang="ru">Это русская цитата</span>&lt;/q&gt;
&lt;div&gt;
&lt;hr&gt;
&lt;div lang="de"&gt;
  &lt;q&gt;<span class="tlid-translation translation" lang="de">Dies ist ein deutsches Zitat</span>&lt;/q&gt;
&lt;div&gt;
&lt;hr&gt;
&lt;div lang="en"&gt;
  &lt;q&gt;This is an English quote.&lt;/q&gt;
&lt;div&gt;
</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">/*q {
  quotes: auto;
}*/
</pre>

<h4 id="Result_2">Result</h4>

<p>{{EmbedLiveSample('Auto_quotes', "100%", 200)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{ Cssxref("content") }}</li>
</ul>
