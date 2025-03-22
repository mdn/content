---
title: transition-behavior
slug: Web/CSS/transition-behavior
page-type: css-property
browser-compat: css.properties.transition-behavior
---

{{CSSRef}}

The **`transition-behavior`** [CSS](/en-US/docs/Web/CSS) property specifies whether transitions will be started for properties whose animation behavior is [discrete](/en-US/docs/Web/CSS/CSS_animated_properties#discrete).

## Syntax

```css
/* Keyword values */
transition-behavior: allow-discrete;
transition-behavior: normal;

/* Global values */
transition-behavior: inherit;
transition-behavior: initial;
transition-behavior: revert;
transition-behavior: revert-layer;
transition-behavior: unset;
```

### Values

- `allow-discrete`
  - : Transitions will be started on the element for discrete animated properties.
- `normal`
  - : Transitions will _not_ be started on the element for discrete animated properties.

## Description

The `transition-behavior` property is only relevant when used in conjunction with other transition properties, notably {{cssxref("transition-property")}} and {{cssxref("transition-duration")}}, as no transition occurs if no properties are animated over a non-zero duration of time.

```css
.card {
  transition-property: opacity, display;
  transition-duration: 0.25s;
  transition-behavior: allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

The `transition-behavior` value can be included as part of a shorthand {{cssxref("transition")}} declaration. When included in the shorthand, when using or defaulting to all properties, the `allow-discrete` value has no impact on regular animatable properties. The following CSS is equivalent to the longhand declarations above:

```css
.card {
  transition: all 0.25s;
  transition: all 0.25s allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

In the above snippet we include the `transition` property twice. The first instance does not include the `allow-discrete` value — this provides cross-browser support, ensuring the card's other properties still transition in browsers that don't support `transition-behavior.`

### Discrete animation behavior

Discrete-animated properties generally flip between two values 50% through animating between the two.

There is an exception, however, which is when animating to or from `display: none` or `content-visibility: hidden`. In this case, the browser will flip between the two values so that the transitioned content is shown for the entire animation duration.

So for example:

- When animating `display` from `none` to `block` (or another visible `display` value), the value will flip to `block` at `0%` of the animation duration so it is visible throughout.
- When animating `display` from `block` (or another visible `display` value) to `none`, the value will flip to `none` at `100%` of the animation duration so it is visible throughout.

## Formal definition

{{cssinfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Transitioning a popover

In this example, a [popover](/en-US/docs/Web/API/Popover_API) is animated as it [transitions](/en-US/docs/Web/CSS/CSS_transitions) from hidden to shown and back again.

#### HTML

The HTML contains a {{htmlelement("div")}} element declared as a popover using the [popover](/en-US/docs/Web/HTML/Global_attributes/popover) attribute, and a {{htmlelement("button")}} element designated as the popover's display control using its [popovertarget](/en-US/docs/Web/HTML/Element/button#popovertarget) attribute.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

```css hidden
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;
}
```

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  /* Final state of the exit animation */
  opacity: 0;
  transform: scaleX(0);

  transition-property: opacity, transform, overlay, display;
  transition-duration: 0.7s;
  transition-behavior: allow-discrete;
  /* Using the shorthand transition property, we could write:
    transition: 
      opacity 0.7s,
      transform 0.7s,
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;

    or even:
    transition: all 0.7s allow-discrete;
  */
}

/* Needs to be included after the previous [popover]:popover-open 
   rule to take effect, as the specificity is the same */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

The two properties we want to animate are [`opacity`](/en-US/docs/Web/CSS/opacity) and [`transform`](/en-US/docs/Web/CSS/transform): we want the popover to fade in and out while growing and shrinking in the horizontal direction. We set a starting state for these properties on the default hidden state of the popover element (selected via `[popover]`), and an end state on the open state of the popover (selected via the [`:popover-open`](/en-US/docs/Web/CSS/:popover-open) pseudo-class). We then set a [`transition`](/en-US/docs/Web/CSS/transition) property to animate between the two.

Because the animated element is being promoted to the [top layer](/en-US/docs/Glossary/Top_layer) when shown and removed from the top layer when hidden — which also means that its hidden state has [`display: none`](/en-US/docs/Web/CSS/display) set on it — the following properties are added to the list of transitioned elements to get the animation working in both directions. In both cases, `transition-behavior: allow-discrete` is set in the shorthand to enable discrete animation.

- `display`: Required so that the animated element is visible (set to `display: block`) throughout both the entry and exit animation. Without this, the exit animation would not be visible; in effect, the popover would just disappear.
- [`overlay`](/en-US/docs/Web/CSS/overlay): Required to make sure that the removal of the element from the top layer is deferred until the animation has been completed. This doesn't make a huge difference for basic animations such as this one, but in more complex cases not doing this can result in the element being removed from the overlay too quickly, meaning the animation is not smooth or effective.

In addition, a starting state for the animation is set inside the [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) at-rule. This is needed to avoid unexpected behavior. By default transitions are not triggered on elements' first style updates, or when the `display` type changes from `none` to another type. `@starting-style` allows you to override that default in a specific controlled fashion. Without this, the entry animation would not occur and the popover would just appear.

#### Result

The code renders as follows:

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> Because popovers change from `display: none` to `display: block` each time they are shown, the popover transitions from its `@starting-style` styles to its `[popover]:popover-open` styles every time the entry transition occurs. When the popover closes, it transitions from its `[popover]:popover-open` state to the default `[popover]` state.
>
> It is possible for the style transition on entry and exit to be different in such cases. See our [Demonstration of when starting styles are used](/en-US/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) example for a proof of this.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`overlay`](/en-US/docs/Web/CSS/overlay)
- [`@starting-style`](/en-US/docs/Web/CSS/@starting-style)
- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) module
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) on developer.chrome.com (2023)
