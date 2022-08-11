---
title: Basic concepts of multi-column layout
slug: Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol
tags:
  - CSS
  - CSS Multi-column Layout
  - Guide
  - Layout
---
{{CSSRef}}

Multiple-column layout, usually referred to as multicol, is a specification for laying out content into a set of column boxes much like columns in a newspaper. This guide explains how the specification works with some common use case examples.

## Key concepts and terminology

Multicol is unlike any of the other layout methods we have in CSS; it fragments the content, including all descendent elements, into columns. This happens in the same way that content is fragmented into pages when we work with [CSS Paged Media](/en-US/docs/Web/CSS/CSS_Pages) by creating a print stylesheet.

The properties defined by the specification are:

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}}
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}

By adding `column-count` or `column-width` to an element, the element becomes a _multi-column container_ or _multicol container_ for short. The columns are anonymous boxes and described as column boxes in the specification.

## Defining columns

To create a multicol container, you must use at least one of the `column-*` properties, these being `column-count` and `column-width`.

### Specifying the number of columns

The `column-count` property specifies the number of columns that you would like the content to be displayed as. The browser will then assign the correct amount of space to each column box to create the requested number of columns.

In the below example, we use the `column-count` property to create three columns on the `.container` element. The content, including the children of `.container`, is then split between the three columns.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

In the above example, the content is wrapped in paragraph `p` tags with default styling. Therefore, there is a margin above each paragraph. You can see how this margin causes the first line of text to be pushed down. This is because a multicol container creates a new Block Formatting Context (BFC) which means margins on child elements do not collapse with any margin on the container.

### Specifying the width of columns

The `column-width` property is used to set the optimal width for every column box. If you declare a column-width, the browser will work out how many columns of that width will fit into the multicol container and distribute any extra space equally between the columns. Therefore, the column width should be seen as a minimum width, as column boxes are likely to be wider due to the additional space.

The column box will only shrink to be smaller than the declared column width in the case of a single column with less available width than the value of `column-width`.

In the below example, we use the `column-width` property with a value of 200px. We get as many 200 pixel columns as will fit the container, with the extra space shared equally.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}

### Specifying both number and width of columns

If you specify both the properties on a multicol container, then `column-count` will act as a maximum number of columns. Therefore, the behavior as described for `column-width` will happen, until the number of columns in `column-count` is reached. After this point, no more columns will be drawn, and the extra space is distributed evenly between the existing columns, even if there is enough room for more columns of the specified `column-width` size.

When using both properties together, you may get fewer columns than specified in the value for `column-count`.

In this next example, we use `column-width` of 200px and `column-count` of 2. Even if there is space for more than two columns, we get two. If there is not enough space for two columns of 200px, however, we get one.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}

### Shorthand for column properties

You can use the `columns` shorthand to set `column-count` and `column-width`. If you set a length unit, this will be used for `column-width`, set an integer and it will be used for `column-count`. You can set both, separating the two values with a space.

This CSS would give the same result as example 1, `column-count` set to 3.

```css
.container {
  columns: 3;
}
```

This CSS would give the same result as example 2, with `column-width` of 200px.

```css
.container {
  columns: 200px;
}
```

This CSS would give the same result as example 3, with both `column-count` and `column-width` set.

```css
.container {
  columns: 2 200px;
}
```

## Next steps

In this guide, we've learned the basic use of multi-column layout. In the next guide, we will look at how much we can [style the columns themselves](/en-US/docs/Web/CSS/CSS_Columns/Styling_Columns).
