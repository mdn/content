---
title: CSS view transitions
slug: Web/CSS/CSS_view_transitions
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-view-transitions-1/
  - https://drafts.csswg.org/css-view-transitions-2/
---

{{CSSRef}}

The **CSS view transitions** module defines the [View Transition API](/en-US/docs/Web/API/View_Transitions_API), along with associated properties and pseudo-elements, which allows developers to create animated visual transitions when the state of a document changes.

## Reference

### Properties

- {{cssxref("view-transition-name")}}

> [!NOTE]
> The CSS view transitions module also defines an additional property, `view-transition-class`, which is not currently supported in any browser.

### At-rules and descriptors

- {{cssxref("@view-transition")}}
  - [`navigation`](/en-US/docs/Web/CSS/@view-transition#navigation) descriptor

### Selectors

- {{cssxref("::view-transition")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}

> [!NOTE]
> The CSS view transitions module also defines two additional pseudo-class, `:active-view-transition` and the functional pseudo-classs `:active-view-transition-type()`, which are not yet supported in any browser.

### Interfaces

- {{domxref("CSSViewTransitionRule")}}
- {{domxref("ViewTransition")}}
  - {{domxref("ViewTransition.skipTransition()")}} method
  - {{domxref("ViewTransition.updateCallbackDone")}}
  - {{domxref("ViewTransition.ready")}}
  - {{domxref("ViewTransition.finished")}}
- {{domxref("Document.startViewTransition()")}} method

## Guides

- [Using the View Transitions API](/en-US/docs/Web/API/View_Transitions_API/Using)

  - : Create view transitions and customize transition animations, including manipulating active view transitions.

## Related concepts

- {{domxref("PageRevealEvent", "pagereveal")}} event
- {{domxref("PageSwapEvent", "pageswap")}} event
- {{domxref("Document.visibilityState")}}

[CSS animations](/en-US/docs/Web/CSS/CSS_animations) module

- {{cssxref("animation")}}
- {{cssxref("@keyframes")}}
- {{domxref("CSSKeyframesRule")}}
- {{domxref("CSSStyleRule")}}
- [Web animations API](/en-US/docs/Web/API/Web_Animations_API)

[CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module

- {{cssxref("transform")}}
- {{cssxref("transform-function")}}

## Specifications

{{Specifications}}

## See also

- [Pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements)
- [Functional pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [CSS building blocks: Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
