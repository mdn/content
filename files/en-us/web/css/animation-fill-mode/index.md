---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.animation-fill-mode
---
{{CSSRef}}

The **`animation-fill-mode`** [CSS](/en-US/docs/Web/CSS) property sets how a CSS animation applies styles to its target before and after its execution.

{{EmbedInteractiveExample("pages/css/animation-fill-mode.html")}}

It is often convenient to use the shorthand property {{cssxref("animation")}} to set all animation properties at once.

## Syntax

```css
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;

/* Global values */
animation-fill-mode: inherit;
animation-fill-mode: initial;
animation-fill-mode: revert;
animation-fill-mode: revert-layer;
animation-fill-mode: unset;
```

### Values

- `none`
  - : The animation will not apply any styles to the target when it's not executing. The element will instead be displayed using any other CSS rules applied to it. This is the default value.
- `forwards`

  - : The target will retain the computed values set by the last [keyframe](/en-US/docs/Web/CSS/@keyframes) encountered during execution. The last keyframe depends on the value of {{cssxref("animation-direction")}} and {{cssxref("animation-iteration-count")}}:

    | `animation-direction` | `animation-iteration-count` | last keyframe encountered |
    | --------------------- | --------------------------- | ------------------------- |
    | `normal`              | even or odd                 | `100%` or `to`            |
    | `reverse`             | even or odd                 | `0%` or `from`            |
    | `alternate`           | even                        | `0%` or `from`            |
    | `alternate`           | odd                         | `100%` or `to`            |
    | `alternate-reverse`   | even                        | `100%` or `to`            |
    | `alternate-reverse`   | odd                         | `0%` or `from`            |

- `backwards`

  - : The animation will apply the values defined in the first relevant [keyframe](/en-US/docs/Web/CSS/@keyframes) as soon as it is applied to the target, and retain this during the {{cssxref("animation-delay")}} period. The first relevant keyframe depends on the value of {{cssxref("animation-direction")}}:

    | `animation-direction`            | first relevant keyframe |
    | -------------------------------- | ----------------------- |
    | `normal` or `alternate`          | `0%` or `from`          |
    | `reverse` or `alternate-reverse` | `100%` or `to`          |

- `both`
  - : The animation will follow the rules for both forwards and backwards, thus extending the animation properties in both directions.

> **Note:** When you specify multiple comma-separated values on an `animation-*` property, they are applied to the animations in the order in which the {{cssxref("animation-name")}}s appear. For situations where the number of animations and `animation-*` property values do not match, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting fill mode

You can see the effect of `animation-fill-mode` in the following example. It demonstrates how, for an animation that runs for an infinite time, you can cause it to remain in its final state rather than reverting to the original state (which is the default).

#### HTML

```html
<p>Move your mouse over the gray box!</p>
<div class="demo">
 <div class="growsandstays">This grows and stays big.</div>
  <div class="grows">This just grows.</div>
</div>
```

#### CSS

```css
.demo {
  border-top: 100px solid #ccc;
  height: 300px;
}

@keyframes grow {
  0% { font-size: 0; }
  100% { font-size: 40px; }
}

.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
}

.demo:hover .growsandstays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

#### Result

{{EmbedLiveSample('Setting fill mode',700,300)}}

See [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
