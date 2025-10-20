---
title: ::scroll-marker-group
slug: Web/CSS/::scroll-marker-group
page-type: css-pseudo-element
status:
  - experimental
browser-compat: css.selectors.scroll-marker-group
sidebar: cssref
---

{{SeeCompatTable}}

The **`::scroll-marker-group`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) is generated inside a {{glossary("scroll container")}} and contains any {{cssxref("::scroll-marker")}} pseudo-elements generated on descendants of the scroll container.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Description

A scroll container's **`::scroll-marker-group`** pseudo-element represents a **scroll marker group container**. This is a container that automatically contains any {{cssxref("::scroll-marker")}} pseudo-elements generated on itself or its descendants. This allows them to be positioned and styled as a group. This pseudo-element is typically used when creating a CSS carousel to provide a scroll position indicator. The individual scroll markers can be used to navigate to their associated content items.

The scroll container must have its {{cssxref("scroll-marker-group")}} property set to a non-`none` value for the `::scroll-marker-group` pseudo-element to be generated. The {{cssxref("scroll-marker-group")}} value determines where the scroll marker group container appears in the carousel's tab order and layout box order (but not DOM structure) — `before` puts it at the start, while `after` puts it at the end.

> [!NOTE]
> Alternatively, a scroll marker group container can be created from an existing element containing a set of {{htmlelement("a")}} elements using {{cssxref("scroll-target-group")}}.

As an accessibility best practice, match the visual rendering position of the scroll marker group container with the tab order. When positioning the group at the start of the content, put it at the beginning of the tab order using `before`. When positioning the group at the end of the content, put it at the end of the tab order using `after`.

When a scroll marker group container is created on a scroll container using the `scroll-marker-group` property, the scroll container is rendered with [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) semantics. You can <kbd>Tab</kbd> to it with the keyboard, then move between the different "pages" using the left and right (or up and down) cursor keys, which also changes the state of the associated scroll markers and scroll buttons as expected. The scroll markers can also be tabbed between normally, as expected.

## Examples

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for other examples that use the `::scroll-marker` pseudo-element.

### Creating carousel scroll markers

This demo is a carousel of single pages, with each item taking up the full page. We have included scroll markers to enable the user to navigate to any page with the click of a marker.

#### HTML

The HTML consists of an [unordered list](/en-US/docs/Web/HTML/Reference/Elements/ul), with each [list item](/en-US/docs/Web/HTML/Reference/Elements/li) containing some sample content:

```html live-sample___carousel-example live-sample___carousel-example_final
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

We first convert our `<ul>` into a carousel by setting the {{cssxref("display")}} to `flex`, creating a single, non-wrapping row of `<li>` elements. The {{cssxref("overflow-x")}} property is set to `auto`, meaning if the items overflow their container on the x-axis, the content will scroll horizontally. We then convert the `<ul>` into a [scroll-snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container), ensuring that items always snap into place when the container is scrolled with a {{cssxref("scroll-snap-type")}} value of `mandatory`.

```css hidden live-sample___carousel-example live-sample___carousel-example_final
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
```

Next, we style the `<li>` elements, using the {{cssxref("flex")}} property to make them `100%` of the width of the container. The {{cssxref("scroll-snap-align")}} value of `start` causes the left-hand side of the left-most visible item to snap to the left edge of the container when the content is scrolled.

```css live-sample___carousel-example live-sample___carousel-example_final
li {
  list-style-type: none;
  background-color: #eeeeee;
  flex: 0 0 100%;
  height: 200px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

Next, the list's {{cssxref("scroll-marker-group")}} property is set to `after`, so the `::scroll-marker-group` pseudo-element is placed after the list's DOM content in the tabbing order and layout box order; this means it comes after the scroll buttons:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Next, the list's `::scroll-marker-group` pseudo-element is laid out using flexbox, with a {{cssxref("justify-content")}} value of `center` and a {{cssxref("gap")}} of `20px` so that its children (the {{cssxref("::scroll-marker")}} pseudo-elements) are centered inside the `::scroll-marker-group` with a gap between each one.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Next, the scroll markers themselves are styled. The look of each one is handled by setting {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}}, and {{cssxref("border-radius")}}, but we also need to set a non-`none` value for the {{cssxref("content")}}, property so they are actually generated.

```css live-sample___carousel-example live-sample___carousel-example_final
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

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Result

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positioning the scroll marker group container with anchor positioning

This example extends the previous one, demonstrating the use of [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) to position the scroll marker group container relative to the carousel.

#### CSS

The list's `::scroll-marker-group` pseudo-element is positioned relative to the carousel using CSS anchor positioning by giving the group a value for {{cssxref("position-anchor")}} that matches the {{cssxref("anchor-name")}} of the `<ul>`. We then position the group relative to the scroll container in the block direction by setting a {{cssxref("top")}} value that includes an {{cssxref("anchor()")}} function. We also add a {{cssxref("justify-self")}} value of `anchor-center`, which aligns the group to the center of the scroll container in the inline direction.

```css live-sample___carousel-example_final
ul {
  anchor-name: --my-carousel;
}

ul::scroll-marker-group {
  /* From the previous example */
  display: flex;
  gap: 20px;

  position: absolute;
  position-anchor: --my-carousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;
}
```

#### Result

{{EmbedLiveSample("carousel-example_final", "100%", "260px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-marker-group")}}
- {{cssxref("scroll-target-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
