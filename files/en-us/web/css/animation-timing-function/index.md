---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.animation-timing-function
---
{{CSSRef}}

The **`animation-timing-function`** [CSS](/en-US/docs/Web/CSS) property sets how an animation progresses through the duration of each cycle.

{{EmbedInteractiveExample("pages/css/animation-timing-function.html")}}

It is often convenient to use the shorthand property {{cssxref("animation")}} to set all animation properties at once.

## Syntax

```css
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Function values */
animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
animation-timing-function: steps(4, end);

/* Steps Function keywords */
animation-timing-function: steps(4, jump-start);
animation-timing-function: steps(10, jump-end);
animation-timing-function: steps(20, jump-none);
animation-timing-function: steps(5, jump-both);
animation-timing-function: steps(6, start);
animation-timing-function: steps(8, end);

/* Multiple animations */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);

/* Global values */
animation-timing-function: inherit;
animation-timing-function: initial;
animation-timing-function: revert;
animation-timing-function: revert-layer;
animation-timing-function: unset;
```

> **Note:** When you specify multiple comma-separated values on an `animation-*` property, they are applied to the animations in the order in which the {{cssxref("animation-name")}}s appear. For situations where the number of animations and `animation-*` property values do not match, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values).

### Values

- {{cssxref("&lt;easing-function&gt;")}}

  - : The easing function that corresponds to a given animation, as determined by {{cssxref("animation-name")}}.

    The non-step keyword values (ease, linear, ease-in-out, etc.) each represent cubic Bézier curve with fixed four point values, with the cubic-bezier() function value allowing for a non-predefined value. The step timing functions divides the input time into a specified number of intervals that are equal in length. It is defined by a number of steps and a step position.

- `ease`
  - : Equal to `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, the default value, increases in velocity towards the middle of the animation, slowing back down at the end.
- `linear`
  - : Equal to `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, animates at an even speed.
- `ease-in`
  - : Equal to `cubic-bezier(0.42, 0, 1.0, 1.0)`, starts off slowly, with the speed of the transition of the animating property increasing until complete.
- `ease-out`
  - : Equal to `cubic-bezier(0, 0, 0.58, 1.0)`, starts quickly, slowing down the animation continues.
- `ease-in-out`
  - : Equal to `cubic-bezier(0.42, 0, 0.58, 1.0)`, with the animating properties slowly transitioning, speeding up, and then slowing down again.
- `cubic-bezier(p1, p2, p3, p4)`
  - : An author defined cubic-bezier curve, where the p1 and p3 values must be in the range of 0 to 1.
- `steps(n, <jumpterm>)`

  - : Displays an animation iteration along _n_ stops along the transition, displaying each stop for equal lengths of time. For example, if _n_ is 5, there are 5 steps. Whether the animation holds temporarily at 0%, 20%, 40%, 60% and 80%, on the 20%, 40%, 60%, 80% and 100%, or makes 5 stops between the 0% and 100% along the animation, or makes 5 stops including the 0% and 100% marks (on the 0%, 25%, 50%, 75%, and 100%) depends on which of the following jump terms is used:

    - `jump-start`
      - : Denotes a left-continuous function, so that the first jump happens when the animation begins;
    - `jump-end`
      - : Denotes a right-continuous function, so that the last jump happens when the animation ends;
    - `jump-none`
      - : There is no jump on either end. Instead, holding at both the 0% mark and the 100% mark, each for 1/n of the duration.
    - `jump-both`
      - : Includes pauses at both the 0% and 100% marks, effectively adding a step during the animation iteration.
    - `start`
      - : Same as `jump-start`.
    - `end`
      - : Same as `jump-end`.

- `step-start`
  - : Equal to `steps(1, jump-start)`
- `step-end`
  - : Equal to `steps(1, jump-end)`

## Description

Timing functions may be specified on individual keyframes in a [@keyframes](/en-US/docs/Web/CSS/@keyframes) rule. If no **`animation-timing-function`** is specified on a keyframe, the corresponding value of **`animation-timing-function`** from the element to which the animation is applied is used for that keyframe.

Within a keyframe, `animating-timing-function` is an at-rule-specific descriptor, not the property of the same name. The timing is not being animated. Rather, a keyframe's timing function is applied on a property-by-property basis from the keyframe on which it is specified until the next keyframe specifying that property, or until the end of the animation if there is no subsequent keyframe specifying that property. As a result, an **`animation-timing-function`** specified on the **`100%`** or **`to`** keyframe will never be used.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Cubic-Bezier examples

```html hidden
<div class="parent">
  <div class="ease">ease</div>
  <div class="easein">ease-in</div>
  <div class="easeout">ease-out</div>
  <div class="easeinout">ease-in-out</div>
  <div class="linear">linear</div>
  <div class="cb">cubic-bezier(0.2,-2,0.8,2)</div>
</div>
```

```css hidden
.parent > div[class] {
    animation-name: changeme;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    margin-bottom: 4px;
}
@keyframes changeme {
   0% {
      min-width: 12em;
      width: 12em;
      background-color: black;
      border: 1px solid red;
      color: white;
   }
   100% {
      width: 90vw;
      min-width: 24em;
      background-color: magenta;
      color: yellow;
      border: 1px solid orange;
   }
}
```

```css
.ease {
   animation-timing-function: ease;
}
.easein {
   animation-timing-function: ease-in;
}
.easeout {
   animation-timing-function: ease-out;
}
.easeinout {
   animation-timing-function: ease-in-out;
}
.linear {
   animation-timing-function: linear;
}
.cb {
   animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
}
```

{{EmbedLiveSample("Cubic-Bezier_examples", 600, 200)}}

### Step examples

```html hidden
<div class="parent">
  <div class="jump-start">jump-start</div>
  <div class="jump-end">jump-end</div>
  <div class="jump-both">jump-both</div>
  <div class="jump-none">jump-none</div>
  <div class="start">start</div>
  <div class="end">end</div>
  <div class="step-start">step-start</div>
  <div class="step-end">step-end</div>
</div>
```

```css hidden
.parent > div[class] {
    animation-name: changeme;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    margin-bottom: 4px;
}
@keyframes changeme {
   0% {
      min-width: 12em;
      width: 12em;
      background-color: black;
      border: 1px solid red;
      color: white;
   }
   100% {
      width: 90vw;
      min-width: 24em;
      background-color: magenta;
      color: yellow;
      border: 1px solid orange;
   }
}
```

```css
.jump-start {
   animation-timing-function: steps(5, jump-start);
}
.jump-end {
   animation-timing-function: steps(5, jump-end);
}
.jump-none {
   animation-timing-function: steps(5, jump-none);
}
.jump-both {
   animation-timing-function: steps(5, jump-both);
}
.start {
   animation-timing-function: steps(5, start);
}
.end {
   animation-timing-function: steps(5, end);
}
.step-start {
   animation-timing-function: step-start;
}
.step-end {
   animation-timing-function: step-end;
}
```

{{EmbedLiveSample("Step_examples", 600, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{cssxref('easing-function')}}
- JavaScript {{domxref("AnimationEvent")}} API
- [cubic-bezier.com](https://cubic-bezier.com)
