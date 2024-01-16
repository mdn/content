---
title: "ViewTransition: finished property"
short-title: finished
slug: Web/API/ViewTransition/finished
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ViewTransition.finished
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

The **`finished`** read-only property of the
{{domxref("ViewTransition")}} interface is a {{jsxref("Promise")}} that fulfills once the transition animation is finished, and the new page view is visible and interactive to the user.

`finished` only rejects if the callback passed to {{domxref("Document.startViewTransition()", "document.startViewTransition()")}}throws or returns a promise that rejects, which indicates that the new state of the page wasn't created.

If a transition animation fails to start, or is skipped during the animation using {{domxref("ViewTransition.skipTransition()")}}, the end state is still reached therefore `finished` still fulfills.

## Value

A promise.

## Examples

### Different transitions for different navigations

Sometimes certain navigations will require specifically tailored transitions, for example a 'back' navigation may want a different transition to a 'forward' navigation. The best way to handle such cases is to set a class name on the `<html>` element, handle the transition — applying the correct animation using a tailored selector — and then remove the class name once the transition is finished.

```js
async function handleTransition() {
  if (isBackNavigation) {
    document.documentElement.classList.add("back-transition");
  }

  const transition = document.startViewTransition(() =>
    updateTheDOMSomehow(data),
  );

  try {
    await transition.finished;
  } finally {
    document.documentElement.classList.remove("back-transition");
  }
}
```

> **Note:** `isBackNavigation` isn't a built-in feature; it's a theoretical function that could perhaps be implemented using the [Navigation API](/en-US/docs/Web/API/Navigation_API) or similar.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
