---
title: Keyframe selectors
slug: Web/CSS/Reference/Selectors/Keyframe
page-type: css-selector
browser-compat: css.at-rules.keyframes.selectors
sidebar: cssref
---

CSS **keyframe selectors** identify specific points in an animation timeline where the keyframe's style should be applied. Defined in the [CSS animation module](/en-US/docs/Web/CSS/CSS_Animations), these selectors are used exclusively within the {{cssxref("@keyframes")}} at-rule.

## Syntax

```css
/* Keywords */
from {
}
to {
}

/* <percentage> values */
0% {
}
50% {
}
100% {
}

/* Selector lists */
0%,
50%,
100% {
}
from,
to {
}
```

### Values

- `from`
  - : Represents the start of the animation sequence. It is equivalent to `0%`.
- `to`
  - : Represents the end of the animation sequence. It is equivalent to `100%`.
- {{cssxref("percentage")}}
  - : A percentage between `0%` and `100%`, inclusive, representing the total progression through the animation sequence.

## Description

A `<keyframe-selector>` can be the `to` or `from` keyword, a percentage between `0%` and `100%`, inclusive, or a comma-separated list of these keywords and/or percentages. When a comma-separated list of `<keyframe-selector>` is used, the style block that follows applies to all the specified progression points.

### Valid percentage values

Percentage values must include the percent sign (`%`). A unitless `0` is invalid. Values outside the range `0%` to `100%` (such as `-10%` or `110%`) are invalid and will cause the keyframe block to be ignored.

### Cascade, order, precedence, and importance

Property values set by animation `@keyframes` are more important than all normal styles, meaning no matter the {{cssxref("specificity")}}, an animated value will override values that do not have an {{cssxref("important", "!important")}} flag set. Only important property values and values currently being transitioned take precedence over animated property values.

All keyframe selectors have the same specificity. The order of keyframe selectors within the selector list does not matter. The source order only matters if a duplicate keyframe selector declares a different value for an already declared property on the same selector.

The `!important` flag is not valid within an `@keyframes` definition.

### Omitted start and end selectors

If no `0%` (or `from`) or `100%` (or `to`) keyframe is specified, the browser will use the element's computed styles for those states, allowing the animation to transition smoothly from or to the element's non-animated property values. In other words, if a property is specified in a middle-of-the-timeline keyframe, without being set within a starting or ending keyframe selector block, the property will animate from it's original value to that value.

For example, if an element has a `red` background color, and the following animation is applied:

```css
@keyframes changeToPurple {
  25%,
  75% {
    background-color: purple;
  }
}
```

The background color will be `red` at the start of the animation, transitioning to `purple` a quarter of the way through the animation, remaining `purple` for half the animation, and transitioning back to `red`, the original background color, starting `75%` of the way through the {{cssxref("animation-timeline", "animation timeline", "", "nocode")}}. It will behave as if the following were set:

```css
@keyframes changeToPurple {
  25%,
  75% {
    background-color: purple;
  }
  0%,
  100% {
    background-color: var(--nonAnimatedColor);
  }
}
```

Where `--nonAnimatedColor`, is the `background-color` of the element without the animation applied; in this case, `red`.

#### Omitted property declarations

When creating an `@keyframes` animation to animate multiple properties, you don't have to declare all the properties in all the keyframe selector blocks.

For example, in the [basic usage](#basic_usage) example, the `opacity` is declared in all the keyframe selector blocks, but only starting and ending `transforms` values are set. In that case, the element will be fully opaque 50% of the way through the animation timeline, but the point at which the element is transformed `25vw` to the right depends on the {{cssxref("animation-timing-function")}}; being half the same as the `50%` in the case of `linear`, but not if `ease-in` is used, which was done in this case.

### Cascade order

If multiple keyframe blocks use the same `<keyframe-selector>`, they [cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction). This means that if the same property is defined in multiple blocks with the same selector, the last declaration in the rule takes precedence. If they define different properties, they are merged.

This animation repeats non-changing values in multiple selector blocks, which is not necessary:

```css
@keyframes uglyAnimation {
  0% {
    transform: translatex(0);
    opacity: 0;
    background-color: purple;
  }
  50% {
    transform: translatex(0);
    opacity: 1;
    background-color: purple;
  }
  75% {
    transform: translatex(0);
    opacity: 0;
    background-color: green;
  }
  100% {
    transform: translatex(50vw);
    opacity: 0;
    background-color: purple;
  }
}
```

We can use the cascade to group values in one selector block, then overriding them as necessary. The following is the equivalent to the previous animation, just with few lines of CSS:

```css
@keyframes uglyAnimation {
  0%,
  50%,
  75%,
  100% {
    transform: translatex(0);
    opacity: 0;
    background-color: purple;
  }
  50% {
    opacity: 1;
  }
  75% {
    background-color: green;
  }
  100% {
    transform: translatex(50vw);
  }
}
```

Order is important! We can't ignore the cascade. If we reorder the above incorrectly, we lose the transitions. The following makes the element purple, fully opaque, and resets all the transforms during the entire time the animation is applied. The property values are applied and remain static because the last declaration overrides the declarations made in the previous keyframe selector blocks.

```css
@keyframes makeItPurpleOnly {
  0% {
    background-color: yellow;
  }
  50% {
    opacity: 0;
  }
  75% {
    background-color: green;
  }
  100% {
    transform: translatex(50vw);
  }
  0%,
  50%,
  75%,
  100% {
    transform: translatex(0);
    opacity: 1;
    background-color: purple;
  }
}
```

## Examples

### Basic usage

This example demonstrates using keywords and percentages by creating a keyframe animation that uses these keyframe selector types.

#### HTML

We include an element that we will animate.

```html
<div>I am animated</div>
```

#### CSS

We provide some basic styling to our box:

```css
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

We create an {{cssxref("@keyframes")}} animation, applying styles to the `from`, `to`, and a middle percentage, animating the {{cssxref("opacity")}} and the {{cssxref("transform")}} properties.

```css
@keyframes slide-and-fade {
  from {
    transform: translatex(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translatex(50vw);
    opacity: 0;
  }
}
```

We apply our animation to the element using the {{cssxref("animation")}} shorthand property:

```css
div {
  animation: slide-and-fade 4s ease-in infinite;
}
```

#### Results

{{EmbedLiveSample("Basic usage","100%","200")}}

### Selector lists and initial values

Using the same HTML and CSS as in the previous example, this example demonstrates using comma-separated selectors to group selectors, applying the same styles at multiple points in an animation.

```html hidden
<div>I am animated</div>
```

#### CSS

We create a `pulse` animation that changes the size of our element. We also declare a `background-color` in only one selector block.

```css
div {
  animation: pulse 4s linear infinite;
}

@keyframes pulse {
  0%,
  75% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  25%,
  100% {
    transform: scale(0.8);
    background-color: black;
  }
}
```

```css hidden
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

#### Result

{{EmbedLiveSample("Selector lists and initial values","100%","65")}}

By using a selector list with multiple comma-separated keyframe selectors, the animation "pauses" from the `25%` keyframe until it reaches the `75%` keyframe.
The `black` is only set in the `25%, 75%` keyframe, so the element animates from and to `rebeccapurple`, it's original `background-color`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@keyframes")}}
- {{cssxref("animation")}}
- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [CSS animations](/en-US/docs/Web/CSS/CSS_Animations) module
