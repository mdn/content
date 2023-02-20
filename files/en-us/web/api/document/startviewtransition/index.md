---
title: Document.startViewTransition()
slug: Web/API/Document/startViewTransition
page-type: web-api-instance-method
status: experimental
browser-compat: api.Document.startViewTransition
---

{{APIRef("Document")}}{{seecompattable}}

The **`startViewTransition()`** method of the
{{domxref("View Transitions API", "View Transitions API", "", "nocode")}} starts a new view transition.

When `startViewTransition()` is invoked, a sequence of steps is followed as explained in [The view transition process](/en-US/docs/Web/API/View_Transitions_API#the_view_transition_process).

## Syntax

```js-nolint
startViewTransition(callback)
```

### Parameters

- `callback`
  - : A callback function typically invoked to update the DOM during the view transition process, which returns a {{jsxref("Promise")}}. The callback is invoked once the API has taken a screenshot of the current page. When the promise returned by the callback fulfills, the view transition begins in the next frame. If the promise returned by the callback rejects, the transition is abandoned.

### Return value

A {{domxref("ViewTransition")}} object instance.

## Examples

### Basic usage

In our [Basic View Transitions demo](https://basic-view-transitions-api.glitch.me/), the `updateView()` function handles both browsers that do and don't support the View Transitions API. In supporting browsers, we invoke `startViewTransition()` to set off the view transition process without worrying about the return value.

```js
function updateView(e) {
  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  document.startViewTransition(() => displayNewImage());

  function displayNewImage() {
    const mainSrc = `${e.target.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = e.target.alt;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
