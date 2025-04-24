---
title: ::scroll-marker
slug: Web/CSS/::scroll-marker
page-type: css-pseudo-element
status:
  - experimental
browser-compat: css.selectors.scroll-marker
---

{{CSSRef}}{{SeeCompatTable}}

The **`::scroll-marker`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) can be generated inside any element and represents its scroll marker. All elements can have a `::scroll-marker` pseudo-element, which is placed into the {{cssxref("::scroll-marker-group")}} of the nearest {{glossary("scroll container")}} ancestor. A scroll marker behaves like an anchor ({{htmlelement("a")}} element) whose scroll target is the marker's originating element — and scrolls the scroll container to that element when activated.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Description

A `::scroll-marker` is generated on an element when the `::scroll-marker`'s {{cssxref("content")}} property is set to a non-`none` value, and its has an ancestor scroll container with a non-`none` {{cssxref("scroll-marker-group")}} property value (meaning that it will generate a {{cssxref("::scroll-marker-group")}} pseudo-element).

The scroll container's `::scroll-marker-group` pseudo-element automatically contains any `::scroll-marker` pseudo-elements generated on the scroll container or its descendants. This allows them to be positioned and laid out as a group and is typically used when creating a CSS carousel to create a scroll position indicator. The individual scroll markers can be used to navigate to their associated content items.

Accessibility-wise, the scroll marker group and contained scroll markers are rendered with [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) semantics. When you <kbd>Tab</kbd> to the group, it behaves like a single item (that is, another press of the <kbd>Tab</kbd> key will move past the group to the next item), and you can move between the different scroll markers using the left and right (or up and down) cursor keys.

## Examples

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for other examples that use the `::scroll-marker` pseudo-element.

### Creating carousel scroll markers

In this example, we demonstrate how to create scroll markers on a CSS carousel.

#### HTML

We have a basic HTML {{htmlelement("ul")}} list with several {{htmlelement("li")}} list items.

```html live-sample___creating-scroll-markers live-sample___custom-numbering
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
  <li>Item 8</li>
</ul>
```

#### CSS

We convert our `<ul>` into a scroll snapping overflow container by setting the {{cssxref("display")}} to `flex`, creating a single, non-wrapping row of `<li>` elements. The {{cssxref("overflow-x")}} property is set to `auto`, meaning if the items overflow their container on the x-axis, the content will scroll horizontally. We then convert the `<ul>` into a [scroll-snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container), ensuring that items always snap into place when the container is scrolled with a {{cssxref("scroll-snap-type")}} value of `mandatory`.

We create a scroll marker group with the `scroll-marker-group` property, placing the group after all the content.

```css live-sample___creating-scroll-markers live-sample___custom-numbering
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-marker-group: after;
}
```

Next, we style the `<li>` elements, using the {{cssxref("flex")}} property to make them `33%` of the width of the container. The {{cssxref("scroll-snap-align")}} value of `start` causes the left-hand side of the left-most visible item to snap to the left edge of the container when the content is scrolled.

```css live-sample___creating-scroll-markers live-sample___custom-numbering
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 33%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

We then use the `::scroll-marker` pseudo-element to create a square marker for each list item with a red border:

```css live-sample___creating-scroll-markers
li::scroll-marker {
  content: "";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}
```

We also apply styles to the {{cssxref("::scroll-marker-group")}} pseudo-element to lay out the scroll markers in the center of the row with a `0.4em` gap between each one:

```css live-sample___creating-scroll-markers live-sample___custom-numbering
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Finally, we style the marker of the currently-scrolled element differently from the others, targeting the marker with the {{cssxref(":target-current")}} pseudo-class.

```css live-sample___creating-scroll-markers
::scroll-marker:target-current {
  background: red;
}
```

#### Result

{{EmbedLiveSample("creating-scroll-markers", '', '200')}}

### Custom scroll marker numbering and style

This example is the same as the previous one, except that we have applied some different styling to the scroll markers, and used [CSS counters](/en-US/docs/Web/CSS/CSS_lists) to increment the number shown on each marker. The CSS differences are explained in the next section.

### CSS

In this example, we set a name of a counter we want to increment on each `<li>` — `markers` — using the {{cssxref("counter-increment")}} property:

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

We then set the `::scroll-marker` pseudo-element's {{cssxref("content")}} property to the {{cssxref("counter()")}} function, passing it the `markers` counter name as an argument. This has the effect of inserting a number into each marker, which increments automatically. The rest of the styling is rudimentary, but it illustrates how the markers can be fully-styled.

```css live-sample___custom-numbering
li::scroll-marker {
  content: counter(markers);
  font-family: sans-serif;
  width: fit-content;
  height: 1em;
  padding: 5px;
  color: black;
  text-decoration: none;
  border: 2px solid rgb(0 0 0 / 0.15);
  border-radius: 0.5em;
  background-color: #eee;
}
```

For another interesting customization, we include two rules to select the marker of the first and last list items by inserting {{cssxref(":first-child")}} and {{cssxref(":last-child")}} into the selector chain, respectively. We give the first marker text content of "First", and the last marker text content of "Last".

```css live-sample___custom-numbering
li:first-child::scroll-marker {
  content: "First";
}

li:last-child::scroll-marker {
  content: "Last";
}
```

To improve user experience, we set a different color on the markers on {{cssxref(":hover")}} and use the `:target-current` pseudo-class to set a different {{cssxref("color")}} and {{cssxref("background-color")}} on the currently-scrolled element's marker so users know which item is currently in view:

```css live-sample___custom-numbering
::scroll-marker:hover {
  background-color: #dcc;
}

::scroll-marker:target-current {
  background-color: purple;
  color: white;
}
```

#### Result

{{EmbedLiveSample("custom-numbering", '', '220')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
