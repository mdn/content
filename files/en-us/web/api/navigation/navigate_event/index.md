---
title: "Navigation: navigate event"
short-title: navigate
slug: Web/API/Navigation/navigate_event
page-type: web-api-event
status:
  - experimental
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

## Event type

A {{domxref("NavigateEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("NavigateEvent")}}

## Examples

### Handling a navigation using `intercept()`

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

> [!NOTE]
> Before the Navigation API was available, to do something similar you'd have to listen for all click events on links, run `event.preventDefault()`, perform the appropriate {{domxref("History.pushState()")}} call, then set up the page view based on the new URL. And this wouldn't handle all navigations — only user-initiated link clicks.

### Handling scrolling using `scroll()`

In this example of intercepting a navigation, the `handler()` function starts by fetching and rendering some article content, but then fetches and renders some secondary content afterwards. It makes sense to scroll the page to the main article content as soon as it is available so the user can interact with it, rather than waiting until the secondary content is also rendered. To achieve this, we have added a {{domxref("NavigateEvent.scroll", "scroll()")}} call between the two.

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(navigateEvent)) {
    return;
  }
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);

        event.scroll();

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
