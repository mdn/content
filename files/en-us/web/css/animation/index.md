---
title: animation
slug: Web/CSS/animation
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.animation
---
{{CSSRef}}

The **`animation`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property applies an animation between styles. It is a shorthand for {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, and {{cssxref("animation-play-state")}}.

{{EmbedInteractiveExample("pages/css/animation.html")}}

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes name | duration | easing-function | delay */
animation: slidein 3s linear 1s;

/* @keyframes name | duration */
animation: slidein 3s;
```

A [description of which properties are animatable](/en-US/docs/Web/CSS/CSS_animated_properties) is available; it's worth noting that this description is also valid for [CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`animation-delay`](/en-US/docs/Web/CSS/animation-delay)
- [`animation-direction`](/en-US/docs/Web/CSS/animation-direction)
- [`animation-duration`](/en-US/docs/Web/CSS/animation-duration)
- [`animation-fill-mode`](/en-US/docs/Web/CSS/animation-fill-mode)
- [`animation-iteration-count`](/en-US/docs/Web/CSS/animation-iteration-count)
- [`animation-name`](/en-US/docs/Web/CSS/animation-name)
- [`animation-play-state`](/en-US/docs/Web/CSS/animation-play-state)
- [`animation-timing-function`](/en-US/docs/Web/CSS/animation-timing-function)

## Syntax

The `animation` property is specified as one or more single animations, separated by commas.

Each individual animation is specified as:

- zero or one occurrences of the following values:

  - {{cssxref("&lt;single-transition-easing-function&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-iteration-count&gt;", "#single-animation-iteration-count")}}
  - {{cssxref("animation", "&lt;single-animation-direction&gt;", "#single-animation-direction")}}
  - {{cssxref("animation", "&lt;single-animation-fill-mode&gt;", "#single-animation-fill-mode")}}
  - {{cssxref("animation", "&lt;single-animation-play-state&gt;", "#single-animation-play-state")}}

- an optional name for the animation, which may be `none`, a {{cssxref("&lt;custom-ident&gt;")}}, or a {{cssxref("&lt;string&gt;")}}
- zero, one, or two {{cssxref("&lt;time&gt;")}} values

The order of values within each animation definition is important: the first value that can be parsed as a {{cssxref("&lt;time&gt;")}} is assigned to the {{cssxref("animation-duration")}}, and the second one is assigned to {{cssxref("animation-delay")}}.

The order within each animation definition is also important for distinguishing {{cssxref("animation-name")}} values from other keywords. When parsed, keywords that are valid for properties other than {{cssxref("animation-name")}}, and whose values were not found earlier in the shorthand, must be accepted for those properties rather than for {{cssxref("animation-name")}}. Furthermore, when serialized, default values of other properties must be output in at least the cases necessary to distinguish an {{cssxref("animation-name")}} that could be a value of another property, and may be output in additional cases.

### Values

- `<single-animation-iteration-count>`
  - : The number of times the animation is played. The value must be one of those available in {{cssxref("animation-iteration-count")}}.
- `<single-animation-direction>`
  - : The direction in which the animation is played. The value must be one of those available in {{cssxref("animation-direction")}}.
- `<single-animation-fill-mode>`
  - : Determines how styles should be applied to the animation's target before and after its execution. The value must be one of those available in {{cssxref("animation-fill-mode")}}.
- `<single-animation-play-state>`
  - : Determines whether the animation is playing or not. The value must be one of those available in {{cssxref("animation-play-state")}}.

## Accessibility concerns

Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine and Scotopic sensitivity.

Consider providing a mechanism for pausing or disabling animation, as well as using the [Reduced Motion Media Query](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) to create a complimentary experience for users who have expressed a preference for no animated experiences.

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

### Cylon Eye

```html
<div class="view_port">
  <div class="polling_message">
    Listening for dispatches
  </div>
  <div class="cylon_eye"></div>
</div>
```

```css
.polling_message {
  color: white;
  float: left;
  margin-right: 2%;
}

.view_port {
  background-color: black;
  height: 25px;
  width: 100%;
  overflow: hidden;
}

.cylon_eye {
  background-color: red;
  background-image: linear-gradient(to right,
      rgba(0, 0, 0, .9) 25%,
      rgba(0, 0, 0, .1) 50%,
      rgba(0, 0, 0, .9) 75%);
  color: white;
  height: 100%;
  width: 20%;

  animation: 4s linear 0s infinite alternate move_eye;
}

@keyframes move_eye { 
  from { margin-left: -20%; } 
  to { margin-left: 100%; }
}
```

{{EmbedLiveSample('Cylon_Eye')}}

See [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#examples) for additional examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
