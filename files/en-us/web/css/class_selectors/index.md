---
title: Class selectors
slug: Web/CSS/Class_selectors
tags:
  - CSS
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.class
---
<div>{{CSSRef}}</div>

<p>The <a href="/en-US/docs/CSS">CSS</a> <strong>class selector</strong> matches elements based on the contents of their {{htmlattrxref("class")}} attribute.</p>

<pre class="brush: css no-line-numbers">/* All elements with class="spacious" */
.spacious {
  margin: 2em;
}

/* All &lt;li&gt; elements with class="spacious" */
li.spacious {
  margin: 2em;
}

/* All &lt;li&gt; elements with a class list that includes both "spacious" and "elegant" */
/* For example, class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}
</pre>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">.class_name { <em>style properties</em> }</pre>

<p>Note that this is equivalent to the following {{Cssxref("Attribute_selectors", "attribute selector")}}:</p>

<pre class="brush: css">[class~=class_name] { <em>style properties</em> }</pre>

<h2 id="Examples">Examples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.red {
  color: #f33;
}

.yellow-bg {
  background: #ffa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="red"&gt;This paragraph has red text.&lt;/p&gt;
&lt;p class="red yellow-bg"&gt;This paragraph has red text and a yellow background.&lt;/p&gt;
&lt;p class="red fancy"&gt;This paragraph has red text and "fancy" styling.&lt;/p&gt;
&lt;p&gt;This is just a regular paragraph.&lt;/p&gt;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Examples')}}</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#class-html', 'class selectors')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>No changes</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#class-html', 'class selectors')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#class-html', 'child selectors')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#class-as-selector', 'child selectors')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Selectors">CSS Selectors</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors">Learn CSS: Selectors</a></li>
</ul>
