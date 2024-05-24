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

The pageswap event is fired when you navigate across documents, when the previous document is about to unload. During a cross-document navigation, the `PageSwapEvent`\*\* event object allows you to manipulate the related [view transition](/en-US/docs/Web/API/View_Transitions_API) (providing access to the relevant {{domxref("ViewTransition")}} object) from the document being navigated _from_, if a view transition was triggered by the navigation. It also provides access to information on the navigation type and current and destination documents.

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
window.addEventListener('pageswap', async (e) => {
  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url ? new URL(e.activation.from.url) : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Only transition to same basePath
    // ~> SKIP!
    if (!targetUrl.pathname.startsWith(basePath)) {
      e.viewTransition.skipTransition();
    }

    // Going from profile page to homepage
    // ~> The big img and title are the ones!
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      setTemporaryViewTransitionNames([
        [document.querySelector(`#detail main h1`), 'name'],
        [document.querySelector(`#detail main img`), 'avatar'],
      ], e.viewTransition.finished);
    }

    // Going to profile page
    // ~> The clicked items are the ones!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      setTemporaryViewTransitionNames([
        [document.querySelector(`#${profile} span`), 'name'],
        [document.querySelector(`#${profile} img`), 'avatar'],
      ], e.viewTransition.finished);
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
