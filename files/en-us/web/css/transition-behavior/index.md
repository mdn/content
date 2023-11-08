---
title: transition-behavior
slug: Web/CSS/transition-behavior
page-type: css-property
status:
  - experimental
browser-compat: css.properties.transition-behavior
---

{{CSSRef}}{{SeeCompatTable}}

The **`transition-behavior`** [CSS](/en-US/docs/Web/CSS) property specifies whether transitions will be started for properties whose animation behavior is [discrete](/en-US/docs/Web/CSS/CSS_animated_properties#discrete).

This is most significant in the cases of [`display`](/en-US/docs/Web/CSS/display), [`content-visibility`](/en-US/docs/Web/CSS/display), and [`overlay`](/en-US/docs/Web/CSS/overlay), the first two of which historically were not animatable. The ability of these elements to be transitioned means that it is fairly easy to create entry and exit animations, where an element is transitioned to and from a hidden state (which includes elements appearing in the [top layer](/en-US/docs/Glossary/Top_layer) such as [popovers](/en-US/docs/Web/API/Popover_API) or modal {{htmlelement("dialog")}} elements), or transitioned as soon as it is added to the DOM.

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

## Formal definition

{{cssinfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic usage

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

### Transitioning a popover

In this example, a [popover](/en-US/docs/Web/API/Popover_API) is animated as it [transitions](/en-US/docs/Web/CSS/CSS_transitions) from hidden to shown and back again.

#### HTML

The HTML contains a {{htmlelement("div")}} element declared as a popover using the [popover](/en-US/docs/Web/HTML/Global_attributes/popover) attribute, and a {{htmlelement("button")}} element designated as the popover's toggle control using its [popovertarget](/en-US/docs/Web/HTML/Element/button#popovertarget) attribute.

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* Final state of the exit animation */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/* Needs to be included after the previous [popover]:popover-open 
   rule to take effect, as the specificity is the same */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Transition for the popover's backdrop */

[popover]::backdrop {
  background-color: rgb(0 0 0 / 0);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 0.25);
}

/* The nesting selector (&) cannot represent pseudo-elements
so this starting-style rule cannot be nested */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0);
  }
}
```

The two properties we want to animate are [`opacity`](/en-US/docs/Web/CSS/opacity) and [`transform`](/en-US/docs/Web/CSS/transform)): we want the popover to fade in and out while growing and shrinking in the horizontal direction. We set a starting state for these properties on the default hidden state of the popover element (selected via `[popover]`), and an end state on the open state of the popover (selected via the [`:popover-open`](/en-US/docs/Web/CSS/:popover-open) pseudo-class). We then set a [`transition`](/en-US/docs/Web/CSS/transition) property to animate between the two.

Because the animated element is being promoted to the [top layer](/en-US/docs/Glossary/Top_layer) when shown and removed from the top layer when hidden — which also means that its hidden state has [`display: none`](/en-US/docs/Web/CSS/display) set on it — the following properties are added to the list of transitioned elements to get the animation working in both directions. In both cases, `transition-behavior: allow-discrete` is set in the shorthand to enable discrete animation.

- `display`: Required so that the animated element is visible (set to `display: block`) throughout both the entry and exit animation. Without this, the exit animation would not be visible; in effect, the popover would just disappear.
- [`overlay`](/en-US/docs/Web/CSS/overlay): Required to make sure that the removal of the element from the top layer is deferred until the animation has been completed. This doesn't make a huge difference for simple animations such as this one, but in more complex cases not doing this can result in the element being removed from the overlay too quickly, meaning the animation is not smooth or effective.

In addition, a starting state for the animation is set inside the [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) at-rule. This is needed to avoid unexpected behavior. By default transitions are not triggered on elements' first style updates, or when the `display` type changes from `none` to another type. `@starting-style` allows you to override that default in a specific controlled fashion. Without this, the entry animation would not occur and the popover would just appear.

You'll note that we've also included a transition on the [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) that appears behind the popover when it opens, to provide a nice darkening animation. `[popover]:popover-open::backdrop` is needed to select the backdrop when the popover is open.

#### Result

The code renders as follows:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`overlay`](/en-US/docs/Web/CSS/overlay)
- [`@starting-style`](/en-US/docs/Web/CSS/@starting-style)
- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) module
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) on developer.chrome.com (2023)
