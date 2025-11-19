---
title: "Document: activeViewTransition property"
short-title: activeViewTransition
slug: Web/API/Document/activeViewTransition
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Document.activeViewTransition
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`activeViewTransition`** read-only property of the {{domxref("Document")}} interface returns a {{domxref("ViewTransition")}} instance representing the [view transition](/en-US/docs/Web/API/View_Transition_API) currently active on the document.

The current {{domxref("ViewTransition")}} can be accessed in other ways:

- The return value of {{domxref("Document.startViewTransition()")}} in the case of same-document view transitions.
- The `viewTransition` property of the {{domxref("Window.pagereveal_event", "pagereveal")}} and {{domxref("Window.pageswap_event", "pageswap")}} event objects in the case of cross-document view transitions.

However, the `activeViewTransition` property provides a consistent way to access the active view transition in any context, without having to worry about saving it for easy access later on.

## Value

A {{domxref("ViewTransition")}} or `null` if there is no active view transition.

## Examples

```js
// Start a view transition
document.startViewTransition(() => {
  // Update the UI to reflect the new state
  updateUI();
});

// Check if a view transition is currently active
if (document.activeViewTransition) {
  console.log("A view transition is currently active");
}

// Respond to view transition finishing
document.activeViewTransition.finished.then(() => {
  console.log("View transition finished");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.startViewTransition()")}}
- {{domxref("Window.pagereveal_event", "pagereveal")}} event
- {{domxref("Window.pageswap_event", "pageswap")}} event
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- {{domxref("ViewTransition")}}
