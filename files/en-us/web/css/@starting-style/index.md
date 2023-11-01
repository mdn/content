---
title: "@starting-style"
slug: Web/CSS/@starting-style
page-type: css-at-rule
status:
  - experimental
browser-compat: css.at-rules.starting-style
---

{{CSSRef}}{{SeeCompatTable}}

The **`@starting-style`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is used to provide a set of starting values for properties set on an element that you want to transition from when the element receives its first style update.

This is needed because, by default, [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) are not triggered on elements' first style updates, or when the [`display`](/en-US/docs/Web/CSS/display) type changes from `none` to another type, to avoid unexpected behavior. To put it another way, such elements do not have a starting style to transition from. `@starting-style` allows you to provide starting styles, overriding the default behavior in a specific controlled fashion.

This enables the easy creation of entry animations that were previously complex to achieve, such as animating elements when they are changed from `display: none` (this includes elements shown in the [top layer](/en-US/docs/Glossary/Top_layer) such as [popovers](/en-US/docs/Web/API/Popover_API) or modal {{htmlelement("dialog")}} elements) or when they are first added to the DOM.

> **Note:** `@starting-style` is only relevant to CSS transitions. When animating from `display: none` or animating elements as they are first added to the DOM, [CSS animations](/en-US/docs/Web/CSS/CSS_animations) do not need a `@starting-style` specified; instead you provide the starting style as an explicit starting keyframe (for example using `0%` or `from`). See [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) for an example.

## Syntax

```css
@starting-style { rules }
@starting-style { declarations }
```

where:

- _rules_
  - : Is the set of CSS rules providing the starting styles for the transition, when `@starting-style` is used in standalone style.
- _declarations_
  - : Is the set of CSS declarations providing the starting styles for the transition, when `@starting-style` is nested inside a particular ruleset.

## Description

There are two ways to use `@starting-style`. Let's consider an example where we want to animate a popover when it is shown (added to the top layer). In this case, the original rule specifying the styles for the popover once opened looks like this (you can see the [full example in action](/en-US/docs/Web/CSS/@starting-style#animating_a_popover) in the examples section):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

You can specify the starting styles in a separate rule contained within a standalone `@starting-style` block:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> **Note:** In the standalone case, you need to specify the `@starting-style` block after the original rule for it to take effect, as the specificity of each is the same. If `@starting-style` was specified first, the original styles would override it.

Alternatively, you can nest the starting styles inside the original rule:

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

This example shows how a [popover](/en-US/docs/Web/API/Popover_API) can be animated using [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions). Basic entry and exit animations are provided.

The HTML contains a {{htmlelement("div")}} element declared as a popover using the [popover](/en-US/docs/Web/HTML/Global_attributes/popover) attribute, and a {{htmlelement("button")}} element designated as the popover's toggle control using its [popovertarget](/en-US/docs/Web/HTML/Element/button#popovertarget) attribute.

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

The CSS for the example looks like this:

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
  opacity: 0;
  transform: scaleX(0);
  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
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
  background-color: rgba(0, 0, 0, 0);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
}

[popover]:popover-open::backdrop {
  background-color: rgba(0, 0, 0, 0.25);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgba(0, 0, 0, 0);
  }
}
```

The two properties we want to animate are [`opacity`](/en-US/docs/Web/CSS/opacity) and [`transform`](/en-US/docs/Web/CSS/transform) (specifically, a horizontally scaling transform): we want the popover to fade in and out, as well as growing/shrinking horizontally. To achieve this, we have set a starting state for these properties on the default hidden state of the popover element (selected via `[popover]`), and an end state on the open state of the popover (selected via the [`:popover-open`](/en-US/docs/Web/CSS/:popover-open) pseudo-class).

We then set a [`transition`](/en-US/docs/Web/CSS/transition) property to animate between the two, and include a starting state for the animation inside a [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) at-rule, as described above, so the entry animation will work.

However, because the animated element is being promoted to the [top layer](/en-US/docs/Glossary/Top_layer) when shown and removed from the top layer when hidden — which also means that its hidden state has [`display: none`](/en-US/docs/Web/CSS/display) set on it — some extra steps are required to get the animation working in both directions:

- `display` is added to the list of transitioned elements so that the animated element is visible (set to `display: block`) throughout both the entry and exit animation. Without this, the exit animation would not be visible; in effect, the popover would just disappear. Note that the [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) value is also set in the shorthand so that it will animate.
- [`overlay`](/en-US/docs/Web/CSS/overlay) is added to the list of transitioned elements to make sure that the removal of the element from the top layer is deferred until the animation has been completed. This doesn't make a huge difference for simple animations such as this one, but in more complex cases not doing this can result in the element being removed from the overlay too quickly, meaning the animation is not smooth or effective. Again, `transition-behavior: allow-discrete` is required in this case for the animation to occur.

You'll note that we've also included a transition on the [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) that appears behind the popover when it opens, to provide a nice darkening animation. `[popover]:popover-open::backdrop` is needed to select the backdrop when the popover is open.

The code renders as follows:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

### Transitioning elements as they are added to and removed from the DOM

In this example, we provide a button that appends new elements to a {{htmlelement("section")}} container when pressed. Each element is given a nested close button which, when pressed, removes the element again. We use transitions to animate the elements when they are first added to the DOM, and when they are removed.

The static HTML looks like this:

```html
<button>Create new column</button>
<section></section>
```

The JavaScript that handles the adding and removing looks like this:

```js
const btn = document.querySelector("button");
const sectionElem = document.querySelector("section");

btn.addEventListener("click", createColumn);

function randomColor() {
  function randomChannel() {
    return Math.floor(Math.random() * 255);
  }

  return `rgb(${randomChannel()},${randomChannel()},${randomChannel()})`;
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

The most interesting part is the `createColumn()` function — note how it creates a {{htmlelement("div")}} element and a {{htmlelement("button")}} element to close the `<div>` when pressed then appends the `<button>` to the `<div>`, and the `<div>` to the `<section>` container. We then:

- Add an event listener to the close button via {{domxref("EventTarget.addEventListener", "addEventListener")}} that adds a `fade-out` class to the `<div>` (this triggers the exit animation on it)
- Use {{domxref("setTimeout")}} to delay the removal of the `<div>` from the DOM (via {{domxref("Element.remove()")}}) until after the animation has finished.

Let's move on to the CSS:

```css
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

div {
  flex: 1;
  border: 1px solid gray;
  position: relative;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5)
  );
  opacity: 1;
  transform: scaleY(1);

  transition:
    opacity 0.7s,
    transform 0.7s,
    display 0.7s allow-discrete;
}

/* Needs to be included after the previous div rule
   to take effect, as the specificity is the same */
@starting-style {
  div {
    opacity: 0;
    transform: scaleY(0);
  }
}

.fade-out {
  opacity: 0;
  display: none;
  transform: scaleY(0);
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

We want to transition [`opacity`](/en-US/docs/Web/CSS/opacity) and [`transform`](/en-US/docs/Web/CSS/transform) on each `<div>` as it is added to the DOM, and then reverse the animation as it is removed again. To do this, we:

- Specify the end state of the properties we want to transition on the `div { ... }` rule.
- Specify the starting state we would like to transition the properties from inside a `@starting-state` block.
- Specify the exit animation inside the `.fade-out` rule — this is the class that our JavaScript applies to the `<div>` elements when their close buttons are pressed. Note that as well as setting the `opacity` and `transform` end states, we are also setting [`display: none`](/en-US/docs/Web/CSS/display) on the `<div>`s — we want them to be immediately not available when removed from the UI.
- Specify the [`transition`](/en-US/docs/Web/CSS/display) list inside the `div { ... }` rule to get `opacity`, `transform`, and `display` animating. Note that in the case of `display`, [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) value is also set in the shorthand so that it will animate.

The final result looks like this:

{{ EmbedLiveSample("Transitioning elements as they are added to and removed from the DOM", "100%", "400") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`overlay`](/en-US/docs/Web/CSS/overlay)
- [`transition-behavior`](/en-US/docs/Web/CSS/transition-behavior)
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) on developer.chrome.com (2023)
- {{domxref("CSSStartingStyleRule")}}
