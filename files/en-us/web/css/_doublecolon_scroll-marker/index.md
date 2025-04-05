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

### Creating carousel scroll markers

This demo is a carousel of single pages, with each item taking up the full page. We have included scroll markers to enable the user to move to the next and previous pages.

[Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) is used for the general layout of the carousel, [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) is used to enforce clear pagination, and [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) is used to position the scroll markers relative to the carousel.

#### HTML

The HTML consists of a [heading element](/en-US/docs/Web/HTML/Element/Heading_Elements) and an [unordered list](/en-US/docs/Web/HTML/Element/ul), with each [list item](/en-US/docs/Web/HTML/Element/li) containing some sample content:

```html live-sample___carousel-example
<h1>CSS carousel single item per page</h1>
<ul>
  <li>
    <h2>Page 1</h2>
  </li>
  <li>
    <h2>Page 2</h2>
  </li>
  <li>
    <h2>Page 3</h2>
  </li>
  <li>
    <h2>Page 4</h2>
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

ul {
  width: 100vw;
  height: 300px;
  padding: 20px;
  display: flex;
  gap: 4vw;
}

li {
  list-style-type: none;
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 20px;

  flex: 0 0 100%;
}

li:nth-child(even) {
  background-color: cyan;
}

ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

li {
  scroll-snap-align: center;
}
```

To begin with, the list's {{cssxref("scroll-marker-group")}} property is set to `after`, so the {{cssxref("::scroll-marker-group")}} pseudo-element is placed after the list's DOM content in the focus and layout box order; this means it comes after the scroll buttons:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Next, the list's `::scroll-marker-group` pseudo-element is positioned relative to the carousel using CSS anchor positioning; it is horizontally centered on the carousel using a {{cssxref("justify-self")}} value of `anchor-center`. The group is laid out using flexbox, with a {{cssxref("justify-content")}} value of of `center` and a {{cssxref("gap")}} of `20px` so that its children (the `::scroll-marker` pseudo-elements) are centered inside the `::scroll-marker-group` with a gap between each one.

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

Next, the scroll markers themselves are styled. The look of each one is handled by setting {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}}, and {{cssxref("border-radius")}}, but we also need to set a non-`none` value for the `content` property so they are actually generated.

```css live-sample___carousel-example
li::scroll-marker {
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
  content: "";
}
```

> [!NOTE]
> Generated content is inline by default; we can apply `width` and `height` to our scroll markers because they are being laid out as flex items.

Finally, the {{cssxref(":target-current")}} pseudo-class is used to select whichever scroll marker corresponds to the currently visible "page", highlighting how far the user has scrolled through the content. In this case, we set the `background-color` to `black` so it is styled as a filled-in circle.

```css live-sample___carousel-example
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Result

{{EmbedLiveSample("carousel-example", "100%", "420px")}}

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for a full carousel example that uses the above technique.

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
