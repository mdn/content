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

Outside view transitions, this event is also useful for cases such as triggering a startup animation, or reporting a page view. It's equivalent to the first {{domxref("Window.requestAnimationFrame()")}} run after a cross-document navigation, if you were to trigger `requestAnimationFrame()` in the {{htmlelement("head")}} of the document. For example, if you ran the following `reveal()` function in the `<head>`:

```js
function reveal() {
  // Include startup animation here
}
/* This will fire in the first rendered frame after loading */
requestAnimationFrame(() => reveal());

/* This will fire if the page is restored from BFCache */
window.onpagehide = () => requestAnimationFrame(() => reveal());
```

## Constructor

- {{domxref("PageRevealEvent.PageRevealEvent", "PageRevealEvent()")}}
  - : Creates a new {{domxref("PageRevealEvent")}} object instance.

## Instance properties

- {{domxref("PageRevealEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Contains a {{domxref("ViewTransition")}} object representing the active view transition for the cross-document navigation.

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

      setTemporaryViewTransitionNames(
        [
          [document.querySelector(`#${profile} span`), "name"],
          [document.querySelector(`#${profile} img`), "avatar"],
        ],
        e.viewTransition.ready,
      );
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

- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
