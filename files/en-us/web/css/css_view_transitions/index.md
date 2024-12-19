---
title: CSS view transitions
slug: Web/CSS/CSS_view_transitions
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-view-transitions-1/
  - https://drafts.csswg.org/css-view-transitions-2/
---

{{CSSRef}}

The **CSS view transitions** module defines the behavior of the [View Transition API](/en-US/docs/Web/API/View_Transition_API), which allows developers to create animated transitions between different states within a document and across documents. This module also defines the CSS properties and pseudo-elements for styling these transitions.

## Reference

### Properties

- {{cssxref("view-transition-name")}} {{experimental_inline}}

> [!NOTE]
> This module also defines the `view-transition-class` property, but it is currently not supported in any browser.

### At-rules and descriptors

- {{cssxref("@view-transition")}}
  - [`navigation`](/en-US/docs/Web/CSS/@view-transition#navigation) descriptor

### Selectors and pseudo-elements

- {{cssxref("::view-transition")}} {{experimental_inline}}
- {{cssxref("::view-transition-image-pair()")}} {{experimental_inline}}
- {{cssxref("::view-transition-group()")}} {{experimental_inline}}
- {{cssxref("::view-transition-new()")}} {{experimental_inline}}
- {{cssxref("::view-transition-old()")}} {{experimental_inline}}

> [!NOTE]
> This module also defines the `:active-view-transition` and `:active-view-transition-type()` pseudo-classes, but they are currently not supported in any browser.

### Interfaces

- {{domxref("CSSViewTransitionRule")}}
- {{domxref("ViewTransition")}}
  - {{domxref("ViewTransition.skipTransition()")}} method
  - {{domxref("ViewTransition.updateCallbackDone")}}
  - {{domxref("ViewTransition.ready")}}
  - {{domxref("ViewTransition.finished")}}
- {{domxref("Document.startViewTransition()")}} method

## Guides

- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)

  - : Explains how to create view transitions and customize transition animations, including manipulating active view transitions.

## Related concepts

- {{domxref("PageRevealEvent", "pagereveal")}} event
- {{domxref("PageSwapEvent", "pageswap")}} event
- {{domxref("Document.visibilityState")}}

- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module

  - {{cssxref("animation")}}
  - {{cssxref("@keyframes")}}
  - {{domxref("CSSKeyframesRule")}}
  - {{domxref("CSSStyleRule")}}
  - [Web animations API](/en-US/docs/Web/API/Web_Animations_API)

- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module

  - {{cssxref("transform")}}
  - {{cssxref("transform-function")}}

## Specifications

{{Specifications}}

## See also

- [Pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements)
- [Functional pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [CSS building blocks: Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
