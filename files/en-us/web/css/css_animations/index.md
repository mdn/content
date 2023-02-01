---
title: CSS animations
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

The animations CSS module lets you animate the values of CSS properties, such as background-position and transform, over time by using keyframes. Each keyframe describes how the animated element should render at a given time during the animation sequence. You can use the properties in the animations module to control the duration, number of repetitions, delayed start, and other aspects of an animation.

### Animations in action

To view the animation in the box below, click the checkbox 'Play the animation' or hover the cursor over the box. When the animating is active, the cloud at the top changes shape, snowflakes fall, and the snow level at the bottom rises. To pause the animation, uncheck the checkbox or move your cursor away from the box.

```html hidden
<input type="checkbox" id="animate" aria-label="Toggle the play state of the animation"><!-- See aria-label: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label -->
<label for="animate">the animation</label>
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
  animation: falling 3s linear 0s infinite backwards;
  /* Snowflakes are made with CSS linear gradients (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) */
  background-image: 
    linear-gradient(180deg, transparent 40%, white 40%, white 60%, transparent 60%), 
    linear-gradient(90deg, transparent 40%, white 40%, white 60%, transparent 60%), 
    linear-gradient(45deg, transparent 43%, white 43%, white 57%, transparent 57%), 
    linear-gradient(135deg, transparent 43%, white 43%, white 57%, transparent 57%); 
}
 i:nth-of-type(4n) { /* using tree structural pseudoclasses to create randomness - https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type */
    height: 30px;
    width: 30px;
    transform-origin: right -30px; 
    }
 i:nth-of-type(4n+1) {
    height: 24px;
    width: 24px;
    transform-origin: left 30px; 
    }
 i:nth-of-type(4n+2) {
    height: 10px;
    width: 10px;
    transform-origin: -30px 0; 
    }
 i:nth-of-type(4n+3) {
    height: 40px;
    width: 40px;
    transform-origin: -50px 0; 
    }
 i:nth-of-type(4n) {
    animation-duration: 5.3s;
    animation-iteration-count: 12;
    transform-origin: -10px -20px; 
    }
 i:nth-of-type(4n+1) {
    animation-duration: 3.1s;
    animation-iteration-count: 20;
    transform-origin: 10px -20px; 
    }
 i:nth-of-type(4n+2) {
    animation-duration: 1.7s;
    animation-iteration-count: 35;
    transform-origin: right -20px; 
    }
 i:nth-of-type(3n) {
    animation-delay: 2.3s; 
    }
 i:nth-of-type(3n+1) {
    animation-delay: 1.5s; 
    }
 i:nth-of-type(3n+2) {
    animation-delay: 3.4s; 
    }
 i:nth-of-type(5n) {
    animation-timing-function: ease-in-out; 
    }
 i:nth-of-type(5n+1) {
    animation-timing-function: ease-out; 
    }
 i:nth-of-type(5n+2) {
    animation-timing-function: ease; 
    }
 i:nth-of-type(5n+3) {
    animation-timing-function: ease-in; 
    }
 i:nth-of-type(5n+4) {
    animation-timing-function: linear; 
    }
 i:nth-of-type(11n) {
    animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9); 
    }
 i:nth-of-type(7n) {
    opacity: 0.5; 
    }
 i:nth-of-type(7n+2) {
    opacity: 0.3; 
    }
 i:nth-of-type(7n+4) {
    opacity: 0.7; 
    }
 i:nth-of-type(7n+6) {
    opacity: 0.6;
    animation-timing-function: ease-in;
    transform-origin: left 10px;
    }
 i:nth-of-type(7n+1) {
    opacity: 0.8;
    }

.root {
  height: 600px;
  background-color: skyblue;
  border: 1px solid darkgrey;
  position: relative;
  overflow: hidden;
}
.ground, .cloud {
  position: absolute;
  top: 0; 
  right: 0; 
  left: 0; 
  background-repeat: no-repeat;
}
.cloud { 
   width: 100%;
   height: 150px;
   background: #ffffff;
   border-radius: 0 0 90px 33% / 0 0 45px 50px;
   box-shadow: 
     5px 15px 15px white, 
     -5px 15px 15px white, 
     0 20px 20px rgba(125 125 125 / 0.5);
  animation: 
    clouds ease 5s alternate infinite 0.2s, 
    wind ease-out 4s alternate infinite;
}
.ground {
  bottom: 0;
  background-image: linear-gradient(to top, #fff 97%, 99%, #bbb 100%);
  background-position: center 580px;
  animation: snowpile linear 300s forwards;
  border: 1px solid grey;
  /* put the ground into a 3D rendering context (because the snow flakes are in a 3d rendering context) */
  transform: translate3d(0, 0, 0); 
}

@keyframes snowpile {
  from {
    background-position: center 580px;
    }
  to {
    background-position: center 280px;
    }
}

@keyframes clouds {
  from {
    border-radius: 0 0 90px 33% / 0 0 45px 50px; 
  }
  to {
    border-radius: 0 0 40px 50% / 0 0 55px 80px; 
  }
}

@keyframes wind {
  from {
    height: 150px;
  }
  to {
    height: 100px;
  }
}

@keyframes falling {
  from {
    transform: translate(0, -50px) rotate(0deg) scale(0.9, 0.9); 
    }
  to {
    transform: translate(30px, 600px) rotate(360deg) scale(1.1, 1.1); 
    } 
}

/* by default, the animations are paused. */
i, 
div[class] {
  animation-play-state: paused;
}
/* When the div is hovered, the animation plays. Also, 
when the input is checked, the animation coming after the checked checbox plays */
div:hover *, 
input:checked ~ div * { 
  animation-play-state: running;
}

/* Change the content of the label that comes right after the input. Included aria-label on the label to improve accessibility. */
input + label::before {
  content: "Play " 
}
input:checked + label::before {
  content: "Pause "
}
```

{{ EmbedLiveSample('Animations_in_action', "630", "630") }}

This sample animation uses {{cssxref("animation-iteration-count")}} to make the flakes fall repeatedly, {{cssxref("animation-direction")}} to make the cloud move back and forth, {{cssxref("animation-fill-mode")}} to raise the snow level in response to the cloud movement, and {{cssxref("animation-play-state")}} to pause the animation. To see the code for this animation, [view the source on Github](https://github.com/mdn/content/blob/main/files/en-us/web/css/css_animations/index.md?plain=1).

## Reference

### Properties

- {{cssxref("animation")}} shorthand
- {{cssxref("animation-composition")}} {{Experimental_Inline}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-timeline")}}t

### At-rules

- {{cssxref("@keyframes")}}

### Functions

- [`scroll()`](/en-US/docs/Web/CSS/animation-timeline/scroll)

### Events

All animations, even those with 0 seconds duration, throw animation events.

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}}
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### Interfaces

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEvent")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}

## Guides

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  - : Step-by-step tutorial on how to create animations using CSS. This article describes the animation-related CSS properties and at-rule and how they interact with each other.
- [CSS animations tips and tricks](/en-US/docs/Web/CSS/CSS_Animations/Tips)
  - : Tips and tricks to help you get the most out of CSS animations.

## Related concepts

- {{cssxref("will-change")}} CSS property
- [`<easing-function>`](/en-US/docs/Web/CSS/easing-function) data type
- [`prefers-reduced-motion`](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query
- {{glossary("Bézier curve")}} glossary term

## Specifications

{{Specifications}}

## See also

- {{Experimental_Inline}} The CSS scroll timeline {{cssxref('scroll-timeline-name')}} and {{cssxref('scroll-timeline-axis')}} properties, along with the {{cssxref('scroll-timeline')}} shorthand, create animations tied to the scroll offset of a scroll container.
- Properties in the [transitions](/en-US/docs/Web/CSS/CSS_Transitions) CSS module to trigger animations based on user actions
- The {{htmlelement("canvas")}} HTML element along with [canvas API](/en-US/docs/Web/API/Canvas_API) and [WebGL API](/en-US/docs/Web/API/WebGL_API) to draw graphics and animations
- The {{domxref("SVGAnimationElement")}} interface for all the animation-related element interfaces, including {{domxref("SVGAnimateElement")}}, {{domxref("SVGSetElement")}}, {{domxref("SVGAnimateColorElement")}}, {{domxref("SVGAnimateMotionElement")}}, and {{domxref("SVGAnimateTransformElement")}}
