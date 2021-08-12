---
title: animation-duration
slug: Web/CSS/animation-duration
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.animation-duration
---
{{CSSRef}}

The **`animation-duration`** [CSS](/en-US/docs/Web/CSS) property sets the length of time that an animation takes to complete one cycle.

{{EmbedInteractiveExample("pages/css/animation-duration.html")}}

It is often convenient to use the shorthand property {{ cssxref("animation") }} to set all animation properties at once.

## Syntax

```css
/* Single animation */
animation-duration: 6s;
animation-duration: 120ms;

/* Multiple animations */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;

/* Global values */
animation-duration: inherit;
animation-duration: initial;
animation-duration: revert;
animation-duration: unset;
```

### Values

- `{{cssxref("&lt;time&gt;")}}`
  - : The time that an animation takes to complete one cycle. This may be specified in either seconds (`s`) or milliseconds (`ms`). The value must be positive or zero and the unit is required. A value of `0s`, which is the default value, indicates that no animation should occur.

> **Note:** Negative values are invalid, causing the declaration to be ignored. Some early, prefixed, implementations may consider them as identical to `0s`.

> **Note:** When you specify multiple comma-separated values on an `animation-*` property, they will be assigned to the animations specified in the {{cssxref("animation-name")}} property in different ways depending on how many there are. For more information, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### The animation has an animation-duration of 0.7 seconds

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

{{EmbedLiveSample("Examples","100%","250")}}

See [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations "Tutorial about CSS animations")
- JavaScript {{domxref("AnimationEvent")}} API
