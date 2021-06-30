---
title: break-inside
slug: Web/CSS/break-inside
tags:
  - CSS
  - CSS Fragmentation
  - CSS Multi-column Layout
  - CSS Property
  - NeedsExample
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.break-inside
---
<div>{{CSSRef}}</div>

<p>The <strong><code>break-inside</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.</p>

<pre class="brush:css no-line-numbers">/* Keyword values */
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;

/* Global values */
break-inside: inherit;
break-inside: initial;
break-inside: revert;
break-inside: unset;
</pre>

<p>Each possible break point (in other words, each element boundary) is affected by three properties: the {{cssxref("break-after")}} value of the previous element, the {{cssxref("break-before")}} value of the next element, and the <code>break-inside</code> value of the containing element.</p>

<p>To determine if a break must be done, the following rules are applied:</p>

<ol>
 <li>If any of the three concerned values is a <em>forced break value</em> (<code>always</code>, <code>left</code>, <code>right</code>, <code>page</code>, <code>column</code>, or <code>region</code>), it has precedence. If more than one of them are such a break, the value of the element that appears the latest in the flow is used. Thus, the <code>break-before</code> value has precedence over the <code>break-after</code> value, which in turn has precedence over the <code>break-inside</code> value.</li>
 <li>If any of the three concerned values is an <em>avoid break value</em> (<code>avoid</code>, <code>avoid-page</code>, <code>avoid-region</code>, or <code>avoid-column</code>), no such break will be applied at that point.</li>
</ol>

<p>Once forced breaks have been applied, soft breaks may be added if needed, but not on element boundaries that resolve in a corresponding <code>avoid</code> value.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>break-inside</code> property is specified as one of the keyword values from the list below.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>Allows, but does not force, any break (page, column, or region) to be inserted within the principal box.</dd>
 <dt><code>avoid</code></dt>
 <dd>Avoids any break (page, column, or region) from being inserted within the principal box.</dd>
 <dt><code>avoid-page</code></dt>
 <dd>Avoids any page break within the principal box.</dd>
 <dt><code>avoid-column</code></dt>
 <dd>Avoids any column break within the principal box.</dd>
 <dt><code>avoid-region</code> {{experimental_inline}}</dt>
 <dd>Avoids any region break within the principal box.</dd>
</dl>

<h2 id="Page_break_aliases">Page break aliases</h2>

<p>For compatibility reasons, the legacy {{cssxref("page-break-inside")}} property should be treated by browsers as an alias of <code>break-inside</code>. This ensures that sites using <code>page-break-inside</code> continue to work as designed. A subset of values should be aliased as follows:</p>

<table>
 <thead>
  <tr>
   <th scope="col">page-break-inside</th>
   <th scope="col">break-inside</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>auto</code></td>
   <td><code>auto</code></td>
  </tr>
  <tr>
   <td><code>avoid</code></td>
   <td><code>avoid</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Avoiding_breaking_inside_a_figure">Avoiding breaking inside a figure</h3>

<p>In the following example we have a container that contains an <code>&lt;h1&gt;</code> spanning all columns (achieved using <code>column-span: all</code>) and a series of paragraphs laid out in multiple columns using <code>column-width: 200px</code>. We also have a <code>&lt;figure&gt;</code> containing an image and a caption.</p>

<p>By default, it is possible for you to get a break between the image and its caption, which is not what we want. To avoid this, we have set <code>break-inside: avoid</code> on the <code>&lt;figure&gt;</code>, which causes them to always stay together.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;article&gt;
  &lt;h1&gt;Main heading&lt;/h1&gt;

  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus. Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque dapibus, eu lacinia lectus dictum.&lt;/p&gt;

  &lt;figure&gt;
    &lt;img src="https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png"&gt;
    &lt;figcaption&gt;The Firefox logo — fox wrapped around the world&lt;/figcaption&gt;
  &lt;/figure&gt;

  &lt;p&gt;Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie nec nisi.&lt;/p&gt;

  &lt;p&gt;In finibus viverra enim vel suscipit. Quisque consequat velit eu orci malesuada, ut interdum tortor molestie. Proin sed pellentesque augue. Nam risus justo, faucibus non porta a, congue vel massa. Cras luctus lacus nisl, sed tincidunt velit pharetra ac. Duis suscipit faucibus dui sed ultricies.&lt;/p&gt;
&lt;/article&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">html {
  font-family: helvetica, arial, sans-serif;
}

body {
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  column-span: all;
}

h1 + p {
  margin-top: 0;
}

p {
  line-height: 1.5;
  break-after: column;
}

figure {
  break-inside: avoid;
}

img {
  max-width: 70%;
  display: block;
  margin: 0 auto;
}

figcaption {
  font-style: italic;
  font-size: 0.8rem;
  width: 70%;
}

article {
  column-width: 200px;
  gap: 20px;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Avoiding_breaking_inside_a_figure', '100%', 600)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h3 id="Notes_on_compatibility">Notes on compatibility</h3>

<p>Prior to Firefox 65, the older property of {{cssxref("page-break-inside")}} will work in Firefox to prevent breaks in columns, as well as pages. Add both properties for backwards compatibility.</p>

<p>For older WebKit-based browsers, the prefixed property <code>-webkit-column-break-inside</code> can be used to control column breaks.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">Multiple-column Layout</a></li>
 <li><a href="https://www.smashingmagazine.com/2019/02/css-fragmentation/">Breaking Boxes With CSS Fragmentation</a></li>
</ul>
