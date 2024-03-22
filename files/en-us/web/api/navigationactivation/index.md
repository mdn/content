---
title: NavigationActivation
slug: Web/API/NavigationActivation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NavigationActivation
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`NavigationActivation`** interface of the [Navigation API](/en-US/docs/Web/API/Navigation_API) represents a recent cross-document navigation. It contains the navigation type and outgoing and inbound document history entries.

This object is accessed via the {{domxref("PageSwapEvent.activation")}} and {{domxref("Navigation.activation")}} properties.

## Instance properties

- {{domxref("NavigationActivation.entry", "entry")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains a {{domxref("NavigationHistoryEntry")}} object representing the history entry for the inbound ("to") document in the navigation. This is equivalent to the {{domxref("Navigation.currentEntry")}} property at the moment the inbound document was activated.
- {{domxref("NavigationActivation.from", "from")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains a {{domxref("NavigationHistoryEntry")}} object representing the history entry for the outgoing ("from") document in the navigation.
- {{domxref("NavigationActivation.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains a string indicating the type of navigation.

## Examples

```js
window.addEventListener("pageswap", (event) => {
  // Return if there is no active view transition
  if (!event.viewTransition) {
    return;
  }

  // Grab the paths of the from and to URLs
  const from_path = new URL(event.activation.from).pathname;
  const to_path = new URL(event.activation.entry).pathname;

  // Skip transitions from landing to home
  if (from_path === "/landing" && to_path === "/home") {
    event.viewTransition.skipTransition();
  }

  // Apply a different style when going "back"
  const is_back =
    event.activation.navigationType === "traverse" &&
    event.activation.entry?.index === event.activation.from?.index - 1;

  // Add a class to the <html> element for targetting a different back animation
  // Note that this would only apply to capturing the final state of the old document,
  // The new document would have to do this or something similar in `pagereveal`.
  document.documentElement.classList.toggle("back-nav", is_back);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Navigation API](/en-US/docs/Web/API/Navigation_API)
- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
