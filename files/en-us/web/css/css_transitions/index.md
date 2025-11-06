---
title: CSS transitions
slug: Web/CSS/CSS_transitions
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-transitions-1/
  - https://drafts.csswg.org/css-transitions-2/
sidebar: cssref
---

The **CSS transitions** module specifies functionality for creating gradual transitions between different CSS property values. The behavior of these transitions can be controlled by specifying their easing function, duration, and other values.

Normally, when the value of a CSS property changes, the result of the change from the old value to the new value is immediate. The CSS transitions module enables controlling a progression from the old property state to the new state over a specified period of time. It also provides event handlers to allow code to be run in response to different stages of a transition being reached.

In certain cases, there is no originating "from" value for a transition. For example, if an element gets added to the DOM, the styles defined are for the "to" state. This module provides the {{cssxref("@starting-style")}} at-rule, which enables defining starting styles for such cases. The module also defines how discrete property values should be transitioned, such as transitioning the discretely animated {{cssxref("display")}} property from the `none` value to a displayed value.

## Reference

### Properties

- {{cssxref("transition")}}
- {{cssxref("transition-behavior")}}
- {{cssxref("transition-delay")}}
- {{cssxref("transition-duration")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-timing-function")}}

### At rules

- {{cssxref("@starting-style")}}

### Interfaces

- {{domxref("CSSStartingStyleRule")}}
- {{domxref("CSSTransition")}}
  - {{domxref("CSSTransition.transitionProperty", "transitionProperty")}} property
- {{domxref("TransitionEvent")}}
  - {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}} constructor
  - {{domxref("TransitionEvent.propertyName")}} property
  - {{domxref("TransitionEvent.elapsedTime")}} property
  - {{domxref("TransitionEvent.pseudoElement")}} property
  - {{domxref("Element/transitioncancel_event", "transitioncancel")}} event
  - {{domxref("Element/transitionend_event", "transitionend")}} event
  - {{domxref("Element/transitionrun_event", "transitionrun")}} event
  - {{domxref("Element/transitionstart_event", "transitionstart")}} event

## Guides

- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Step-by-step tutorial explaining how to create transitions using CSS. This article describes each relevant CSS property and explains how they interact with each other.
- [Animating `display`](/en-US/docs/Web/CSS/Reference/Properties/display#animating_display)
  - : Transitioning to and from the `none` value of the discretely animated {{cssxref("display")}} property.
- [Transitioning a popover](/en-US/docs/Web/CSS/Reference/Properties/overlay#transitioning_a_popover) and [transitioning a `<dialog>`](/en-US/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements)
  - : Examples of transitioning from {{cssxref("@starting-style")}} to final {{cssxref(":popover-open")}} and {{cssxref(":open")}} pseudo-class styles.

## Related concepts

- {{cssxref("interpolate-size")}} property
- {{cssxref("calc-size()")}} function
- {{Glossary("Intrinsic size")}} glossary term

- [CSS easing functions](/en-US/docs/Web/CSS/Guides/Easing_functions) module
  - [`<easing-function>`](/en-US/docs/Web/CSS/Reference/Values/easing-function) data-type

- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module.
  - {{cssxref("animation")}} shorthand
  - {{cssxref("animation-delay")}}
  - {{cssxref("animation-direction")}}
  - {{cssxref("animation-duration")}}
  - {{cssxref("animation-fill-mode")}}
  - {{cssxref("animation-iteration-count")}}
  - {{cssxref("animation-name")}}
  - {{cssxref("animation-play-state")}}
  - {{cssxref("animation-timing-function")}}

- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module.
  - {{cssxref("transform")}}
  - {{cssxref("transform-box")}}
  - {{cssxref("transform-origin")}}
  - {{cssxref("transform-style")}}

- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
  - {{cssxref("scroll-snap-type")}}
  - {{cssxref("scroll-padding")}}
  - {{cssxref("scroll-snap-align")}}
  - {{cssxref("scroll-margin")}}
  - {{cssxref("scroll-snap-stop")}}

## Specifications

{{Specifications}}

## See also

- {{cssxref("opacity")}}
- {{cssxref("visibility")}}
- {{domxref("ViewTransition")}} interface
- {{domxref("PageTransitionEvent")}} interface
