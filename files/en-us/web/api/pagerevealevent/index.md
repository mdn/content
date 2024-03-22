---
title: PageRevealEvent
slug: Web/API/PageRevealEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PageRevealEvent
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

The **`PageRevealEvent`** interface of the [View Transitions API](/en-US/docs/Web/API/View_Transitions_API) is the event object for the {{domxref("Window.pagereveal_event", "pagereveal")}} event. During a cross-document navigation, it allows you to manipulate the related view transition (providing access to the relevant {{domxref("ViewTransition")}} object) from the document being navigated _to_, if a view transition was triggered by the navigation.

## Constructor

- {{domxref("PageRevealEvent.PageRevealEvent", "PageRevealEvent()")}}
  - : Creates a new {{domxref("PageRevealEvent")}} object instance.

## Instance properties

- {{domxref("PageRevealEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains a {{domxref("ViewTransition")}} object representing the active view transition for the cross-document navigation.

## Examples

```js
// This would run both on initial load and on reactivation from BFCache.
addEventListener("pagereveal", async (event) => {
  // Skip the transition
  event.viewTransition.skipTransition();
});
```

> **Note:** See [A JavaScript-powered custom cross-document (MPA) transition](/en-US/docs/Web/API/View_Transitions_API/Using#a_javascript-powered_custom_cross-document_mpa_transition) for a more complete example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
