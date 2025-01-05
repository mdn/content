---
title: "Window: pageswap event"
short-title: pageswap
slug: Web/API/Window/pageswap_event
page-type: web-api-event
browser-compat: api.Window.pageswap_event
---

{{APIRef("HTML DOM")}}

The **`pageswap`** event is fired when you navigate across documents, when the previous document is about to unload.

This is useful in the case of cross-document (MPA) [view transitions](/en-US/docs/Web/API/View_Transition_API) for manipulating an active transition from the outbound page of a navigation. For example, you might wish to skip the transition, or customize the outbound transition animation via JavaScript.

It also provides access to the navigation type and current and destination document history entries.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pageswap", (event) => {});
onpageswap = (event) => {};
```

## Event type

A {{domxref("PageSwapEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PageSwapEvent")}}

## Event properties

- {{domxref("PageSwapEvent.activation")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("NavigationActivation")}} object containing the navigation type and current and destination document history entries for a same-origin navigation. If the navigation has a cross-origin URL anywhere in the redirect chain, it returns `null`.
- {{domxref("PageSwapEvent.viewTransition")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("ViewTransition")}} object representing the inbound cross-document view transition, if one is active when the event is fired. If this is not the case, it returns `null`.

## Examples

```js
window.addEventListener("pageswap", async (e) => {
  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Going from profile page to homepage
    // ~> The big img and title are the ones!
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Going to profile page
    // ~> The clicked items are the ones!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
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

- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
- {{domxref("Window.pagereveal_event", "pagereveal")}} event
