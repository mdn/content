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

The **`animation-composition`** [CSS](/en-US/docs/Web/CSS) property specifies how to treat the multiple property values when multiple animations affect that same property simultaneously. You can choose the property values to be applied cumulatively, to be combined, or one to be replaced by the other.

When used in a keyframe, the defined composite operation is used for each property first within that keyframe and then on each property in the next keyframe.

{{EmbedInteractiveExample("pages/css/animation-composition.html")}}

It is often convenient to use the shorthand property {{cssxref("animation")}} to set all animation properties at once.

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

### Values

- `replace`
  - : Overrides the value of the property with which it is combined. This is the default value.
- `add`
  - : Adds along with the property value with which it is combined.
- `accumulate`
  - : Gathers up a cumulative value with the property value with which it is combined.

> **Note:** When you specify multiple comma-separated values on an `animation-*` property, they will be assigned to the animations specified in the {{cssxref("animation-name")}} property in different ways depending on how many there are. For more information, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Combining property values

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [Composite property of KeyFrameEffect](/en-US/docs/Web/API/KeyframeEffect/composite)
