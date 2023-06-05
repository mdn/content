---
title: animation-direction
slug: Web/CSS/animation-direction
page-type: css-property
browser-compat: css.properties.animation-direction
---

{{CSSRef}}

The **`animation-direction`** [CSS](/en-US/docs/Web/CSS) property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

{{EmbedInteractiveExample("pages/css/animation-direction.html")}}

It is often convenient to use the shorthand property {{cssxref("animation")}} to set all animation properties at once.

## Syntax

```css
/* Single animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Global values */
animation-direction: inherit;
animation-direction: initial;
animation-direction: revert;
animation-direction: revert-layer;
animation-direction: unset;
```

### Values

- `normal`
  - : The animation plays _forwards_ each cycle. In other words, each time the animation cycles, the animation will reset to the beginning state and start over again. This is the default value.
- `reverse`
  - : The animation plays _backwards_ each cycle. In other words, each time the animation cycles, the animation will reset to the end state and start over again. Animation steps are performed backwards, and timing functions are also reversed. For example, an `ease-in` timing function becomes `ease-out`.
- `alternate`
  - : The animation reverses direction each cycle, with the first iteration being played _forwards_. The count to determine if a cycle is even or odd starts at one.
- `alternate-reverse`
  - : The animation reverses direction each cycle, with the first iteration being played _backwards_. The count to determine if a cycle is even or odd starts at one.

> **Note:** When you specify multiple comma-separated values on an `animation-*` property, they are applied to the animations in the order in which the {{cssxref("animation-name")}}s appear. For situations where the number of animations and `animation-*` property values do not match, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> **Note:** When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations), specifying an `animation-direction` works as expected, for example `reverse` causes the animation to run in reverse over the course of the timeline's progression. A value of `alternate` (combined with an {{cssxref("animation-iteration-count")}}) causes the animation to run forwards and backwards as the timeline is progressed.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Reversing the animation direction

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
  animation-direction: reverse;
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

{{EmbedLiveSample("Reversing the animation direction","100%","250")}}

See [CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- Other related animation properties: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
