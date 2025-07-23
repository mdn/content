---
title: "Document: startViewTransition() method"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
page-type: web-api-instance-method
browser-compat: api.Document.startViewTransition
---

{{APIRef("View Transition API")}}

The **`startViewTransition()`** method of the {{domxref("Document")}} interface starts a new same-document (SPA) [view transition](/en-US/docs/Web/API/View_Transition_API) and returns a {{domxref("ViewTransition")}} object to represent it.

When `startViewTransition()` is invoked, a sequence of steps is followed as explained in [The view transition process](/en-US/docs/Web/API/View_Transition_API/Using#the_view_transition_process).

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
```

### Parameters

- `updateCallback` {{optional_inline}}
  - : An optional callback function typically invoked to update the DOM during the SPA view transition process, which returns a {{jsxref("Promise")}}. The callback is invoked once the API has taken a snapshot of the current page. When the promise returned by the callback fulfills, the view transition begins in the next frame. If the promise returned by the callback rejects, the transition is abandoned.

### Return value

A {{domxref("ViewTransition")}} object instance.

## Examples

### Using a same-document view transition

In this same-document view transition, we check if the browser supports view transitions.
If there's no support, we set the background color using a fallback method which is applied immediately.
Otherwise, we can safely call `document.startViewTransition()` with animation rules that we define in CSS.

```html
<main>
  <section></section>
  <button id="change-color">Change color</button>
</main>
```

We are setting the `animation-duration` to 2 seconds using the {{CSSXRef("::view-transition-group")}} pseudo-element.

```css
html {
  --bg: indigo;
}
main {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
section {
  background-color: var(--bg);
  height: 60px;
  border-radius: 5px;
}
::view-transition-group(root) {
  animation-duration: 2s;
}
```

```js
const colors = ["darkred", "darkslateblue", "darkgreen"];
const colBlock = document.querySelector("section");
let count = 0;
const updateColour = () => {
  colBlock.style = `--bg: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};
const changeColor = () => {
  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    updateColour();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => {
    updateColour();
  });
};
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor);
changeColorButton.addEventListener("keypress", changeColor);
```

If view transitions are supported, clicking the button will transition the color from one to another over 2 seconds.
Otherwise, the background color is set using a fallback method, without any animation.

{{EmbedLiveSample('color_change', '100%', '120')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXRef(":active-view-transition")}} pseudo-class
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} pseudo-class
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
