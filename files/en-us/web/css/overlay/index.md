---
title: overlay
slug: Web/CSS/overlay
page-type: css-property
status:
  - experimental
browser-compat: css.properties.overlay
---

{{CSSRef}}{{SeeCompatTable}}

The **`overlay`** [CSS](/en-US/docs/Web/CSS) property specifies whether an element appearing in the [top layer](/en-US/docs/Glossary/Top_layer) (for example, a shown [popover](/en-US/docs/Web/API/Popover_API) or modal {{htmlelement("dialog")}} element) is actually rendered in the top layer. This property is only relevant within a list of {{cssxref("transition-property")}} values, and only if `allow-discrete` is set as the {{cssxref("transition-behavior")}}.

It is important to note that `overlay` can _only_ be set by the browser — author styles cannot change the `overlay` value of any element. You can, however, add `overlay` to the [list of transition properties](/en-US/docs/Web/CSS/transition-property) set on an element. This causes its removal from the top layer to be deferred so it can be animated instead of disappearing immediately.

> [!NOTE]
> When transitioning `overlay`, you need to set [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) on the transition so that it will animate. `overlay` animations differ from normal [discrete animations](/en-US/docs/Web/CSS/CSS_animated_properties#discrete) in that the visible (i.e. `auto`) state will always be shown for the full duration of the transition, regardless of whether it is the start or end state.

## Syntax

```css
/* Keyword values */
overlay: auto;
overlay: none;

/* Global values */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
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

### Transitioning a popover

In this example, a [popover](/en-US/docs/Web/API/Popover_API) is animated as it [transitions](/en-US/docs/Web/CSS/CSS_transitions) from hidden to shown and back again.

#### HTML

The HTML contains a {{htmlelement("div")}} element declared as a popover using the [popover](/en-US/docs/Web/HTML/Global_attributes/popover) attribute, and a {{htmlelement("button")}} element designated as the popover's display control using its [popovertarget](/en-US/docs/Web/HTML/Element/button#popovertarget) attribute.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

The `overlay` property is only present in the list of transitioned properties. As `overlay` is a user-agent controlled property, it is not declared in the pre-transition or post-transition states.

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
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* Nesting selectors (&) cannot represent pseudo-elements, so this 
   starting-style rule cannot be nested. */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

The two properties we want to animate are [`opacity`](/en-US/docs/Web/CSS/opacity) and [`transform`](/en-US/docs/Web/CSS/transform)): we want the popover to fade in and out while growing and shrinking in the horizontal direction. We set a starting state for these properties on the default hidden state of the popover element (selected via `[popover]`), and an end state on the open state of the popover (selected via the [`:popover-open`](/en-US/docs/Web/CSS/:popover-open) pseudo-class). We then set a [`transition`](/en-US/docs/Web/CSS/transition) property to animate between the two.

Because the animated element is being promoted to the [top layer](/en-US/docs/Glossary/Top_layer) when shown and removed from the top layer when hidden, `overlay` is added to the list of transitioned elements. This ensures that the removal of the element from the top layer is deferred until the animation has ended. This doesn't make a huge difference for simple animations such as this one, but in more complex cases not doing this can result in the element being removed from the overlay too quickly, meaning the animation is not smooth or effective. Note that the [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) value is also set in the shorthand to enable discrete transitions.

The following steps are also required to get the animation working in both directions:

- A starting state for the animation is set inside the [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) at-rule. This is needed to avoid unexpected behavior. By default transitions are not triggered on elements' first style updates, or when the `display` type changes from `none` to another type. `@starting-style` allows you to override that default in a specific controlled fashion. Without this, the entry animation would not occur and the popover would just appear.
- `display` is also added to the list of transitioned elements so that the animated element is visible (set to `display: block`) throughout both the entry and exit animation. Without this, the exit animation would not be visible; in effect, the popover would just disappear. Again, `transition-behavior: allow-discrete` is required in this case for the animation to occur.

You'll note that we've also included a transition on the [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) that appears behind the popover when it opens, to provide a nice darkening animation. `[popover]:popover-open::backdrop` is needed to select the backdrop when the popover is open.

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

- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) module
- [`@starting-style`](/en-US/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/en-US/docs/Web/CSS/transition-behavior)
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) on developer.chrome.com (2023)
