---
title: "`animation` CSS property"
short-title: animation
slug: Web/CSS/Reference/Properties/animation
page-type: css-shorthand-property
browser-compat: css.properties.animation
sidebar: cssref
---

The **`animation`** [shorthand](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property applies an animation between styles. It is a shorthand for {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}}, and {{cssxref("animation-timeline")}}.

{{InteractiveExample("CSS Demo: animation")}}

```css interactive-example-choice
animation: 3s ease-in 1s infinite reverse both running slide-in;
```

```css interactive-example-choice
animation: 3s linear 1s infinite running slide-in;
```

```css interactive-example-choice
animation: 3s linear 1s infinite alternate slide-in;
```

```css interactive-example-choice
animation: 0.5s linear 1s infinite alternate slide-in;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  margin: 20px;
  border: 5px solid #333333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

@keyframes slide-in {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("animation-name")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timeline")}}

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

### Values

One or more single `<animation>` declarations, separated by commas, with each `<animation>` including:

- `<keyframes-name>` or `none`
  - : The name of a {{cssxref("@keyframes")}} at-rules that specifies the animation to apply to an element. The initial value for {{cssxref("animation-name")}} is `none`.
- `<animation-duration>`
  - : Determines the length of time that an animation takes to complete one cycle. The value must be one of those available in {{cssxref("animation-duration")}}. The initial value is `0s`.
- `<easing-function>`
  - : Determines the type of transition. The value must be one of those available in {{cssxref("animation-timing-function")}}. The initial value is `ease`.
- `<animation-delay>`
  - : Determines the amount of time to wait from applying the animation to an element before beginning to perform the animation. The value must be one of those available in {{cssxref("animation-delay")}}. The initial value is `0s`.
- `<single-animation-direction>`
  - : The direction in which the animation is played. The value must be one of those available in {{cssxref("animation-direction")}}. The initial value for {{cssxref("animation-direction")}} is `normal`.
- `<single-animation-iteration-count>`
  - : The number of times the animation is played. The value must be one of those available in {{cssxref("animation-iteration-count")}}. The initial value for {{cssxref("animation-iteration-count")}} is `1`.
- `<single-animation-fill-mode>`
  - : Determines how styles should be applied to the animation's target before and after its execution. The value must be one of those available in {{cssxref("animation-fill-mode")}}. The initial value for {{cssxref("animation-fill-mode")}} is `none`.
- `<single-animation-play-state>`
  - : Determines whether the animation is playing or not. The value must be one of those available in {{cssxref("animation-play-state")}}. The initial value for {{cssxref("animation-play-state")}} is `running`.
- `<single-animation-timeline>`
  - : Determines the timeline used to control the progress of the animation. The value must be one of those available in {{cssxref("animation-timeline")}}. The initial value is `auto`.

## Description

The `animation` property is specified as one or more single animations, separated by commas. Each `animation` within the comma-separated list of animations sets the {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}}, and {{cssxref("animation-timeline")}}. If any of the components are not included in an `animation` declaration, the component value is set to the component's initial value.

### animation-name

The `<animation-name>` component of each animation is the name for the animation, which may be `none`, a {{cssxref("&lt;custom-ident&gt;")}}, or a {{cssxref("&lt;string&gt;")}}. The initial value of `animation-name` is `none`, meaning if no `animation-name` value is declared in the `animation` shorthand property, no animation is applied to any of the properties.

The order of other values within an animation definition is important for distinguishing an {{cssxref("animation-name")}} value from other values. If a value in the `animation` shorthand can be parsed as a value for an animation property other than `animation-name`, then the value will be applied to that property first and not to `animation-name`. For this reason, the recommended practice is to specify a value for `animation-name` as the last value in a list of values when using the `animation` shorthand; this holds true even when you specify multiple, comma-separated animations using the `animation` shorthand.

### Time values

Each animation can include zero, one, or two occurrences of the {{cssxref("&lt;time&gt;")}} value. The order of time values within each animation definition is important: the first value that can be parsed as a {{cssxref("&lt;time&gt;")}} is assigned to the {{cssxref("animation-duration")}}, and the second one is assigned to {{cssxref("animation-delay")}}.

When no `animation-duration` value is specified in the `animation` shorthand property, the duration defaults to `0s`. In this case, the animation will still occur (the [`animationStart`](/en-US/docs/Web/API/Element/animationstart_event) and [`animationEnd`](/en-US/docs/Web/API/Element/animationend_event) events will be fired), but no animation will be visible to the user.

### animation-timeline

If no `<animation-timeline>` is included in the `animation` shorthand, the shorthand declaration will reset any previously-declared `animation-timeline` values to `auto`, which sets the timeline to the default {{domxref("documentTimeline")}}.

If an `<animation-timeline>` value is included, but the user-agent doesn't support `<animation-timeline>` values within the shorthand, the entire `animation` declaration is invalid and ignored. For this reason, when creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations), you need to declare the `animation-timeline` property after declaring any `animation` shorthand for it to take effect.

Alternatively, the `<animation-timeline>` can be set within the `animation` shorthand within a CSS {{cssxref("@supports")}} block, such as:

```css
@supports (animation: view()) {
  /* CSS for browsers supporting <animation-timeline> within `animation` shorthand */
}
```

### animation-fill-mode and new stacking contexts

In the case of the `animation-fill-mode` [forwards](/en-US/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) value, animated properties behave as if included in a set {{cssxref("will-change")}} property value. If a new stacking context is created during the animation, the target element retains the stacking context after the animation has finished.

## Accessibility

Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for vestibular disorders, epilepsy, and migraine and scotopic sensitivity.

Consider providing a mechanism for pausing or disabling animation as well as using the [reduced motion `@media` query](/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) to create a complimentary experience for users who have expressed a preference for reduced animated experiences.

- [Designing Safer Web Animation For Motion Sensitivity](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) via A List Apart (2015)
- [An Introduction to the Reduced Motion Media Query](https://css-tricks.com/introduction-reduced-motion-media-query/) via CSS-Tricks (2017)
- [Responsive Design for Motion](https://webkit.org/blog/7551/responsive-design-for-motion/) via WebKit (2017)
- [Understanding WCAG, Guideline 2.2 — Enough Time: Provide users enough time to read and use content](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding WCAG Success Criterion 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) via W3C (2026)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

> [!NOTE]
> Animating [CSS box model](/en-US/docs/Web/CSS/Guides/Box_model) properties is discouraged as it leads to layout reflow and repaints. Animating any box model property is inherently CPU-intensive; consider animating the [transform](/en-US/docs/Web/CSS/Reference/Properties/transform) property instead.

### Basic usage: a sunrise

In this example, we demonstrate basic usage of the `animate` shorthand by animating a yellow sun across a light blue sky. The sun rises
to the center of the viewport and then falls out of sight.

#### HTML

We include a single {{htmlelement("div")}} element to represent our sun.

```html
<div class="sun"></div>
```

#### CSS

We start by creating the sun and the sky. The sky is the {{cssxref(":root")}} of the HTML document. We hide any content that is outside the viewport, which in our case will be any part of the sun below the horizon, by setting the {{cssxref("overflow")}} to hidden. We also use the {{cssxref("justify-content")}} property to center the sun in the background. We make the sun yellow, declare its {{cssxref("height")}} to be the height of the viewport (`100vh`), and set its width to equal its height by setting the {{cssxref("aspect-ratio")}} to `1`. We turn the square `<div>` into a circle using the {{cssxref("border-radius")}} property.

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
  aspect-ratio: 1;
  animation: 4s linear 0s infinite alternate sunrise;
}
```

Next, we define some animation {{cssxref("@keyframes")}} that will push the element on which they are applied down past the viewport and then return the element to its default position using [CSS transforms](/en-US/docs/Web/CSS/Guides/Transforms):

```css
@keyframes sunrise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}
```

The last step is to apply the animation! We use the `animation` shorthand property to apply the `sunrise` keyframe animation to the `.sun` `<div>`. The animation is set to play for infinite iterations, with each one lasting 4 seconds; the animation direction alternates with each iteration:

```css
.sun {
  animation: 4s linear 0s infinite alternate sunrise;
}
```

#### Results

{{EmbedLiveSample('Basic usage: a sunrise')}}

### Applying multiple animations

This example demonstrates applying multiple animations to a single element. Expanding on the previous example, with a sun that rises and falls on a light blue background, here we will gradually rotate the sun through a rainbow of colors. The timing of the sun's position and color are independent.

```html hidden
<div class="sun"></div>
```

```css hidden
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
}

@keyframes sunrise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}
```

We include the same HTML and CSS as in the previous example, and add a second set of animation `@keyframes` to apply a {{cssxref("filter")}} that rotates the hue through all possible values using the [`hue-rotate()`](/en-US/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) filter function:

```css
@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

We then apply the two animations to our sun. Multiple animations are separated by commas, and each animation's parameters are set independently:

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    24s linear 0s infinite psychedelic;
}
```

#### Results

{{EmbedLiveSample('Applying multiple animations')}}

### Cascading multiple animations

This example demonstrates what happens when multiple animations define values for the same property. This example expands upon the [basic usage](#basic_usage_a_sunrise) example, with two animations applied that both set a {{cssxref("transform")}} value.

```html hidden
<div class="sun"></div>
```

```css hidden
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
}
```

We use the same HTML and CSS as in the first example, including the original `sunrise` animation, and a second animation named `bounce`. The two animations declare values for the same property:

```css
@keyframes sunrise {
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

We apply both animations to the sun. When two animations apply different values to the same property, animations declared later in the cascade override previously-declared animations. In this case, the `transform` value on the `bounce` animation "wins" the [cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction#css_animations_and_the_cascade), and overrides the transform set by `sunrise`, so the sun will only move horizontally.

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    4s linear 0s infinite alternate bounce;
}
```

#### Results

{{EmbedLiveSample('Cascading Multiple Animations')}}

The sun bounces between the
left- and right-hand sides of the viewport. The sun remains in the viewport even
though the `sunrise` animation is defined. The `sunrise` animation's transform property
is overridden by the bounce animation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/Guides/Animations/Using)
- JavaScript {{domxref("AnimationEvent")}} API
