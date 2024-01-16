---
title: "NavigateEvent: destination property"
short-title: destination
slug: Web/API/NavigateEvent/destination
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigateEvent.destination
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`destination`** read-only property of the
{{domxref("NavigateEvent")}} interface returns a {{domxref("NavigationDestination")}} object representing the destination being navigated to.

## Value

A {{domxref("NavigationDestination")}} object.

## Examples

```js
navigation.addEventListener("navigate", (event) => {
  // Exit early if this navigation shouldn't be intercepted,
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // The URL has already changed, so show a placeholder while
        // fetching the new content, such as a spinner or loading page
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
