---
title: overlay
slug: Web/CSS/overlay
page-type: css-property
status:
  - experimental
browser-compat: css.properties.overlay
---

{{CSSRef}}{{SeeCompatTable}}

The **`overlay`** [CSS](/en-US/docs/Web/CSS) property specifies whether an element appearing in the [top layer](/en-US/docs/Glossary/Top_layer) (for example, a shown [popover](/en-US/docs/Web/API/Popover_API) or modal {{htmlelement("dialog")}} element) is actually rendered in the top layer.

It is important to note that `overlay` can _only_ be set by the browser — author styles cannot change the `overlay` value of any element. You can however add `overlay` to the [list of transition properties](/en-US/docs/Web/CSS/transition-property) set on an element. This causes its removal from the top layer to be deferred so it can be animated instead of disappearing immediately.

> **Note:** When transitioning `overlay`, you need to set [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) on the transition so that it will animate. `overlay` animations differ from normal [discrete animations](/en-US/docs/Web/CSS/CSS_animated_properties#discrete) in that the visible (i.e. `auto`) state will always be shown for the full duration of the transition, regardless of whether it is the start or end state.

## Syntax

```css
/* Keyword values */
overlay: auto;
overlay: none;
```

### Values

- `auto`
  - : The element is rendered in the top layer if it is promoted to the top layer.
- `none`
  - : The element is not rendered in the top layer.

## Formal definition

{{cssinfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Animating a popover

This example shows how a [popover](/en-US/docs/Web/API/Popover_API) can be animated using [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions). Basic entry and exit animations are provided.

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

/* Needs to be included after the previous [popover]:popover-open rule
   to take effect, as the specificity is the same */
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

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0);
  }
}
```

The two properties we want to animate are [`opacity`](/en-US/docs/Web/CSS/opacity) and [`transform`](/en-US/docs/Web/CSS/transform) (specifically, a horizontally scaling transform): we want the popover to fade in and out, as well as growing/shrinking horizontally. To achieve this, we have set a starting state for these properties on the default hidden state of the popover element (selected via `[popover]`), and an end state on the open state of the popover (selected via the [`:popover-open`](/en-US/docs/Web/CSS/:popover-open) pseudo-class). We then set a [`transition`](/en-US/docs/Web/CSS/transition) property to animate between the two.

However, because the animated element is being promoted to the [top layer](/en-US/docs/Glossary/Top_layer) when shown and removed from the top layer when hidden — which also means that its hidden state has [`display: none`](/en-US/docs/Web/CSS/display) set on it — some extra steps are required to get the animation working in both directions:

- A starting state for the animation is set inside the [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) at-rule. This is needed to avoid unexpected behavior. By default transitions are not triggered on elements' first style updates, or when the `display` type changes from `none` to another type. `@starting-style` allows you to override that default in a specific controlled fashion. Without this, the entry animation would not occur and the popover would just appear.
- `display` is added to the list of transitioned elements so that the animated element is visible (set to `display: block`) throughout both the entry and exit animation. Without this, the exit animation would not be visible; in effect, the popover would just disappear. Note that the [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) value is also set in the shorthand so that it will animate.
- `overlay` is added to the list of transitioned elements to make sure that the removal of the element from the top layer is deferred until the animation has been completed. This doesn't make a huge difference for simple animations such as this one, but in more complex cases not doing this can result in the element being removed from the overlay too quickly, meaning the animation is not smooth or effective. Again, `transition-behavior: allow-discrete` is required in this case for the animation to occur.

You'll note that we've also included a transition on the [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) that appears behind the popover when it opens, to provide a nice darkening animation. `[popover]:popover-open::backdrop` is needed to select the backdrop when the popover is open.

#### Result

The code renders as follows:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

#### Further examples

Further examples (including a `<dialog>` modal animation) can be found at [Animating elements to and from the top-layer](https://developer.chrome.com/blog/entry-exit-animations/#animating-elements-to-and-from-the-top-layer).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions)
- [`@starting-style`](/en-US/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/en-US/docs/Web/CSS/transition-behavior)
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) on developer.chrome.com (2023)
