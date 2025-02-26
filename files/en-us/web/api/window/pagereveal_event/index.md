---
title: "Window: pagereveal event"
short-title: pagereveal
slug: Web/API/Window/pagereveal_event
page-type: web-api-event
browser-compat: api.Window.pagereveal_event
---

{{APIRef("HTML DOM")}}

The **`pagereveal`** event is fired when a document is first rendered, either when loading a fresh document from the network or activating a document (either from [back/forward cache](/en-US/docs/Glossary/bfcache) (bfcache) or [prerender](/en-US/docs/Glossary/Prerender)).

This is useful in the case of cross-document (MPA) [view transitions](/en-US/docs/Web/API/View_Transition_API) for manipulating an active transition from the inbound page of a navigation. For example, you might wish to skip the transition, or customize the inbound transition animation via JavaScript.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pagereveal", (event) => {});
onpagereveal = (event) => {};
```

## Event type

A {{domxref("PageRevealEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PageRevealEvent")}}

## Event properties

- {{domxref("PageRevealEvent.viewTransition")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("ViewTransition")}} object representing the inbound cross-document view transition, if one is active when the event is fired. If this is not the case, it returns `null`.

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

- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
- {{domxref("Window.pageswap_event", "pageswap")}} event
