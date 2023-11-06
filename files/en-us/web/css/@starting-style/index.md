---
title: "@starting-style"
slug: Web/CSS/@starting-style
page-type: css-at-rule
status:
  - experimental
browser-compat: css.at-rules.starting-style
---

{{CSSRef}}{{SeeCompatTable}}

The **`@starting-style`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is used to define starting values for properties set on an element that you want to transition from when the element receives its first style update, i.e. when an element is first displayed on a previously loaded page.

## Syntax

The `@starting-style` at rule can be used in two ways:

1. As a standalone block, in which case it contains one or more rulesets defining starting style declarations and selecting the elements they apply to:

   ```css
   @starting-style {
     rulesets
   }
   ```

2. Nested within an existing ruleset, in which case it contains one or more declarations defining starting styles for the elements already selected by that ruleset:

   ```css
   selector { /* existing ruleset */
     /* ... */

     @starting-style {
       declarations
     }
   }
   ```

## Description

To avoid unexpected behavior, [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) are by default not triggered on an element's initial style update, or when its [`display`](/en-US/docs/Web/CSS/display) type changes from `none` to another type. To enable first-style transitions, `@starting-style` rules are needed. They provide starting styles for elements that do not have a previous state, defining the styles to transition from.

`@starting-style` is especially useful when creating entry and exit transitions for elements displayed in the [top layer](/en-US/docs/Glossary/Top_layer) (such as [popovers](/en-US/docs/Web/API/Popover_API) and modal {{htmlelement("dialog")}}s), elements that are changing to and from `display: none`, and elements when first added to or removed from the DOM.

> **Note:** `@starting-style` is only relevant to CSS transitions. When using [CSS animations](/en-US/docs/Web/CSS/CSS_animations) to animate such elements, `@starting-style` is not needed; instead, provide the starting style as an explicit starting keyframe (using `0%` or `from`). See [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations#animating_display_and_content-visibility) for an example.

There are two ways to use `@starting-style`: as a standalone rule or nested within a ruleset.

Let's consider a scenario where we want to animate a [popover](/en-US/docs/Web/API/Popover_API) when shown (that is, when added to the top layer). The "original rule" specifying the styles for the open popover looks like this (see the [full example in action](#animating_a_popover) in the "Examples" section below):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

To specify the starting style for the popover using the first method, you include a standalone `@starting-style` block in your CSS, as shown below:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> **Note:** The `@starting-style` at-rule and the "original rule" have the same {{cssxref("specificity")}}. To ensure that starting styles get applied, include the `@starting-style` at-rule _after_ the "original rule". If you specify the `@starting-style` at-rule before the "original rule", the original styles will override the starting styles.

To specify the starting style for the popover using the nested method, you can nest the `@starting-style` block inside the "original rule", as shown below:

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);

  @starting-style {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

## Formal syntax

{{csssyntax}}

## Examples

### Animating a popover

This example shows how a [popover](/en-US/docs/Web/API/Popover_API) can be animated using [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions). Basic entry and exit animations are provided using the [`transition`](/en-US/docs/Web/CSS/transition) property.

#### HTML

The HTML contains a {{htmlelement("div")}} element declared as a popover using the [popover](/en-US/docs/Web/HTML/Global_attributes/popover) attribute and a {{htmlelement("button")}} element designated as the popover's toggle control using its [popovertarget](/en-US/docs/Web/HTML/Element/button#popovertarget) attribute.

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

/* Include after the [popover]:popover-open rule */
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

/* Nesting (&) is not supported for pseudo-elements
so specify a standalone starting-style block. */
@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0);
  }
}
```

In this example, we want to animate two properties, [`opacity`](/en-US/docs/Web/CSS/opacity) and [`transform`](/en-US/docs/Web/CSS/transform) (specifically, a horizontally scaling transform), to make the popover fade in and out as well as grow and shrink horizontally. To achieve this, we have set a starting state for these properties on the default hidden state of the popover element (selected via `[popover]`), and an ending state on the open state of the popover (selected via the [`:popover-open`](/en-US/docs/Web/CSS/:popover-open) pseudo-class).

We then set a [`transition`](/en-US/docs/Web/CSS/transition) property to animate between the two states. A starting state for the animation is included inside a `@starting-style` at-rule to enable the entry animation.

However, because the animated element is being promoted to the [top layer](/en-US/docs/Glossary/Top_layer) when shown and removed from the top layer when hidden — which also means that its hidden state has [`display: none`](/en-US/docs/Web/CSS/display) set on it — some extra steps are required to ensure the animation works in both directions:

- `display` is added to the list of transitioned elements to ensure the animated element is visible (set to `display: block` or another visible `display` value) throughout both the entry and exit animations. Without this, the exit animation would not be visible; in effect, the popover would just disappear. Note that the [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) value is also set in the shorthand to activate the animation.
- [`overlay`](/en-US/docs/Web/CSS/overlay) is added to the list of transitioned elements to ensure that the removal of the element from the top layer is deferred until the animation has been completed. This doesn't make a huge difference for simple animations such as this one, but in more complex cases not doing this can result in the element being removed from the overlay too quickly, meaning the animation is not smooth or effective. Again, `transition-behavior: allow-discrete` is required in this case for the animation to occur.

> **Note:** We've also included a transition on the [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) that appears behind the popover when it opens, to provide a nice darkening animation. `[popover]:popover-open::backdrop` is used to select the backdrop when the popover is open.

#### Result

The code renders as follows:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> **Note:** You can find an example that demonstrates transitioning a {{htmlelement("dialog")}} element and its backdrop as it is shown and hidden on the `<dialog>` reference page — see [Transitioning dialog elements](/en-US/docs/Web/HTML/Element/dialog#transitioning_dialog_elements).

### Transitioning elements on DOM addition and removal

This example contains a button, which when pressed, appends new elements to a {{htmlelement("section")}} container. Each element, in turn, contains a nested button, which when pressed, removes the element. This example demonstrates how to use transitions to animate elements when they are added to or removed from the DOM.

#### HTML

```html
<button>Create new column</button>
<section></section>
```

#### JavaScript

JavaScript enables the addition and removal of elements:

```js
const btn = document.querySelector("button");
const sectionElem = document.querySelector("section");

btn.addEventListener("click", createColumn);

function randomColor() {
  function randomNum() {
    return Math.floor(Math.random() * 255);
  }

  return `rgb(${randomNum()} ${randomNum()} ${randomNum()})`;
}

function createColumn() {
  const divElem = document.createElement("div");
  divElem.style.backgroundColor = randomColor();

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✖";
  closeBtn.setAttribute("aria-label", "close");
  divElem.append(closeBtn);
  sectionElem.append(divElem);

  closeBtn.addEventListener("click", () => {
    divElem.classList.add("fade-out");

    setTimeout(() => {
      divElem.remove();
    }, 1000);
  });
}
```

When the "Create new column" button is clicked, the `createColumn()` function is called. This creates a {{htmlelement("div")}} element with a randomly generated background color and a {{htmlelement("button")}} element to close the `<div>` when pressed. It then appends the `<button>` to the `<div>` and the `<div>` to the `<section>` container.

We then add an event listener to the close button via {{domxref("EventTarget.addEventListener", "addEventListener")}}. Clicking the close button does two things:

- Adds the `fade-out` class to the `<div>`. Adding the class triggers the exit animation set on that class.
- Removes the `<div>` after a 1000ms delay. The {{domxref("setTimeout")}} delays the removal of the `<div>` from the DOM (via {{domxref("Element.remove()")}}) until after the animation has finished.

#### CSS

```css hidden
html * {
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 10px;
}

body > button {
  margin: 10px 10px 0 10px;
}

section {
  display: flex;
  flex: 1;
  gap: 10px;
  margin: 10px;
}
```

```css
div {
  flex: 1;
  border: 1px solid gray;
  position: relative;
  background: linear-gradient(
    to right,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
  opacity: 1;
  scale: 1 1;

  transition:
    opacity 0.7s,
    scale 0.7s,
    display 0.7s allow-discrete;
    all 0.7s allow-discrete
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/* Include after the `div` rule */
@starting-style {
  div {
    opacity: 0;
    scale: 1 0;
  }
}

.fade-out {
  opacity: 0;
  display: none;
  scale: 1 0;
}

div > button {
  font-size: 1.6rem;
  background: none;
  border: 0;
  text-shadow: 2px 1px 1px white;
  border-radius: 15px;
  position: absolute;
  top: 1px;
  right: 1px;
  cursor: pointer;
}
```

To animate the [`opacity`](/en-US/docs/Web/CSS/opacity) and [`scale`](/en-US/docs/Web/CSS/scale) of each `<div>` as it is added to the DOM and then reverse the animation as it is removed from the DOM, we:

- Specify the ending state of the properties we want to transition on the `div { ... }` rule.
- Specify the starting state from which to transition the properties inside a `@starting-style` block.
- Specify the exit animation inside the `.fade-out` rule — this is the class that the JavaScript assigns to the `<div>` elements when their close buttons are pressed. Besides setting the `opacity` and `scale` ending states, we also set [`display: none`](/en-US/docs/Web/CSS/display) on the `<div>`s — we want them to become immediately unavailable when removed from the UI.
- Specify the [`transition`](/en-US/docs/Web/CSS/transition) list inside the `div { ... }` rule to animate `opacity`, `scale`, and `display`. Note that for `display`, the [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) value is also set in the shorthand so that it will animate.

#### Result

The final result looks like this:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions)
- [`overlay`](/en-US/docs/Web/CSS/overlay)
- [`transition-behavior`](/en-US/docs/Web/CSS/transition-behavior)
- {{domxref("CSSStartingStyleRule")}}
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) on developer.chrome.com (2023)
