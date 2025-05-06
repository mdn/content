---
title: animation-delay
slug: Web/CSS/animation-delay
page-type: css-property
browser-compat: css.properties.animation-delay
---

{{CSSRef}}

The **`animation-delay`** [CSS](/en-US/docs/Web/CSS) property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

{{InteractiveExample("CSS Demo: animation-delay")}}

```css interactive-example-choice
animation-delay: 250ms;
```

```css interactive-example-choice
animation-delay: 2s;
```

```css interactive-example-choice
animation-delay: -2s;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div>Animation <span id="play-status"></span></div>
  <div id="example-element">Select a delay to start!</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  color: white;
  margin: auto;
  margin-left: 0;
  border: 5px solid #333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#play-status {
  font-weight: bold;
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-iteration-count: 2;
  animation-direction: alternate;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

```js interactive-example
"use strict";

window.addEventListener("load", () => {
  const el = document.getElementById("example-element");
  const status = document.getElementById("play-status");

  function update() {
    status.textContent = "delaying";
    el.className = "";
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.className = "animating";
      });
    });
  }

  el.addEventListener("animationstart", () => {
    status.textContent = "playing";
  });

  el.addEventListener("animationend", () => {
    status.textContent = "finished";
  });

  const observer = new MutationObserver(() => {
    update();
  });

  observer.observe(el, {
    attributes: true,
    attributeFilter: ["style"],
  });

  update();
});
```

It is often convenient to use the shorthand property {{cssxref("animation")}} to set all animation properties at once.

## Syntax

```css
/* Single animation */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Multiple animations */
animation-delay: 2.1s, 480ms;

/* Global values */
animation-delay: inherit;
animation-delay: initial;
animation-delay: revert;
animation-delay: revert-layer;
animation-delay: unset;
```

### Values

- {{cssxref("&lt;time&gt;")}}

  - : The time offset, from the moment at which the animation is applied to the element, at which the animation should begin. This may be specified in either seconds (`s`) or milliseconds (`ms`). The unit is required.

    A positive value indicates that the animation should begin after the specified amount of time has elapsed. A value of `0s`, which is the default, indicates that the animation should begin as soon as it's applied.

    A negative value causes the animation to begin immediately, but partway through its cycle. For example, if you specify `-1s` as the animation delay time, the animation will begin immediately but will start 1 second into the animation sequence. If you specify a negative value for the animation delay, but the starting value is implicit, the starting value is taken from the moment the animation is applied to the element.

> [!NOTE]
> When you specify multiple comma-separated values on an `animation-*` property, they are applied to the animations in the order in which the {{cssxref("animation-name")}}s appear. For situations where the number of animations and `animation-*` property values do not match, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> **Note:** `animation-delay` has no effect on [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting an animation delay

This animation has a delay of 2 seconds.

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-delay: 2s;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### Result

Hover over the rectangle to start the animation.

{{EmbedLiveSample("Setting an animation delay","100%","250")}}

See [CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- Other related animation properties: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
