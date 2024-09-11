---
title: animation-duration
slug: Web/CSS/animation-duration
page-type: css-property
browser-compat: css.properties.animation-duration
---

{{CSSRef}}

The **`animation-duration`** [CSS](/en-US/docs/Web/CSS) property sets the length of time that an animation takes to complete one cycle.

{{EmbedInteractiveExample("pages/css/animation-duration.html")}}

It is often convenient to use the shorthand property {{ cssxref("animation") }} to set all animation properties at once.

## Syntax

```css
/* Single animation */
animation-duration: auto; /* Default */
animation-duration: 6s;
animation-duration: 120ms;

/* Multiple animations */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;

/* Global values */
animation-duration: inherit;
animation-duration: initial;
animation-duration: revert;
animation-duration: revert-layer;
animation-duration: unset;
```

### Values

- `auto`

  - : For time-based animations, `auto` is equivalent to a value of `0s` (see below). For [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations), `auto` fills the entire timeline with the animation.

- {{cssxref("&lt;time&gt;")}}

  - : The time that an animation takes to complete one cycle. This may be specified in either seconds (`s`) or milliseconds (`ms`). The value must be positive or zero and the unit is required.

    If no value is provided, the default value of `0s` is used, in which case the animation still executes (the [`animationStart`](/en-US/docs/Web/API/Element/animationstart_event) and [`animationEnd`](/en-US/docs/Web/API/Element/animationend_event) events are fired). Whether or not the animation will be visible when the duration is `0s` will depend on the value of [`animation-fill-mode`](/en-US/docs/Web/CSS/animation-fill-mode), as explained below:

    - If `animation-fill-mode` is set to `backwards` or `both`, the first frame of the animation as defined by `animation-direction` will be displayed during [`animation-delay`](/en-US/docs/Web/CSS/animation-delay) countdown.
    - If `animation-fill-mode` is set to `forwards` or `both`, the last frame of the animation will be displayed, as defined by `animation-direction`, after the `animation-delay` expires.
    - If `animation-fill-mode` is set to `none`, the animation will have no visible effect.

> [!NOTE]
> Negative values are invalid, causing the declaration to be ignored. Some early, prefixed, implementations may consider them as identical to `0s`.

> [!NOTE]
> When you specify multiple comma-separated values on an `animation-*` property, they are applied to the animations in the order in which the {{cssxref("animation-name")}}s appear. For situations where the number of animations and `animation-*` property values do not match, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations), specifying an `animation-duration` value in seconds or milliseconds doesn't really make sense. In tests, it seemed to have no effect on scroll progress timeline animations, while on view progress timeline animations it seemed to push the animation to happen nearer the end of the timeline. However, Firefox requires an `animation-duration` to be set for it to successfully apply the animation. You are therefore advised to set `animation-duration` to `1ms` so that animations will work in Firefox, but the effect is not altered too much by it.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting animation duration

This animation has an animation-duration of 0.7 seconds.

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

{{EmbedLiveSample("Setting animation duration","100%","250")}}

See [CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- Other related animation properties: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
