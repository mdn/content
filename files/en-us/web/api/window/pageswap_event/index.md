---
title: "Window: pageswap event"
short-title: pageswap
slug: Web/API/Window/pageswap_event
page-type: web-api-event
browser-compat: api.Window.pageswap_event
---

{{APIRef("HTML DOM")}}

The **`pageswap`** event of the {{domxref("Window")}} interface is fired just before a cross-document navigation unloads the current document.

This is useful in multi-page apps (MPAs) for manipulating an active cross-document [view transition](/en-US/docs/Web/API/View_Transition_API) from the outbound page of a navigation.
For example, you might wish to skip the transition or customize the outbound transition animation via JavaScript.

The event's {{domxref("PageSwapEvent.activation", "activation")}} property also gives you the navigation type and the history entries for the current and destination documents.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("pageswap", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onpageswap = (event) => { }
```

## Event type

A {{domxref("PageSwapEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PageSwapEvent")}}

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

- {{domxref("Window.pagereveal_event", "pagereveal")}} event
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
