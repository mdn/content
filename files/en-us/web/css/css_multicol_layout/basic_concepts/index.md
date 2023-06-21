---
title: Basic concepts of multi-column layout
slug: Web/CSS/CSS_multicol_layout/Basic_concepts
page-type: guide
---

{{CSSRef}}

Multi-column layout, usually referred to as multicol layout, is a specification for laying out content into a set of column boxes much like columns in a newspaper. This guide explains how the specification works with some common use case examples.

## Key properties

Multicol layout is unlike any of the other layout methods in CSS; it fragments the content, including all descendant elements, into columns. This happens in the same way that content is fragmented into pages when we work with [CSS paged media](/en-US/docs/Web/CSS/CSS_paged_media) by creating a print stylesheet.

In this and subsequent guides, we will be discussing the following properties defined in the [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout) module:

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}} shorthand
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}} shorthand
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}

## Defining columns

By adding the `column-count` or the `column-width` property to an element, or using the `columns` shorthand, the element becomes a _multi-column container_ or _multicol container_ for short. The columns are anonymous boxes; they're described as _column boxes_ in the specification.

### Specifying the number of columns

The `column-count` property specifies the number of columns that you would like the content to be displayed as. The browser will then assign the correct amount of space to each column box to create the requested number of columns.

In the below example, we use the `column-count` property to create three columns on the `.container` element. The content, including the children of `.container`, is then split between the three columns.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

In the above example, the content is wrapped within the paragraph `<p>` tags with the default styling. Therefore, there is a margin above each paragraph. You can see how this margin causes the first line of text to be pushed down. This is because a multicol container creates a [block formatting context (BFC)](/en-US/docs/Web/Guide/CSS/Block_formatting_context) because of which margins on child elements do not collapse with any margin on the container.

### Specifying the width of columns

The `column-width` property is used to set the optimal width for every column box. If you declare a column width, the browser will work out how many columns of that width will fit into the multicol container and distribute any extra space equally between the columns. Therefore, the column width should be seen as minimum width because the column boxes are likely to be wider due to the additional space.

In the case of a single column with less width available than the value of `column-width`, the column box will shrink to be smaller than the declared column width.

In the example below, the `column-width` property is set to `200px`. We get as many 200-pixel columns as will fit the container, with the extra space shared equally.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}

### Specifying both number and width of columns

If you specify both the properties on a multicol container, then `column-count` will act as a maximum number of columns. Therefore, the behavior as described for `column-width` will happen, until the number of columns in `column-count` is reached. After this point, no more columns will be drawn, and the extra space is distributed evenly between the existing columns, even if there is enough room for more columns of the specified `column-width` size.

When using both properties together, you may get fewer columns than specified in the value for `column-count`.

In this next example, we use `column-width` of `200px` and `column-count` of `2`. Even if there is space for more than two columns, we get two. If there is not enough space for two columns of at least 200 pixels each, we get one.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}

### Shorthand for column properties

You can use the `columns` shorthand to set the `column-count` and `column-width` values. If you specify a length unit, the value will be used for `column-width`, and if you specify an integer, the value will be used for `column-count`. You can set both the properties, separating the two values with a space.

This CSS would give the same result as [example 1](#specifying_the_number_of_columns), with `column-count` set to `3`.

```css
.container {
  columns: 3;
}
```

This CSS would give the same result as [example 2](#specifying_the_width_of_columns), with `column-width` of `200px`.

```css
.container {
  columns: 200px;
}
```

This CSS would give the same result as [example 3](#specifying-both-number-and-width-of-columns), with both `column-count` and `column-width` set.

```css
.container {
  columns: 2 200px;
}
```

## Next steps

In this guide, we've learned the basic use of multi-column layout. In the next guide, we will look at how much we can [style the columns themselves](/en-US/docs/Web/CSS/CSS_multicol_layout/Styling_columns).
