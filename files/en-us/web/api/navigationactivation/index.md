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

This object is accessed via the {{domxref("PageSwapEvent.activation")}} and {{domxref("Navigation.activation")}} properties. Note that, in each case, the `NavigationActivation` represents a different navigation:

- `Navigation.activation` represents information about the navigation to the current page.
- `PageSwapEvent.activation` represents information about the navigation to the next page.

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

    // Went from profile page to homepage
    // ~> Set VT names on the relevant list item
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Went to profile page
    // ~> Set VT names on the main title and image
    if (isProfilePage(currentUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> See [List of Chrome DevRel team members](https://view-transitions.chrome.dev/profiles/mpa/) for the live demo this code is taken from.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Navigation API](/en-US/docs/Web/API/Navigation_API)
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
