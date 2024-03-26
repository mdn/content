---
title: PageRevealEvent
slug: Web/API/PageRevealEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PageRevealEvent
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`PageRevealEvent`** event object is made available inside handler functions for the {{domxref("Window.pagereveal_event", "pagereveal")}} event.

During a cross-document navigation, it allows you to manipulate a related [view transition](/en-US/docs/Web/API/View_Transitions_API) (providing access to the relevant {{domxref("ViewTransition")}} object) from the document being navigated _to_, if a view transition was triggered by the navigation.

## Constructor

- {{domxref("PageRevealEvent.PageRevealEvent", "PageRevealEvent()")}}
  - : Creates a new {{domxref("PageRevealEvent")}} object instance.

## Instance properties

- {{domxref("PageRevealEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains a {{domxref("ViewTransition")}} object representing the active view transition for the cross-document navigation.

## Examples

```js
// When going from a detail page to the homepage, set `profile-name` and `profile-avatar` vt-names
// on the list item for the profile that was viewed on the detail page.
window.addEventListener("pagereveal", async (e) => {
  if (!navigation.activation.from) return;

  if (e.viewTransition) {
    const fromURL = new URL(navigation.activation.from.url);
    const currentURL = new URL(navigation.activation.entry.url);

    // Only transition to/from same basePath
    // ~> SKIP!
    if (!fromURL.pathname.startsWith(basePath)) {
      e.viewTransition.skipTransition();
    }

    // Went from profile page to homepage
    // ~> Set VT names on the relevant list item
    if (profilePagePattern.test(fromURL) && homePagePattern.test(currentURL)) {
      const match = profilePagePattern.exec(fromURL);
      const profile = match?.pathname.groups.profile;

      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "profile-name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "profile-avatar";

      // Clean up after snapshots have been taken
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName = "";
      document.querySelector(`#${profile} img`).style.viewTransitionName = "";
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
