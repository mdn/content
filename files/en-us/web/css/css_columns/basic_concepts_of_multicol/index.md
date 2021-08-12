---
title: Basic Concepts of Multicol
slug: Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol
tags:
  - CSS
  - CSS Multi-column Layout
  - Guide
  - Layout
---
<div>{{CSSRef}}</div>

<p>Multiple-column Layout, usually referred to as multicol, is a specification for laying out content into a set of column boxes much like columns in a newspaper. This guide explains how the specification works with some common use case examples.</p>

<h2 id="Key_Concepts_and_Terminology">Key Concepts and Terminology</h2>

<p>Multicol is unlike any of the other layout methods we have in CSS in that it fragments the content, including all descendent elements, into columns. This happens in the same way that content is fragmented into pages when we work with <a href="/en-US/docs/Web/CSS/CSS_Pages">CSS Paged Media</a>, for example by creating a print stylesheet.</p>

<p>The properties defined by the specification are:</p>

<ul>
 <li>{{cssxref("column-width")}}</li>
 <li>{{cssxref("column-count")}}</li>
 <li>{{cssxref("columns")}}</li>
 <li>{{cssxref("column-rule-color")}}</li>
 <li>{{cssxref("column-rule-style")}}</li>
 <li>{{cssxref("column-rule-width")}}</li>
 <li>{{cssxref("column-rule")}}</li>
 <li>{{cssxref("column-span")}}</li>
 <li>{{cssxref("column-fill")}}</li>
 <li>{{cssxref("column-gap")}}</li>
</ul>

<p>By adding <code>column-count</code> or <code>column-width</code> to an element, that element becomes a <em>multi-column container</em>, or <em>multicol container</em> for short. The columns are anonymous boxes and described as column boxes in the specification.</p>

<h2 id="Defining_columns">Defining columns</h2>

<p>To create a multicol container you must use at least one of the <code>column-*</code> properties, these being <code>column-count</code> and <code>column-width</code>.</p>

<h3 id="The_column-count_property">The <code>column-count</code> property</h3>

<p>The <code>column-count</code> property specifies the number of columns that you would like the content to be displayed as. The browser will then assign the correct amount of space to each column box to create the requested number of columns.</p>

<p>In the below example we use the <code>column-count</code> property to create three columns on the <code>.container</code> element. The content, including the children of <code>.container</code> is then split between the three columns.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}</p>

<p>In the above example the content is wrapped in paragraph <code>p</code> tags with default styling.  Therefore, there is a margin above each paragraph. You can see how this margin causes the first line of text to be pushed down. This is because a multicol container creates a new Block Formatting Context (BFC) which means margins on child elements do not collapse with any margin on the container.</p>

<h3 id="The_column-width_property">The <code>column-width</code> property</h3>

<p>The <code>column-width</code> property is used to set the optimal width for every column box. If you declare a column-width, the browser will work out how many columns of that width will fit into the multicol container and distribute any extra space equally between the columns. Therefore, the column width should be seen as a minimum width, as column boxes are likely to be wider due to the additional space.</p>

<p>The column box will only shrink to be smaller than the declared column width in the case of a single column with less available width than the value of <code>column-width</code>.</p>

<p>In the below example we use the <code>column-width</code> property with a value of 200px. We get as many 200 pixel columns as will fit the container, with the extra space shared equally.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}</p>

<h3 id="Using_column-count_and_column-width_together">Using <code>column-count</code> and <code>column-width</code> together</h3>

<p>If you specify both properties on a multicol container then <code>column-count</code> will act as a maximum number of columns. Therefore the behavior as described for column-width will happen, until the number of columns in column-count is reached. After this point no more columns will be drawn, and the extra space is distributed evenly between the existing columns, even if there is enough room for more columns of the specified <code>column-width</code>  size.</p>

<p>When using both properties together you may get fewer columns than specified in the value for <code>column-count</code>.</p>

<p>In this next example we use <code>column-width</code> of 200px and <code>column-count</code> of 2. Even if there is space for more than two columns, we get two. If there is not enough space for two columns of 200px, however, we get one.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}</p>

<h3 id="The_columns_shorthand">The <code>columns</code> shorthand</h3>

<p>You can use the <code>columns</code>shorthand to set <code>column-count</code> and <code>column-width</code>. If you set a length unit, this will be used for <code>column-width</code>, set an integer and it will be used for <code>column-count</code>. You can set both, separating the two values with a space.</p>

<p>This CSS would give the same result as example 1, <code>column-count</code> set to 3.</p>

<pre>.container {
  columns: 3;
}</pre>

<p>This CSS would give the same result as example 2, with <code>column-width</code> of 200px.</p>

<pre>.container {
  columns: 200px;
}</pre>

<p>This CSS would give the same result as example 3, with both <code>column-count</code> and <code>column-width</code> set.</p>

<pre>.container {
  columns: 2 200px;
}</pre>

<h2 id="Next_Steps">Next Steps</h2>

<p>In this guide we've learned the basic use of Multiple-column Layout. In the next guide, we will look at how much we can <a href="/en-US/docs/Web/CSS/CSS_Columns/Styling_Columns">style the columns themselves</a>.</p>
