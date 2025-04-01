---
title: ::scroll-marker
slug: Web/CSS/::scroll-marker
page-type: css-pseudo-element
browser-compat: css.selectors.scroll-marker
---

{{CSSRef}}

The **`::scroll-marker`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) can be generated inside any element and represents its scroll marker. A scroll marker behaves like an anchor ({{htmlelement("a")}} element) whose scroll target is its originating element — when activated, the element's nearest ancestor {{glossary("scroll container")}} will scroll to it.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Description

A `::scroll-marker` is generated on an element when the `::scroll-marker`'s {{cssxref("content")}} property is set to a non-`none` value, and its has an ancestor scroll container with a non-`none` {{cssxref("scroll-marker-group")}} property value (meaning that it will generate a {{cssxref("::scroll-marker-group")}} pseudo-element).

The `::scroll-marker-group` pseudo-element automatically contains any `::scroll-marker` pseudo-elements generated on the scroll container's decendants. This allows them to be positioned and laid out as a group, and is typically used when creating a CSS carousel, to create a scroll position indicator. The individual scroll markers can also be used to navigate to their associated content items.

Accessibility-wise, the scroll marker group and contained scroll markers are rendered with [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) semantics. When you <kbd>Tab</kbd> to the group, it behaves like a single item (that is, another press of the <kbd>Tab</kbd> key will move past the group to the next item), and you can move between the different scroll markers using the left and right (or up and down) cursor keys.

## Examples

### Creating a responsive carousel layout

This demo creates a responsive, CSS-only carousel. It uses the {{cssxref("columns")}} property and the `::columns` pseudo-element to create arbitary content columns that span the full width of their parent {{glossary("scroll container")}}, which can be scrolled between. Each column contains multiple items of content, which can vary in number depending on the viewport width.

#### HTML

The HTML consists of an [unordered list](/en-US/docs/Web/HTML/Element/ul), with each [list item](/en-US/docs/Web/HTML/Element/li) containing some sample content:

```html-nolint
<ul>
...
  <li>
    <h2>Item 1</h2>
  </li>
...
</ul>
```

```html hidden live-sample___carousel-example
<h1>CSS carousel multiple items per page</h1>
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

```css hidden live-sample___carousel-example
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
  font-size: 1.7rem;
}

button {
  background-color: white;
}
```

The list is given a fixed {{cssxref("height")}} and a {{cssxref("width")}} of `100vw` to make it span the full width of the viewport. An {{cssxref("overflow-x")}} value of `scroll` is then set so that the content will scroll horizontally, and [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) is used to snap to each item or "page" — a {{cssxref("scroll-snap-type")}} value of `x mandatory` is used to make the list into a [scroll snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container). Finally, a {{cssxref("columns")}} value of `1` is set to force the list contents to display as a single column. A {{cssxref("text-align")}} value of `center` is also applied, to force the contents to align with the center of the list.

```css live-sample___carousel-example
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

- A {{cssxref("display")}} value of `inline-block` is set to force the list items to sit alongside one another and make the list scroll horizontally.
- A fixed {{cssxref("aspect-ratio")}} of `3/4` has been set on them, to control their sizing as the list size changes, but keep their width constant while the height of the list stays constant.
- A `text-align` value of `left` is set on them to override the `text-align: center` set on the parent container, so the item content will be left-aligned.
- Every even-numbered list item is given a different background-color via {{cssxref(":nth-child()")}}, so that it is easier to see the scrolling effect.

```css live-sample___carousel-example
li {
  list-style-type: none;

  display: inline-block;
  height: 100%;
  aspect-ratio: 3/4;

  background-color: #eee;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 0 10px;

  text-align: left;
}

li:nth-child(even) {
  background-color: cyan;
}
```

The {{cssxref("scroll-snap-align")}} property is set on the {{cssxref("::column")}} pseudo-elements — which represent the content columns generated by the `columns` property — so that when scrolled, the list snaps to each complete column.

```css live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

```css hidden live-sample___carousel-example
ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: rgb(0 0 0 / 0.7);
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  color: rgb(0 0 0 / 1);
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  color: rgb(0 0 0 / 0.2);
}

ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}

ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}

ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  bottom: calc(anchor(top) + 13px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  bottom: calc(anchor(top) + 13px);
}

ul {
  scroll-marker-group: after;
}

ul::scroll-marker-group {
  position: absolute;
  position-anchor: --myCarousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

We then select the {{cssxref("::scroll-marker")}} pseudo-elements of each generated column using `ul::column::scroll-marker`. The look of each one is handled by setting {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}}, and {{cssxref("border-radius")}}, but we also need to set a non-`none` value for the `content` property so they are actually generated.

```css live-sample___carousel-example
ul::column::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
}
```

Finally, we set a solid black background on the the **active** scroll marker using {{cssxref(":target-current")}}, so you can see the current carousel scroll position:

```css live-sample___carousel-example
ul::column::scroll-marker:target-current {
  background-color: black;
}
```

#### Result

{{EmbedLiveSample("carousel-example", "100%", "400px")}}

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for a full explanation of the above demo.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
