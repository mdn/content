---
title: CSS Animations
slug: Web/CSS/CSS_Animations
page-type: css-module
tags:
  - CSS
  - CSS Animations
  - Guide
  - Overview
  - Reference
spec-urls: 
  - https://w3c.github.io/csswg-drafts/css-animations-2/
  - https://w3c.github.io/csswg-drafts/css-animations/
---

{{CSSRef}}

The **CSS Animations** module lets you animate the values of CSS properties over time, using keyframes, providing properties to control the easing, duration, number of repetitions, play state, and other attributes of these keyframes.

`<STILL WORKING ON THIS>`

### Example

To activate the clouds to start the snow fall and snow accumulation, hover over the example. When you move the mouse out of the example, the animation will pause.

```html hidden
<div class="root">
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <div class="cloud"></div>
  <div class="ground"><div>
</div>
```

```css hidden
i {
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  animation: falling 3s linear 2s infinite backwards;
  background-image: 
    linear-gradient(180deg, transparent 40%, white 40%, white 60%, transparent 60%), 
    linear-gradient(90deg, transparent 40%, white 40%, white 60%, transparent 60%), 
    linear-gradient(45deg, transparent 43%, white 43%, white 57%, transparent 57%), 
    linear-gradient(135deg, transparent 43%, white 43%, white 57%, transparent 57%); 
}
 i:nth-of-type(4n) {
    height: 30px;
    width: 30px;
    transform-origin: right -30px; }
 i:nth-of-type(4n+1) {
    height: 24px;
    width: 24px;
    transform-origin: left 30px; }
 i:nth-of-type(4n+2) {
    height: 10px;
    width: 10px;
    transform-origin: -30px 0; }
 i:nth-of-type(4n+3) {
    height: 40px;
    width: 40px;
    transform-origin: -50px 0; }
 i:nth-of-type(4n) {
    animation-duration: 5.3s;
    animation-iteration-count: 12;
    transform-origin: -10px -20px; }
 i:nth-of-type(4n+1) {
    animation-duration: 3.1s;
    animation-iteration-count: 20;
    transform-origin: 10px -20px; }
 i:nth-of-type(4n+2) {
    animation-duration: 1.7s;
    animation-iteration-count: 35;
    transform-origin: right -20px; }
 i:nth-of-type(3n) {
    animation-delay: 2.3s; }
 i:nth-of-type(3n+1) {
    animation-delay: 1.5s; }
 i:nth-of-type(3n+2) {
    animation-delay: 3.4s; }
 i:nth-of-type(5n) {
    animation-timing-function: ease-in-out; }
 i:nth-of-type(5n+1) {
    animation-timing-function: ease-out; }
 i:nth-of-type(5n+2) {
    animation-timing-function: ease; }
 i:nth-of-type(5n+3) {
    animation-timing-function: ease-in; }
 i:nth-of-type(5n+4) {
    animation-timing-function: linear; }
 i:nth-of-type(11n) {
    animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9); }
 i:nth-of-type(7n) {
    opacity: 0.5; }
 i:nth-of-type(7n+2) {
    opacity: 0.3; }
 i:nth-of-type(7n+4) {
    opacity: 0.7; }
 i:nth-of-type(7n+6) {
    opacity: 0.6;
    animation-timing-function: ease-in;
    transform-origin: left 10px; }
 i:nth-of-type(7n+1) {
    opacity: 0.8; }

.root {
  height: 600px;
  background-color: skyblue;
  border: 1px solid darkgrey;
  position: relative;
  overflow: hidden;
}
.ground, .cloud {
  position: absolute;
  top: 0; right: 0; left: 0; bottom: 0;
  background-repeat: no-repeat;
}
.cloud { 
   width:100%;
   height:150px;
   background:#ffffff;
   border-radius: 0 0 90px 33% / 0 0 45px 50px;
   box-shadow: 
     5px 15px 15px white, 
     -5px 15px 15px white, 
     0 20px 20px rgba(125 125 125 / 0.5);

  animation: clouds ease 5s alternate infinite 2s;
}
.ground {
  background-image: linear-gradient(to top, white 0 98%, rgba(125 125 125 / 0.5) 100%);
  background-position: center 580px;
  animation: snowpile linear 300s forwards;
  border: 1px solid grey;
  transform: translate3d(0, 0, 0);
}

@keyframes snowpile {
  from {background-position: center 580px;}
  to {background-position: center 280px;}
}

@keyframes clouds {
  from {
    border-radius: 0 0 90px 33% / 0 0 45px 50px; 
    height: 150px;
  }
  to {
    border-radius: 0 0 40px 50% / 0 0 55px 80px; 
    height: 100px;
  }
}

@keyframes falling {
  from {
    transform: translate(0, -50px) rotate(0deg) scale(0.9, 0.9); }
  to {
    transform: translate(30px, 600px) rotate(360deg) scale(1.1, 1.1); } 
}

i, div[class] {animation-play-state: paused;}
div:hover * {
  animation-play-state: running;
}
```

{{ EmbedLiveSample('Example', "630", "630") }}

## Reference

### Properties

- {{cssxref("animation")}} shorthand
- {{cssxref("animation-composition")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-timeline")}}

### At-rules

- {{cssxref("@keyframes")}}

### Data types, functions, and values

- {{cssxref("easing-function")}}
- [`scroll()`](/en-US/docs/Web/CSS/animation-timeline/scroll) function

### Events

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}},
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### Interfaces

- {{domxref("AnimationEvent")}} (inherits from {{domxref("Event")}})
  - : Including {{domxref("AnimationEvent.animationName")}}, {{domxref("AnimationEvent.elapsedTime")}}, and {{domxref("AnimationEvent.pseudoElement")}} properties.
- {{domxref("CSSKeyframeRule")}} (inherits from {{domxref("CSSRule")}})
  - : Including {{domxref("CSSKeyframeRule.keyText")}} and {{domxref("CSSKeyframeRule.style")}}.
- {{domxref("CSSKeyframesRule")}} (inherits from {{domxref("CSSRule")}})
  - : Including {{domxref("CSSKeyframesRule.name")}}, {{domxref("CSSKeyframesRule.cssRules")}}, {{domxref("CSSKeyframesRule.appendRule()")}}, {{domxref("CSSKeyframesRule.deleteRule()")}}, and {{domxref("CSSKeyframesRule.findRule()")}}
- {{DOMxRef("Element")}}
  - : Including {{DOMxRef("Element.animate()")}} and {{DOMxRef("Element.getAnimations()")}}

## Guides

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  - : Step-by-step tutorial about how to create animations using CSS. This article describes each relevant CSS property and at-rule and explains how they interact with each other.
- [CSS animations tips and tricks](/en-US/docs/Web/CSS/CSS_Animations/Tips)
  - : Tips and tricks to help you get the most out of CSS animations. Currently offers a technique for replaying an animation which has already run through to completion, which the API doesn't support inherently.

## Associated content

### Associated properties

- {{cssxref('will-change')}}

### Glossary terms

- {{glossary("Bézier curve")}}

## Specifications

{{Specifications}}

## See also

- [CSS Transitions](/en-US/docs/Web/CSS/CSS_Transitions) can trigger animations based on user actions.
- The CSS Scroll Timeline {{cssxref('scroll-timeline-name')}} and {{cssxref('scroll-timeline-axis')}} properties, along with the {{cssxref('scroll-timeline')}} shorthand, create animations tied to the scroll offset of a scroll container.
- The [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) enables constructing and controlling the playback of animations with JavaScript.
