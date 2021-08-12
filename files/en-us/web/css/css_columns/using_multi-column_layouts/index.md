---
title: Using multi-column layouts
slug: Web/CSS/CSS_Columns/Using_multi-column_layouts
tags:
  - Advanced
  - CSS
  - CSS Multi-column Layout
  - Guide
  - Layout
  - Web
---
<div>{{CSSRef}}</div>

<p>The <strong>CSS Multi-column Layout Module</strong> extends the <em>block layout mode</em> to allow the easy definition of multiple columns of text.</span> People have trouble reading text if lines are too long; if it takes too long for the eyes to move from the end of the one line to the beginning of the next, they lose track of which line they were on. Therefore, to make maximum use of a large screen, authors should have limited-width columns of text placed side by side, just as newspapers do.</p>

<p>Unfortunately this is impossible to do with CSS and HTML without forcing column breaks at fixed positions, or severely restricting the markup allowed in the text, or using heroic scripting. This limitation is solved by adding new CSS properties to extend the traditional block layout mode.</p>

<h2 id="Using_columns">Using columns</h2>

<h3 id="Column_count_and_width">Column count and width</h3>

<p>Two CSS properties control whether and how many columns will appear: {{cssxref("column-count")}} and {{cssxref("column-width")}}.</p>

<p>The <code>column-count</code> property sets the number of columns to a particular number. E.g.,</p>

<h2 id="Example_1">Example 1</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="col"&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
  &lt;/p&gt;
  &lt;p&gt;
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
  &lt;p&gt;
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.
  &lt;/p&gt;
  &lt;p&gt;
    Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.
  &lt;/p&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#col {
  column-count: 2;
}
</pre>

<h3 id="Result">Result</h3>

<p>Will display the content in two columns (if you're using a multi-column compliant browser):</p>

<p>{{EmbedLiveSample("Example_1", "100%")}}</p>

<p>The <code>column-width</code> property sets the minimum desired column width. If <code>column-count</code> is not also set, then the browser will automatically make as many columns as fit in the available width.</p>

<h2 id="Example_2">Example 2</h2>

<h3 id="HTML_2">HTML</h3>

<pre class="brush: html">&lt;div id="wid"&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
&lt;/div&gt;
</pre>

<h3 id="CSS_2">CSS</h3>

<pre class="brush: css">#wid {
  column-width: 100px;
}
</pre>

<h3 id="Result_2">Result</h3>

<p>{{EmbedLiveSample("Example_2", "100%")}}</p>

<p>The exact details are described in <a href="https://www.w3.org/TR/css3-multicol/">the CSS3 specification</a>.</p>

<p>In a multi-column block, content is automatically flowed from one column into the next as needed. All HTML, CSS and DOM functionality is supported within columns, as are editing and printing.</p>

<h3 id="The_columns_shorthand">The columns shorthand</h3>

<p>Most of the time, a Web designer will use one of the two CSS properties: {{cssxref("column-count")}} or {{cssxref("column-width")}}. As values for these properties do not overlap, it is often convenient to use the shorthand {{cssxref("columns")}}. E.g.</p>

<p>The CSS declaration <code>column-width: 12em</code> can be replaced by <code>columns: 12em</code>.</p>

<h2 id="Example_3">Example 3</h2>

<h3 id="HTML_3">HTML</h3>

<pre class="brush: html">&lt;div id="col_short"&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
&lt;/div&gt;
</pre>

<h3 id="CSS_3">CSS</h3>

<pre class="brush: css">#col_short {
  columns: 12em;
}
</pre>

<p>{{EmbedLiveSample("Example_3", "100%")}}</p>

<p>The CSS declaration <code>column-count: 4</code> can be replaced by <code>columns: 4</code>.</p>

<h2 id="Example_4">Example 4</h2>

<h3 id="HTML_4">HTML</h3>

<pre class="brush: html">&lt;div id="columns_4"&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
&lt;/div&gt;
</pre>

<h3 id="CSS_4">CSS</h3>

<pre class="brush: css">#columns_4 {
  columns: 4;
}
</pre>

<h3 id="Result_3">Result</h3>

<p>{{EmbedLiveSample("Example_4", "100%")}}</p>

<p>The two CSS declarations <code>column-width: 8em</code> and <code>column-count: 12</code> can be replaced by <code>columns: 12 8em</code>.</p>

<h2 id="Example_5">Example 5</h2>

<h3 id="HTML_5">HTML</h3>

<pre class="brush: html">&lt;div id="columns_12"&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
&lt;/div&gt;
</pre>

<h3 id="CSS_5">CSS</h3>

<pre class="brush: css">#columns_12 {
  columns: 12 8em;
}
</pre>

<h3 id="Result_4">Result</h3>

<p>{{EmbedLiveSample("Example_5", "100%")}}</p>

<h3 id="Height_Balancing">Height Balancing</h3>

<p>The CSS3 Column specification requires that the column heights must be balanced: that is, the browser automatically sets the maximum column height so that the heights of the content in each column are approximately equal. Firefox does this.</p>

<p>However, in some situations it is also useful to set the maximum height of the columns explicitly, and then lay out content starting at the first column and creating as many columns as necessary, possibly overflowing to the right. Therefore, if the height is constrained, by setting the CSS {{cssxref("height")}} or {{cssxref("max-height")}} properties on a multi-column block, each column is allowed to grow to that height and no further before adding new column. This mode is also much more efficient for layout.</p>

<h3 id="Column_Gaps">Column Gaps</h3>

<p>There is a gap between columns. The recommended default is <code>1em</code>. This size can be changed by applying the {{cssxref("column-gap")}} property to the multi-column block:</p>

<h2 id="Example_6">Example 6</h2>

<h3 id="HTML_6">HTML</h3>

<pre class="brush: html">&lt;div id="column_gap"&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
&lt;/div&gt;
</pre>

<h3 id="CSS_6">CSS</h3>

<pre class="brush: css">#column_gap {
  column-count: 5;
  column-gap: 2em;
}
</pre>

<h3 id="Result_5">Result</h3>

<p>{{EmbedLiveSample("Example_6", "100%")}}</p>

<h2 id="Graceful_Degradation">Graceful Degradation</h2>

<p>The column properties will just be ignored by non-columns-supporting browsers. Therefore it's relatively easy to create a layout that will display in a single column in those browsers and use multiple columns in supporting browsers.</p>

<h2 id="Conclusion">Conclusion</h2>

<p>CSS3 columns are a layout primitive that will help Web developers make the best use of screen real estate. Imaginative developers may find many uses for them, especially with the automatic height balancing feature.</p>
