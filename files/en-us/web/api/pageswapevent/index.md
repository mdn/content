---
title: PageSwapEvent
slug: Web/API/PageSwapEvent
page-type: web-api-interface
browser-compat: api.PageSwapEvent
---

{{APIRef("HTML DOM")}}

The **`PageSwapEvent`** event object is made available inside handler functions for the {{domxref("Window.pageswap_event", "pageswap")}} event.

The `pageswap` event is fired just before a cross-document navigation unloads the current document.
During a cross-document navigation, the `PageSwapEvent` event object allows you to manipulate the related [view transition](/en-US/docs/Web/API/View_Transition_API) (providing access to the relevant {{domxref("ViewTransition")}} object) from the document being navigated _from_, if a view transition was triggered by the navigation.
It also provides access to information on the navigation type and the history entries for the current and destination documents.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PageSwapEvent.PageSwapEvent", "PageSwapEvent()")}}
  - : Creates a new `PageSwapEvent` object instance.

## Instance properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("PageSwapEvent.activation", "activation")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("NavigationActivation")}} object with the navigation type and the history entries for the current and destination documents of a same-origin navigation.
    If the navigation has a cross-origin URL anywhere in the redirect chain, it returns `null` (unless the destination document is restored from the [back/forward cache](/en-US/docs/Glossary/bfcache)).
- {{domxref("PageSwapEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("ViewTransition")}} object representing the active outbound view transition for the cross-document navigation, or `null` if no view transition is active.

## Instance methods

_This interface doesn't define any specific methods, but inherits methods from its parent, {{domxref("Event")}}._

## Examples

### Customizing an outbound view transition

When the user navigates between the home page and a profile page, the `pageswap` handler on the old page sets `view-transition-name` values on the elements that should animate.
It chooses those elements based on the current URL and the destination URL, which it gets from the event's {{domxref("PageSwapEvent.activation", "activation")}} property.
The `isProfilePage()`, `isHomePage()`, and `extractProfileNameFromUrl()` helper functions aren't shown.

```js
window.addEventListener("pageswap", async (e) => {
  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Going from a profile page to the home page:
    // animate the main title and image
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in the bfcache
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Going to a profile page:
    // animate the name and avatar in the clicked list item
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in the bfcache
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
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

- {{domxref("Window.pageswap_event", "pageswap")}} event
- {{domxref("PageRevealEvent")}}
- [Navigation API](/en-US/docs/Web/API/Navigation_API)
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
