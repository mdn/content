---
title: CSS Animations
slug: Web/CSS/CSS_Animations
tags:
  - CSS
  - CSS Animations
  - Guide
  - Overview
  - Reference
---
{{CSSRef}}

**CSS Animations** is a module of CSS that lets you animate the values of CSS properties over time, using keyframes. The behavior of these keyframe animations can be controlled by specifying their timing function, duration, their number of repetitions, and other attributes.

## Reference

### CSS Properties

- {{cssxref("animation")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timing-function")}}

### CSS At-rules

- {{cssxref("@keyframes")}}

## Guides

- [Detecting CSS animation support](/en-US/docs/Web/CSS/CSS_Animations/Detecting_CSS_animation_support)
  - : Describes a technique for detecting if a browser supports CSS animations.
- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  - : Step-by-step tutorial about how to create animations using CSS. This article describes each relevant CSS property and at-rule and explains how they interact with each other.
- [CSS animations tips and tricks](/en-US/docs/Web/CSS/CSS_Animations/Tips)
  - : Tips and tricks to help you get the most out of CSS animations. Currently offers a technique for replaying an animation which has already run through to completion, which the API doesn't support inherently.

## Specifications

| Specification                                | Status                                   | Comment             |
| -------------------------------------------- | ---------------------------------------- | ------------------- |
| {{ SpecName('CSS3 Animations') }} | {{ Spec2('CSS3 Animations') }} | Initial definition. |

## Browser compatibility

### `animation` property

{{Compat("css.properties.animation")}}

## See also

- Related to CSS Animations, [CSS Transitions](/en-US/docs/Web/CSS/CSS_Transitions) can trigger animations based on user actions.
