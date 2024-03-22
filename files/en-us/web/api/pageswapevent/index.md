---
title: PageSwapEvent
slug: Web/API/PageSwapEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PageSwapEvent
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

The **`PageSwapEvent`** interface of the [View Transitions API](/en-US/docs/Web/API/View_Transitions_API) is the event object for the {{domxref("Window.pageswap_event", "pageswap")}} event. During a cross-document navigation, it allows you to manipulate the related view transition (providing access to the relevant {{domxref("ViewTransition")}} object) from the document being navigated _from_, if a view transition was triggered by the navigation. It also provides access to information on the navigation type and current and destination documents.

## Constructor

- {{domxref("PageSwapEvent.PageSwapEvent", "PageSwapEvent()")}}
  - : Creates a new {{domxref("PageSwapEvent")}} object instance.

## Instance properties

- {{domxref("PageSwapEvent.activation", "activation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains a {{domxref("NavigationActivation")}} object representing the navigation type and current and destination document history entries.
- {{domxref("PageSwapEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains a {{domxref("ViewTransition")}} object representing the active view transition for the cross-document navigation.

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

- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
