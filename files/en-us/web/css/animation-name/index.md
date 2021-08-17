---
title: animation-name
slug: Web/CSS/animation-name
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.animation-name
---
{{CSSRef}}

The **`animation-name`** [CSS](/en-US/docs/Web/CSS) property specifies the names of one or more {{cssxref("@keyframes")}} at-rules describing the animation or animations to apply to the element.

{{EmbedInteractiveExample("pages/css/animation-name.html")}}

It is often convenient to use the shorthand property {{cssxref("animation")}} to set all animation properties at once.

## Syntax

```css
/* Single animation */
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

/* Multiple animations */
animation-name: test1, animation4;
animation-name: none, -moz-specific, sliding;

/* Global values */
animation-name: initial;
animation-name: inherit;
animation-name: revert;
animation-name: unset;
```

### Values

- `none`
  - : A special keyword denoting no keyframes. It can be used to deactivate an animation without changing the ordering of the other identifiers, or to deactivate animations coming from the cascade.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : A name identifying the animation. This identifier is composed of a combination of case-sensitive letters `a` to `z`, numbers `0` to `9`, underscores (`_`), and/or dashes (`-`). The first non-dash character must be a letter. Also, two dashes are forbidden at the beginning of the identifier. Furthermore, the identifier can't be `none`, `unset`, `initial`, or `inherit`.

> **Note:** When you specify multiple comma-separated values on an `animation-*` property, they will be assigned to the animations specified in the {{cssxref("animation-name")}} property in different ways depending on how many there are. For more information, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### The animation has an animation-name of rotate

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

See [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations "Tutorial about CSS animations")
- JavaScript {{domxref("AnimationEvent")}} API
