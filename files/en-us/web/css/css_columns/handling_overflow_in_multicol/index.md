---
title: Handling overflow in multi-column layout
slug: Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol
tags:
  - CSS
  - CSS Multi-column Layout
  - Guide
  - Layout
---
{{CSSRef}}

In this guide, we look at how to deal with overflow in a multi-column (_multicol_) layout, both inside the column boxes and in situations where there is more content than will fit into the container.

## Overflow inside column boxes

An overflow situation happens when an item's size is larger than the column box. For example, the situation could happen when an image in a column is wider than the `column-width` value or the width of the column based on the number of columns declared with `column-count`.

In this situation, the content should visibly overflow into the next column, rather than be clipped by the column box. You can see an example of this below, with an image of the expected rendering as, at the time of writing, browsers deal with this differently.

{{EmbedGHLiveSample("css-examples/multicol/overflow/image.html", '100%', 800)}}

![There are two columns of text. In the left column there is a photo that is wider than the column. The image expands into that second column, appearing behind the text of the right column. The flow of text in the right column isn't effected by the protruding photo, but the appearance is.](image-overflow-multicol.png)

If you want an image to size down to fit the column box, the standard responsive images solution of setting `max-width: 100%` will achieve that for you.

{{EmbedGHLiveSample("css-examples/multicol/overflow/image-max-width.html", '100%', 800)}}

## More columns than will fit

How overflowing columns are handled depends on whether the media context is fragmented, such as print, or is continuous, such as a web page.

In fragmented media, after a fragment (for example, a page) is filled with columns, the columns will move to a new page and fill that up with columns. In continuous media, columns will overflow in the inline direction. On the web this means that you will get a horizontal scrollbar.

The example below shows this overflow behavior. The multicol container has a height and there is more text than space to create columns; therefore, we get columns created outside of the container.

{{EmbedGHLiveSample("css-examples/multicol/overflow/overflow-inline.html", '100%', 800)}}

In a future version of the specification, it would be useful to be able to have overflow columns in continuous media display in the block direction, therefore allowing the reader to scroll down to view the next set of columns.

## Using vertical media queries

One issue with multicol on the web is that, if your columns are taller than the viewport, the reader will need to scroll up and down to read, which is not good user experience. One way to avoid this is to only apply the column properties if you know you have enough height.

In the example below, we have used a `min-height` query to check the height before applying the column properties.

{{EmbedGHLiveSample("css-examples/multicol/overflow/min-height.html", '100%', 800)}}

## Next steps

In the final guide in this series, we will see [how multicol works with the Fragmentation spec](/en-US/docs/Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol) to give us control over how content breaks between columns.
