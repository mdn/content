---
title: ::scroll-button()
slug: Web/CSS/::scroll-button
page-type: css-pseudo-element
status:
  - experimental
browser-compat: css.selectors.scroll-button
sidebar: cssref
---

{{SeeCompatTable}}

The **`::scroll-button()`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents a button for controlling the scrolling of a {{glossary("scroll container")}}. They are generated on scroll containers when their {{cssxref("content")}} value is not `none`. The direction of the scrolling is determined by the parameter value.

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
      - : Selects all the originating element's scroll buttons, allowing styles to be applied to each of them in a single rule.
    - `down`
      - : Selects the button that will scroll the content downward.
    - `left`
      - : Selects the button that will scroll the content left.
    - `right`
      - : Selects the button that will scroll the content right.
    - `up`
      - : Selects the button that will scroll the content upward.
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

The `::scroll-button()` pseudo-elements are generated inside a {{glossary("scroll container")}} only when their {{cssxref("content")}} properties are set to a value other than `none`. They are generated as siblings of the scroll container's child DOM elements, immediately preceding them and any {{cssxref("::scroll-marker-group")}} generated on the container.

You can generate up to four scroll buttons per scroll container, which will scroll the content towards the start and end of the block and inline axes. The selector's argument specifies which scrolling direction is selected. You can also specify a value of `*` to target all of the `::scroll-button()` pseudo-elements, providing styles to all the buttons in a single rule.

The generated buttons behave just like regular {{htmlelement("button")}} elements, including sharing their default browser styles. They are focusable, accessible, and can be activated like regular buttons. When a scroll button is pressed, the scroll container's content is scrolled in the specified direction by one "page," or approximately the dimension of the scroll container, similar to pressing <kbd>PgUp</kbd> and <kbd>PgDn</kbd> keys.

The recommendation is to set up [CSS scroll snapping](/en-US/docs/Web/CSS/CSS_scroll_snap) on the scroll container and set each separate item of content you want to scroll to as a [snap target](/en-US/docs/Glossary/Scroll_snap#snap_target). This being the case, activating a scroll button will scroll the content to the snap target that is one "page" away. While the scroll buttons will work without scroll snapping, you might not get the desired effect.

When it is not possible to scroll any further in a particular scroll button's scrolling direction, the button is automatically disabled, otherwise it is enabled. You can style the scroll buttons in their enabled and disabled states using the {{cssxref(":enabled")}} and {{cssxref(":disabled")}} pseudo-classes.

## Examples

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for more carousel examples.

### Creating scroll buttons

In this example, we demonstrate how to create scroll buttons on a CSS carousel.

#### HTML

We have a basic HTML {{htmlelement("ul")}} list with several {{htmlelement("li")}} list items.

```html live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
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

##### Styling the carousel

We convert our `<ul>` into a carousel by setting the {{cssxref("display")}} to `flex`, creating a single, non-wrapping row of `<li>` elements. The {{cssxref("overflow-x")}} property is set to `auto`, meaning if the items overflow their container on the x-axis, the content will scroll horizontally. We then convert the `<ul>` into a [scroll-snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container), ensuring that items always snap into place when the container is scrolled with a {{cssxref("scroll-snap-type")}} value of `mandatory`.

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
```

Next, we style the `<li>` elements, using the {{cssxref("flex")}} property to make them 100% of the width of the container. The {{cssxref("scroll-snap-align")}} value of `start` causes the left-hand side of the left-most visible item to snap to the left edge of the container when the content is scrolled.

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 100%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

##### Creating the scroll buttons

First, all scroll buttons are targeted with some rudimentary styles, as well as styling based on different states. It is important to set {{cssxref(":focus")}} styles for keyboard users. Also, as scroll buttons are automatically set to [`disabled`](/en-US/docs/Web/HTML/Reference/Attributes/disabled) when no more scrolling can occur in that direction, we use the {{cssxref(":disabled")}} pseudo-class to target this state.

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: black;
  opacity: 0.7;
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  opacity: 1;
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  opacity: 0.2;
  cursor: unset;
}
```

> [!NOTE]
> We also set a {{cssxref("cursor")}} value of `pointer` on the scroll buttons to make it more obvious that they can be interacted with (an improvement for both general [UX](/en-US/docs/Glossary/UX) and [cognitive accessibility](/en-US/docs/Web/Accessibility/Guides/Cognitive_accessibility)), unsetting it when the scroll buttons are `:disabled`.

Next, an appropriate icon is set on the left and right scroll buttons via the `content` property, which is also what causes the scroll buttons to be generated:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

We don't need to set [alternative text](/en-US/docs/Web/CSS/content#alternative_text_string_counter) for the icons on the `content` as the browser takes care of providing appropriate {{glossary("accessible name", "accessible names")}} automatically.

#### Result

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Note how the scroll buttons are created at the bottom left on the carousel. Try pressing them to see how they cause the content to be scrolled.

### Positioning the scroll buttons

The previous example works, but the buttons are not ideally placed. In this section, we will add some CSS to position them using [anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning).

#### CSS

First of all, a reference {{cssxref("anchor-name")}} is set on the `<ul>` to define it as a named anchor. Next, each scroll button has its {{cssxref("position")}} set to `absolute` and its {{cssxref("position-anchor")}} property set to the list's `anchor-name`, to [associate the two together](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

To actually position each scroll button, we first set an {{cssxref("align-self")}} value of `anchor-center` on both of them, to center them vertically on the carousel:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

We then set values on their {{glossary("inset properties")}} to handle the horizontal positioning. We use {{cssxref("anchor()")}} functions to position the specified sides of the buttons relative to the sides of the carousel. In each case, the {{cssxref("calc()")}} function is used to add some space between the button edge and the carousel edge. For example, the right-hand edge of the left scroll button is positioned 45 pixels to the right of the carousel's left-hand edge.

```css live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  right: calc(anchor(left) - 45px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 45px);
}
```

#### Result

{{EmbedLiveSample("positioning-scroll-buttons", '', '220')}}

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
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
