---
title: "ViewTransition: types property"
short-title: types
slug: Web/API/ViewTransition/types
page-type: web-api-instance-property
browser-compat: api.ViewTransition.types
---

{{APIRef("View Transition API")}}

The **`types`** read-only property of the
{{domxref("ViewTransition")}} interface is a {{domxref("ViewTransitionTypeSet")}} that allows the [types](/en-US/docs/Web/API/View_Transition_API/Using_types) set on the view transition to be accessed and modified.

## Value

A {{domxref("ViewTransitionTypeSet")}}. This is a [Set-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), which means you can modify the types applied to a view transition on-the-fly using methods available on it such as `clear()`, `add()`, and `delete()`.

## Examples

### Basic usage

This example includes a basic document that transitions between two different pieces of content. We provide three buttons, each of which triggers the transition, but with a different `type` to apply a different kind of animation to the transition.

#### HTML

The markup includes a single {{htmlelement("p")}} element to contain the content and three {{htmlelement("button")}} elements to trigger the view transition.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="default">Default</button>
  <button id="slide">Slide</button>
  <button id="flip">Flip</button>
</div>
```

#### JavaScript

In our script, we create references to the buttons and the content paragraph, and then store our two different pieces of content in two constants.

```js live-sample___basic_usage
const defaultBtn = document.getElementById("default");
const slideBtn = document.getElementById("slide");
const flipBtn = document.getElementById("flip");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Next, we add `click` event listeners to the buttons; when they are clicked, the `changeContent()` function is run.

```js live-sample___basic_usage
defaultBtn.addEventListener("click", changeContent);
slideBtn.addEventListener("click", changeContent);
flipBtn.addEventListener("click", changeContent);
```

Finally, we define the `changeContent()` function. We start by invoking the {{domxref("Document.startViewTransition", "startViewTransition()")}} method to update the content and start the transition, saving the returned `ViewTransition` object in the `vt` constant. Inside `startViewTransition()`, the `update` callback checks whether the paragraph `textContent` is equal to the `first` string. If so, we set it to the `second` string. If not, we set it to the `first` string.

In the second part of the `changeContent()` function, we check the value of the `click` event target:

- If it is the "Slide" button, we add a `slide` type to the active view transition's types using `vt.types.add("slide")`.
- If it is the "Flip" button, we add a `flip` type to the active view transition's types using `vt.types.add("flip")`.
- We don't do anything if the "Default" button was pressed. In this case, we want to use the default view transition cross-fade animation.

```js live-sample___basic_usage
function changeContent(e) {
  const vt = document.startViewTransition({
    update() {
      content.textContent === first
        ? (content.textContent = second)
        : (content.textContent = first);
    },
  });

  if (e.target === slideBtn) {
    vt.types.add("slide");
  } else if (e.target === flipBtn) {
    vt.types.add("flip");
  }
}
```

#### CSS

In our styles, we start off by creating a set of nested rules using the `:active-view-transition` pseudo-class. These styles will be applied whenever a view transition is active, regardless of the their types. We apply a {{cssxref("view-transition-name")}} of `none` to the {{cssxref(":root")}}, as we don't want any elements captured and animated on transition except for the `<p>` element, which is given a `view-transition-name` of `content`.

```css hidden live-sample___basic_usage
html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div {
  display: flex;
  width: 60%;
  justify-content: space-between;
}

p {
  font-size: 1.7em;
  width: 60%;
  color: blue;
  background-color: white;
  margin-top: 0;
}
```

```css live-sample___basic_usage
html:active-view-transition {
  :root {
    view-transition-name: none;
  }
  p {
    view-transition-name: content;
  }
}
```

Next, we use the `:active-view-transition-type()` pseudo-class to create two blocks of nested styles, the first of which is only applied when the active view transition has a type of `slide`, and the second of which is only applied when the active view transition has a type of `flip`. In each block, we use the {{cssxref("::view-transition-old()")}} and {{cssxref("::view-transition-new()")}} pseudo-elements to apply custom {{cssxref("animation-name")}} values to the `slide` capture group's outgoing and incoming views.

As a result:

- When the transition type is `slide`, the old content view slides out to the left, and the new content view slides in from the right.
- When the transition type is `flip`, the old content view rotates horizontally to 90 degrees so it is no longer visible, and the new content view rotates back in.
- In any other case, the default cross-fade transition animations are used.

```css live-sample___basic_usage
html:active-view-transition-type(slide) {
  &::view-transition-old(content) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(content) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(flip) {
  &::view-transition-old(content) {
    animation-name: flip-out;
  }
  &::view-transition-new(content) {
    animation-name: flip-in;
    animation-delay: 0.6s;
  }
}
```

Finally, we use {{cssxref("@keyframes")}} animation blocks to define the animations referenced previously. We also set a custom {{cssxref("animation-duration")}} on all capture groups, to slow the transition animations down slightly.

```css live-sample___basic_usage
@keyframes slide-out-to-left {
  to {
    translate: -100vw 0;
  }
}
@keyframes slide-in-from-right {
  from {
    translate: 100vw 0;
  }
}

@keyframes flip-out {
  to {
    rotate: x 90deg;
  }
}
@keyframes flip-in {
  from {
    rotate: x -90deg;
  }
}

::view-transition-group(*) {
  animation-duration: 0.6s;
}
```

#### Result

The example is rendered like so:

{{EmbedLiveSample("basic-usage", "100%", 200)}}

Try clicking each button and note how the DOM changes are identical in each case, but the animation is different. This is because a different transition type is set depending on which button is pressed (or no transition type in the "Default" case).

### Applied example

Check out our [MPA multiple transition types example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) ([source code](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)), which demonstrates how to apply different animations to cross-document view transitions depending on the navigation type, represented by different transition types. The transition type is determined on-the-fly with JavaScript during the navigation.

[Applying different cross-document types using pageswap and pagereveal events](/en-US/docs/Web/API/View_Transition_API/Using_types#applying_different_cross-document_types_using_pageswap_and_pagereveal_events) provides a walkthrough of this example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ViewTransitionTypeSet")}}
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
- [Using view transition types](/en-US/docs/Web/API/View_Transition_API/Using_types)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
