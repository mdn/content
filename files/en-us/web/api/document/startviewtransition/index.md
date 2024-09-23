---
title: "Document: startViewTransition() method"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
page-type: web-api-instance-method
browser-compat: api.Document.startViewTransition
---

{{APIRef("View Transitions API")}}

The **`startViewTransition()`** method of the {{domxref("Document")}} interface starts a new same-document (SPA) [view transition](/en-US/docs/Web/API/View_Transitions_API) and returns a {{domxref("ViewTransition")}} object to represent it.

When `startViewTransition()` is invoked, a sequence of steps is followed as explained in [The view transition process](/en-US/docs/Web/API/View_Transitions_API/Using#the_view_transition_process).

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

### Basic usage

In our [Basic SPA View Transitions demo](https://mdn.github.io/dom-examples/view-transitions/spa/), the `updateView()` function handles both browsers that do and don't support the View Transitions API. In supporting browsers, we invoke `startViewTransition()` to trigger the view transition process without worrying about the return value.

```js
function updateView(event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
  let targetIdentifier;
  if (event.target.firstChild === null) {
    targetIdentifier = event.target;
  } else {
    targetIdentifier = event.target.firstChild;
  }

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
