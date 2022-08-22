---
title: animation-composition
slug: Web/CSS/animation-composition
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.animation-composition
---
{{CSSRef}}

The **`animation-composition`** [CSS](/en-US/docs/Web/CSS) property specifies the composite operation to use when multiple animations affect the same property simultaneously.

<!--the interactive example will be created in a separate PR. Will uncomment the macro below when I have an interactive example in place. Note that this property is still behind a flag in FF and not yet implemented in Safari and Chrome.-->
<!-- {{EmbedInteractiveExample("pages/css/animation-composition.html")}} -->

<!--only longhand animation-composition is enabled in FF104, so commenting out the sentence below for now. Not removing the sentence because it can be uncommented when support in shorthand animation property is added.-->
<!-- It is often convenient to use the shorthand property {{cssxref("animation")}} to set all animation properties at once.-->

## Syntax

```css
/* Single animation */
animation-composition: replace;
animation-composition: add;
animation-composition: accumulate;

/* Multiple animations */
animation-composition: replace, add;
animation-composition: add, accumulate;
animation-composition: replace, add, accumulate;

/* Global values */
animation-composition: inherit;
animation-composition: initial;
animation-composition: revert;
animation-composition: revert-layer;
animation-composition: unset;
```

> **Note:** When you specify multiple comma-separated values on an `animation-*` property, they will be assigned to the animations specified in the {{cssxref("animation-name")}} property in different ways depending on how many there are. For more information, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values).

### Values

- `replace`
  - : The effect value overrides the underlying value of the property. This is the default composite operation.
- `add`
  - : The effect value builds on the underlying value of the property. This values produces an additive effect. For animation types where the addition operation is not commutative, the order of the operands is underlying value followed by the effect value.
- `accumulate`
  - : The effect and underlying values are combined. For animation types where the addition operation is not commutative, the order of the operands is underlying value followed by the effect value.

## Description

Each property that is targeted by the [@keyframes](/en-US/docs/Web/CSS/@keyframes) at-rule is associated with an effect stack. The value of the effect stack is calculated by combining the _underlying value_ of a property in a CSS style rule with the _effect value_ of that property in the keyframe. The `animation-composition` property helps to specify how to combine the underlying value with the effect value.

For example, in the CSS below, `blur(5px)` is the underlying value, and `blur(10px)` is the effect value. The `filter` property is affected by both animations, `pulse` and `brightness-pulse`. The `animation-composition` property specifies the operation to perform to produce the final effect value after compositing the effect of the underlying value and the effect value.

```css
.icon:hover {
  filter: blur(5px);
  animation: brightness-pulse 3s infinite;
  animation-composition: add;
}

@keyframes pulse {
  0% {
    filter: blur(10px);
  }
  10% {
    filter: blur(20px);
  }
}
```

Consider different values for the `animation-composition` property in the above example. The final effect value in each of those cases will be calculated as explained below:

- With `replace`, `blur(10px)` will replace `blur(5px)` in the `0%` keyframe. This is the default behavior of the property.
- With `add`, the composite effect value in `0%` keyframe will be `blur(5px) blur(10px)`.
- With `accumulate`, the composite effect value in `0%` keyframe will be `blur(15px)`.

> **Note:** A composite operation can also be specified in a keyframe. In that case, the specified composite operation is used for each property first within that keyframe and then on each property in the next keyframe.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Understanding the animation-composition values

The example below shows the effect of different `animation-composition` values side-by-side.

#### HTML

```html
<div class="container">replace
  <div id="replace" class="target"></div>
</div>
<div class="container">add
  <div id="add" class="target"></div>
</div>
<div class="container">accumulate
  <div id="accumulate" class="target"></div>
</div>
```

#### CSS

Here the underlying value is `translateX(50px) rotate(90deg)`.

```css
@keyframes slide {
  from {transform: translateX(100px);}
  to {transform: translateX(150px);}
}
.container {
  width: 240px;
  height: 220px;
  background: cyan;
  display: inline-block;
}
.target {
  width: 20px;
  height: 50px;
  background: green;
  border-radius: 10px;
  transform: translateX(50px) rotate(90deg);
  animation: slide 2s linear infinite;
}
#replace {
  animation-composition: replace;
}
#add {
  animation-composition: add;
}
#accumulate {
  animation-composition: accumulate;
}
```

#### Result

{{EmbedLiveSample("Reversing the animation direction","100%","250")}}

- With `replace`, the composite effect value in the `from` keyframe is `transform: translateX(100px)` (replacing `translateX(50px) rotate(90deg)`).
- With `add`, the composite effect value in the `from` keyframe is `translateX(50px) rotate(90deg)` followed by `transform: translateX(100px)`.
- With `accumulate`, the composite effect value in the `from` keyframe is `translateX(150px) rotate(90deg)`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [Composite property of KeyFrameEffect](/en-US/docs/Web/API/KeyframeEffect/composite)
