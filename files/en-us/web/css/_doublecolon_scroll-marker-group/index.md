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

A scroll container's **`::scroll-marker-group`** pseudo-element automatically contains any {{cssxref("::scroll-marker")}} pseudo-elements generated on its descendants. This allows them to be positioned and laid out as a group, and is typically used when creating a CSS carousel, to create a scroll position indicator. The individual scroll markers can also be used to navigate to their associated content items.

The {{cssxref("scroll-marker-group")}} property must be set to a non-`none` value on the scroll container for a `::scroll-marker-group` pseudo-element to be generated; the chosen value determines where the scroll marker group appears in the carousel's tab order and layout box order (but not DOM structure) — `before` puts it at the start, while `after` puts it at the end.

It is a best practice to match the visual rendering position of the scroll marker group with the tab order. When placing the group at the start of the content, put it at the beginning of the tab order using `before`. When placing the group at the end of the content, put it at the end of the tab order using `after`.

Accessibility-wise, the scroll marker group and contained scroll markers are rendered with [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) semantics. When you <kbd>Tab</kbd> to the group, it behaves like a single item (that is, another press of the <kbd>Tab</kbd> key will move past the group to the next item), and you can move between the different scroll markers using the left and right (or up and down) cursor keys.

## Examples

> [!NOTE]
> You can find a full example walkthough featuring the below code snippets in our [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) guide.

### Generating and positioning a scroll marker group

In the below snippet, a scrolling {{htmlelement("ul")}} element's {{cssxref("scroll-marker-group")}} property is set to `after`, so the `::scroll-marker-group` pseudo-element is generated after the list's DOM content:

```css
ul {
  scroll-marker-group: after;
}
```

Next, the list's `::scroll-marker-group` pseudo-element is positioned relative to the container using [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning). First of all, a reference {{cssxref("anchor-name")}} is set on the list. Next, each scroll button has its {{cssxref("position")}} set to `absolute`, and its {{cssxref("position-anchor")}} property set to the same reference name defined on the list, to associate the two together. To position the group, we set a value on its {{cssxref("top")}} property that uses an {{cssxref("anchor()")}} function to position its top edge relative to the container's bottom edge, and horizontally center it on the container using a {{cssxref("justify-self")}} value of `anchor-center`.

The group is laid out using flexbox, with a {{cssxref("justify-content")}} value of of `center` and a {{cssxref("gap")}} of `20px` so that its children (the `::scroll-marker` pseudo-elements) are centered inside the `::scroll-marker-group` with a gap between each one.

```css
ul {
  anchor-name: --myCarousel;
}

/* ... */

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

### Styling the scroll markers

The `::scroll-marker` pseudo-elements representing the scroll markers are generated on the {{htmlelement("li")}} chidren of the scrolling list, but are automatically placed inside the `::scroll-marker-group` pseudo-element.

The look of each one is handled by setting {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}}, and {{cssxref("border-radius")}}, but we also need to set a non-`none` value for the `content` property so they are actually generated. We also set an {{cssxref("interactive")}} value of `auto` so that all the markers will be interactive (by default, they are set to {{glossary("inert")}}, and only the one corresponding to the currently visible "page" is interactive).

```css
li::scroll-marker {
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
  content: "";
  interactivity: auto;
}
```

Next, the {{cssxref(":target-current")}} pseudo-class is used to select whichever scroll marker corresponds to the currently visible "page", highlighting how far the user has scrolled through the content. In this case, we set the `background-color` to `black` so it is styled as a filled-in circle.

```css
li::scroll-marker:target-current {
  background-color: black;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-marker-group")}} and {{cssxref("interactivity")}} properties
- {{cssxref("::scroll-button()")}}, {{cssxref("::scroll-marker")}}, and {{cssxref("::column")}} pseudo-elements
- {{cssxref(":target-current")}} pseudo-class
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) on chrome.dev (2025)
