---
title: Handling Overflow in Multicol
slug: Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol
tags:
  - CSS
  - CSS Multi-column Layout
  - Guide
  - Layout
---
<div>{{CSSRef}}</div>

<p>In this guide we look at how multicol deals with overflow, both inside the column boxes and in situations where there is more content than will fit into the container.</p>

<h2 id="Overflow_inside_column_boxes">Overflow inside column boxes</h2>

<p>An overflow situation happens when an item's size is larger than the column box. For example, the situation could happen when an image in a column is wider than the <code>column-width</code> value or the width of the column based on the number of columns declared with <code>column-count</code>.</p>

<p>In this situation, the content should visibly overflow into the next column, rather than be clipped by the column box. You can see an example of this below, with an image of the expected rendering as, at the time of writing, browsers deal with this differently.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/overflow/image.html", '100%', 800)}}</p>

<p><img alt="" src="image-overflow-multicol.png"></p>

<p>If you want an image to size down to fit the column box, the standard responsive images solution of setting <code>max-width: 100%</code> will achieve that for you.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/overflow/image-max-width.html", '100%', 800)}}</p>

<h2 id="More_columns_than_will_fit">More columns than will fit</h2>

<p>How overflowing columns are handled depends on whether you are in a fragmented media context, such as print, or a continuous media context, such as a web page.</p>

<p>In fragmented media, once a fragment (for example a page) is filled with columns, the columns will move to a new page and fill that up with columns. In continuous media, columns will overflow in the inline direction. On the web this means that you will get a horizontal scrollbar.</p>

<p>The example below shows this overflow behavior. My multicol container has a height and there is more text than space to create columns, therefore we get columns created outside of the container.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/overflow/overflow-inline.html", '100%', 800)}}</p>

<p>In a future version of the specification it would be useful to be able to have overflow columns in continuous media display in the block direction, therefore allowing the reader to scroll down to view the next set of columns.</p>

<h2 id="Using_vertical_media_queries">Using vertical media queries</h2>

<p>One issue with multicol on the web is that, if your columns are taller than the viewport, the reader will need to scroll up and down to read, which is not good user experience. One way to avoid this is to only apply the column properties if you know you have enough height.</p>

<p>In the example below we have used a <code>min-height</code> query to check the height before applying the column properties.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/overflow/min-height.html", '100%', 800)}}</p>

<p>In the final guide in this series we will see <a href="/en-US/docs/Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol">how Multicol works with the Fragmentation spec </a>to give us control over how content breaks between columns.</p>
