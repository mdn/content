---
title: animation-play-state
slug: Web/CSS/animation-play-state
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.animation-play-state
---
{{CSSRef}}

The **`animation-play-state`** [CSS](/en-US/docs/Web/CSS) property sets whether an animation is running or paused.

{{EmbedInteractiveExample("pages/css/animation-play-state.html")}}

Resuming a paused animation will start the animation from where it left off at the time it was paused, rather than starting over from the beginning of the animation sequence.

## Syntax

```css
/* Single animation */
animation-play-state: running;
animation-play-state: paused;

/* Multiple animations */
animation-play-state: paused, running, running;

/* Global values */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: revert;
animation-play-state: unset;
```

### Values

- `running`
  - : The **animation** is currently **playing**.
- `paused`
  - : The **animation** is currently **paused**.

> **Note:** When you specify multiple comma-separated values on an `animation-*` property, they will be assigned to the animations specified in the {{cssxref("animation-name")}} property in different ways depending on how many there are. For more information, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### The animation is paused

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
  animation-play-state: paused;
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

See [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations "Tutorial about CSS animations")
- JavaScript {{domxref("AnimationEvent")}} API
