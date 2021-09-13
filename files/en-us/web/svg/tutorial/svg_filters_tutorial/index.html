---
title: SVG Filters Tutorial
slug: Web/SVG/Tutorial/SVG_Filters_Tutorial
tags:
  - SVG filters primitives
---
<h2 id="Filters">Filters </h2>

<p>SVG allows us to use similar tools as the bitmap description language such as the use of shadow, blur effects or even merging the results of different filters. With the filter element &lt;<code>filter</code>&gt; it is possible to add these effects and later on attach them to an object.</p>

<p>Filters act like layers. When creating them, try applying and testing the effect step by step.</p>

<p>This element has different attributes that help us create the clipping region. Between the filter tags, we can define the <em>primitives</em> that allow us to implement the desired effect. One of these primitives is the <a href="https://www.w3.org/TR/SVG/filters.html#feGaussianBlurElement">feGaussianBlur</a>. The keyword <a href="https://www.w3.org/TR/SVG/filters.html#SourceAlpha">SourceAlpha</a> identifies the input for this primitive, is in this case input '<code>in</code>'. The amount of blur to be applied is done using the <code>stdDeviation </code>attribute<code>.</code></p>

<h3 id="SVG_filter">SVG filter example</h3>

<pre class="brush: html">&lt;defs&gt;
  &lt;filter id=&quot;drop-shadow&quot;&gt;
  &lt;feGaussianBlur in=&quot;SourceAlpha&quot; stdDeviation=&quot;3&quot;/&gt;
  &lt;/filter&gt;
&lt;/defs&gt;

&lt;g id=&quot;ghost&quot; style=&quot;filter: url(#drop-shadow);&quot;/&gt;
 &lt;!--Ghost drawing in here--&gt;
&lt;/g&gt;
</pre>

<p>This above example will not produced the desired output. Instead we need to add more filter primitives which will produce the desire rendering. By adding <code><a href="https://www.w3.org/TR/SVG/filters.html#feOffsetElement">feoffset</a> </code>and<code> result, </code>the effect layer is defined</p>

<p><code><strong>&lt;result&gt;</strong> </code>attribute is a reference that can be use later. It is quite different to an XML id and only can be referenced within the actual <code>filter. </code><strong>&lt;<code>feoffset</code>&gt;</strong> primitive has the blur result from the Gaussian blur. <strong>&lt;<code>feMerge</code>&gt;</strong> primitive contains the nodes <strong>&lt;<code>feMergeNode</code>&gt;</strong> taking as input the result offsetBlur , this will allow it to appear below the  <code>sourceGraphic</code></p>

<h3 id="More_filter_primitives">Implementation of more primitives</h3>

<pre class="brush: html">&lt;defs&gt;
  &lt;filter id=&quot;drop-shadow&quot;&gt;
    &lt;feGaussianBlur in=&quot;SourceAlpha&quot; stdDeviation=&quot;3&quot; result=&quot;blur&quot;/&gt;
    &lt;feoffset in=&quot;blur&quot; dx=&quot;4&quot; dy=&quot;4&quot; result=&quot;offsetBlur&quot;/&gt;
    &lt;feMerge&gt;
      &lt;feMergeNode in=&quot;offsetBlur&quot;/&gt;
      &lt;feMergeNode in=&quot;SourceGraphic&quot;/&gt;
    &lt;/feMerge&gt;
  &lt;/filter&gt;
&lt;/defs&gt; 
</pre>
