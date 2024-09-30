---
title: Using multi-column layouts
slug: Web/CSS/CSS_multicol_layout/Using_multicol_layouts
page-type: guide
---

{{CSSRef}}

The properties defined in the **CSS multi-column layout module** extend the _block layout mode_, enabling the easy definition of multiple columns of text. People have trouble reading text if lines are too long. If it takes too long for the eyes to move from the end of one line to the beginning of the next, readers can lose track of which line they were on. To provide for a better user experience when reading text making use of a large screen, you should limit the width of text by using columns of text placed side by side, just as newspapers do.

## Using columns

### Column count and width

Two CSS properties control whether and how many columns will appear: {{cssxref("column-count")}} and {{cssxref("column-width")}}.

The `column-count` property sets the number of columns to a particular number. E.g.,

## Example 1

### HTML

```html
<div id="col">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </p>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur.
  </p>
  <p>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.
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

The content will be displayed in two columns:

{{EmbedLiveSample("Example_1", "100%")}}

The `column-width` property sets the minimum desired column width. If `column-count` is not also set, then the browser will automatically make as many columns as fit in the available width.

## Example 2

### HTML

```html
<div id="wid">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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

In a multi-column block, content automatically flows from one column into the next as needed. All HTML, CSS, and DOM functionality is supported within columns, as are editing and printing.

### The columns shorthand

You can use either {{cssxref("column-count")}} or {{cssxref("column-width")}}. Because values for these properties do not overlap, it is often convenient to use the shorthand {{cssxref("columns")}}.

## Example 3

In this example, the CSS declaration `column-width: 12em` is replaced by `columns: 12em`.

### HTML

```html
<div id="col_short">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#col_short {
  columns: 12em;
}
```

{{EmbedLiveSample("Example_3", "100%")}}

## Example 4

In this example, the CSS declaration `column-count: 4` is replaced by `columns: 4`.

### HTML

```html
<div id="columns_4">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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

## Example 5

The two CSS declarations `column-width: 8em` and `column-count: 12` can be replaced by `columns: 12 8em`. The `column-count` portion of the shorthand is the maximum number of columns that will be present. The `column-width` is the minimum width each column should be.

### HTML

```html
<div id="columns_12">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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

Assuming a default `1em` gap between columns, if the container is wider than `103ems` (12 columns \* `8em` width each + 7 `1em` gaps), there will be 12 columns, each with a width of `8ems` or more. If the container is less than `103ems` wide, there will be fewer than 12 columns. If the container is less than `17ems` wide (`8em` column + `8em` column + `1em` gap), the content will be displayed as a single column with no column gap.

### Height balancing

CSS columns require that the column heights must be balanced: that is, the browser automatically sets the maximum column height so that the heights of the content in each column are approximately equal. Firefox does this.

However, in some situations it is also useful to set the maximum height of the columns explicitly, and then lay out content starting at the first column and creating as many columns as necessary, possibly overflowing to the right. Therefore, if the height is constrained, by setting the CSS {{cssxref("height")}} or {{cssxref("max-height")}} properties on a multi-column block, each column is allowed to grow to that height and no further before adding new column. This mode is also much more efficient for layout.

### Column Gaps

There is a gap between columns. The recommended default is `1em`. This size can be changed by applying the {{cssxref("column-gap")}} property to the multi-column block:

## Example 6

### HTML

```html
<div id="column_gap">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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

## Conclusion

CSS columns are a layout primitive that can help make large blocks of text easier to read when responsive content is viewed on wide viewports. Imaginative developers may find many uses for them, especially in conjunction with [container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries) and with the automatic height balancing feature.
