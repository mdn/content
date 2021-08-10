---
title: CSS Multi-column Layout
slug: Web/CSS/CSS_Columns
tags:
  - CSS
  - CSS Multi-column Layout
  - Guide
  - Layout
  - Overview
  - Reference
---
<div>{{CSSRef("CSS3 Multicol")}}</div>

<p><strong>CSS Multi-column Layout</strong> is a module of CSS that adds support for multi-column layouts. Support is included for establishing the number of columns in a layout, as well as how content should flow from column to column, gap sizes between columns, and column dividing lines (known as column rules) along with their appearance.</p>

<h2 id="Basic_example">Basic example</h2>

<p>In the following example the {{cssxref("column-count")}} property has been applied to the element with a class of container. As the value of <code>column-count</code> is <code>3</code>, the content is arranged into 3 columns of equal size.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}</p>

<h2 id="Relationship_to_Fragmentation">Relationship to Fragmentation</h2>

<p>Multiple-column Layout is closely related to <a href="/en-US/docs/Web/CSS/CSS_Pages">Paged Media</a>, in that each column box becomes a fragment, much like a printed page becomes a fragment of an overall document. Therefore the properties now defined in the <a href="/en-US/docs/Web/CSS/CSS_Fragmentation">CSS Fragmentation</a> specification are required in order to control how content breaks between columns. </p>

<h2 id="Reference">Reference</h2>

<h3 id="Multiple-column_Layout_Properties">Multiple-column Layout Properties</h3>

<ul>
 <li>{{cssxref("column-count")}}</li>
 <li>{{cssxref("column-fill")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("column-rule")}}</li>
 <li>{{cssxref("column-rule-color")}}</li>
 <li>{{cssxref("column-rule-style")}}</li>
 <li>{{cssxref("column-rule-width")}}</li>
 <li>{{cssxref("column-span")}}</li>
 <li>{{cssxref("column-width")}}</li>
 <li>{{cssxref("columns")}}</li>
</ul>

<h3 id="Related_CSS_Fragmentation_Properties">Related CSS Fragmentation Properties</h3>

<ul>
 <li>{{cssxref("break-after")}}</li>
 <li>{{cssxref("break-before")}}</li>
 <li>{{cssxref("break-inside")}}</li>
 <li>{{cssxref("orphans")}}</li>
 <li>{{cssxref("widows")}}</li>
</ul>

<h2 id="Guides">Guides</h2>

<dl>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol">Basic Concepts of Multicol</a></dt>
 <dd>An overview of the Multiple-column Layout specification</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Columns/Styling_Columns">Styling Columns</a></dt>
 <dd>How to use column rules and manage the spacing between columns.</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Columns/Spanning_Columns">Spanning and Balancing</a></dt>
 <dd>How to make elements span across all columns and controlling the way columns are filled.</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol">Handling Overflow in Multicol</a></dt>
 <dd>What happens when an item overflows the column it is in and what happens when there is too much columned content to fit a container.</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol">Content Breaks in Multicol</a></dt>
 <dd>Introduction to the Fragmentation specification and how to control where column content breaks.</dd>
</dl>

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
   <td>{{SpecName('CSS3 Multicol')}}</td>
   <td>{{Spec2('CSS3 Multicol')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<p>Other CSS layout technologies include:</p>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">CSS Flexible Box Layout</a> (CSS flexbox)</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a></li>
</ul>
