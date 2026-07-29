---
title: "`view-transition-class` CSS property"
short-title: view-transition-class
slug: Web/CSS/Reference/Properties/view-transition-class
page-type: css-property
browser-compat: css.properties.view-transition-class
sidebar: cssref
---

The **`view-transition-class`** [CSS](/en-US/docs/Web/CSS) property provides the selected elements with one or more identifying classes ({{cssxref("custom-ident")}}s), providing an additional method of styling the view transitions for those elements.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-class: card;
view-transition-class: card fast-slide;

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
  - : An identifying name used to select view transition pseudo-elements for styling. Unlike `view-transition-name`, a class does not need to be unique and does not cause the element to participate in a separate view transition group.
- `none`
  - : No class would apply to the named view transition pseudo-elements generated for this element.

## Description

The `view-transition-class` value provides a styling hook, similar to a CSS class name, which can be used to apply the same styles to multiple view transition pseudo-elements. It does not mark an element for capturing. Each individual element still needs its own unique {{cssxref("view-transition-name")}}; the `view-transition-class` is only used as an additional way to style elements that already have a `view-transition-name`.
Support for determining the `view-transition-name` automatically is being discussed in the [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name) spec.

The `view-transition-class` applies styles using the view transition pseudo-elements, including {{cssxref("::view-transition-group()")}}, {{cssxref("::view-transition-image-pair()")}}, {{cssxref("::view-transition-old()")}}, and {{cssxref("::view-transition-new()")}}. This is different from the `view-transition-name`, which matches view transitions between the element in the old state with its corresponding element in the new state.

Until the `view-transition-class` property is fully supported in all browsers supporting view transitions, include a custom `::view-transition-group()` for each element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Styling a shared class across multiple elements

In this example, three cards each have a unique {{cssxref("view-transition-name")}} (required for pairing old and new states), but they all share the same `view-transition-class`. This lets you write a single rule that styles all their transitions at once, rather than repeating styles for each name individually. Unlike `view-transition-name`, a `view-transition-class` does not need to be unique.

```html
<div class="card" id="card1">Card 1</div>
<div class="card" id="card2">Card 2</div>
<div class="card" id="card3">Card 3</div>
```

```css
/* Each element must have a unique view-transition-name */
#card1 {
  view-transition-name: card-1;
}

#card2 {
  view-transition-name: card-2;
}

#card3 {
  view-transition-name: card-3;
}

/* But they can all share the same view-transition-class */
.card {
  view-transition-class: card;
}

/* This single rule applies to all three cards' transitions */
::view-transition-group(.card) {
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}
```

### Using multiple classes on a single element

A `view-transition-class` value can be a space-separated list of identifiers, letting you compose several "atomic" styles on the same element and target each one independently of your view transition pseudo-elements. In this example, both cards share the same two classes — `slide` controls the animation, and `fast-transition` controls its duration — while each card still has its own unique {{cssxref("view-transition-name")}}.

```html
<div class="card" id="card1">Card 1</div>
<div class="card" id="card2">Card 2</div>
```

```css
.card {
  view-transition-class: slide fast-transition;
}

#card1 {
  view-transition-name: card-1;
}

#card2 {
  view-transition-name: card-2;
}

/* The `slide` class drives which animation runs... */
::view-transition-new(.slide) {
  animation-name: slide-in;
}

::view-transition-old(.slide) {
  animation-name: slide-out;
}

/* ...while the `fast-transition` class drives how long it runs. */
::view-transition-group(.fast-transition) {
  animation-duration: 0.5s;
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
