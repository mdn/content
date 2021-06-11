---
title: Backwards Compatibility of Flexbox
slug: Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox
tags:
  - '@supports'
  - CSS
  - CSS Tables
  - Flexible Boxes
  - Floats
  - Guide
  - fallbacks
  - feature queries
  - flexbox
  - inline-block
---
<div>{{CSSRef}}</div>

<p>Flexbox is very well supported across modern browsers, however there are a few issues that you might run into. In this guide we will look at how well flexbox is supported in browsers, and look at some potential issues, resources and methods for creating workarounds and fallbacks.</p>

<h2 id="The_history_of_flexbox">The history of flexbox</h2>

<p>As with all CSS specifications the Flexbox specification went through a large number of changes before it became the Candidate Recommendation that we have today. As a Candidate Recommendation we should not see large changes at this point to the spec, however this has not been the case with past flexbox iterations.</p>

<p>Flexbox was implemented in an experimental way in several web browsers. At the time the method of creating experimental implementations was to use a vendor prefix. The idea of these prefixes was to allow implementations of the spec to be tested and explored by browser engineers and web developers alike without clashing with other implementations. The idea was not to use the experimental implementations in production code. However, prefixes ultimately were used in production code, and changes to the experimental specification caused people to need to update their sites to keep up.</p>

<p><a href="https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/">In 2009</a>, the specification looked quite different. To create a flex container you would use <code>display: box</code> and there were a number of <code>box-*</code> properties, which did things that you will recognize from flexbox today.</p>

<p>There was an <a href="https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/">update to the spec</a> that updated the syntax to <code>display: flexbox</code> — this was again vendor-prefixed.</p>

<p>Ultimately the specification was updated to define <code>display: flex</code> as the way to create a flex container. Browser support for the up-to-date version of the specification is excellent from this point forward.</p>

<p>There are a few old articles in existence that refer to the older versions of flexbox, which are pretty easy to identify due to the change in the way that a flex container is created. If you find something referring to <code>display: box</code> or <code>display: flexbox</code> this is outdated information.</p>

<h2 id="Status_in_browsers">Status in browsers</h2>

<p>Browser support for flexbox is excellent, and the majority of browsers do not need a prefix at this point. Safari was the last of the major browsers to remove prefixes, with the release of Safari 9 in 2015. The two browsers you should still keep in mind for cross-browser compatibility are:</p>

<ul>
 <li>Internet Explorer 10, which implemented the <code>display: flexbox</code> version of the specification with the <code>-ms-</code> prefix.</li>
 <li>UC Browser, which still supports the 2009 <code>display: box</code> version only with the <code>-webkit-</code> prefix.</li>
</ul>

<p>Note also that Internet Explorer 11 supports the modern <code>display: flex</code> specification however it has a number of bugs in the implementation.</p>

<h2 id="Common_issues">Common issues</h2>

<p>The majority of issues with flexbox relate to the changes in the specification, as it has been developed, and the fact that many of us were attempting to use an experimental specification in production. If you are trying to ensure backwards compatibility with old versions of browsers, and in particular IE10 and 11, the <a href="https://github.com/philipwalton/flexbugs">Flexbugs</a> site is a helpful resource. You will see that many of the listed bugs apply to old browser versions and are fixed in current browsers. Each of the bugs has a workaround listed — which can save you many hours of puzzling.</p>

<p>If you want to include very old browsers with flexbox support then you can include the vendor prefixes in your CSS in addition to the unprefixed version. This is becoming less and less of a requirement today as support is widespread. </p>

<pre class="brush: css">.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}</pre>

<p><a href="https://autoprefixer.github.io/">Autoprefixer Online</a> is a useful way to see which prefixes are recommended, depending on how many versions you wish to go back with browser support. You can also check <a href="https://caniuse.com/#feat=flexbox">Can I Use</a> for information about when prefixes were removed in browsers to make your decision.</p>

<h2 id="Useful_fallback_techniques">Useful fallback techniques</h2>

<p>Given that flexbox usage is initiated with value of the {{cssxref("display")}} property, when needing to support very old browsers which do not support flexbox at all, fallbacks can be created by overwriting one layout method with another. The specification defines what happens if you use other layout methods on an element which then becomes a flex item.</p>

<h3 id="Floated_items">Floated items</h3>

<blockquote>
<p>“float and clear do not create floating or clearance of flex item, and do not take it out-of-flow.” - <a href="https://www.w3.org/TR/css-flexbox-1/#flex-containers">3. Flex Containers</a></p>
</blockquote>

<p>In the following live example, I have floated two blocks and then set <code>display: flex</code> on the container. The items are now flex items, which means they stretch to equal height. Any float behavior does not apply.</p>

<p>You can test the fallback behavior by removing <code>display: flex</code> from the wrapper.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/browsers/float.html", '100%', 550)}}</p>

<h3 id="display_inline-block">display: inline-block</h3>

<p>Once an <code>inline-block</code> item becomes a flex item, it is <code>block</code>ified and so behavior of <code>display: inline-block</code> like preserving white space between items no longer applies.</p>

<p>Remove <code>display: flex</code> to see the fallback behavior. You'll see white space added between the items, which is what happens when using <code>display: inline-block</code> as it prefers white space like other inline items.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/browsers/inline-block.html", '100%', 550)}}</p>

<h3 id="display_table-">display: table- </h3>

<p>The CSS table display properties are potentially very useful as a fallback, due to the fact that they allow design patterns such as full height columns and vertical centering and work back as far as Internet Explorer 8.</p>

<p>If you use <code>display: table-cell</code> on an item in your HTML it takes on the styling of an HTML table cell. CSS creates anonymous boxes to represent these items so that you do not need to wrap each item in a wrapper to represent the HTML table row, and a second one to represent the table element itself, You can’t see or style these anonymous boxes; they are there purely to fix up the tree.</p>

<p>If you then declare <code>display: flex</code> on the parent item, these anonymous boxes do not get created and so your item remains a direct child and can become a flex item — losing any of the table display features.</p>

<blockquote>
<p>“Note: Some values of display normally trigger the creation of anonymous boxes around the original box. If such a box is a flex item, it is blockified first, and so anonymous box creation will not happen. For example, two contiguous flex items with display: table-cell will become two separate display: block flex items, instead of being wrapped into a single anonymous table.” - <a href="https://www.w3.org/TR/css-flexbox-1/#flex-items">4. Flex Items</a></p>
</blockquote>

<p>{{EmbedGHLiveSample("css-examples/flexbox/browsers/table-cell.html", '100%', 550)}}</p>

<h3 id="The_vertical-align_property">The vertical-align property</h3>

<p>The live example below demonstrates use of the {{cssxref("vertical-align")}} property along with <code>display: inline-block</code>. Both <code>display: table-cell</code> and <code>display: inline-block</code> allow for the use of this property. Use of <code>vertical-align</code> enables vertical alignment prior to flexbox. The property is ignored by flexbox and so you can use it in conjunction with <code>display: table-cell</code> or <code>display: inline-block</code> as a fallback and then safely use box alignment properties in flexbox instead.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/browsers/vertical-align.html", '100%', 550)}}</p>

<h2 id="Feature_Queries_and_flexbox">Feature Queries and flexbox</h2>

<p>You can use <a href="/en-US/docs/Web/CSS/@supports">feature queries</a> to detect flexbox support:</p>

<pre class="brush: css">@supports (display: flex) {
  // code for supporting browsers
}</pre>

<p>Note that Internet Explorer 11 does not support feature queries yet <em>does</em> support flexbox. If you decide the IE11 implementation is too buggy and you wish to serve it the fallback layout then you could use feature queries to serve flexbox rules only to those browsers with good flexbox support. Remember that if you want to include versions of browsers that had vendor-prefixed flexbox you would need to include the prefixed version in your feature query. The following feature query would include UC Browser, which supports feature queries and old flexbox syntax, prefixed:</p>

<pre class="brush: css">@supports (display: flex) or (display: -webkit-box) {
  // code for supporting browsers
}</pre>

<p>For more information about using Feature Queries see <a href="https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/">Using Feature Queries in CSS</a> on the Mozilla Hacks blog.</p>

<h2 id="Conclusion">Conclusion</h2>

<p>While I’ve spent some time in this guide going through potential issues and fallbacks, flexbox is very much ready for you to be using in production work. This guide will help you in those cases where you do come across an issue or have the requirement to support older browsers.</p>
