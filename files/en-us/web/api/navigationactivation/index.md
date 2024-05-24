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
window.addEventListener("pagereveal", async (e) => {
  // If the "from" history entry does not exist, return
  if (!navigation.activation.from) return;

  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Only transition to/from same basePath
    // ~> SKIP!
    if (!fromUrl.pathname.startsWith(basePath)) {
      e.viewTransition.skipTransition();
    }

    // Went from profile page to homepage
    // ~> Set VT names on the relevant list item
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      setTemporaryViewTransitionNames([
        [document.querySelector(`#${profile} span`), 'name'],
        [document.querySelector(`#${profile} img`), 'avatar'],
      ], e.viewTransition.ready);
    }

    // Went to profile page
    // ~> Set VT names on the main title and image
    if (isProfilePage(currentUrl)) {
      setTemporaryViewTransitionNames([
        [document.querySelector(`#detail main h1`), 'name'],
        [document.querySelector(`#detail main img`), 'avatar'],
      ], e.viewTransition.ready);
    }
  }
});
```

> **Note:** See [List of Chrome Dev Rel team members](https://view-transitions.netlify.app/profiles/mpa/) for the live demo this code is taken from.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Navigation API](/en-US/docs/Web/API/Navigation_API)
- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
