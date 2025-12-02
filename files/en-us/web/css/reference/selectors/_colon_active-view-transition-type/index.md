---
title: :active-view-transition-type()
slug: Web/CSS/Reference/Selectors/:active-view-transition-type
page-type: css-pseudo-class
browser-compat: css.selectors.active-view-transition-type
sidebar: cssref
---

The functional **`:active-view-transition-type()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) matches elements when a view transition with one or more specific types is in progress (is _active_) and stops matching once the view transition has completed.

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

## Syntax

```css-nolint
:has(<custom-ident>#) {
  /* ... */
}
```

### Parameters

- `<custom-ident>#`
  - : One or more comma-separated {{cssxref("&lt;custom-ident>")}} values representing the types that should be applied to the active view transition for this selector to match.

## Description

[View transition types](/en-US/docs/Web/API/View_Transition_API/Types) provide a mechanism by which different **types** can be specified for active view transitions. Types can be set on view transitions in multiple ways:

- For single-page app (SPA) view transitions, specify types in the [`types`](/en-US/docs/Web/API/Document/startViewTransition#types) option of the {{domxref("Document.startViewTransition", "startViewTransition()")}} method.
- For cross-document view transitions, specify types in the [`types`](/en-US/docs/Web/CSS/Reference/At-rules/@view-transition#types) descriptor of the {{cssxref("@view-transition")}} at-rule.
- You can also modify the active view transition's types on the fly via the {{domxref("ViewTransition.types", "types")}} property of the corresponding `ViewTransition` object:
  - For SPA view transitions, this is the `ViewTransition` object returned by the `startViewTransition()` method.
  - For cross-document view transitions, the `ViewTransition` object is available in the {{domxref("PageSwapEvent.viewTransition", "viewTransition")}} property of the {{domxref("Window.pageswap_event", "pageswap")}} event object in the case of the outgoing page, and the {{domxref("PageRevealEvent.viewTransition", "viewTransition")}} property of the {{domxref("Window.pagereveal_event", "pagereveal")}} event object in the case of the incoming page.

Once the active view transition has one or more types set on it, the `:active-view-transition-type()` pseudo-class can be applied to the document root element to set custom styles for each type. The pseudo-class takes a comma-separated list of types as its argument to specify the types that need to be set on the active view transition for the selector to be matched.

For example, you might want to apply different transition animations to an {{htmlelement("img")}} element in an image gallery app as the displayed image changes, depending on whether you are moving forward or backward in the sequence, deleting an image, or adding an image into the sequence.

## Examples

See also [Using view transition types](/en-US/docs/Web/API/View_Transition_API/Types) for multiple complete examples.

### Basic `:active-view-transition-type()` usage

This example includes a simple document that transitions between two different pieces of content via two different buttons, "Backwards" and "Forwards". We demonstrate how view transition types can be used to animate the transition differently depending on which button was pressed.

#### HTML

The markup includes a single {{htmlelement("p")}} element to contain the content and two {{htmlelement("button")}} elements to trigger the view transitions.

```html live-sample___basic_usage
<p>This is my first piece of content. I hope you like it!</p>
<div>
  <button id="backwards">Backwards</button>
  <button id="forwards">Forwards</button>
</div>
```

#### JavaScript

In our script, we grab references to both buttons and the content paragraph, and then store our two different pieces of content in two constants.

```js live-sample___basic_usage
const backBtn = document.getElementById("backwards");
const fwdBtn = document.getElementById("forwards");
const content = document.querySelector("p");

const first = "This is my first piece of content. I hope you like it!";
const second =
  "This is my second piece of content. Is it better than the first?";
```

Next, we add `click` event listeners to the backwards and forwards buttons; when they are clicked, the `changeContent()` function is run.

```js live-sample___basic_usage
backBtn.addEventListener("click", changeContent);
fwdBtn.addEventListener("click", changeContent);
```

Finally, we define the `changeContent()` function. We start by declaring a `type` variable that will hold our view transition type value. If the event target is the "Backwards" button, we set `type` to `backwards`. If not, we set `type` to `forwards`. We then invoke the {{domxref("Document.startViewTransition", "startViewTransition()")}} method to update the content and start the transition:

- The `update` callback checks whether the paragraph `textContent` is equal to the `first` string. If so, we set it to the `second` string. If not, we set it to the `first` string.
- The `types` array is given one element: the `type` value we declared earlier.

```js live-sample___basic_usage
function changeContent(e) {
  let type;
  e.target === backBtn ? (type = "backwards") : (type = "forwards");
  document.startViewTransition({
    update: () => {
      content.textContent === first
        ? (content.textContent = second)
        : (content.textContent = first);
    },
    types: [type],
  });
}
```

#### CSS

In our styles, we start off by creating a set of nested rules using the `:active-view-transition` pseudo-class. These styles will be applied whenever a view transition is active, regardless of the their types. We apply a {{cssxref("view-transition-name")}} of `none` to the {{cssxref(":root")}}, as we don't want any elements captured and animated on transition except for the `<p>` element, which is given a `view-transition-name` of `slide`.

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
  margin-top: 0;
}
```

```css live-sample___basic_usage
html:active-view-transition {
  :root {
    view-transition-name: none;
  }
  p {
    view-transition-name: slide;
  }
}
```

Next, we use the `:active-view-transition-type()` pseudo-class to create two blocks of nested styles, the first of which is only applied when the active view transition has a type of `forwards`, and the second of which is only applied when the active view transition has a type of `backwards`. In each block, we use the {{cssxref("::view-transition-old()")}} and {{cssxref("::view-transition-new()")}} pseudo-elements to apply custom {{cssxref("animation-name")}} values to the `slide` capture group's outgoing and incoming views.

As a result:

- When the transition type is `forwards`, the old content view slides out to the left, and the new content view slides in from the right.
- When the transition type is `backwards`, the old content view slides out to the right, and the new content view slides in from the left.

```css live-sample___basic_usage
html:active-view-transition-type(forwards) {
  &::view-transition-old(slide) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(slide) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(backwards) {
  &::view-transition-old(slide) {
    animation-name: slide-out-to-right;
  }
  &::view-transition-new(slide) {
    animation-name: slide-in-from-left;
  }
}
```

Finally, we use {{cssxref("@keyframes")}} animation blocks to define the animations referenced previously.

```css live-sample___basic_usage
@keyframes slide-in-from-left {
  from {
    translate: -100vw 0;
  }
}
@keyframes slide-in-from-right {
  from {
    translate: 100vw 0;
  }
}
@keyframes slide-out-to-left {
  to {
    translate: -100vw 0;
  }
}
@keyframes slide-out-to-right {
  to {
    translate: 100vw 0;
  }
}
```

#### Result

The example is rendered like so:

{{EmbedLiveSample("basic-usage", "100%", 200)}}

Try clicking the "Backwards" and "Forwards" buttons, and note how, even though the same code is used to trigger the content update and view transition in each case, a different animation is used for the transition. This is because a different transition type is set depending on which button is pressed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.activeViewTransition")}}
- {{CSSXRef(":active-view-transition")}} pseudo-class
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
- [Using view transition types](/en-US/docs/Web/API/View_Transition_API/Types)
