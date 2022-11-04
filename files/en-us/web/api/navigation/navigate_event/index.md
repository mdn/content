---
title: "Navigation: navigate event"
slug: Web/API/Navigation/navigate_event
page-type: web-api-event
tags:
  - API
  - Event
  - Experimental
  - History
  - Navigate
  - Navigation
  - Navigation API
  - Property
  - Reference
  - reload
  - Scroll
  - Traversal
  - updateCurrentEntry
browser-compat: api.Navigation.navigate_event
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`navigate`** event of the {{domxref("Navigation")}} interface is fired when [any type of navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) is initiated, allowing you to intercept as required.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("navigate", (event) => {});

onnavigate = (event) => {};
```

> **Note:** The event object is of type {{domxref("NavigateEvent")}}.

## Examples

### Handling a navigation using `intercept()`

```js
navigation.addEventListener('navigate', navigateEvent => {
  // Exit early if this navigation shouldn't be intercepted, 
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(navigateEvent)) return;

  const url = new URL(navigateEvent.destination.url);

  if (url.pathname.startsWith('/articles/')) {
    navigateEvent.intercept({
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

### Handling scrolling using `scroll()`

```js
navigation.addEventListener('navigate', navigateEvent => {
  if (shouldNotIntercept(navigateEvent)) return;
  const url = new URL(navigateEvent.destination.url);

  if (url.pathname.startsWith('/articles/')) {
    navigateEvent.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
        navigateEvent.scroll();

        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
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
