---
title: "ViewTransition: updateCallbackDone property"
short-title: updateCallbackDone
slug: Web/API/ViewTransition/updateCallbackDone
page-type: web-api-instance-property
browser-compat: api.ViewTransition.updateCallbackDone
---

{{APIRef("View Transitions API")}}

The **`updateCallbackDone`** read-only property of the
{{domxref("ViewTransition")}} interface is a {{jsxref("Promise")}} that fulfills when the promise returned by the {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} method's callback fulfills, or rejects when it rejects.

`updateCallbackDone` is useful when you don't care about the success/failure of a same-document (SPA) view transition animation, and just want to know if and when the DOM is updated.

> **Note:** In the case of a cross-document (MPA) view transition, the `updateCallbackDone` promise of the associated `ViewTransition` is automatically fulfilled.

## Value

A Promise.

## Examples

```js
// start new SPA view transition
const transition = document.startViewTransition(() => displayNewImage());

transition.updateCallbackDone.then(() => {
  // Respond to the DOM being updated successfully
});
```

See [Transitions as an enhancement](https://developer.chrome.com/docs/web-platform/view-transitions/#transitions-as-an-enhancement) for a useful example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
