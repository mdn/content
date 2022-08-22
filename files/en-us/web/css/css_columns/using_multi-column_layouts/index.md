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
{{CSSRef}}

The **CSS Multi-column Layout Module** extends the _block layout mode_ to allow the easy definition of multiple columns of text. People have trouble reading text if lines are too long; if it takes too long for the eyes to move from the end of the one line to the beginning of the next, they lose track of which line they were on. Therefore, to make maximum use of a large screen, authors should have limited-width columns of text placed side by side, just as newspapers do.

Unfortunately this is impossible to do with CSS and HTML without forcing column breaks at fixed positions, or severely restricting the markup allowed in the text, or using heroic scripting. This limitation is solved by adding new CSS properties to extend the traditional block layout mode.

## Using columns

### Column count and width

Two CSS properties control whether and how many columns will appear: {{cssxref("column-count")}} and {{cssxref("column-width")}}.

The `column-count` property sets the number of columns to a particular number. E.g.,

## Example 1

### HTML

```html
<div id="col">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
  </p>
  <p>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.
  </p>
  <p>
    Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

### CSS

```css
#col {
  column-count: 2;
}
```

### Result

The content will be displayed in two columns (if you're using a multi-column compliant browser):

{{EmbedLiveSample("Example_1", "100%")}}

The `column-width` property sets the minimum desired column width. If `column-count` is not also set, then the browser will automatically make as many columns as fit in the available width.

## Example 2

### HTML

```html
<div id="wid">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#wid {
  column-width: 100px;
}
```

### Result

{{EmbedLiveSample("Example_2", "100%")}}

The exact details are described in [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/css-multicol-1/).

In a multi-column block, content is automatically flowed from one column into the next as needed. All HTML, CSS and DOM functionality is supported within columns, as are editing and printing.

### The columns shorthand

Most of the time, a Web designer will use one of the two CSS properties: {{cssxref("column-count")}} or {{cssxref("column-width")}}. As values for these properties do not overlap, it is often convenient to use the shorthand {{cssxref("columns")}}. E.g.

The CSS declaration `column-width: 12em` can be replaced by `columns: 12em`.

## Example 3

### HTML

```html
<div id="col_short">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#col_short {
  columns: 12em;
}
```

{{EmbedLiveSample("Example_3", "100%")}}

The CSS declaration `column-count: 4` can be replaced by `columns: 4`.

## Example 4

### HTML

```html
<div id="columns_4">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#columns_4 {
  columns: 4;
}
```

### Result

{{EmbedLiveSample("Example_4", "100%")}}

The two CSS declarations `column-width: 8em` and `column-count: 12` can be replaced by `columns: 12 8em`.

## Example 5

### HTML

```html
<div id="columns_12">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#columns_12 {
  columns: 12 8em;
}
```

### Result

{{EmbedLiveSample("Example_5", "100%")}}

### Height Balancing

CSS columns require that the column heights must be balanced: that is, the browser automatically sets the maximum column height so that the heights of the content in each column are approximately equal. Firefox does this.

However, in some situations it is also useful to set the maximum height of the columns explicitly, and then lay out content starting at the first column and creating as many columns as necessary, possibly overflowing to the right. Therefore, if the height is constrained, by setting the CSS {{cssxref("height")}} or {{cssxref("max-height")}} properties on a multi-column block, each column is allowed to grow to that height and no further before adding new column. This mode is also much more efficient for layout.

### Column Gaps

There is a gap between columns. The recommended default is `1em`. This size can be changed by applying the {{cssxref("column-gap")}} property to the multi-column block:

## Example 6

### HTML

```html
<div id="column_gap">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#column_gap {
  column-count: 5;
  column-gap: 2em;
}
```

### Result

{{EmbedLiveSample("Example_6", "100%")}}

## Graceful Degradation

The column properties will just be ignored by non-columns-supporting browsers. Therefore it's relatively easy to create a layout that will display in a single column in those browsers and use multiple columns in supporting browsers.

## Conclusion

CSS columns are a layout primitive that will help Web developers make the best use of screen real estate. Imaginative developers may find many uses for them, especially with the automatic height balancing feature.
