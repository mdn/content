---
title: ::column
slug: Web/CSS/::column
page-type: css-pseudo-element
status:
  - experimental
browser-compat: css.selectors.column
sidebar: cssref
---

{{SeeCompatTable}}

The **`::column`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the individual columns generated when a container is set to display its content in multiple columns via [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout). The `::column` pseudo-element enables applying styles that do not affect the layout to these generated fragments.

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Description

When CSS multi-column layout is used to lay out a container's content in multiple columns (for example, using the {{cssxref("column-count")}} property), `::column` pseudo-elements are generated to contain each individual column.

The `::column` pseudo-element only accepts scroll snap properties that apply to elements inside a scroll container, including {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}}, and {{cssxref("scroll-snap-stop")}}.

The `::column` pseudo-element can have a {{cssxref("::scroll-marker")}} pseudo-element. Other pseudo-elements like {{cssxref("::before")}} and {{cssxref("::after")}} are not generated on `::column`. Applying `::column::scroll-marker` creates a marker for every column of the originating [scroll container](/en-US/docs/Glossary/Scroll_container), with the `::scroll-marker` pseudo-elements inheriting from the `::column` pseudo-element's originating element rather than the `::column` itself.

This is useful for [CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) — `::column` can be used to generate `::scroll-marker` pseudo-elements for each column, and set them as [snap targets](/en-US/docs/Glossary/Scroll_snap#snap_target) using [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap).

While the styling that can be applied to `::column` is very limited, it may be expanded in the future. Any properties and values supported in the future will be limited to ones that do not affect layout.

## Examples

### Scrolling column layout

This demo creates a responsive container that snaps each "page" of content into place. It uses the {{cssxref("columns")}} property and the `::columns` pseudo-element to create content columns that span the full width of their parent {{glossary("scroll container")}}, which can be scrolled horizontally. Each column contains one or more list items, which vary in number depending on the viewport width.

#### HTML

The HTML consists of an [unordered list](/en-US/docs/Web/HTML/Reference/Elements/ul), with each [list item](/en-US/docs/Web/HTML/Reference/Elements/li) containing some sample content:

```html-nolint
<ul>
...
  <li>
    <h2>Item 1</h2>
  </li>
...
</ul>
```

```html hidden live-sample___column-layout-example live-sample___carousel-example
<ul>
  <li>
    <h2>Item 1</h2>
  </li>
  <li>
    <h2>Item 2</h2>
  </li>
  <li>
    <h2>Item 3</h2>
  </li>
  <li>
    <h2>Item 4</h2>
  </li>
  <li>
    <h2>Item 5</h2>
  </li>
  <li>
    <h2>Item 6</h2>
  </li>
  <li>
    <h2>Item 7</h2>
  </li>
  <li>
    <h2>Item 8</h2>
  </li>
  <li>
    <h2>Item 9</h2>
  </li>
  <li>
    <h2>Item 10</h2>
  </li>
  <li>
    <h2>Item 11</h2>
  </li>
  <li>
    <h2>Item 12</h2>
  </li>
  <li>
    <h2>Item 13</h2>
  </li>
  <li>
    <h2>Item 14</h2>
  </li>
  <li>
    <h2>Item 15</h2>
  </li>
</ul>
```

#### CSS

The list is given a fixed {{cssxref("height")}} and a {{cssxref("width")}} of `100vw` to make it span the full width of the viewport. An {{cssxref("overflow-x")}} value of `scroll` is then set so that the content will scroll horizontally, and [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) is used to snap to each item or "page" — a {{cssxref("scroll-snap-type")}} value of `x mandatory` is used to make the list into a [scroll snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container). Finally, a {{cssxref("columns")}} value of `1` is set to force the list contents to display as a single column. A {{cssxref("text-align")}} value of `center` is also applied, to align the content with the center of the list.

```css hidden live-sample___column-layout-example live-sample___carousel-example
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___column-layout-example live-sample___carousel-example
ul {
  width: 100vw;
  height: 300px;
  padding: 10px;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  columns: 1;
  text-align: center;
}
```

The list items are then styled:

- A {{cssxref("display")}} value of `inline-block` is set to make the list items sit alongside one another and make the list scroll horizontally.
- A fixed {{cssxref("width")}} and {{cssxref("height")}} has been set on them.
- A `text-align` value of `left` is set on them to override the `text-align: center` set on the parent container, so the item content will be left-aligned.
- Every even-numbered list item is given a different background-color via {{cssxref(":nth-child()")}}, so that it is easier to see the scrolling effect.

```css live-sample___column-layout-example live-sample___carousel-example
li {
  list-style-type: none;

  display: inline-block;
  height: 100%;
  width: 200px;
  text-align: left;

  background-color: #eee;
  outline: 1px solid #ddd;
  padding: 0 20px;
  margin: 0 10px;
}

li:nth-child(even) {
  background-color: cyan;
}
```

The {{cssxref("scroll-snap-align")}} property is set on the `::column` pseudo-elements — which represent the content columns generated by the `columns` property — so that when scrolled, a column is snapped to be centered within the scroll container.

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### Result

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### Column-based carousel with scroll markers

Expanding on the previous example, we will create scroll markers to enable direct navigation to different columns by applying a {{cssxref("scroll-marker-group")}} to the container and a {{cssxref("::scroll-marker")}} to each `::column` pseudo-element. The HTML remains unchanged.

#### CSS

We create a scroll marker group with the {{cssxref("scroll-marker-group")}} property, placing the group after all the content:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

We then apply styles to the {{cssxref("::scroll-marker-group")}} pseudo-element to lay out the scroll markers in the center of the row with a `0.4em` gap between each one:

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Finally, we use the {{cssxref("::scroll-marker")}} pseudo-element to create a round, transparent marker for each list item with a black border, then style the marker of the currently-scrolled element differently from the others, targeting the marker with the {{cssxref(":target-current")}} pseudo-class:

```css live-sample___carousel-example
ul::column::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
}

ul::column::scroll-marker:target-current {
  background-color: black;
}
```

#### Result

{{EmbedLiveSample("carousel-example", "100%", "400px")}}

Try pressing the scroll markers to jump straight to each page. Note how the current marker is highlighted so you can see where you are in the pagination. Also try tabbing to the scroll marker group, then use the cursor keys to cycle through each page.

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for more carousel examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("columns")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout) module
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
