---
title: "Window: pagereveal event"
short-title: pagereveal
slug: Web/API/Window/pagereveal_event
page-type: web-api-event
browser-compat: api.Window.pagereveal_event
---

{{APIRef("HTML DOM")}}

The **`pagereveal`** event of the {{domxref("Window")}} interface is fired when a document is first rendered, either after a new document loads or after a document is activated from the [back/forward cache](/en-US/docs/Glossary/bfcache) (bfcache) or a [prerender](/en-US/docs/Glossary/Prerender).

This is useful in multi-page apps (MPAs) for manipulating an active cross-document [view transition](/en-US/docs/Web/API/View_Transition_API) from the inbound page of a navigation.
For example, you might wish to skip the transition or customize the inbound transition animation via JavaScript.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("pagereveal", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onpagereveal = (event) => { }
```

## Event type

A {{domxref("PageRevealEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PageRevealEvent")}}

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

- {{domxref("Window.pageswap_event", "pageswap")}} event
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
