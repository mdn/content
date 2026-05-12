---
title: "ViewTransition: waitUntil() method"
short-title: waitUntil()
slug: Web/API/ViewTransition/waitUntil
page-type: web-api-instance-method
browser-compat: api.ViewTransition.waitUntil
---

{{APIRef("View Transition API")}}

The **`waitUntil()`** method of the {{domxref("ViewTransition")}} interface delays finishing the view transition and the destruction of the associated pseudo-element tree until a {{jsxref("Promise")}} passed into the method has resolved.

## Syntax

```js-nolint
waitUntil(promise)
```

### Parameters

- `promise`
  - : A {{jsxref("Promise")}} that, when resolved, causes the view transition to finish and the associated pseudo-element tree to be destroyed. This can be any promise.

### Return value

None ({{jsxref("undefined")}}).

## Description

When a same-document view transition is started (typically via {{domxref("Document.startViewTransition()")}}), the browser automatically constructs a [pseudo-element tree](/en-US/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) to display and animate outgoing and inbound changes to the DOM. This tree is constructed when the view transition starts animating and is destroyed when the animations associated with all view transition pseudo-elements reach the finished state ({{domxref("ViewTransition.finished", "finished")}} is resolved).

This works well for most use-cases, but there are some that benefit from the pseudo-tree persisting beyond the animation finish state. This can be achieved using the `waitUntil()` method, which is passed a {{jsxref("Promise")}} as an argument. Calling `waitUntil()` causes the pseudo-tree to persist until the promise is resolved. At this point, the `finished` promise also resolves.

Repeated calls to `waitUntil()` specifying multiple different promises will delay the finish state until all the given promises are resolved.

Use cases include:

- Combining a view transition with [scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations). When the transition animation is controlled by a scroll progress or view progress timeline, the subtree should persist when the animations finish since scrolling back should be able to animate the pseudo-elements in reverse.
- Combining a view transition with {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}. When you're updating the state of your elements in `requestAnimationFrame()` callbacks, the view transition system does not know how long to persist the pseudo-element tree for, and will destroy it immediately as soon as the CSS animations are finished.
- Any situation in which you want to delay the view transition finishing until an event has occurred. You might for example want to start the view transition on `pointerdown` and not finish it until `pointerup`.

## Examples

### Basic usage

This example demonstrates basic usage of the `waitUntil()` method to delay a view transition started by a button or key press from finishing until the button or key press ends.

#### HTML

We include a {{htmlelement("div")}} element containing page content, which includes a {{htmlelement("p")}} element and a {{htmlelement("button")}} element that when pressed will change the displayed content. The paragraph includes an [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) attribute so that DOM updates are announced to screenreader users.

```html live-sample___basic-waituntil
<div class="page">
  <p class="content" aria-live="polite">Hello! This is the first page.</p>
  <button>Change page</button>
</div>
```

We also include a second `<p>` element to log status messages into:

```html live-sample___basic-waituntil
<p class="log"></p>
```

#### CSS

First, we apply a {{cssxref("view-transition-name")}} of `page` to our `<div>` element so that we can target just this area with the view transition animations rather than the entire MDN page.

```css live-sample___basic-waituntil
.page {
  view-transition-name: page;
}
```

Next, we set an {{cssxref("animation-delay")}} on the {{cssxref("::view-transition-new()")}} pseudo-element (note how we are specifying the `page` tree rather than the default `root` tree). This delays the new DOM content's default fade-in transition by `0.25` seconds, so it fades in slightly after the old DOM content fades out.

```css live-sample___basic-waituntil
::view-transition-new(page) {
  animation-delay: 0.25s;
}
```

Now we set a custom {{cssxref("animation-duration")}} and {{cssxref("opacity")}} on the {{cssxref("::view-transition-old()")}} and {{cssxref("::view-transition-new()")}} element. This has the effect of making the default fade-out and fade-in animations last for `0.5` seconds, and sets the content `opacity` to `0.5` until the view transition is finished.

```css live-sample___basic-waituntil
::view-transition-old(page),
::view-transition-new(page) {
  animation-duration: 0.5s;
  opacity: 0.5;
}
```

```css hidden live-sample___basic-waituntil
html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
}

h1 {
  text-align: center;
}

.content {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
}
```

#### JavaScript

Our script starts by grabbing references to the content paragraph, button, and log paragraph.

```js live-sample___basic-waituntil
const content = document.querySelector(".content");
const btn = document.querySelector("button");
const log = document.querySelector(".log");
```

Next, we set event listeners on the button so that on `pointerdown`/`keypress`, the `btnHandler()` custom function is run. We specify the `keypress` handler to only fire `once`, otherwise it will fire multiple times when a key is long pressed, which cycles between views constantly and isn't the behavior we want.

```js live-sample___basic-waituntil
btn.addEventListener("pointerdown", btnHandler);
btn.addEventListener("keypress", btnHandler, {
  once: true,
});
```

The `btnHandler()` function invokes {{domxref("Document.startViewTransition()")}} to start the view transition, first running a custom function called `updatePage()` that performs the DOM updates that will be animated. Next, we create a variable called `resolveTransition` and a new {{jsxref("Promise")}} called `p`. We set `resolveTransition` equal to the promise callback's `resolve` function, so that when `resolveTransition()` is called, as we do inside the subsequent `pointerup` and `keyup` event listeners, the promise is resolved. Note that we have to reapply the `keypress` handler each time the `keyup` handler fires, as it only fires once each time.

We run `waitUntil()`, passing it the promise `p` as an argument. This means that the view transition will persist until `p` is resolved on `pointerup`. To prove this, we use the {{domxref("ViewTransition.finished")}} promise to run a `showLog()` function once the transition is finished, which will print a message into the log paragraph.

```js live-sample___basic-waituntil
function btnHandler() {
  const transition = document.startViewTransition(() => {
    updatePage();

    let resolveTransition;

    const p = new Promise((resolve) => {
      resolveTransition = resolve;
    });

    window.addEventListener("pointerup", () => {
      resolveTransition();
    });

    window.addEventListener("keyup", () => {
      resolveTransition();
      btn.addEventListener("keypress", btnHandler, {
        once: true,
      });
    });

    transition.waitUntil(p);
    transition.finished.then(() => showLog());
  });
}
```

Next, we define the `updatePage()` function, which updates the page DOM. It toggles between setting the content paragraph `textContent` equal to the first and the second `pageContent` array elements.

```js live-sample___basic-waituntil
function updatePage() {
  if (content.textContent === pageContent[0]) {
    content.textContent = pageContent[1];
  } else {
    content.textContent = pageContent[0];
  }
}

const pageContent = [
  "Hello! This is the first page.",
  "Well, this is the second page.",
];
```

Finally, we define the `showLog()` function — this sets the log paragraph's `textContent` to "View transition finished", waits for one second, then sets it back to an empty string.

```js live-sample___basic-waituntil
function showLog() {
  log.textContent = "View transition finished";
  setTimeout(() => {
    log.textContent = "";
  }, 1000);
}
```

#### Result

{{embedlivesample("basic-waituntil", "100%", 200)}}

Try long pressing on the button with your keyboard, mouse, or other pointing device — you'll see that the cross-fade transition animation occurs, but the content remains greyed out (due to the `opacity: 0.5` set on the view transition pseudo-elements) until you end the long press. This is because the `p` promise referenced inside the `waitUntil()` call is not resolved, and therefore, the view transition is not finished, until the `pointerup`/`keyup` events are fired.

The "View transition finished" log message also doesn't appear until the view transition is finished, because the function that handles this is tied to the `ViewTransition.finished` promise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
