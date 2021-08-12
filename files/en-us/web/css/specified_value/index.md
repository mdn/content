---
title: Specified value
slug: Web/CSS/specified_value
tags:
  - CSS
  - Guide
  - Reference
---
<div>{{CSSRef}}</div>

<p>The <strong>specified value</strong> of a <a href="/en-US/docs/Web/CSS">CSS</a> property is the value it receives from the document's style sheet. The specified value for a given property is determined according to the following rules:</p>

<ol>
 <li>If the document's style sheet explicitly specifies a value for the property, the given value will be used.</li>
 <li>If the document's style sheet doesn't specify a value but it is an inherited property, the value will be taken from the parent element.</li>
 <li>If none of the above pertain, the element's <a href="/en-US/docs/Web/CSS/initial_value">initial value</a> will be used.</li>
</ol>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;My specified color is given explicitly in the CSS.&lt;/p&gt;

&lt;div&gt;The specified values of all my properties default to their
    initial values, because none of them are given in the CSS.&lt;/div&gt;

&lt;div class="fun"&gt;
  &lt;p&gt;The specified value of my font family is not given explicitly
      in the CSS, so it is inherited from my parent. However,
      the border is not an inheriting property.&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.fun {
  border: 1px dotted pink;
  font-family: fantasy;
}

p {
  color: green;
}
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples", 500, 220)}}</p>

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
   <td>{{SpecName("CSS2.2", "cascade.html#specified-value", "cascaded value")}}</td>
   <td>{{Spec2("CSS2.2")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "cascade.html#specified-value", "cascaded value")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{CSS_key_concepts}}</li>
</ul>
