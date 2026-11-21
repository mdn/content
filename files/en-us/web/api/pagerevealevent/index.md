---
title: PageRevealEvent
slug: Web/API/PageRevealEvent
page-type: web-api-interface
browser-compat: api.PageRevealEvent
---

{{APIRef("HTML DOM")}}

The **`PageRevealEvent`** event object is made available inside handler functions for the {{domxref("Window.pagereveal_event", "pagereveal")}} event.

During a cross-document navigation, it allows you to manipulate a related [view transition](/en-US/docs/Web/API/View_Transition_API) (providing access to the relevant {{domxref("ViewTransition")}} object) from the document being navigated _to_, if a view transition was triggered by the navigation.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PageRevealEvent.PageRevealEvent", "PageRevealEvent()")}}
  - : Creates a new `PageRevealEvent` object instance.

## Instance properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("PageRevealEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("ViewTransition")}} object representing the active inbound view transition for the cross-document navigation, or `null` if no view transition is active.

## Instance methods

_This interface doesn't define any specific methods, but inherits methods from its parent, {{domxref("Event")}}._

## Description

Outside view transitions, the `pagereveal` event is also useful for tasks such as triggering a startup animation or reporting a page view.
The event fires at the same point as the first {{domxref("Window.requestAnimationFrame()")}} callback after a cross-document navigation, if you called `requestAnimationFrame()` from a script in the document's {{htmlelement("head")}}.
It also fires when the page is restored from the [back/forward cache](/en-US/docs/Glossary/bfcache) (bfcache).

For example, without `pagereveal` you would need the following code in the `<head>` to run a `reveal()` function at the same points:

```js
function reveal() {
  // Include startup animation here
}
/* This will fire in the first rendered frame after loading */
requestAnimationFrame(() => reveal());

/* This will fire if the page is restored from the bfcache */
window.onpageshow = (event) => {
  if (event.persisted) {
    requestAnimationFrame(() => reveal());
  }
};
```

With `pagereveal`, a single listener covers both cases.

## Examples

### Customizing an inbound view transition

When the user navigates between the home page and a profile page, the `pagereveal` handler on the new page sets `view-transition-name` values on the elements that should animate.
It chooses those elements based on the URL navigated from and the URL navigated to, which it gets from the {{domxref("Navigation.activation")}} property of the global {{domxref("Window.navigation", "navigation")}} object.
The `isProfilePage()`, `isHomePage()`, and `extractProfileNameFromUrl()` helper functions aren't shown.

```js
window.addEventListener("pagereveal", async (e) => {
  // If the "from" history entry does not exist, return
  if (!navigation.activation.from) return;

  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Went from a profile page to the home page:
    // animate the name and avatar in the relevant list item
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

    // Went to a profile page:
    // animate the main title and image
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

- {{domxref("Window.pagereveal_event", "pagereveal")}} event
- {{domxref("PageSwapEvent")}}
- [Navigation API](/en-US/docs/Web/API/Navigation_API)
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
