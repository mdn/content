---
title: animation
slug: Web/CSS/animation
page-type: css-shorthand-property
browser-compat: css.properties.animation
---

{{CSSRef}}

The **`animation`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property applies an animation between styles. It is a shorthand for {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}}, and {{cssxref("animation-timeline")}}.

{{EmbedInteractiveExample("pages/css/animation.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`animation-delay`](/en-US/docs/Web/CSS/animation-delay)
- [`animation-direction`](/en-US/docs/Web/CSS/animation-direction)
- [`animation-duration`](/en-US/docs/Web/CSS/animation-duration)
- [`animation-fill-mode`](/en-US/docs/Web/CSS/animation-fill-mode)
- [`animation-iteration-count`](/en-US/docs/Web/CSS/animation-iteration-count)
- [`animation-name`](/en-US/docs/Web/CSS/animation-name)
- [`animation-play-state`](/en-US/docs/Web/CSS/animation-play-state)
- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
- [`animation-timing-function`](/en-US/docs/Web/CSS/animation-timing-function)

## Syntax

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slide-in;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slide-in;

/* two animations */
animation:
  3s linear slide-in,
  3s ease-out 5s slide-out;
```

The `animation` property is specified as one or more single animations, separated by commas.

Each individual animation is specified as:

- zero, one, or two occurrences of the {{cssxref("&lt;time&gt;")}} value

- zero or one occurrences of the following values:

  - [`<single-easing-function>`](#single-easing-function)
  - [`<single-animation-iteration-count>`](#single-animation-iteration-count)
  - [`<single-animation-direction>`](#single-animation-direction)
  - [`<single-animation-fill-mode>`](#single-animation-fill-mode)
  - [`<single-animation-play-state>`](#single-animation-play-state)

- an optional name for the animation, which may be `none`, a {{cssxref("&lt;custom-ident&gt;")}}, or a {{cssxref("&lt;string&gt;")}}

> **Note:** {{cssxref("animation-timeline")}}, {{cssxref("animation-range-start")}}, and {{cssxref("animation-range-end")}} are not currently included in this list, as current implementations are reset-only. This means that including `animation` resets a previously-declared `animation-timeline` value to `auto` and previously-declared `animation-range-start` and `animation-range-end` values to `normal`, but these properties cannot be set via `animation`. When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations), you need to declare these properties after declaring any `animation` shorthand for it to take effect.

### Values

- `<single-easing-function>`
  - : Determines the type of transition. The value must be one of those available in {{cssxref("easing-function")}}.
- `<single-animation-iteration-count>`
  - : The number of times the animation is played. The value must be one of those available in {{cssxref("animation-iteration-count")}}.
- `<single-animation-direction>`
  - : The direction in which the animation is played. The value must be one of those available in {{cssxref("animation-direction")}}.
- `<single-animation-fill-mode>`
  - : Determines how styles should be applied to the animation's target before and after its execution. The value must be one of those available in {{cssxref("animation-fill-mode")}}.
- `<single-animation-play-state>`
  - : Determines whether the animation is playing or not. The value must be one of those available in {{cssxref("animation-play-state")}}.

## Description

The order of time values within each animation definition is important: the first value that can be parsed as a {{cssxref("&lt;time&gt;")}} is assigned to the {{cssxref("animation-duration")}}, and the second one is assigned to {{cssxref("animation-delay")}}.

The order of other values within each animation definition is also important for distinguishing an {{cssxref("animation-name")}} value from other values. If a value in the `animation` shorthand can be parsed as a value for an animation property other than `animation-name`, then the value will be applied to that property first and not to `animation-name`. For this reason, the recommended practice is to specify a value for `animation-name` as the last value in a list of values when using the `animation` shorthand; this holds true even when you specify multiple, comma-separated animations using the `animation` shorthand.

While an animation name must be set for an animation to be applied, all values of the `animation` shorthand are optional, and default to the initial value for each long-hand `animation` component. The initial value of `animation-name` is `none`, meaning if no `animation-name` value is declared in the `animation` shorthand property, there is no animation to apply on any of the properties.

When the `animation-duration` value is omitted from the `animation` shorthand property, the value for this property defaults to `0s`. In this case, the animation will still occur (the [`animationStart`](/en-US/docs/Web/API/Element/animationstart_event) and [`animationEnd`](/en-US/docs/Web/API/Element/animationend_event) events will be fired) but no animation will be visible.

In the case of the `animation-fill-mode` [forwards](/en-US/docs/Web/CSS/animation-fill-mode#forwards) value, animated properties behave as if included in a set [`will-change`](/en-US/docs/Web/CSS/will-change) property value. If a new stacking context is created during the animation, the target element retains the stacking context after the animation has finished.

## Accessibility

Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine and Scotopic sensitivity.

Consider providing a mechanism for pausing or disabling animation as well as using the [Reduced Motion Media Query](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) to create a complimentary experience for users who have expressed a preference for reduced animated experiences.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

> [!NOTE]
> Animating [CSS Box Model](/en-US/docs/Web/CSS/CSS_box_model) properties is discouraged. Animating any box model property is inherently CPU intensive; consider animating the [transform](/en-US/docs/Web/CSS/transform) property instead.

### Sun Rise

Here we animate a yellow sun across a light blue sky. The sun rises
to the center of the viewport and then falls out of sight.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden; /* hides any part of the sun below the horizon */
  background-color: lightblue;
  display: flex;
  justify-content: center; /* centers the sun in the background */
}

.sun {
  background-color: yellow;
  border-radius: 50%; /* creates a circular background */
  height: 100vh; /* makes the sun the size of the viewport */
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate sun-rise;
}

@keyframes sun-rise {
  from {
    /* pushes the sun down past the viewport */
    transform: translateY(110vh);
  }
  to {
    /* returns the sun to its default position */
    transform: translateY(0);
  }
}
```

{{EmbedLiveSample('Sun_Rise')}}

### Animating Multiple Properties

Adding onto the sun animation in the previous example, we add a second animation changing the color of the sun as it rises and sets. The sun starts off dark red when it is below the horizon and changes to a bright orange as it reaches the top.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate animating-multiple-properties;
}

/* it is possible to animate multiple properties in a single animation */
@keyframes animating-multiple-properties {
  from {
    transform: translateY(110vh);
    background-color: red;
    filter: brightness(75%);
  }
  to {
    transform: translateY(0);
    background-color: orange;
    /* unset properties i.e. 'filter' will revert to default values */
  }
}
```

{{EmbedLiveSample('Animating Multiple Properties')}}

### Applying Multiple Animations

Here is a sun that rises and falls on a lightblue background. The sun
gradually rotates through a rainbow of colors. The timing of the sun's
position and color are independent.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /* multiple animations are separated by commas, each animation's parameters are set independently */
  animation:
    4s linear 0s infinite alternate rise,
    24s linear 0s infinite psychedelic;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

{{EmbedLiveSample('Applying Multiple Animations')}}

### Cascading Multiple Animations

Here is a yellow sun on a lightblue background. The sun bounces between the
left and right sides of the viewport. The sun remains in the viewport even
though a rise animation is defined. The rise animation's transform property
is 'overwritten' by the bounce animation.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /*
    animations declared later in the cascade will override the
    properties of previously declared animations
  */
  /* bounce 'overwrites' the transform set by rise, hence the sun only moves horizontally */
  animation:
    4s linear 0s infinite alternate rise,
    4s linear 0s infinite alternate bounce;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes bounce {
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(50vw);
  }
}
```

{{EmbedLiveSample('Cascading Multiple Animations')}}

See [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations#examples) for additional examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
