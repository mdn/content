---
title: view-transition-class
slug: Web/CSS/view-transition-class
page-type: css-property
status:
  - experimental
browser-compat: css.properties.view-transition-class
---

{{CSSRef}}

The **`view-transition-class`** [CSS](/en-US/docs/Web/CSS) property provides the selected elements with an identifying class (a {{cssxref("custom-ident")}}), providing an additional method of styling the view transitions for those elements.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-class: card;

/* Keyword value */
view-transition-class: none;

/* Global values */
view-transition-class: inherit;
view-transition-class: initial;
view-transition-class: revert;
view-transition-class: revert-layer;
view-transition-class: unset;
```

### Values

- {{cssxref("custom-ident")}}
  - : An identifying name that causes the selected element to participate in a separate [view transition](/en-US/docs/Web/API/View_Transition_API) from the root view transition. The identifier must be unique. If two rendered elements have the same `view-transition-name` at the same time, {{domxref("ViewTransition.ready")}} will reject and the transition will be skipped.
- `none`
  - : No class would apply to the named view transition pseudo-elements generated for this element.

## Description

The `view-transition-class` value provides a styling hook, similar to a CSS class name, which can be used to apply the same styles to multiple view transition pseudo-elements. It does not mark an element for capturing. Each individual element still needs its own unique {{cssxref("view-transition-name")}}; the `view-transition-class` is only used as an additional way to style elements that already have a `view-transition-name`.
Support for determining the `view-transition-name` automatically is being discussed in the [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name) spec.

The `view-transition-class` apply styles using the view transition pseudo-elements, including {{cssxref("::view-transition-group()")}}, {{cssxref("::view-transition-image-pair()")}}, {{cssxref("::view-transition-old()")}}, and {{cssxref("::view-transition-new()")}}. This is different from the `view-transition-name`, which matches view transitions between the element in the old state with its corresponding element in the new state.

Until the `view-transition-class` property is fully supported in all browsers supporting view transitions, include a custom `::view-transition-group()` for each element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

```css
::view-transition-group(fast-card-slide) {
  animation-duration: 3s;
}

.product {
  view-transition-class: fast-card-slide;
}

.product#card1 {
  view-transition-name: show-card;
}

.product#card2 {
  view-transition-name: hide-card;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("view-transition-name")}}
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using) guide
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
