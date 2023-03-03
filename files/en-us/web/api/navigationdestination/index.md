---
title: NavigationDestination
slug: Web/API/NavigationDestination
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NavigationDestination
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`NavigationDestination`** interface of the {{domxref("Navigation API", "Navigation API", "", "nocode")}} represents the destination being navigated to in the current navigation.

It is accessed via the {{domxref("NavigateEvent.destination")}} property.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("NavigationDestination.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("NavigationHistoryEntry.id", "id")}} value of the destination {{domxref("NavigationHistoryEntry")}} if the {{domxref("NavigateEvent.navigationType")}} is `traverse`, or `null` otherwise.
- {{domxref("NavigationDestination.index", "index")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("NavigationHistoryEntry.index", "index")}} value of the destination {{domxref("NavigationHistoryEntry")}} if the {{domxref("NavigateEvent.navigationType")}} is `traverse`, or `-1` otherwise.
- {{domxref("NavigationDestination.key", "key")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("NavigationHistoryEntry.key", "key")}} value of the destination {{domxref("NavigationHistoryEntry")}} if the {{domxref("NavigateEvent.navigationType")}} is `traverse`, or `null` otherwise.
- {{domxref("NavigationDestination.sameDocument", "sameDocument")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `true` if the navigation is to the same `document` as the current {{domxref("Document")}} value, or `false` otherwise.
- {{domxref("NavigationDestination.url", "url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the URL being navigated to.

## Instance methods

- {{domxref("NavigationDestination.getState", "getState()")}} {{Experimental_Inline}}
  - : Returns a clone of the available state associated with the destination {{domxref("NavigationHistoryEntry")}}, or navigation operation (e.g. {{domxref("Navigation.navigate()", "navigate()")}}) as appropriate.

## Examples

```js
navigation.addEventListener("navigate", (event) => {
  // Exit early if this navigation shouldn't be intercepted,
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(event)) {
    return;
  }

  // Returns a URL() object constructed from the
  // NavigationDestination.url value
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // The URL has already changed, so show a placeholder while
        //fetching the new content, such as a spinner or loading page
        renderArticlePagePlaceholder();

        // Fetch the new content and display when ready
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
