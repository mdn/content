---
title: ::scroll-marker-group
slug: Web/CSS/::scroll-marker-group
page-type: css-pseudo-element
browser-compat: css.selectors.scroll-marker-group
---

{{CSSRef}}

The **`::scroll-marker-group`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) is a container generated inside a {{glossary("scroll container")}}, which contains any {{cssxref("::scroll-marker")}} pseudo-elements generated on the descendants of the scroll container.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Description

A scroll container's **`::scroll-marker-group`** pseudo-element represents a **scroll marker group**. This is a container that automatically has any {{cssxref("::scroll-marker")}} pseudo-elements generated on its descendants placed into it. This allows them to be positioned and laid out as a group, and is typically used when creating a CSS carousel, to provide a scroll position indicator. The individual scroll markers can also be used to navigate to their associated content items.

The {{cssxref("scroll-marker-group")}} property must be set to a non-`none` value on the scroll container for a `::scroll-marker-group` pseudo-element to be generated; the chosen value determines where the scroll marker group appears in the carousel's tab order and layout box order (but not DOM structure) — `before` puts it at the start, while `after` puts it at the end.

It is a best practice to match the visual rendering position of the scroll marker group with the tab order. When placing the group at the start of the content, put it at the beginning of the tab order using `before`. When placing the group at the end of the content, put it at the end of the tab order using `after`.

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
```

```css hidden live-sample___carousel-example
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

```css hidden live-sample___carousel-example
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

```css hidden live-sample___carousel-example
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
```

In this demo, the list's {{cssxref("scroll-marker-group")}} property is set to `after`, so the `::scroll-marker-group` pseudo-element is placed after the list's DOM content in the focus order:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Next, the list's `::scroll-marker-group` pseudo-element is positioned relative to the carousel using [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning). It is horizontally centered on the carousel using a {{cssxref("justify-self")}} value of `anchor-center`. The group is laid out using flexbox, with a {{cssxref("justify-content")}} value of of `center` and a {{cssxref("gap")}} of `20px` so that its children (the `::scroll-marker` pseudo-elements) are centered inside the `::scroll-marker-group` with a gap between each one.

```css live-sample___carousel-example
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
- {{cssxref("::scroll-marker")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
