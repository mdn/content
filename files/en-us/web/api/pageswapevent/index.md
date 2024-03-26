---
title: PageSwapEvent
slug: Web/API/PageSwapEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PageSwapEvent
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`PageSwapEvent`** event object is made available inside handler functions for the {{domxref("Window.pageswap_event", "pageswap")}} event.

During a cross-document navigation, it allows you to manipulate the related [view transition](/en-US/docs/Web/API/View_Transitions_API) (providing access to the relevant {{domxref("ViewTransition")}} object) from the document being navigated _from_, if a view transition was triggered by the navigation. It also provides access to information on the navigation type and current and destination documents.

## Constructor

- {{domxref("PageSwapEvent.PageSwapEvent", "PageSwapEvent()")}}
  - : Creates a new {{domxref("PageSwapEvent")}} object instance.

## Instance properties

- {{domxref("PageSwapEvent.activation", "activation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains a {{domxref("NavigationActivation")}} object containing the navigation type and current and destination document history entries for a same-origin navigation. If the navigation has a cross-origin URL anywhere in the redirect chain, it returns `null`.
- {{domxref("PageSwapEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains a {{domxref("ViewTransition")}} object representing the active view transition for the cross-document navigation.

## Examples

```js
// When going to a detail page, set `profile-name` and `profile-avatar` vt-names
// on the elements that link to that detail page
window.addEventListener("pageswap", async (e) => {
  if (e.viewTransition) {
    const url = new URL(e.activation.entry.url);

    // Only transition to same basePath
    // ~> SKIP!
    if (!url.pathname.startsWith(basePath)) {
      e.viewTransition.skipTransition();
    }

    // Extract name from URL
    const match = profilePagePattern.exec(url);
    const profile = match?.pathname.groups.profile;

    // No name extract = not going to a detail page
    // ~> Don’t tweak VT
    if (!profile) return;

    // Set VT-names on clicked name
    document.querySelector(`#${profile} span`).style.viewTransitionName =
      "profile-name";
    document.querySelector(`#${profile} img`).style.viewTransitionName =
      "profile-avatar";

    // Remove VT-names from currently shown ones when already at a detail page
    // @TODO: Figure out why I had to set to x and y here, instead of just ''
    if (profilePagePattern.test(window.location.href)) {
      document.querySelector(`main h1`).style.viewTransitionName = "x";
      document.querySelector(`main img`).style.viewTransitionName = "y";
    }

    // Restore orig VT names after snapshots have been taken
    // (This to deal with BFCache)
    await e.viewTransition.finished;
    document.querySelector(`#${profile} span`).style.viewTransitionName = "z";
    document.querySelector(`#${profile} img`).style.viewTransitionName = "w";
    if (profilePagePattern.test(window.location.href)) {
      document.querySelector(`main h1`).style.viewTransitionName =
        "profile-name";
      document.querySelector(`main img`).style.viewTransitionName =
        "profile-avatar";
    }
  }
});
```

> **Note:** See [A JavaScript-powered custom cross-document (MPA) transition](/en-US/docs/Web/API/View_Transitions_API/Using#a_javascript-powered_custom_cross-document_mpa_transition) for a more complete example with explanations.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
