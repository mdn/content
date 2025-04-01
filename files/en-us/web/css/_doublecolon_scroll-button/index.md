---
title: ::scroll-button()
slug: Web/CSS/::scroll-button
page-type: css-pseudo-element
browser-compat: css.selectors.scroll-button
---

{{CSSRef}}

The **`::scroll-button()`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents a button for controlling the scrolling of a {{glossary("scroll container")}}.

## Syntax

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Parameters

- `<scroll-button-direction>`

  - : A value representing which direction of scroll button you want to select. The following values are available:

    - `*`
      - : Selects all four scroll buttons, allowing styles to be applied to each of them in a single rule.
    - `down`
      - : Selects the downwards scroll button.
    - `left`
      - : Selects the leftwards scroll button.
    - `right`
      - : Selects the rightwards scroll button.
    - `up`
      - : Selects the upwards scroll button.
    - `block-end`
      - : Selects the button that will scroll the content in the block-end direction.
    - `block-start`
      - : Selects the button that will scroll the content in the block-start direction.
    - `inline-end`
      - : Selects the button that will scroll the content in the inline-end direction.
    - `inline-start`
      - : Selects the button that will scroll the content in the inline-start direction.

    The specification also defines two other values — `next` and `prev` — but these are not currently supported in any browser.

## Description

The `::scroll-button()` pseudo-elements are generated inside a {{glossary("scroll container")}}, only when their {{cssxref("content")}} properties are set to a value other than `none`. They are generated as siblings of the scroll container's child DOM elements, immediately preceding them, but after a generated {{cssxref("::scroll-marker-group")}} pseudo-element.

Which button is selected is determined by the selector's argument, which specifies which scrolling direction you want to select the button for. You can generate up to four scroll buttons per scroll container, which will scroll the content towards the start and end of the block and inline axes. You can also specify a value of `*` to target all of the `::scroll-button()` pseudo-elements with styles in a single rule.

The generated buttons behave just like regular {{htmlelement("button")}} elements, including sharing their default browser styles. They are focusable, etc. When a scroll button is pressed, the scroll container's content is scrolled in the specified direction by an amount determined by the browser. The recommendation is to set up [CSS scroll snapping](/en-US/docs/Web/CSS/CSS_scroll_snap) on the scroll container and set each separate item of content you want to scroll to as a [snap target](/en-US/docs/Glossary/Scroll_snap#snap_target). This being the case, the buttons will scroll the content to a new snap target each time they are pressed. While the scroll buttons will work without scroll snapping, you might not get the desired effect.

When it is not possible to scroll any further in a particular scroll button's scrolling direction, it is automatically disabled, otherwise it is enabled. You can style the scroll buttons in their enabled and disabled states using the {{cssxref(":enabled")}} and {{cssxref(":disabled")}} pseudo-classes.

## Examples

### Creating carousel scroll buttons

This demo creates a responsive, CSS-only carousel. It uses the {{cssxref("columns")}} property and the `::columns` pseudo-element to create arbitary content columns that span the full width of their parent {{glossary("scroll container")}}, which can be scrolled between using several mechanisms, including scroll buttons. Each column contains multiple items of content, which can vary in number depending on the viewport width.

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

The following snippet targets all of the scroll buttons generated inside the scrolling list to apply general styles:

```css live-sample___carousel-example
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
```

Next, an appropriate icon is set on the left and right scroll buttons via the {{cssxref("content")}} property, which is also what causes the scroll buttons to be generated:

```css live-sample___carousel-example
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

The scroll buttons are positioned relative to their parent scroll container using [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning). First of all, a reference {{cssxref("anchor-name")}} is set on the list. Next, each scroll button has its {{cssxref("position")}} set to `absolute`, and its {{cssxref("position-anchor")}} property set to the same reference name defined on the list, to associate the two together.

```css live-sample___carousel-example
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

To actually position each scroll button, you can set values on their {{glossary("inset properties")}} that use {{cssxref("anchor()")}} functions to position the specified sides of the buttons relative to the sides of the container.

```css live-sample___carousel-example
ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  bottom: calc(anchor(top) + 13px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  bottom: calc(anchor(top) + 13px);
}
```

> [!NOTE]
> In each case, the {{cssxref("calc()")}} function is used to add some space between the button edge and the scroll container edge. So for example, the right-hand edge of the left scroll button is positioned 70 pixels to the right of the container's left-hand edge.

```css hidden live-sample___carousel-example
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

```css hidden live-sample___carousel-example
ul::column::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
}
```

```css hidden live-sample___carousel-example
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
- {{cssxref("::scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
