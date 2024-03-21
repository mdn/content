---
title: "Window: pageswap event"
short-title: pageswap
slug: Web/API/Window/pageswap_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Window.pageswap_event
---

{{APIRef("HTML DOM")}}{{seecompattable}}

The **`pageswap`** event is fired when a document is about to be unloaded due to a navigation.

This is useful in the case of cross-document (MPA) [view transitions](/en-US/docs/Web/API/View_Transitions_API) for manipulating an active transition from the outbound page of a navigation. For example, you might wish to skip the transition, or customize the outbound transition animation via JavaScript.

It also provides access to the navigation type and current and destination document history entries.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pageswap", (event) => {});
onpageswap = (event) => {};
```

## Event type

A {{domxref("PageSwapEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PageSwapEvent")}}

## Event properties

- {{domxref("PageSwapEvent.activation")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("NavigationActivation")}} object containing the navigation type and current and destination document history entries for a same-origin navigation. If the navigation is cross-origin, it returns `null`.
- {{domxref("PageSwapEvent.viewTransition")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("ViewTransition")}} object representing the inbound cross-document view transition, if one is active when the event is fired. If this is not the case, it returns `null`.

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

- [Using the View Transitions API](/en-US/docs/Web/API/View_Transitions_API/Using)
- {{domxref("Window.pagereveal_event", "pagereveal")}} event
