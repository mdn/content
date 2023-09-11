---
title: NavigationTransition
slug: Web/API/NavigationTransition
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NavigationTransition
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`NavigationTransition`** interface of the {{domxref("Navigation API", "Navigation API", "", "nocode")}} represents an ongoing navigation, that is, a navigation that hasn't yet reached the {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} or {{domxref("Navigation/navigateerror_event", "navigateerror")}} stage.

It is accessed via the {{domxref("Navigation.transition")}} property.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("NavigationTransition.finished", "finished")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills at the same time the {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} event fires, or rejects at the same time the {{domxref("Navigation/navigateerror_event", "navigateerror")}} event fires.
- {{domxref("NavigationTransition.from", "from")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("NavigationHistoryEntry")}} that the transition is coming from.
- {{domxref("NavigationTransition.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the type of the ongoing navigation.

## Examples

```js
async function cleanupNavigation() {
  await navigation.transition.finished;
  // Navigation has completed successfully
  // Cleanup any ongoing monitoring
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
