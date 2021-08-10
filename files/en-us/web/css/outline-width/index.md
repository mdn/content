---
title: outline-width
slug: Web/CSS/outline-width
tags:
  - CSS
  - CSS Outline
  - CSS Property
  - Layout
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.outline-width
---
<div>{{CSSRef}}</div>

<p>The <a href="/en-US/docs/Web/CSS">CSS</a> <strong><code>outline-width</code></strong> property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the {{cssxref("border")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/outline-width.html")}}</div>


<p>It is often more convenient to use the shorthand property {{cssxref("outline")}} when defining the appearance of an outline.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* Keyword values */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* &lt;length&gt; values */
outline-width: 1px;
outline-width: 0.1em;

/* Global values */
outline-width: inherit;
outline-width: initial;
outline-width: revert;
outline-width: unset;</pre>

<p>The <code>outline-width</code> property is specified as any one of the values listed below.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>The width of the outline specified as a <code>&lt;length&gt;</code>.</dd>
 <dt><code>thin</code></dt>
 <dd>Depends on the user agent. Typically equivalent to <code>1px</code> in desktop browsers (including Firefox).</dd>
 <dt><code>medium</code></dt>
 <dd>Depends on the user agent. Typically equivalent to <code>3px</code> in desktop browsers (including Firefox).</dd>
 <dt><code>thick</code></dt>
 <dd>Depends on the user agent. Typically equivalent to <code>5px</code> in desktop browsers (including Firefox).</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_an_elements_outline_width">Setting an element's outline width</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;span id="thin"&gt;thin&lt;/span&gt;
&lt;span id="medium"&gt;medium&lt;/span&gt;
&lt;span id="thick"&gt;thick&lt;/span&gt;
&lt;span id="twopixels"&gt;2px&lt;/span&gt;
&lt;span id="oneex"&gt;1ex&lt;/span&gt;
&lt;span id="em"&gt;1.2em&lt;/span&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}

</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Setting_an_elements_outline_width', '100%', '80')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("outline")}}</li>
 <li>{{cssxref("outline-color")}}</li>
 <li>{{cssxref("outline-style")}}</li>
</ul>
