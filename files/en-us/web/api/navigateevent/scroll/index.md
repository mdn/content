---
title: "NavigateEvent: scroll() method"
short-title: scroll()
slug: Web/API/NavigateEvent/scroll
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NavigateEvent.scroll
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`scroll()`** method of the
{{domxref("NavigateEvent")}} interface can be called to manually trigger the browser-driven scrolling behavior that occurs in response to the navigation, if you want it to happen before the navigation handling has completed.

## Syntax

```js-nolint
scroll()
```

### Parameters

None.

### Return value

None (`undefined`).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not yet active, or if the navigation has been cancelled.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the event was dispatched by a {{domxref("EventTarget.dispatchEvent", "dispatchEvent()")}} call, rather than the user agent.

## Examples

### Handling scrolling using `scroll()`

In this example of intercepting a navigation, the `handler()` function starts by fetching and rendering some article content, but then fetches and renders some secondary content afterwards. It makes sense to scroll the page to the main article content as soon as it is available so the user can interact with it, rather than waiting until the secondary content is also rendered. To achieve this, we have added a `scroll()` call between the two.

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
