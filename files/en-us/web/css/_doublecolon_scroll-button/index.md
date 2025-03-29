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

> [!NOTE]
> You can find a full example walkthough featuring the below code snippets in our [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) guide.

### Styling and generating scroll buttons

The following snippet targets all of the scroll buttons generated inside a scrolling {{htmlelement("ul")}} element to apply general styles:

```css
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

Below, an appropriate icon is set on the left and right scroll buttons via the `content` property, which is also what causes the scroll buttons to be generated:

```css
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

### Positioning scroll buttons

The scroll buttons can be positioned relative to their parent scroll container using [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning). First of all, a reference {{cssxref("anchor-name")}} is set on the list. Next, each scroll button has its {{cssxref("position")}} set to `absolute`, and its {{cssxref("position-anchor")}} property set to the same reference name defined on the list, to associate the two together.

```css
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

To actually position each scroll button, you can set values on their {{glossary("inset properties")}} that use {{cssxref("anchor()")}} functions to position the specified sides of the buttons relative to the sides of the container.

```css
ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  bottom: calc(anchor(top) + 21px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  bottom: calc(anchor(top) + 21px);
}
```

> [!NOTE]
> In each case, the {{cssxref("calc()")}} function is used to add some space between the button edge and the scroll container edge. So for example, the right-hand edge of the left scroll button is positioned 70 pixels to the right of the container's left-hand edge.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-marker-group")}} and {{cssxref("interactivity")}} properties
- {{cssxref("::scroll-marker-group")}}, {{cssxref("::scroll-marker")}}, and {{cssxref("::column")}} pseudo-elements
- {{cssxref(":target-current")}} pseudo-class
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) on chrome.dev (2025)
