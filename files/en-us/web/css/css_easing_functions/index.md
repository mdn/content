---
title: CSS easing functions
slug: Web/CSS/CSS_easing_functions
page-type: css-module
spec-urls: https://drafts.csswg.org/css-easing-2
sidebar: cssref
---

The **CSS easing functions** module defines easing functions, which provide a means to control the transformation of values. The functions defined include linear, cubic bezier, and step easing functions. These easing functions can be applied to animations and transitions.

Gradually increasing the speed at which an element moves can give the element a sense of weight as it appears to gather momentum. Easing functions enable you to control the rate of change. Cubic bezier easing functions can be used to produce intuitive user interface elements or convincing cartoon props that behave like their physical counterparts.

Alternatively, you may want an animation to move forward in distinct steps, to create robot-like movement, or the effect of a segmented wheel that rotates such that the segments always appear in the same position. For this, step easing functions can be used.

## Reference

### Functions

- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
- {{cssxref("easing-function/linear", "linear()")}}
- {{cssxref("easing-function/steps", "steps()")}}

### data types

- {{cssxref("easing-function")}}
- [`<linear-easing-function>`](/en-US/docs/Web/CSS/Reference/Values/easing-function#linear-easing-function)
- [`<cubic-bezier-easing-function>`](/en-US/docs/Web/CSS/Reference/Values/easing-function#cubic-bezier-easing-function)
- [`<step-easing-function>`](/en-US/docs/Web/CSS/Reference/Values/easing-function#step-easing-function)

### Terms and glossary definitions

- {{glossary("Bézier curve")}}
- {{glossary("Interpolation")}}

## Guides

- [CSS value functions: easing functions](/en-US/docs/Web/CSS/Reference/Values/Functions#easing_functions)
  - : The CSS statements that invoke special data processing or calculations to return a CSS value for a CSS property.

## Related concepts

- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module
  - {{cssxref("animation-timing-function")}}
  - {{cssxref("animation")}} shorthand

- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) module
  - {{cssxref("transition-timing-function")}}
  - {{cssxref("transition")}} shorthand

## Specifications

{{Specifications}}

## See also

- [CSS value functions](/en-US/docs/Web/CSS/Reference/Values/Functions)
- {{cssxref("will-change")}} CSS property
